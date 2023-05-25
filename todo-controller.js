
import Todo from '../model/Todo.js';


export const addTodo = async(request, response) => {
    try{ const newTodo = await Todo.create({
        date: request.body.data,
        createdAt: Date.now()
    })

        await newTodo.save();

        return response.state(200).json(newtodo);
    } catch (error) {
        return response.status(500).json(error.massage);
    }
   
}