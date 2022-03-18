import React from "react";
import {Text, Image, View} from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {Spacer} from "../../../components/spacer/spacer.component";


const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;


const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RestaurantCard = styled(Card)`
  backgroundColor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundColor: white;
`;


const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props => props.theme.fontSizes.body)};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props => props.theme.fontSizes.caption)};
`;

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
                <Title>{name} </Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{color: "red"}}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Image style={{width: 15, height: 15}} source={{uri: icon}}/>
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
