import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
        width={50}
        height={50}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
