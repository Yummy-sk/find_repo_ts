import { useLazyLoadQuery } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro';
import { ListQuery } from "./__generated__/ListQuery.graphql";
import { Card } from 'components'; 

interface Props {
	value: string,
}

const Query = graphql`
	query ListQuery($query: String!, $first: Int!) {
		search(query: $query, first: $first, type: REPOSITORY) {
			repositoryCount
		}
	}
`

export function List({value}: Props) {

	const data = useLazyLoadQuery<ListQuery>(Query, {
		query: value,
		first: 10
	})

	console.log(data);
	
	return (
		<ul className="w-96 mt-5">
			<li><Card/></li>
			<li><Card/></li>
			<li><Card/></li>
		</ul>
	)
}
