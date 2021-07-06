import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    paddingLeft: 50,
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2,
    backgroundColor: 'grey',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 50,
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'space-evenly',
  },
  price: {
    marginTop: 1,
    fontWeight: 'bold',
    textAlign: 'justify',
    justifyContent: 'space-evenly',
    color: 'grey',
  },
  inStock: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'space-evenly',
    color: 'red',
  },
  inner_container: {
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingLeft: 50,
    backgroundColor: '#D1D0E5',
  },
});
