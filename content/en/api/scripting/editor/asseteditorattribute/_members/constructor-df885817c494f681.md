---
uid: api.df885817c494f681a3225995d1ec9bfd4c2404b44e8d970cead825bacaf88794
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32)"
source: xml
reviewed: b73b3ae2e2f70ad687c1ad5749d29459fcf9c9fa116376c6bed192acc3fed707
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Creates an asset-editor registration for an imported runtime asset type.

**Parameter `assetType`:** The imported asset type handled by the editor.

**Parameter `useForChildren`:** Whether the editor may also handle assignable derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.
