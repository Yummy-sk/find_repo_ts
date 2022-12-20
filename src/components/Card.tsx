import { graphql } from 'babel-plugin-relay/macro';

const Fragment = graphql`
	fragment CardFragment on Repository {
		name
		description
	}
`

export function Card() {
	return <div>good</div>
}
