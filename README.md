(A work in progress...)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/taitulism/newTask.svg?branch=develop)](https://travis-ci.org/taitulism/newTask)

new-reporter
============
A politically-incorrect alternative to orchestrate callback hell.  
But hey! Its easier to debug!




Usage
-----
```js
const newReporter = require('new-reporter');

const reporter = newReporter(reporterName, totalTasks, callback);
```

[See some real life use-cases](./docs/use-cases/simple.md)




Params
------
* **reporterName** - String, optional.  
Default value = `'reporter_i'` ("i" is an incrementing number)  
Give a reporter a name (e.g. `'main-reporter'`).  
Good for debugging.

* **totalTasks** - Number, optional.  
Default value = `1`  
How many tasks should this reporter expects to be done before calling the `callback`?

* **callback** - Function, required.  
A function to run when all of the reporter's tasks reported done.  
This function gets called with the reporter's `data` object.




Shared Property
---------------
**.data** - Each reporter starts with an empty `.data` object. This object is shared between reporters and their sub-reporters.




API
---
* **.taskDone(key, value)**  
Call this method N times to make the reporter run its `callback` function, where "N" is the 
reporter's `totalTasks`.  
The `key` & `value` are optional arguments. Passing them to `.taskDone()` will set them on the reporter's shared `data` object.
  * **key** - String.
  * **value** - Any type.

* **.subReporter(name, totalTasks)**  
Returns a sub-reporter that when it's done, will run the current reporter's `.taskDone()` method.  
Use a sub-reporter when a task can be splitted into sub-tasks.  
For example: Your main reporter is expecting 2 tasks to be done: one is a simple task but the second
needs to do two things (two sub-tasks). In this case, create a sub-reporter for the second task. Call `mainReporter.taskDone()` 
when the simple task is done, and call `subReporter.taskDone()` twice, one for each of the second task's
sub-tasks.




Examples
--------
A reporter will run its callback function when it has been reported done with `.taskDone()` as many times as 
its given limit (`totalTasks`):
```js
const newReporter = require('new-reporter');

function callback (data) {
  console.log('all done');
}

const mainReporter = newReporter(3, callback});

mainReporter.taskDone(); // 1
mainReporter.taskDone(); // 2
mainReporter.taskDone(); // 3 --> runs callback
```




Sub-Reporter
------------
A Reporter can have sub-reporters:
```js
const mainReporter = newReporter(3, callback);
const subReporter1 = mainReporter.subReporter(1); 
const subReporter2 = mainReporter.subReporter(1);
const subReporter3 = mainReporter.subReporter(1);
```

***NOTE 1**: `totalTasks`'s default value is 1*   
***NOTE 2**: Creating a sub-reporter for only one job is a redundant overhead.* 

A a sub-reporter doesn't need a callback because when it's done it calls its parent's `.taskDone()` method:
```js
const newReporter = require('new-reporter');

function callback (data) {
  console.log('all done');
}

const mainReporter = newReporter(callback);
const subReporter = mainReporter.subReporter();
const grandSubReporter = subReporter.subReporter();

grandSubReporter.taskDone(); // calls subReporter.taskDone() and eventually mainReporter.taskDone()
```




Reporter.data
-------------
The `data` prop is shared between a reporter and all of its sub-reporters and their sub-reporters.  
It starts as an empty object so you could load it with your own props:
```js
const newReporter = require('new-reporter');

function callback (data) {
  console.log(data); // --> {myKey:'myValue'}
}

const mainReporter     = newReporter(callback});
const subReporter      = mainReporter.subReporter();
const grandSubReporter = subReporter.subReporter();

grandSubReporter.data.myKey = 'myValue';

mainReporter.data.myKey === 'myValue' // true

grandSubReporter.taskDone();
```

[See some real life use-cases](./docs/use-cases/simple.md)