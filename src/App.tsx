import { RouterProvider } from 'react-router-dom'
import RootRouter from 'navigation/RootRouter'
import ClipLoader from "react-spinners/ClipLoader";
import store from './redux/store'
import { Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={RootRouter} fallbackElement={<ClipLoader />} />
    </Provider>
  )
}

export default App
