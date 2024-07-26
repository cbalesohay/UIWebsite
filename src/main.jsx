import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LandingPage } from './pages/Landing/LandingPage.jsx'
import { ProjectsPage } from './pages/Projects/ProjectsPage.jsx'
import { AboutUsPage } from './pages/AboutUs/AboutUsPage.jsx'
import { OurTeamPage } from './pages/Team/OurTeamPage.jsx'
import { RecentPublicationsPage } from './pages/RecentPublications/RecentPublicationsPage.jsx'
import { ContactUsPage } from './pages/ContactUs/ContactUsPage.jsx'
import { Scarecro } from './pages/IndividualProjects/Scarecro/Scarecro.jsx'
import { Evergreen } from './pages/IndividualProjects/Evergreen/Evergreen.jsx'
import { Aquifer } from './pages/IndividualProjects/Aquifer/Aquifer.jsx'
import { AiData } from './pages/IndividualProjects/AIData/AiData.jsx'
import { ValleyFever } from './pages/IndividualProjects/ValleyFever/ValleyFever.jsx'
import { FarmBot } from './pages/IndividualProjects/FarmBot/FarmBot.jsx'
import { Automation } from './pages/IndividualProjects/Automation/Automation.jsx'
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/Projects",
        element: <ProjectsPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/AboutUs",
        element: <AboutUsPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/Team",
        element: <OurTeamPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/RecentPublications",
        element: <RecentPublicationsPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/ContactUs",
        element: <ContactUsPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/Scarecro",
        element: <Scarecro/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/Evergreen",
        element: <Evergreen/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/Aquifer",
        element: <Aquifer/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/AiData",
        element: <AiData/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/ValleyFever",
        element: <ValleyFever/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/FarmBot",
        element: <FarmBot/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/Automation",
        element: <Automation/>,
        errorElement: <ErrorPage/>,
      },
    ]
  },
  
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
