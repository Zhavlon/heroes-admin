import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { heroIsAdded } from "../../actions";

// TODO:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
	const [state, setState] = useState({
		id: null,
		name: null,
		description: null,
		element: null,
	});
	const formRef = useRef();
	const dispatch = useDispatch();

	console.log(state);
	const setValue = e => {
		setState({ ...state, [e.target.name]: e.target.value, id: uuidv4() }); // TODO:
	};

	const postData = e => {
		e.preventDefault();
		dispatch(heroIsAdded(state));
		formRef.current.reset();
		console.log(state);
	};

	return (
		<form
			onSubmit={postData}
			ref={formRef}
			className="border p-4 shadow-lg rounded"
		>
			<div className="mb-3">
				<label htmlFor="name" className="form-label fs-4">
					Имя нового героя
				</label>
				<input
					onChange={setValue}
					required
					type="text"
					name="name"
					className="form-control"
					id="name"
					placeholder="Как меня зовут?"
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="text" className="form-label fs-4">
					Описание
				</label>
				<textarea
					onChange={setValue}
					required
					name="description"
					className="form-control"
					id="text"
					placeholder="Что я умею?"
					style={{ height: "130px" }}
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="element" className="form-label">
					Выбрать элемент героя
				</label>
				<select
					onChange={setValue}
					required
					className="form-select"
					id="element"
					name="element"
				>
					<option>Я владею элементом...</option>
					<option value="fire">Огонь</option>
					<option value="water">Вода</option>
					<option value="wind">Ветер</option>
					<option value="earth">Земля</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">
				Создать
			</button>
		</form>
	);
};

export default HeroesAddForm;
