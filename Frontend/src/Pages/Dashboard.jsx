import React from 'react'
import {NavBar,AddTodo, TodoRender} from '../components/index'


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-200">
      <NavBar/>
      <AddTodo/>
      <TodoRender/>
    </div>
  )
}
