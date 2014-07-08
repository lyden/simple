$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddTodo.feature");
formatter.feature({
  "id": "add-todo",
  "description": "As a user\nIn order to be reminded of something in the future\nI want to set a todo",
  "name": "Add Todo",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "add-todo;successfully-adding-a-todo",
  "description": "",
  "name": "Successfully adding a todo",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the main todos page",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I enter \"Remember this\" into the new todo box",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "press enter in the todo box",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "a new todo is added with \"Remember this\"",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "TodoSteps.visitMainTodosPage()"
});
formatter.result({
  "duration": 8208865000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Remember this",
      "offset": 9
    }
  ],
  "location": "TodoSteps.enterTextIntoTodoBox(String)"
});
formatter.result({
  "duration": 69789000,
  "status": "passed"
});
formatter.match({
  "location": "TodoSteps.pressEnter()"
});
formatter.result({
  "duration": 47593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Remember this",
      "offset": 26
    }
  ],
  "location": "TodoSteps.verifyNewTodoAddedWithText(String)"
});
formatter.result({
  "duration": 23012000,
  "status": "passed"
});
});