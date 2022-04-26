import BasicWidget from "../basic-widget";

/**
 * Виджет Погода
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function WeatherWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'weather-content'}>
                    <img className={'weather-content-item'} src={data.image} alt={''}/>
                    <div className={'weather-content-item wc-current-temp'}>{data.currentTemp}&#xb0;</div>
                    <div className={'weather-content-item'}>
                        <div>Утром {data.morningTemp}&#xb0;</div>
                        <div>Днём {data.dayTemp}&#xb0;</div>
                    </div>
                </div>
            }
        </BasicWidget>
    )
}

export default WeatherWidget;
