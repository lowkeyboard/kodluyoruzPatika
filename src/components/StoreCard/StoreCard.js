import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

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
        {/* <Text style={styles.inStock}> {String(isInStock)} </Text> */}
        <Text style={styles.inStock}>
          {' '}
          {String(news.inStock).toUpperCase()}{' '}
        </Text>
      </View>
    </View>
  );
};

export default StoreCard;
