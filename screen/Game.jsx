import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Game() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}> Tic Tac Toe</Text>
      <View style={styles.playerbox}>
        <View style={styles.player}>
          <Text>Player 2</Text>
          <View style={styles.playericon}>
            <Text>
              <FontAwesomeIcon icon={faStar} />
            </Text>
          </View>
        </View>
        <View style={styles.player}>
          <Text>Player 2</Text>
          <View style={styles.playericon}>
            <Text>
              <FontAwesomeIcon icon={faCircle} />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.gamebg}>
        <View style={styles.gameBorder}>
          <View style={styles.box1}>
            <Text style={styles.gamerow1}>1</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.gamerow1}>2</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.gamerow1}>3</Text>
          </View>
        </View>
        <View style={styles.gameBorder}>
          <View style={styles.box4}>
            <Text style={styles.gamerow1}>4</Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.gamerow1}>5</Text>
          </View>
          <View style={styles.box6}>
            <Text style={styles.gamerow1}>6</Text>
          </View>
        </View>
        <View style={styles.gameBorder}>
          <View style={styles.box7}>
            <Text style={styles.gamerow1}>7</Text>
          </View>
          <View style={styles.box8}>
            <Text style={styles.gamerow1}>8</Text>
          </View>
          <View style={styles.box9}>
            <Text style={styles.gamerow1}>9</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#158b7f",
    textAlign: "center",
    height: "100vh",
    padding: "20px",
  },
  welcomeText: {
    color: "white",
    fontSize: "22px",
    fontWeight: "700",
  },
  playerbox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: "50px",
  },
  player: {
    color: "red",
    width: "50%",
    flexDirection: "column",
  },
  playericon: {
    backgroundColor: "#e0a56b",
    maxWidth: "fit-content",
    width: "100%",
    padding: "5px",
    margin: "10px auto",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "10px",
    borderRadius: "5px",
  },
  gameSection: {
    flexDirection: "row",
  },
  gamebg: {
    backgroundColor: "#000",
    padding: "30px",
    marginTop: "40px",
    borderRadius: "8px",
    width: "80%",
    margin: "80px auto",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "inset #158b7f 2px 2px 20px 2px;",
    width: "80%",
    height: "268px",
    maxwidth: "400px",
    // transform: "rotate(-15deg)",
    color: "white",
  },
  gamerow1: {
    color: "white",
  },
  gameBorder: {
    display: "flex",
    flexDirection: "row",
    height: "68px",
  },
  box1: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
  },
  box2: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderTopColor: "transparent",
  },
  box3: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
  },
  box4: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderLeftColor: "transparent",
  },
  box5: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
  },
  box6: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderRightColor: "transparent",
  },
  box7: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
  },
  box8: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderBottomColor: "transparent",
  },
  box9: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    border: "2px solid white",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
  },
});
