import { View, StyleSheet, FlatList, Text } from "react-native";
import food from "../data/food.json"
import Imageset from "../component/ImageSet";
const RenderItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.imgTitle}>ID is 0{item.id}</Text>
            <Imageset ImageSource={{ uri: item.photo_url }} imagesize={styles.image} title={item.name} />
            <Text style={styles.imgSubTitle}>{item.sample_foods}</Text>
            <Text style={styles.imgSubTitle}>description is "{item.description}"</Text>
        </View>
    );
};

const ItemScreen = ({ route }) => {
    const { item } = route.params;
    console.log(item);
    return (
        <View style={styles.container}>

            <Imageset ImageSource={{ uri: item.photo_url }} imagesize={styles.image} title={item.name} description={item.description} sample={item.sample_foods} />


        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2EBBF",
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "#000",
    },
    imgTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    imgSubTitle: {
        color: "#666",
    },
    btnView: {
        width: 200,
        backgroundColor: "#F3B562",
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#fff",
        margin: 10,
        alignItems: "center",
    },
    btnTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#5C4B51",
    },
});
export default ItemScreen;