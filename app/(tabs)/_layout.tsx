

// import { Tabs } from 'expo-router';

// export default function TabsLayout() {
//   return (
//     <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
//       <Tabs.Screen name="index" options={{ title: 'Home' }} />
//       <Tabs.Screen name="services" options={{ title: 'Services' }} />
//       <Tabs.Screen name="about" options={{ title: 'About' }} />
//     </Tabs>
//   );
// }


// (tabs) layout menu

import 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerTitleAlign: 'center' }}>
        <Drawer.Screen name="index" options={{ title: 'Home' }} />
        <Drawer.Screen name="services" options={{ title: 'Services' }} />
        <Drawer.Screen name="contact" options={{ title: 'Contact' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}