import React, { useContext} from "react";
import {SafeAreaView, StatusBar, FlatList} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfoCardComponent} from "../components/restaurant-info-card.component";
import RESTURANT_DATA from "../../../resturant.data";
import styled from "styled-components/native";
import {Spacer} from "../../../components/spacer/spacer.component";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
   padding: 16,
    },
})``;


export const RestaurantsScreen = () => {
const restaurantContext = useContext(RestaurantsContext);
console.log(restaurantContext.restaurants);
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantList data={restaurantContext.restaurants}
                            renderItem={() => (
                                <Spacer position="bottom" size="large">
                                    <RestaurantInfoCardComponent resturant={RESTURANT_DATA}/>
                                </Spacer>
                            )}
                            keyExtractor={(item) => item.name}
                            contentContainerStyle={{padding: 16}}
            />
        </SafeArea>
    );
};

