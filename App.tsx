<<<<<<< HEAD
import {MyContextProvider} from './Components/MyContext';
import AppNavigator from './Screens/AppNavigator';
const App: React.FC = () => (

  
  <MyContextProvider>
    <AppNavigator />
  </MyContextProvider>
=======

import {MyContextProvider} from './components/MyContext';
import  AppNavigator  from './screens/AppNavigator';
import BleScreen from './screens/BleScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App: React.FC = () => (

  
  // <MyContextProvider>
  //   <AppNavigator />
  // </MyContextProvider>
  <GestureHandlerRootView>
    {/* < BleScreen /> */}
     <MyContextProvider>
     <AppNavigator />
     </MyContextProvider> 
  </GestureHandlerRootView>
  
>>>>>>> 8007156 (may first commit)
  
);

export default App;
