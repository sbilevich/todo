import React, {Component} from 'react';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import ItemAdddForm from '../item-add-form';
import './app.css';



export default class App extends Component{

  maxId = 100;
   todos = [
    this.createTodoItem('Drink Coffee'),
    this.createTodoItem('Make Awesome App'),
    this.createTodoItem('Have a lunch')
  ];
  state = {
    todoData : this.todos,
    filter: 'all',
    searchText: ''            
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const i = todoData.findIndex((el) => el.id === id)
      const newArr = [
        ...todoData.slice(0, i),
        ...todoData.slice(i+1)
      ] 
      return {
        todoData: newArr
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text); 
    this.setState(({todoData}) => {
      const newArr = [...todoData, newItem]
      return {
        todoData:newArr
      }
    })
  }
  onToggleProperty = (arr, id, propName) => {
    const i = arr.findIndex((el) => el.id === id)
    const oldItem = arr[i];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    
    return [
      ...arr.slice(0, i),
      newItem,
      ...arr.slice(i+1)];              
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const newArr = this.onToggleProperty(todoData, id, 'important')
    return {
        todoData: newArr
      }                
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData, filter, searchText}) => {
      const newArr = this.onToggleProperty(todoData, id, 'done')
    return {
        todoData: newArr
      }
    })
  } 
  searchItems = (items, text) => {
    if (text.length === 0) {
      return items
    }
    return items.filter((item) => { 
      return item.label.toLowerCase().includes(text.toLowerCase())
    })
  }

  onSearch = (text) => {
    this.setState({
      searchText: text
    })
  }

  filterItems = (items, filter) => {
    switch(filter)  {
      case 'all': 
        return items
      case 'active': 
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)  
      default: return items;  
    }
  }

  onFilter = (filter) => {
    this.setState({
      filter
    })
  }
  render() {
    const {todoData, filter, searchText} = this.state;
    const filteredData = this.filterItems(this.searchItems(todoData, searchText), filter);
    const toDoArr = this.state.todoData.filter(item => !item.done);
    const doneArr = this.state.todoData.filter(item => item.done);
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoArr.length} done={doneArr.length} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter  onFilter={this.onFilter} filter={filter}/>
        </div>
        <TodoList todos={filteredData} 
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>
        <ItemAdddForm onAddItem={this.addItem}/>
      </div>
    )
  }
} 

