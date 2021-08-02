import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onChooseMeal}) => {
    return (
        <TouchableOpacity onPress={() => onChooseMeal(meal.idMeal)} style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.strMealThumb}} />
            <Text style={styles.text}>
                {meal.strMeal}
            </Text>
        </TouchableOpacity>
    )
}

export default MealCard;