// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { Applayout } from './layout/Applayout'
import { RouterProvider } from 'react-router-dom'
import { WordCounter } from './pages/WordCounter'
import { BMICalculator } from './pages/BMICalculator'
import { Contact } from './pages/Contact'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  const router = createBrowserRouter([

    
      // path:"/",
      // element:<Applayout/>,
      // errorElement:<ErrorPage/>,
      // children:[
        { 
        path:"/",
         element:<Applayout/>
        },
        {
          path:"bmi",
          element: <BMICalculator/>
        },
        {
          path:"form",
          element: <Contact/>
        },
        {
          path:"counter",
          element: <WordCounter/>
        },
        // {
        //   path:"country/:id",
        //   element: <CountryDetails/>
        // },
        // {
        //   path:"Contact",
        //   element: <Contact/>
        // }
      // ]
    
    
  ])
  
    return  <RouterProvider router={router}/>
  }


export default App
