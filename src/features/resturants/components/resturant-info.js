import React from "react";
import {Text} from "react-native";

export const ResturantInfo = ({resturant = {}}) => {

    const {
        name,
        icon,
        photos,
        address,
        openingHours,
        rating,
        isClosedTemporarily
    } = resturant;
    return (
        <Text>{name} </Text>
    );
};
