# React Todo List Example

### Build a React todo list

all work happens in client/src

1. Set up ReactDom
2. Figure out data shape and make sample
   1. for each todo you will need a way to store the text and mark if it has been complected
3. create and dynamically render sample data
4. Implement add todo
5. implement mark done and delete

### Getting started

#### React Only

To get started run:

- `npm install`
- `npm run build-start`

#### Using the Provided Server/Mongo Setup

Note: must have MongoDB server

To get started run:

- `npm install`
- In server/database/index.js
  - change `dbName` at line 2 and `mongoUri`at line 3 to match your desired name for the database and the URI of your mongo server
- To start server
- `npm start`
- navigate to http://localhost:3000
- To start build
  - `npm run build-dev`

##### API paths:

###### GET: `'/todo'`

Return:

- Status: 200
- Data: Array of all todos in the db

```javascript
[
  {
    _id: '60abbca4540b722e7393045c',
    value: 'Set up React Dom ',
    done: false,
    __v: 0,
  },
  {
    _id: '60abbcda540b722e7393045d',
    value: 'Figure out data shape and make sample',
    done: true,
    __v: 0,
  },
];
```

###### POST: `'/todo'`

| Parameter | Type    | In   | Description                                   |
| --------- | ------- | ---- | --------------------------------------------- |
| value     | String  | body | the text of the todo being created            |
| done      | Boolean | body | boolean representing if the todo is completed |

Return:

- Status: 201
- Created

###### PUT: `'/todo/:id'`

| Parameter | Type   | In   | Description                                                                          |
| --------- | ------ | ---- | ------------------------------------------------------------------------------------ |
| id        | Sting  | path | The `_id` of the todo being updated                                                  |
| updates   | Object | body | An object where the keys are the fields to be updated and the values are the updates |

Return:

- Status: 204

DELETE `'todo/:id'`

| Parameter | Type  | In   | Description                         |
| --------- | ----- | ---- | ----------------------------------- |
| id        | Sting | path | The `_id` of the todo being deleted |

Return:

- Status: 204
