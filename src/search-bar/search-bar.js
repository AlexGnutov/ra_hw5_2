import SearchBarHelp from "./elements/search-bar-help";
import SearchBarMenu from "./elements/search-bar-menu";
import SearchBarInput from "./elements/search-bar-input";

/**
 * Компонент - поиск. Включает в себя рад необходимых элементов
 * @param props - получает данные для отрисовки пунктов меню и подписи
 * @returns {JSX.Element}
 * @constructor
 */

function SearchBar(props) {
    const {data} = props;

    const dummyMenuClick = (e) => {
        console.log(e.target, 'search bar menu clicked')
    }
    const searchSubmit = (request) => {
        console.log(request);
    }

    return (
        <div className={'search-bar'}>
            <SearchBarMenu menuItems={data.menuItems} menuClick={dummyMenuClick}/>
            <SearchBarInput onFormSubmit={searchSubmit}/>
            <SearchBarHelp>
                <span className={'search-bar-help-title'}>{data.helpTitle}</span>
                <a href="#0" className={'search-bar-help-example'}>{data.helpExample}</a>
            </SearchBarHelp>
            <div className={'search-bar-logo'}/>
        </div>
    )
}

export default SearchBar;
