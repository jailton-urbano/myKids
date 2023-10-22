import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import { LogBox } from 'react-native';
import { Handler } from './src/screens/Handlers/index';
export default function App() {

  // Ignore log notification by message
  // LogBox.ignoreLogs(['Warning: ...']); 

  //Ignore all log notifications:
  // LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Handler />
      </PersistGate>
    </Provider>
  );
}
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
