
import React from "react";
import { Text, TextContainer } from "../../src"; // import from the library

export const App: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        paddingTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <TextContainer
        rowGap={0.5}
        flexDirection="column"
        style={{ maxWidth: "600px" }}
      >
        <Text
          size={2.5}
          weight={700}
          color="#333"
          textAlign="center"
          style={{
            marginBottom: "1rem",
          }}
        >
          Explore the Power of <br />
          <Text textAlign="center" size={2.5} weight={700} color="#4785FA"> @choi138/react-text </Text>
        </Text>

        <TextContainer columnGap={0.6} style={{ marginTop: "1rem" }}>
          <Text weight={500} color="#4785FA">
            Easy Text Styling with React Components
          </Text>

          <Text weight={400} color="#279632" textAlign="right">
            Simple and Flexible Layout with TextContainer
          </Text>
        </TextContainer>

        <Text size={1.2} color="#777" style={{ marginTop: "1.5rem" }}>
          @choi138/react-text provides a set of React components for easy and
          stylish text rendering. With the Text and TextContainer components,
          you can create beautifully styled text and manage layout with ease.
        </Text>

        <Text size={1.2} color="#777" style={{ marginTop: "1rem" }}>
          Check out the documentation for more details on customization and
          usage. Don't forget to give it a try and enhance your React projects
          with @choi138/react-text!
        </Text>
      </TextContainer>
    </div >
  );
};
