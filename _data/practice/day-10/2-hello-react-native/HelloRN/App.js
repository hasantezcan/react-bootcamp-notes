import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/Detail';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{title: 'Anasayfa'}}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					options={({route}) => ({title: route.params.name})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
