
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layer/RootLayout";
import Home from "./pages/Home";
import Froit from "./homecomponent/Froit";
import Vegetable from "./homecomponent/Vegetable";

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/frout" element={<Froit />}/>
        <Route path="/vegetable" element={<Vegetable />}/>
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