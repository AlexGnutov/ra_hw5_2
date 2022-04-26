
/**
 * Каркас для виджетов - контейнер плюс заголовок-ссылка на раздел сайта
 * @param props - получает функцию в children и данные, с их помощью делает отрисовку
 * @returns {JSX.Element}
 * @constructor
 */

function BasicWidget(props) {
    const {data} = props;

    return (
        <div className={'widget'}>
            <a className={'widget-link'} href={data.link}><h3>{data.title}</h3></a>
            {props.children(data)}
        </div>
    )
}

export default BasicWidget;
