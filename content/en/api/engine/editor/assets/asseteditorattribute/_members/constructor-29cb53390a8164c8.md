---
uid: api.29cb53390a8164c838808ee4019072f0a7e7dbc56e9b679673a4a6f83d469932
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32)"
source: xml
reviewed: ffefbedddbed1166c99af7cc6688206393df84875580bae46bde3199ac94fffa
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates an asset-editor registration for an imported runtime asset type.

**Parameter `assetType`:** The imported asset type handled by the editor.

**Parameter `useForChildren`:** Whether the editor may also handle assignable derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.
