import WeatherWidget from "./widgets/weather-widget";
import TVWidget from "./widgets/tv-widget";
import VisitWidget from "./widgets/visit-widget";
import GermanyWidget from "./widgets/germany-widget";
import BroadcastWidget from "./widgets/broadcast-widget";

/**
 * Является контейнером виджетов: погода, программ и т.п.
 * @props - в data передаётся объект с данными для виджетов
 * @returns {JSX.Element}
 */

function WidgetBar(props) {
    const {data} = props;
    const {weather, visit, germany, broadcast, tv} = data;
    return (
        <div className={'widget-bar'}>
                <WeatherWidget data={weather}/>
                <VisitWidget data={visit}/>
                <GermanyWidget data={germany}/>
                <TVWidget data={tv}/>
                <BroadcastWidget data={broadcast}/>
        </div>
    )
}

export default WidgetBar;
