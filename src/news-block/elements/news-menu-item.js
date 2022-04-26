/**
 * Элемент меню новостей
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

function NewsMenuItem(props) {
    const {title, onClick} = props;

    const onClickHandler = (e) => {
        onClick(e);
    }

    return (
        <a className={'news-menu-link'} href="#0" onClick={onClickHandler}>{title}</a>
    )
}

export default NewsMenuItem;
