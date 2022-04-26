import {v4 as uuidV4} from "uuid";
import BasicWidget from "../basic-widget";


/**
 * Виджет Карта Германии
 * @param props - получает соответствующие данные, в BasicWidget передаёт функцию "конструктор"
 * @returns {JSX.Element}
 * @constructor
 */

function GermanyWidget(props) {
    return (
        <BasicWidget data={props.data}>
            {(data) =>
                <div className={'germany-content'}>
                    <ul className={'widget-list'}>
                        {data.items.map(item =>
                            <li key={uuidV4()} className={'widget-list-item'}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </BasicWidget>
    )
}

export default GermanyWidget;
