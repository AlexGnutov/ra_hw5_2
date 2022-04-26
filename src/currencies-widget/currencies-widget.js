import { v4 as uuidV4 } from 'uuid';

/**
 * Виджет для отображения курсов валют и цен на нефть
 * @param props - получает данные записей о валютах и нефти
 * @returns {JSX.Element}
 * @constructor
 */

function CurrenciesWidget(props) {
    const {data} = props;

    return (
        <div className={'currency-widget'}>
            <ul className={'currency-widget-list'}>
                {data.map(data =>
                    <li key={uuidV4()} className={'currency-widget-item'}>
                        <span>{data.name}</span>{' '}
                        <span>{data.source}</span>{' '}
                        <span>{data.value}</span>{' '}
                        <span>{data.trend}</span>{' '}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CurrenciesWidget;
