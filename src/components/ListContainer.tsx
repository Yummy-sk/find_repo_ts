import { useLazyLoadQuery } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro';
import { List } from 'components'; 
import { ListContainerQuery } from "components/__generated__/ListContainerQuery.graphql";

interface Props {
	value: string,
}

const Query = graphql`
	query ListContainerQuery($query: String!, $first: Int!) {
		...ListFragment @arguments(query: $query, count: $first)
	}
`

export function ListContainer({value}: Props) {

	const query = useLazyLoadQuery<ListContainerQuery>(Query, {
		query: value,
		first: 5
	});

	return (
		<List query={query} />
	)
}
