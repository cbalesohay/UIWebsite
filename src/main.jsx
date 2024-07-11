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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/Projects",
    element: <ProjectsPage/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUsPage/>,
  },
  {
    path: "/Team",
    element: <OurTeamPage/>
  },
  {
    path: "/RecentPublications",
    element: <RecentPublicationsPage/>,
  },
  {
    path: "/ContactUs",
    element: <ContactUsPage/>,
  },
  {
    path: "/Scarecro",
    element: <Scarecro/>,
  },
  {
    path: "/Evergreen",
    element: <Evergreen/>,
  },
  {
    path: "/Aquifer",
    element: <Aquifer/>,
  },
  {
    path: "/AiData",
    element: <AiData/>,
  },
  {
    path: "/ValleyFever",
    element: <ValleyFever/>,
  },
  {
    path: "/FarmBot",
    element: <FarmBot/>,
  },
  {
    path: "/Automation",
    element: <Automation/>,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
