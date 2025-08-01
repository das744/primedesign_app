
// app/_layout.tsx (Drawer root), side menu bar
//app/_layout- This is the root layout of whole app.

import 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold,
// } from '@expo-google-fonts/roboto';

// export default function RootLayout() {
//   const [fontsLoaded] = useFonts({
//     Roboto_400Regular,
//     Roboto_500Medium,
//     Roboto_700Bold,
//   });

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });



  // Wait until fonts are ready
  if (!fontsLoaded) return <View style={{ flex: 1, backgroundColor: '#fff' }} />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="index" options={{ title: 'Home' }} />
        <Drawer.Screen name="services" options={{ title: 'Services' }} />
        <Drawer.Screen name="contact" options={{ title: 'Contact' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
