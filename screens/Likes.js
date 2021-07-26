import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FONTS } from '../constants';
import { Entypo } from '@expo/vector-icons';

import { initialCurrentLocation, categoryData, affordable, fairPrice, expensive, restaurantData, likes } from '../data/data';

const Likes = ({ like }) => {
    // const [restaurants, setRestaurants] = useState(restaurantData);

    function renderLike() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <Text style={{ ...FONTS.h2 }}>Likes</Text>
                <Entypo
                            name='heart'
                            size={40}
                            color='red'
                            onPress={() => setLike(false)}
                        />
            </View>
        )
    }
    return (
        <View>
            {renderLike()}
        </View>
    );
};

export default Likes;