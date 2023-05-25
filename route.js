import express from 'express';

import { addTodo } from '../controller/todo-controller.js';

const route = expree.Router();



Router.post('/todos', addTodo)


export default route;