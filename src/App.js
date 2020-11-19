import './App.css';
import { Provider } from 'react-redux'
import store from './components/redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    /**
     * How does the Provider component knows about the redux store?
     * --> this store must be specified as a prop that is why it was
     * imported on line 3
     */
    <Provider store={store}>
      <div className="App">
        <h3>Cake Container</h3>
        <CakeContainer />

        <h3>Hooks Cake Container</h3>
        <HooksCakeContainer />

        <h3>Ice Cream Container</h3>
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
