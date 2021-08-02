import { Dimensions, StyleSheet } from 'react-native';
export default StyleSheet.create({
    image: {
        flex: 1,
        width: Dimensions.get('window').width - 20,
        height: 100,
        padding: 75,
        position: 'relative',
        borderRadius: 20
    },
    container: {
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 20
    },
    text: {
        position: 'absolute',
        bottom: 0,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.7,
        width: Dimensions.get('window').width -20,
        textAlign: 'right',
        padding: 5,
        paddingRight: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    }
});