import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem'
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.expoConfig.extra.newsApiKey}`

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async() => {
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles);
    }catch(error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
    backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  subText: {
    color: "gray",
  },
});
