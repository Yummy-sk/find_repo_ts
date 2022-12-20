import { usePaginationFragment } from "react-relay/hooks"
import { graphql } from 'babel-plugin-relay/macro';
import { ListFragment$key } from 'components/__generated__/ListFragment.graphql';
import { CardFragment$key } from "components/__generated__/CardFragment.graphql";
import { OperationType } from "relay-runtime";
import { Card } from "components";

const Fragment = graphql`
  fragment ListFragment on Query 
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 5 }
    cursor: { type: "String" }
    query: { type: "String!" }
  ) 
  @refetchable(queryName: "ListQuery") {
    search(query: $query, first: $count, after: $cursor, type: REPOSITORY)
      @connection(key: "ListFragment_search") {
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

interface Props {
  query: ListFragment$key
}

function Button({ hasNext, onClick }: { hasNext: boolean, onClick: () => void }) {
  if (!hasNext) return null;

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
    더보기
    </button>
  )
}


export function List({ query }: Props) {
  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext
  } = usePaginationFragment<OperationType, ListFragment$key>(Fragment, query);


  const edges = data.search.edges?.filter((item) => {
    return item?.node !== null; 
  }) ?? [];

  const onClick = () => {
    if (hasNext) {
      loadNext(5);
    }
  }

  return (
    <>
      <ul className="w-96 mt-5">
        {
          edges.map((item) => (
            <li key={item?.cursor}>
              <Card query={item?.node as CardFragment$key} />
            </li>
          ))
        }
      </ul>
      {isLoadingNext && <div>Loading...</div>}
      <Button hasNext={hasNext} onClick={onClick} />
    </>
  )
}

