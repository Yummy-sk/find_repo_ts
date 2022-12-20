/**
 * @generated SignedSource<<7027ca982a2149a3ddc1b4b1661aa201>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StarFragment$data = {
  readonly id: string;
  readonly stargazers: {
    readonly totalCount: number;
  };
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "StarFragment";
};
export type StarFragment$key = {
  readonly " $data"?: StarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StarFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "StargazerConnection",
      "kind": "LinkedField",
      "name": "stargazers",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "231d45a7b29d628e5ae130cfd3c2f284";

export default node;
