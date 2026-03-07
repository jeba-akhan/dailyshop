
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layer/RootLayout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
  )
);

const App = () => {
  return (
    <div>
  <RouterProvider router ={router}/>
    </div>
  )
}

export default App