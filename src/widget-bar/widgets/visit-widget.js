import BasicWidget from "../basic-widget";
import {v4 as uuidV4} from "uuid";

/**
 * Виджет Посещаемое
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function VisitWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'visit-content'}>
                    <ul key={uuidV4()} className={'widget-list'}>
                        {data.items.map(item =>
                            <li key={uuidV4()} className={'widget-list-item'}>
                                <a href={item.link} className={'widget-link'}>{item.title}</a>
                                <span>- {item.description}</span>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </BasicWidget>
    )
}

export default VisitWidget;
