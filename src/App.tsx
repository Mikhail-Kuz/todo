import React from 'react';

import { Button, SearchInput, Title, Select, Checkbox, Modal } from './components';
import { SelectValue } from './components/Select';
import { ReactComponent as Plus} from './assets/icons/plus.svg';
import { ReactComponent as Delete} from './assets/icons/delete.svg';
import { ReactComponent as Edit} from './assets/icons/edit.svg';

import { ITodo } from './types/ITodo';

import './styles/App.css';

type FilterState = {
    searchValue: string;
    selectValue: SelectValue;
};

const selectOptions: SelectValue[] = [
    { key: 1, value: 1, label: 'Все' }, 
    { key: 2, value: 2, label: 'Активные' }, 
    { key: 3, value: 3, label: 'Выполненные' }
];

const App = (): JSX.Element => {
    
    const [filters, setFilters] = React.useState<FilterState>({ searchValue: '', selectValue: selectOptions[0] });
    const [todos, setTodos] = React.useState<ITodo[]>([]);


    const [modalVisible, setModalVisible] = React.useState(false);
    const handleViewModal = (): void => {
        return setModalVisible(!modalVisible);
    };

    return (
        <div className="App">
            <div className='todo__header'>
                <Title>Todo list</Title>
                <div className='todo__header__filter'>
                    <SearchInput className='todo__header__filter-search' placeholder='Поиск записи...' />
                    <Select 
                        className='todo__header__filter-select' 
                        value={filters.selectValue} 
                        options={selectOptions} 
                    />
                </div>
            </div>
            <div className='todo__content'>
                { todos.map(item => 
                    <div className='todo__content__item' key={item.id}>
                        <Checkbox type='checkbox' defaultChecked={item.completed} />
                        <p className='todo__content__item-label'>{item.text}</p>
                        <Button className='todo__content__item-btn' ghost><Edit /></Button>
                        <Button className='todo__content__item-btn' ghost><Delete /></Button>
                    </div>
                )}
            </div>
            <div className='todo__footer'>
                <Button className='todo__footer__addBtn' onClick={handleViewModal}><Plus /></Button>
            </div>
            {modalVisible && <Modal></Modal>}
        </div>
    );
}

export default App;
