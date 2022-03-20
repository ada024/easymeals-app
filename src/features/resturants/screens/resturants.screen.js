import React from "react";
import {SafeAreaView, StatusBar, FlatList} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfoCardComponent} from "../components/restaurant-info-card.component";
import RESTURANT_DATA from "../../../resturant.data";
import styled from "styled-components/native";
import {Spacer} from "../../../components/spacer/spacer.component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
   padding: 16,
    },
})``;


export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar/>
        </SearchContainer>
        <RestaurantList data={[
            {name: 1},
            {name: 2},
            {name: 3},
            {name: 4},
            {name: 5},
            {name: 6},
        ]}
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

