import React from 'react';
import {View, Button, Image, Text} from 'react-native';

const Detail = ({navigation, route}) => {
	const {alpha2Code} = route.params;

	return (
		<View>
			<Button title="Go back" onPress={() => navigation.goBack()} />

			<Image
				source={{
					uri: `https://www.countryflags.io/${alpha2Code.toLowerCase()}/flat/64.png`,
				}}
				style={{
					width: 128,
					height: 128,
				}}
			/>

			<Text>{JSON.stringify(route.params)}</Text>
		</View>
	);
};

export default Detail;
