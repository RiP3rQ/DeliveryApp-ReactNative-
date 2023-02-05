import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://paragominas.stepzen.net/api/unhinged-seahorse/__graphql",
  headers: {
    Authorization:
      "APIKey paragominas::stepzen.net+1000::0d8c7a35a1548cdf8822b89feb271fc10e7fc59541b33b4e2cb07ba9278fda51",
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
