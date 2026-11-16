---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7a051fb646db1cc8edf539f81f7b8627146d553aee3a6bb1ae042c8c7c7fb88f
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.Type,System.String,System.Boolean,System.Int32)
title: AssetIconAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
reviewed: 9fcfd7b0d26c7107773288d90aecbee9289265f61bc106dead71cc3459f5ea76
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
