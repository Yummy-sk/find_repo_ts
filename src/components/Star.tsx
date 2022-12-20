import { useFragment, useMutation } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro';
import { StarFragment$key } from "components/__generated__/StarFragment.graphql";

interface Props {
  query: StarFragment$key
}

const Fragment = graphql`
  fragment StarFragment on Repository {
    id
    viewerHasStarred
    stargazers {
      totalCount
    }
  }
`

const AddStarMutation = graphql`
  mutation StarAddMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        ...StarFragment
      }
    }
  }
`

const RemoveStarMutation = graphql`
  mutation StarRemoveMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        ...StarFragment
      }
    }
  }
`

function Icon({ viewerHasStarred }: { viewerHasStarred: boolean }) {

  const fill = viewerHasStarred ? 'text-yellow-400' : 'text-gray-400';

  return (
    <svg aria-hidden="true" className={`w-5 h-5 ${fill}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Rating star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
      </path>
    </svg>
  )
}

export function Star({ query }: Props) {
  const { id, stargazers, viewerHasStarred } = useFragment<StarFragment$key>(Fragment, query);
  // star가 눌렸다면, removeStarMutation을 실행하고, 아니라면 addStarMutation을 실행한다.
  const [commit, isInFlight] = useMutation(viewerHasStarred ? RemoveStarMutation : AddStarMutation);

  const onClick = () => { 
    commit({
      variables: {
        input: {
          starrableId: id
        }
      }
    })
  }

  return (
    <button
      type="button"
      className="h-fit flex justify-center items-center mt-4"
      disabled={isInFlight}
      onClick={onClick}
    >
      <Icon viewerHasStarred={viewerHasStarred} />
      <p className="ml-2 text-sm font-bold text-gray-900 ">{ stargazers.totalCount }</p>
    </button>
  );
}