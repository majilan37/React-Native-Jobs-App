import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import {
  PopularJobs,
  Welcome,
  NearbyJobs,
  ScreenHeaderBtn,
} from "../components";
import { useState } from "react";

export default function index() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={"100%"} />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
