import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Input } from "@rneui/themed";
import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  return (
    <ScrollView className="bg-[#59C1CC] ">
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        className="w-full h-64"
        PlaceholderContent={<ActivityIndicator />}
      />
      <View className="pt-5 pb-0 px-10 bg-white">
        <Input
          placeholder="Search by Customers"
          value={input}
          onChangeText={setInput}
        />
      </View>
    </ScrollView>
  );
};

export default CustomersScreen;
