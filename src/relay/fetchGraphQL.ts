import type { Variables } from 'relay-runtime';

export const fetchGraphQL = async (text: string, variables: Variables) => {

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      // GitHub's GraphQL API requires a user token
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}
