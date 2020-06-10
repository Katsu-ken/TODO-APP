var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todoLists: []
  },
  methods: {
    addList: function(event) {
      // alert()
      var todoList = {
        name: this.newItem,
        isChecked: false
      };
      if(this.newItem === '') {
        return;
      } else {
        this.todoLists.push(todoList);
  
        this.newItem = '';
      }
    },
    removeItem: function(index) {
      // alert(index)
      this.todoLists.splice(index, 1)
    }
  }
})