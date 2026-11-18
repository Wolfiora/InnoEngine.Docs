---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.87cc42a6212b1a9ef7dd757b56235a62944811f17c5c400c980d8602c9aca4b6
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetIconAttribute.#ctor(System.Type,System.String,System.Boolean,System.Int32)
title: AssetIconAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
sourceFingerprint: 9376c64a3f3b8b545c9af6a28e50abc45738b933a2786ec80de8e1b8fde7c012
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assetType`:** The imported asset type represented by the icon.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `useForChildren`:** Whether the declaration may also represent derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `icon` is empty.
