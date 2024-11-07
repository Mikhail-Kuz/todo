import React from 'react';

import { Button, SearchInput, Title } from './components';
import { ReactComponent as Plus} from './assets/icons/plus.svg';

import './styles/App.css';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <div className='todo__header'>
                <Title>Todo list</Title>
                <SearchInput placeholder='Поиск записи...' />
                
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
