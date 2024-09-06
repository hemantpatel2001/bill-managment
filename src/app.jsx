import { Provider } from "react-redux";
import Routing from "./sevices/Routing"
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./api/store/store";
export function App() {
  return (
    <>
    <Provider store={store}>
    <Routing />
    </Provider>
   </>
  )
}
