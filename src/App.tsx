import React from 'react';

import { Button, SearchInput, Title, Select } from './components';
import { ReactComponent as Plus} from './assets/icons/plus.svg';

import './styles/App.css';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <div className='todo__header'>
                <Title>Todo list</Title>
                <div className='todo__header__filter'>
                    <SearchInput className='todo__header__filter-search' placeholder='Поиск записи...' />
                    <Select 
                        className='todo__header__filter-select' 
                        value={{ key: 1, value: 1, label: 'Все' }} 
                        options={[{ key: 1, value: 1, label: 'Все' }, { key: 2, value: 2, label: 'Выполненные' }, { key: 3, value: 3, label: 'Активные' }]} 
                    />
                </div>
            </div>
            <div className='todo__content'>

            </div>
            <div className='todo__footer'>
                <Button className='todo__footer__addBtn'><Plus /></Button>
            </div>
        </div>
    );
}

export default App;
