/**
 * @generated SignedSource<<dc2f25744e554cb9f5c16e3c9102f8f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardFragment$data = {
  readonly description: string | null;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"StarFragment">;
  readonly " $fragmentType": "CardFragment";
};
export type CardFragment$key = {
  readonly " $data"?: CardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StarFragment"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "8647debb70edb0ab4acb8cd3a2d8885e";

export default node;
