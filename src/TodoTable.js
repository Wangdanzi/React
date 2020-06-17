import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoTableUI from './TodoTableUI'
import {getInputChangeAction, getDeleAction, getAddAction} from './store/actionCreators'

class TodoTable extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.hadleChange = this.hadleChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.hadleClick = this.hadleClick.bind(this)
    this.hadleDele = this.hadleDele.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return(
      <TodoTableUI
        inputValue={this.state.inputValue}
        hadleClick={this.hadleClick}
        hadleChange={this.hadleChange}
        list={this.state.list}
        hadleDele={this.hadleDele}
      />
    )
  }
  hadleChange (e) {
    const action = getInputChangeAction(e.target.value)
    // dispatch 传递给store
    store.dispatch(action)
  }
  hadleDele (index) {
    const action = getDeleAction(index)
    store.dispatch(action)
  }
  hadleClick() {
    const action = getAddAction()
    store.dispatch(action)
  }
  handleStoreChange () {
    this.setState(store.getState())
  }
}
export default TodoTable
