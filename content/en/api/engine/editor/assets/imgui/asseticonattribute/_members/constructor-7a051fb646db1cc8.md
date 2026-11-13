---
uid: api.7a051fb646db1cc8edf539f81f7b8627146d553aee3a6bb1ae042c8c7c7fb88f
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.Type,System.String,System.Boolean,System.Int32)"
source: xml
reviewed: 6309dbd01440a62ca0014e3dc03bddf0e1c2e9fdae2d3b85dbf5710b32f6147d
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Creates an icon declaration using a glyph from the Editor icon catalog.

**Parameter `assetType`:** The imported asset type represented by the icon.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `useForChildren`:** Whether the declaration may also represent derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `icon` is empty.
