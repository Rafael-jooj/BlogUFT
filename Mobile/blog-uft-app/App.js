import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import Blogs from './src/pages/Blogs';
import Novo from './src/pages/NewBlog';
import BlogPost from './src/pages/Post';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  // const MainDrawerScreen = () => (
  //   <Drawer.Navigator>
  //     <Drawer.Screen name="Home" component={Home} />
  //     <Drawer.Screen name="Blogs" component={Blogs} />
  //     <Stack.Screen name="BlogPost" component={BlogPost} options={{ headerShown: false }}/>
  //     <Drawer.Screen name="NewBlog" component={Novo} />
  //   </Drawer.Navigator>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="MainDrawer" component={MainDrawerScreen} options={{ headerShown: false }}/> */}
        <Stack.Screen name="BlogPost" component={BlogPost} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="NewBlog" component={Novo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

