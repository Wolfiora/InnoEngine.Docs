---
uid: api.87cc42a6212b1a9ef7dd757b56235a62944811f17c5c400c980d8602c9aca4b6
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetIconAttribute.#ctor(System.Type,System.String,System.Boolean,System.Int32)"
source: xml
reviewed: 94de9d30c2cb0ce41d9292cfaedc054090456c21564449b918314b9444948dc4
title: "AssetIconAttribute.Constructor"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Creates an icon declaration using a glyph from the Editor icon catalog.

## Parameters

**Parameter `assetType`:** The imported asset type represented by the icon.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `useForChildren`:** Whether the declaration may also represent derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `icon` is empty.
