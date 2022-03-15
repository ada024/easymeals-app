import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {ResturantInfo} from "../components/resturant-info";
import RESTURANT_DATA from "../../../resturant.data";


export  const ResturantsScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar  />
        </View>
        <View style={styles.list}>
         <ResturantInfo resturant={RESTURANT_DATA} />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    search: {
        padding: 16,
        // backgroundColor: 'transparent'
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: 'purple'
    }
});
