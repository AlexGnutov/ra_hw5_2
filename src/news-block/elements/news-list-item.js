/**
 * Элемент списка новостей
 * @param props - получает название и ссылку
 * @returns {JSX.Element}
 * @constructor
 */

function NewsListItem(props) {
    const {title, url} = props;

    return (
        <a className={'news-list-item-link'} href={url}>{title}</a>
    )
}

export default NewsListItem;
