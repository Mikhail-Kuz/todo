import React from 'react';

import { Button, Input, Title, Select, Checkbox, Modal } from './components';
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

type ModalType = 'new' | 'edit';

const selectOptions: SelectValue[] = [
    { key: 1, value: 'all', label: 'Все' }, 
    { key: 2, value: 'active', label: 'Активные' }, 
    { key: 3, value: 'completed', label: 'Выполненные' }
];

const initEditedTodo: ITodo = {
    id: 0,
    text: '',
    completed: false,
};

const App = (): JSX.Element => {
    
    const [filters, setFilters] = React.useState<FilterState>({ searchValue: '', selectValue: selectOptions[0] });
    const handleChangeSelect = (value: SelectValue): void => {
        return setFilters({
            ...filters,
            selectValue: value
        });
    };
    const handleChangeSearch = (e: React.ChangeEvent): void => {
        return setFilters({
            ...filters,
            searchValue: (e.target as HTMLInputElement).value
        });
    };

    const [todos, setTodos] = React.useState<ITodo[]>([]);
    const [filterdTodos, setFilteredTodos] = React.useState<ITodo[]>([]);

    React.useEffect(() => {
        const searchedTodos = [ ...todos.filter(i => !!~i.text.indexOf(filters.searchValue.trim())) ];
        
        if (filters.selectValue.value === 'all') setFilteredTodos(searchedTodos);
        else if (filters.selectValue.value === 'active') setFilteredTodos(searchedTodos.filter(i => !i.completed));
        else if (filters.selectValue.value === 'completed') setFilteredTodos(searchedTodos.filter(i => i.completed));

    }, [todos, filters]);


    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalType, setModalType] = React.useState<ModalType>('new');
    
    const handleViewModal = (type: ModalType, item?: ITodo) => (e: React.SyntheticEvent): void => {
        e.stopPropagation();
        setModalType(type);
        
        if (item) {
            setEditedTodo(item);
        }
        
        return setModalVisible(!modalVisible);
    };

    const handleCancel = (): void => {
        setEditedTodo(initEditedTodo);
        return setModalVisible(false);
    };



    /*
        МЕТОДЫ РАБОТЫ С ЗАПИСЯМИ:
    */

    const [editedTodo, setEditedTodo] = React.useState<ITodo>(initEditedTodo);
    
    const handleChangeTextTodo = (e: React.ChangeEvent): void => {
        return setEditedTodo({
            ...editedTodo,
            text: (e.target as HTMLInputElement).value.trim(),
        });
    };

    const handleChangeChecked = (id: number) => (): void => {
        const index = todos.findIndex(i => i.id === id);
        
        if (!!~index) {
            const 
                newTodo: ITodo = {
                    ...todos[index],
                    completed: !todos[index].completed
                },
                newTodos = todos.toSpliced(index, 1, newTodo);
            return setTodos(newTodos);
        }

        return;
    };
    
    const handleCreateTodo = (): void => {
        if (modalType === 'new') {
            const newTodo = {
                ...editedTodo,
                id: Date.now()
            };

            setTodos([ ...todos, newTodo ]);
        } else {
            const 
                index = todos.findIndex(i => i.id === editedTodo.id),
                newTodos = todos.toSpliced(index, 1, editedTodo);

            setTodos(newTodos);
        }
        return handleCancel();
    };

    const handleDeleteTodo = (id: number) => (e: React.SyntheticEvent): void => {
        e.stopPropagation();

        const newTodos = todos.filter(i => i.id !== id);
        return setTodos(newTodos); 
    };

    return (
        <div className="App">
            <div className='todo__header'>
                <Title>Todo list</Title>
                <div className='todo__header__filter'>
                    <Input className='todo__header__filter-search' placeholder='Поиск записи...' value={filters.searchValue} onChange={handleChangeSearch} />
                    <Select 
                        className='todo__header__filter-select' 
                        value={filters.selectValue} 
                        options={selectOptions}
                        onChange={handleChangeSelect}
                    />
                </div>
            </div>
            <div className='todo__content'>
                { filterdTodos.map(item => 
                    <div className='todo__content__item' key={item.id} onClick={handleChangeChecked(item.id)}>
                        <Checkbox type='checkbox' checked={item.completed} />
                        <p className='todo__content__item-label'>{item.text}</p>
                        <Button className='todo__content__item-btn' ghost onClick={handleViewModal('edit', item)}><Edit /></Button>
                        <Button className='todo__content__item-btn' ghost onClick={handleDeleteTodo(item.id)}><Delete /></Button>
                    </div>
                )}
            </div>
            <div className='todo__footer'>
                <Button className='todo__footer__addBtn' onClick={handleViewModal('new')}><Plus /></Button>
            </div>
            <Modal 
                title={`${modalType === 'new' ? 'Создание' : 'Редактирование'} записи`} 
                visible={modalVisible} 
                setVisible={setModalVisible} 
                okText={modalType === 'new' ? 'Создать' : 'Изменить'} 
                onOk={handleCreateTodo}
                okDisabled={!editedTodo.text.trim()}
                onCancel={handleCancel}
            >
                    <Input placeholder='Название записи' value={editedTodo.text} onChange={handleChangeTextTodo} />
            </Modal>
            
        </div>
    );
}

export default App;
