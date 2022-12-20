import { useLazyLoadQuery } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro';
import { Card } from 'components'; 
import { validator } from 'util/validator';
import { ListQuery } from "components/__generated__/ListQuery.graphql";
import { CardFragment$key } from "components/__generated__/CardFragment.graphql";

interface Props {
	value: string,
}

const Query = graphql`
	query ListQuery($query: String!, $first: Int!) {
		search(query: $query, first: $first, type: REPOSITORY) {
			repositoryCount
			edges {
				cursor
				node {
					...CardFragment
				}
			}
		}
	}
`

export function List({value}: Props) {

	const { search } = useLazyLoadQuery<ListQuery>(Query, {
		query: value,
		first: 5
	});

	const edges = search.edges?.filter((elem) => {
		return validator(elem) && validator(elem.node)
	}) || [];
	
	return (
		<ul className="w-96 mt-5">
			{
				edges.map((elem) => (<Card key={elem!.cursor} query={elem!.node as CardFragment$key} />))
			}
		</ul>
	)
}
