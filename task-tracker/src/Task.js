// Task class using ES6 class syntax
export default class Task {
    constructor(title, description = '', category = 'general') {
     this.title = title;
     this.description = description;
     this.completed = false;
     this.createdAt = new Date();
     this.category = category; 
    }
   
    // Method to toggle completion status
    toggleComplete() {
     this.completed = !this.completed;
     return this;
    }
   
    // Static method to create task from plain object
    static fromObject(obj) {
     const task = new Task(obj.title, obj.description, obj.category);
     task.completed = obj.completed;
     task.createdAt = new Date(obj.createdAt);
     return task;
   }
}
   