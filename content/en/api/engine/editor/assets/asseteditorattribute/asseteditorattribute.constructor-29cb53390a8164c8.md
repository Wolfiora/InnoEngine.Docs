---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.29cb53390a8164c838808ee4019072f0a7e7dbc56e9b679673a4a6f83d469932
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32)
title: AssetEditorAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
sourceFingerprint: d1bd6e44d740a597ed0d99bcd2772d1fa71b21c10c529eef064fdae85d3ace30
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assetType`:** The imported asset type handled by the editor.

**Parameter `useForChildren`:** Whether the editor may also handle assignable derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.
