import './App.css';
import { Provider } from 'react-redux'
import store from './components/redux/store'
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    /**
     * How does the Provider component knows about the redux store?
     * --> this store must be specified as a prop that is why it was
     * imported on line 3
     */
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
