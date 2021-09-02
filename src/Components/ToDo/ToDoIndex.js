
import React, {Component} from 'react';
class ToDoList extends Component {
    constructor(props){
      super(props)
      this.state = {
       list: []
     }
     this.addTask = this.addTask.bind(this);
     this.removeTask = this.removeTask.bind(this);
   }
   addTask(e) {
    e.preventDefault();

    let list = this.state.list;
    const newTask = document.getElementById("addInput");
    const form = document.getElementById("addTaskForm");

    if (newTask.value != "") {
      list.push(newTask.value);
      this.setState({
        list: list
      });
      newTask.classList.remove("is-danger");
      form.reset();
    } else {
      newTask.classList.add("is-danger");
    }
  }

  removeTask(task) {
    const list = this.state.list.slice();
    list.some((el, i) => {
      if (el === task) {
        list.splice(i, 1);
        return true;
      }
    });
    this.setState({
      list: list
    });
  }

    render() {
        return (
            <div className="content">
            <div className="container">
              <section className="section">
              <ul>
                {this.state.list.map(Task => (
                <li key={Task}>{Task} &nbsp;
                  <button className="delete" onClick={() => this.removeTask(Task)}>Finished!</button>
                </li>))}
              </ul>
              </section>
              <hr />
              <section className="section">
                <form className="form" id="addTaskForm">
                  <input
                    type="text"
                    className="input"
                    id="addInput"
                    placeholder="To-Do List"
                  />
                  <button className="button is-info" onClick={this.addTask}>
                Add Task
                </button>
                </form>
              </section>
            </div>
          </div>
        )
    }
}

export default ToDoList;