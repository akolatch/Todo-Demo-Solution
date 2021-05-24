# React Todo List Example

### Build a React todo list

all work happens in client/src

1. Set up ReactDom
2. Figure out data shape and make sample
   1. for each todo you will need a way to store the text and and if it has been completed
3. create and dynamically render sample data
4. Implement add todo
5. implement mark done and delete

### Getting started

#### React Only

To get started run:

- `npm install`
- `npm run build-start`

#### Using the Provided Server/Monog Setup

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

Body: none

Returns: a list of all todos

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

Body:

```javascript
value: Sting <THE TEXT OF THE TODO>

done: Boolean <IS THE TODO COMPLETE>
```

return: 201 created

###### PUT: `'/todo/:id'`

Path variable: \_id of todo be update

Body:

```javascript
done: Boolean;
```

Return: 204 updated

DELETE `'todo/:id'`

Path Variable: \_id of todo be deleted

Body: none

Return: 202 deleted
