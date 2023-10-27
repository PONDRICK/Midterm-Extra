import { View,Text,Image,StyleSheet} from "react-native";
const Imageset =({ImageSource,imagesize,title="",nisitid="",sample,description}) =>{
    return(
        <View style={styles.imageContainer}>
            <Image 
                source={ImageSource}
                style ={imagesize}
            />
            <Text style = {styles.imgTitle}>{title}</Text>
            <Text style = {styles.imgSubTitle}>{nisitid}</Text>
            <Text style={styles.imgSubTitle}>{sample}</Text>
            <Text style={styles.imgSubTitle}>{description}</Text>
        </View>
    );
}
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
export default Imageset;