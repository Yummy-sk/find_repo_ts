import { useFragment } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro';
import { CardFragment$key } from "./__generated__/CardFragment.graphql";

interface Props {
	query: CardFragment$key
}

const Fragment = graphql`
	fragment CardFragment on Repository {
		name
		description
	}
`

export function Card({query}: Props) {

	const {name, description} = useFragment<CardFragment$key>(Fragment, query)

	return (
		<div className="block mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
			<h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{ name }</h3>
			<p className="font-normal text-gray-700 dark:text-gray-400">{ description }</p>
		</div>
	)
}
