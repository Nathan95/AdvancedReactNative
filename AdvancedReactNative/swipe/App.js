import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./src/Deck";

const DATA = [
  {
    id: 1,
    text: "Darrel",
    uri: "https://i.imgur.com/acTxQaT.jpg",
    desc: "Doesn't care about what you think but will take great photos of himself. I mean you, sorry."
  },
  {
    id: 2,
    text: "Biff",
    uri: "https://i.imgur.com/AW9igHY.jpg",
    desc: "A bit edgy but will sweep you off your feet, maybe even literally because sometimes he doesn't know his own strength."
  },
  {
    id: 3,
    text: "Slick James",
    uri: "https://i.imgur.com/2Sf61Zq.jpg",
    desc: "Smile like dynamite, a hat of seduction, only takes photos in black and white because of his crippling anxiety."
  },
  {
    id: 4,
    text: "Rob",
    uri: "https://i.imgur.com/ECOBEqm.jpg",
    desc: "Resting bitch face, has great sense of humour, vegan, likes gaming, nature blogger. Bit of a conundrum."
  },
  {
    id: 5,
    text: "Johnny Joe",
    uri: "https://i.imgur.com/6JdNRsR.png",
    desc: "Instagram Model, has a dream of having the most instagram followers. He wont sweep you off your feet but he can give you shoutout on insta."
  },
  {
    id: 6,
    text: "Tyson",
    uri: "https://i.imgur.com/TFOb8BA.jpg",
    desc: "Takes himself way too seriously. Way. Too. Seriously. Like honestly its kinda mad, like there was this one time.. oh damn, sorry."
  },
  {
    id: 7,
    text: "Becky",
    uri: "https://i.imgur.com/2Sf61Zq.jpg",
    desc: "A queen in the making, her best friends Tiffany and Britany can vouch for her. Comebacks so slick she can cut your hair."
  },
  {
    id: 8,
    text: "Ronald",
    uri: "https://i.imgur.com/R1Rhpak.jpg",
    desc: "I spent over 20 hours straight trying to make this app and this is how you use it? your 27 personalities? really? We know your basic ass only got 1 personality."
  }
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <View>
      <Text style={{}}>Swipe right to date one my 27 personalities</Text>
      <Card imageStyle={{height:400}} title={item.text} image={{ uri: item.uri }} key={item.id}>
        <Text style={{ marginBottom: 10 }}>
          {item.desc}
        </Text>
      </Card>
      </View>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>There is no more content here!</Text>
        <Button backgroundColor="#03A9FA" title="Get more!" />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCC"
  }
});
