/**
 * Компонент представляет собой контейнер для рекламного контента в правом верхнем углу
 * @props - передаются нужные дочерние элементы
*/
function AdvWidget(props) {
    return (
        <div className={'adv-widget'}>
            {props.children}
        </div>
    )
}

export default AdvWidget;
