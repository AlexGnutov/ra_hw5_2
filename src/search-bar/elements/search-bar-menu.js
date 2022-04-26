import { v4 as uuidV4 } from 'uuid';

/**
 * Меню над полем ввода значения для поиска
 * @param props - получает список элементов меню и обработчик события нажатия пунка меню
 * @returns {JSX.Element}
 * @constructor
 */

function SearchBarMenu(props) {
    const {menuItems, menuClick} = props;

    const menuClickHandler = (e) => {
        menuClick(e);
    }

    return (
        <div className={'search-bar-menu'}>
            <ul className={'search-bar-menu-list'}>
                {menuItems.map(item =>
                    <li key={uuidV4()} className={'search-bar-menu-item'}>
                        <a href={'/'} className={'search-bar-menu-link'} onClick={menuClickHandler}>{item}</a>
                    </li>
                )}
                <li key={uuidV4()} className={'search-bar-menu-item'}>
                    <a href={'/'} className={'search-bar-menu-link'}>Eщё...</a>
                </li>
            </ul>
        </div>
    )
}

export default SearchBarMenu;
