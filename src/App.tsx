import React from 'react';
import './styles/App.css';
import { Title } from './components';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Title>Todo list</Title>
        </div>
    );
}

export default App;
