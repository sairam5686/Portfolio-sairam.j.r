import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import { FloatingDock } from './components/floating-dock.tsx'

  import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconCookieMan ,
  IconSourceCode ,
  IconFileCv ,
  IconMailbox ,
  IconBrandLeetcode 
} from "@tabler/icons-react";




const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      },
      {
        path:'/projects',
        element:<Projects />
      }
  ]
  );




 const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "About Me",
      icon: (
        <IconCookieMan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Personal Projects",
      icon: (
        <IconSourceCode  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (< IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" /> ),
      href: "https://drive.google.com/file/d/1IxFy6PFH8YdPdZtBKzo-u2pkpd8Sso40/view",
    },
    {
      title: "DSA Stats",
      icon: (
        <IconBrandLeetcode  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://codolio.com/profile/Sairam5686",
    },
 
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sairam-j-r/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/sairam5686",
    },{
      title: "Contact Me",
      icon: (
        <IconMailbox  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:jrsairam5686@gmail.com",
    }
  ];

createRoot(document.getElementById('root')).render(
 <StrictMode>
    {/* Wrap FloatingDock in a fixed container */}
    <div className="fixed bottom-4 left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50">
  <FloatingDock items={links} />
</div>

    {/* Main app/router content */}
    <div > {/* Add padding bottom so content isn't hidden behind dock */}
      <RouterProvider router={routes} />
    </div>
  </StrictMode>
)
