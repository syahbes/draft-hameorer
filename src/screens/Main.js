import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:"#000", marginBottom: 15}}>עמוד ראשון בתוך הטאב עם קישור במגירה</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:"#000", marginBottom: 15}}>עמוד שני</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const UserRoute = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>עמוד משתמש</Text>
    </View>
  )
}
const TimelineRoute = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>עמוד של ציר זמן</Text>
    </View>
  )
}
const PlusSymb = () => { null }
const MapRoute = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>עמוד מפה</Text>
    </View>
  )
}



const ContentRoute = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'user', title: 'פרופיל', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'timeline', title: 'ציר זמן', focusedIcon: 'timeline-clock', unfocusedIcon: 'timeline-clock-outline' },
    { key: 'plus', title: '', focusedIcon: 'plus-thick' },
    { key: 'content', title: 'תוכן', focusedIcon: 'file-document', unfocusedIcon: 'file-document-outline' },
    { key: 'map', title: 'מפה', focusedIcon: 'map', unfocusedIcon: 'map-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    user: UserRoute,
    timeline: TimelineRoute,
    plus: PlusSymb,
    content: ContentRoute,
    map: MapRoute,
  });

  return (
    <BottomNavigation
compact={true}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Main;