import { View, StyleSheet ,Button} from "react-native";
import Imageset from "../component/ImageSet";
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Imageset ImageSource ={require("../img/POND.png")} imagesize={styles.image} title="Sorrawit Nuernuam" nisitid="6421604927"/>
            <Imageset ImageSource={{uri:"https://www.sciencealert.com/images/2023/07/HumanoidRobotPortrait2.jpg"}}imagesize={styles.image} title="Javis Nuernuam" nisitid="6421604927"/>
            <Button 
                title="Let's get started" 
                color="#F3B562"
                fontSize= "16"
                onPress={()=> navigation.navigate("List")}/>
        </View>
    );
};

const styles = StyleSheet.create({
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
export default HomeScreen;
