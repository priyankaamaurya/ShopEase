import { RouterProvider } from "react-router-dom"
import Routing from "./routing/Routing"

const App = () => {
  return (
    <div>
    <RouterProvider router={Routing} />
    </div>

  )
}

export default App