import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';

const API_ENDPOINT = 'https://restcountries.eu/rest/v2/all';

const Item = ({item, navigation}) => (
	<TouchableOpacity
		style={styles.itemContainer}
		onPress={() => navigation.push('Detail', item)}>
		<Text style={styles.itemText}>{item.name}</Text>
	</TouchableOpacity>
);

function HomeScreen({navigation}) {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios(API_ENDPOINT).then((res) => setCountries(res.data));
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={countries}
				renderItem={({item}) => <Item navigation={navigation} item={item} />}
				keyExtractor={(item) => item.alpha3Code}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1},
	itemContainer: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	itemText: {
		fontSize: 20,
	},
});

export default HomeScreen;
