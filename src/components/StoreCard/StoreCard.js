import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';
import data from '../../data.json';
const StoreCard = ({news}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: news.imgURL}}
      />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.price}>{news.price}</Text>
        <Text style={styles.inStock}>{news.inStock}</Text>
      </View>
    </View>
  );
};

export default StoreCard;
