import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ListItem } from './components/ListItem'

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl={"https://picsum.photos/200/300"}
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          author="React News"
        />
      <ListItem
        imageUrl={"https://picsum.photos/id/20/200/300"}
        title="タイトル"
        author="Japan News"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
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
