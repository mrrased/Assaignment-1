import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import img from "./assets/favicon.png";
import location from "./assets/location.jpg";
import github from "./assets/github.png";
import link from "./assets/link.jpg";
import tweeter from "./assets/tweeter.png";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <View>
              <Image
                source={img}
                alt="image"
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </View>
            <View>
              <Text>The Octocat</Text>
              <Text>@octocat</Text>
              <Text>Joined 25 Jan 2011</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e5e5e5",
            paddingVertical: 15,
            paddingHorizontal: 15,
            marginHorizontal: 10,
            borderRadius: 10,
            marginTop: 25,
          }}
        >
          <View style={{ paddingRight: 8, alignItems: "center" }}>
            <Text>Repos</Text>
            <Text style={{ marginTop: 6 }}>8</Text>
          </View>
          <View style={{ paddingHorizontal: 8, alignItems: "center" }}>
            <Text>Followers</Text>
            <Text style={{ marginTop: 6 }}>3938</Text>
          </View>
          <View style={{ paddingRight: 8, alignItems: "center" }}>
            <Text>Following</Text>
            <Text style={{ marginTop: 6 }}>9</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View>
              <Image
                source={location}
                alt="image"
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text>San Francisco</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View>
              <Image
                source={link}
                alt="image"
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text>https://github.mrrased</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View>
              <Image
                source={tweeter}
                alt="image"
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text>Not Available</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View>
              <Image
                source={github}
                alt="image"
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text>@github</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
