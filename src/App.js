import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    /**
     * How does the Provider component knows about the redux store?
     * --> this store must be specified as a prop that is why it was
     * imported on line 3
     */
    <Provider store={store}>
      <div className="App">
        {/* <h3>Cake Container</h3>
        <CakeContainer />

        <h3>Hooks Cake Container</h3>
        <HooksCakeContainer />

        <h3>Ice Cream Container</h3>
        <IceCreamContainer />

        <h3>New Cake Container</h3>
        <NewCakeContainer />

        <h3>Item Container</h3>
        <ItemContainer cake />
        <ItemContainer iceCream /> */}

        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
