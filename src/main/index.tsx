import { Router } from '@/presentation/router/routes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "@/presentation/styles/global.scss"

const root = ReactDOM.createRoot(document.getElementById('main')!)
root.render(<RouterProvider router={Router}/>)
