import './App.css';
import NewsBlock from "./news-block/news-block";
import AdvWidget from "./adv-widget/adv-widget";
import CurrenciesWidget from "./currencies-widget/currencies-widget";
import SearchBar from "./search-bar/search-bar";
import MainBanner from "./main-banner/main-banner";
import WidgetBar from "./widget-bar/widget-bar";

function App() {
    const newsBlockData = {
        menuItems: [
            {title: 'Сейчас в СМИ'},
            {title: 'в Германии'},
            {title: 'Рекомендуем'}
        ],
        newsItems: [
            {title: 'Путин упростил получение пива', url: '#0', icon: 'img/dummy-icon.svg'},
            {title: 'Люди становятся глупее', url: '#0', icon: 'img/dummy-icon.svg'},
            {title: 'Люди становятся глупее', url: '#0', icon: 'img/dummy-icon.svg'},
            {title: 'Люди становятся глупее', url: '#0', icon: 'img/dummy-icon.svg'},
            {title: 'У планеты нет шансов, всё', url: '#0', icon: 'img/dummy-icon.svg'}
        ],
    };
    const currencyData = [
        {name: 'USD', source: 'MOEX', value: '63,52', trend: '+0,09'},
        {name: 'EUR', source: 'MOEX', value: '70,86', trend: '+0,14'},
        {name: 'НЕФТЬ', source: '', value: '64,90', trend: '+1,63 %'}
    ];

    const searchBarData = {
        menuItems: [
            'Видео',
            'Картинки',
            'Новости',
            'Карты',
            'Маркет',
            'Переводчик',
            'Эфир',
        ],
        helpTitle: 'Найдётся всё. Например, ',
        helpExample: 'фаза луны сегодня',
    };

    const widgetData = {
        weather: {
            title: 'Погода',
            link: '#0',
            img: 'cloudy',
            currentTemp: '+10',
            dayTemp: '+15',
            morningTemp: '+3',
        },
        visit:{
            title: 'Посещаемое',
            link: '#0',
            items: [
                {title: 'Недвижимость', link: '#0', description: 'о сталинках'},
                {title: 'Маркет', link: '#0', description: 'люстры и светильники'},
                {title: 'Авто.ру', link: '#0', description: 'привод 4х4 до 500 000'}
            ],
        },
        germany: {
            title: 'Карта Германии',
            link: '#0',
            items: [
                {title: 'Расписания', link: '#0'},
            ],
        },
        broadcast: {
            title: 'Эфир',
            link: '#0',
            items: [
                {image: '', title: 'Управление как искусство', link: '#0', description: 'Успех'},
                {image: '', title: 'Ночь. Мир в это время', link: '#0', description: 'earthTV'},
                {image: '', title: 'Андрей Возне...', link: '#0', description: 'Совершенно секретно'},
            ],
        },
        tv: {
            title: 'ТВ Программа',
            link: '#0',
            items: [
                {time: '22:12', title: 'Бобслей', channel: 'Домашний'},
                {time: '23:12', title: 'Бобслей', channel: 'Домашний'},
                {time: '00:12', title: 'Бобслей', channel: 'Домашний'},
            ],
        },
    }

    return (
        <>
            <header className={'header container'}>
                <div className={'header-left'}>
                    <NewsBlock {...newsBlockData}/>
                    <CurrenciesWidget data={currencyData}/>
                </div>
                <div className={'header-right'}>
                    <AdvWidget>
                        <img className={'adv-widget-image'} src={''} alt={''}/>
                        <a className={'adv-widget-link'} href={'#0'}>Выгодный переход!</a>
                        <p className={'adv-widget-text'}>Переходи по ссылке и заберем приз</p>
                    </AdvWidget>
                </div>
            </header>
            <main className={'container'}>
                <SearchBar data={searchBarData}/>
                <MainBanner/>
                <WidgetBar data={widgetData}/>
            </main>
        </>
    );
}

export default App;
