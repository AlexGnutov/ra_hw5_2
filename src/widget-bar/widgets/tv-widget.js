import { v4 as uuidV4 } from 'uuid';
import BasicWidget from "../basic-widget";

/**
 * Виджет Телепрограмма
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function TVWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'tv-content'}>
                    <ul className={'widget-list'}>
                        {data.items.map(item =>
                            <li key={uuidV4()} className={'widget-list-item'}>
                                <span>{item.time}</span>
                                <span>{item.title}</span>
                                <span>{item.channel}</span>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </BasicWidget>
    )
}

export default TVWidget;
