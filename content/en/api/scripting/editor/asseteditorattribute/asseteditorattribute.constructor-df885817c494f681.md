---
uid: api.df885817c494f681a3225995d1ec9bfd4c2404b44e8d970cead825bacaf88794
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32)"
source: xml
reviewed: 108d7a54f33d0a607bff3a35a1acb1f4dfa7c4ed64fd0db3c053dea52c89bde3
title: "AssetEditorAttribute.Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Creates an asset-editor registration for an imported runtime asset type.

## Parameters

**Parameter `assetType`:** The imported asset type handled by the editor.

**Parameter `useForChildren`:** Whether the editor may also handle assignable derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.
