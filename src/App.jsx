import {Home} from "./pages";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Layout/> }>
        <Route path="" element={ <Home/> }></Route>
      </Route>  
    )
  )

  return (
    <RouterProvider router= { router }/>
  );
}

export default App