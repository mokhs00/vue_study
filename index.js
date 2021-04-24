Vue.component('todo-item', {
  props : ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el : '#app-7',
  data : {
    todoList : [
      { id : 0, text : 'Vue Study' },
      { id : 1, text : 'Vue 복습' },
      { id : 2, text : 'Vue Study Git Push' }
    ]
  }
})



var app = new Vue({
  el: "#app",
  data: {
    message: "안녕하세요 Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "이 페이지는 " + new Date() + " 에 로드 되었습니다.",
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Vue 배우기" },
      { text: "코딩테스트 고득점 Kit 풀기" },
      { text: "1일 1커밋" },
    ],
  },
});

var app5 = new Vue({
    el : '#app-5',
    data : {
        count : 0
    },
    methods : {
        addCount : function () {
            this.count++;            
        }
    }
})


var app6 = new Vue({
  el : '#app-6',
  data : {
    message : '양방향 바인딩'
  }
})
