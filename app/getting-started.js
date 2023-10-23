import React, { Fragment } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Video } from "expo-av";
import { Stack, useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");

const GettingStartedScreen = () => {
  const router = useRouter();

  const goToSignUpScreen = () => {
    console.log("go log in");
    router.replace("sign-up");
  };

  const goToSignInScreen = () => {
    console.log("go log in");
    router.replace("sign-in");
  };

  const video = React.useRef(null);
  return (
    <View>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay
      />

      <Wrapper>
        <Title>The anti-catfishing app</Title>
        <TextDescription>
          Verified, video-only, voice-only, dating
        </TextDescription>
        <ButtonWrapper>
          <Fragment>
            <Button title="Create Account" onPress={goToSignUpScreen} />
            <Button transparent title="Login" onPress={goToSignInScreen} />
          </Fragment>
        </ButtonWrapper>
      </Wrapper>
    </View>
  );
};

export default GettingStartedScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
});

// styled-component

export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  margin-top: 300px;
`;
export const Logo = styled.Image`
  max-width: 100px;
  width: 100px;
  height: 100px;
`;
export const TextDescription = styled.Text`
  letter-spacing: 3px;
  color: #f4f4f4;
  text-align: center;
  text-transform: uppercase;
`;
export const ButtonWrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
export const Title = styled.Text`
  color: #f4f4f4;
  margin: 50% 0px 20px;
  font-size: 30;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const StyledButton = styled.TouchableHighlight`
  width: 250px;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "#f3f8ff"};
  padding: 15px;
  border: ${(props) => (props.transparent ? "1px solid #f3f8ff" : 0)};
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 24px;
`;
const StyledTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  color: ${(props) => (props.transparent ? "#f3f8ff " : "#666")};
`;

export const Button = ({ onPress, color, ...props }) => {
  return (
    <StyledButton onPress={onPress} {...props}>
      <StyledTitle {...props}>{props.title}</StyledTitle>
    </StyledButton>
  );
};
