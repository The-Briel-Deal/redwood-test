import { db } from 'src/lib/db'

export const todos = () => {
  return db.todo.findMany()
}
export const Todos = {
  id: (_args, { root }) => root.id,
  title: (_args, { root }) => root.title,
  completed: (_args, { root }) => root.completed,
  createdAt: (_args, { root }) => root.createdAt,
  updatedAt: (_args, { root }) => root.updatedAt,
}

export const createTodo = ({ title }) => {
  return db.todo.create({
    data: {
      title,
    },
  })
}
