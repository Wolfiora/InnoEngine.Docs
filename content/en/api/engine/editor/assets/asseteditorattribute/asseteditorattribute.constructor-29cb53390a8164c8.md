---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.29cb53390a8164c838808ee4019072f0a7e7dbc56e9b679673a4a6f83d469932
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32)
title: AssetEditorAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: ace93f64c4d8ec5f308e849002319b270f8974331ba8d44c757e7f24da6a48de
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
