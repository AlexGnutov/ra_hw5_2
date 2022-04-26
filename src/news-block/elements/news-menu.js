import { v4 as uuidV4 } from 'uuid';
import NewsMenuItem from "./news-menu-item";

/**
 * Компонент меню новостей
 * @param props - получает данные для ссылко меню и обработчик нажатия пункта меню
 * @returns {JSX.Element}
 * @constructor
 */
function NewsMenu(props) {
    const {menuItems, onClick} = props;

    return (
        <div className={'news-menu'}>
            <ul className={'news-menu-list'}>
                {menuItems.map(item =>
                    <li key={uuidV4()} className={'news-menu-item'}>
                        <NewsMenuItem title={item.title} onClick={onClick}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default NewsMenu;
