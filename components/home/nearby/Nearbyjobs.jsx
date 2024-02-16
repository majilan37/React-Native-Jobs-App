import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const NearByJobs = () => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState(null);
  const { data, error, isLoading } = useFetch({
    endpoint: "search",
    params: {
      query: "React developer",
      num_pages: "1",
      page: "1",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
              key={job?.job_id}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearByJobs;
