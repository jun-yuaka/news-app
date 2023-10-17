import { StyleSheet, Image, View, Text } from 'react-native';

export const ListItem = () => {
  return (
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/id/237/200/300' }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, massa quis varius auctor, nisl odio faucibus lectus, quis aliquet eros metus a nunc.
          </Text>
          <Text style={styles.subText}>ReactNews</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 5,
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
