/**
 * Компонент с датой - отображает дату (не форматировал)
 */

function DateComponent(props) {
    return (
        <div className={'date-component'}>
            {new Date().toDateString()}
        </div>
    )
}

export default DateComponent;
