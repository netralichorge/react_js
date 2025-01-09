import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Courses from './components/Courses';
import CourseItem from './components/CourseItem';
import GitHubCard from './components/GitHubCard';


const router = createBrowserRouter([
  {
    path:"/about",
   // element:<About/>
    element:<> <Navbar/> <About/> <Footer/> </>
  },

  {
    path:"/contact/:id",
    element:<> <Navbar/> <Contact/> <Footer/> </>
  },
  
  {
    path:"/",
    element:<>
          <Navbar/>
          <Footer/>
          </>
  },
  {
    path:"*",
    element:<NotFound/>
  },
  {
    path:"/courses",
    element:<><Navbar/> <Courses/> <Footer/> </>,
    children:[
      {
        index:true,
        element:<> <CourseItem id={2} name="Foundation with Sql" fees={25000} />
        <CourseItem id={3} name="Java" fees={45000}/> </>

        //to show multiple courseItems
      },
      {
        path:"web-designing",
        element: <CourseItem id={1} name="Web designing" fees={20000}/>
      },
      {
        path:"sql",
        element: <CourseItem id={2} name="Foundation with Sql" fees={25000}/>
      },
      {
        path:"java",
        element: <CourseItem id={3} name="Java" fees={45000}/>
      }
    ]
  },
  {
    path:"/github-card",
    element:<GitHubCard/>
  }
 
])
function App() {
  return (
    <div >

      {/* <Navbar/> */}
      {<RouterProvider router = {router}/>}
    </div>
  );
}

export default App;
