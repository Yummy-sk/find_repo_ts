import { fetchGraphQL } from 'relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import type { FetchFunction } from 'relay-runtime';

const fetchRelay: FetchFunction = async (params, variables) => {
  const query = params.text;

  if (query) {
    return await fetchGraphQL(query, variables);
  }
}

export const enviroment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
