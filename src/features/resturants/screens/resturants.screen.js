import React from "react";
import {SafeAreaView, StatusBar } from "react-native";
import {Card, Searchbar} from "react-native-paper";
import {RestaurantInfoCardComponent} from "../components/restaurant-info-card.component";
import RESTURANT_DATA from "../../../resturant.data";
import styled from "styled-components/native";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight &&  `margin-top: ${StatusBar.currentHeight}px`};
`;


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;


export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar/>
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCardComponent resturant={RESTURANT_DATA}/>
        </RestaurantListContainer>
    </SafeArea>
);
