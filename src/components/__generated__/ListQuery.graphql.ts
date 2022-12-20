/**
 * @generated SignedSource<<f1076586673b5cd03e7953ccb7bcc18b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ListQuery$variables = {
  first: number;
  query: string;
};
export type ListQuery$data = {
  readonly search: {
    readonly repositoryCount: number;
  };
};
export type ListQuery = {
  response: ListQuery$data;
  variables: ListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      },
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query"
      },
      {
        "kind": "Literal",
        "name": "type",
        "value": "REPOSITORY"
      }
    ],
    "concreteType": "SearchResultItemConnection",
    "kind": "LinkedField",
    "name": "search",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "repositoryCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "004377138ebc7c8bacfc8b99f113caca",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery(\n  $query: String!\n  $first: Int!\n) {\n  search(query: $query, first: $first, type: REPOSITORY) {\n    repositoryCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "a4130e39dddc9ab74082d1098a7343ef";

export default node;
