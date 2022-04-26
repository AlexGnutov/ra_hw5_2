import NewsMenu from "./elements/news-menu";
import NewsList from "./elements/news-list";
import DateComponent from "./elements/date-component";

/**
 * Новостной блок с меню и ссылками на новости
 * @param props - получает данные для пунктов меню и данные ссылок на новости
 * @returns {JSX.Element}
 * @constructor
 */

function NewsBlock(props) {
    const {menuItems, newsItems} = props;

    const dummyOnClick = (e) => {
        console.log(e.target, ' ', 'clicked');
    }

    return(
        <div className={'news-block'}>
            <NewsMenu menuItems={menuItems} onClick={dummyOnClick}/>
            <NewsList newsItems={newsItems}/>
            <DateComponent/>
        </div>
    )
}

export default NewsBlock;
