import React from "react";
import {SvgXml} from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {Spacer} from "../../../components/spacer/spacer.component";
import {Text} from '../../../components/typography/text.component';
import {
    Address,
    Icon, Info,
    Rating,
    RestaurantCard,
    RestaurantCardCover,
    Section,
    SectionEnd
} from "./restaurant-info-card.styles";

export const RestaurantInfoCardComponent = ({resturant = {}}) => {
    const {
        name,
        icon,
        photos,
        address,
        openingHours,
        isOpenNow,
        rating,
        isClosedTemporarily
    } = resturant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Text variant="label">{name} </Text>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{uri: icon}}/>
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
