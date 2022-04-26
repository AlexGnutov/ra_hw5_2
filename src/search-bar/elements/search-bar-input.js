import {useState} from "react";

/**
 * Компонент с полем ввода и кнопкой для поиска - форма
 * @param props - получает обработчик для отправки формы
 * @returns {JSX.Element}
 * @constructor
 */

function SearchBarInput(props) {
    const {onFormSubmit} = props;
    const [state, setState] = useState('');

    const onSubmitHandler = (e) => {
        if (state) {
            onFormSubmit(state);
        }
    }

    const onChange = (e) => {
        setState(e.target.value);
    }

    return (
        <form className={'search-bar-input-form'} onSubmit={onSubmitHandler}>
            <input className={'search-bar-input'} onChange={onChange}/>
            <button className={'search-bar-input-button'}>Найти</button>
        </form>
    )
}

export default SearchBarInput;
