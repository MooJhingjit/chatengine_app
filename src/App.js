import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
export default function App() {
  
  if(!localStorage.getItem('username')) return <LoginForm/>
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  return (
    <ChatEngine
      height="100vh"
      projectID="6a596ef0-4ae6-43a4-b625-e555b78c0705"
      userName={username}
      userSecret={password}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}
