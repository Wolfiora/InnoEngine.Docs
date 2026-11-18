---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.df885817c494f681a3225995d1ec9bfd4c2404b44e8d970cead825bacaf88794
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32)
title: AssetEditorAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
sourceFingerprint: 4874301085b328ecab5e1b74dbaf8cd9a2fc7c5117ff145048431883ef023be4
apiScope: Editor
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
