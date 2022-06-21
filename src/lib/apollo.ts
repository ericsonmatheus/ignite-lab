import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6f99i0ucs01xm660ke5fn/master',
    cache: new InMemoryCache()
})