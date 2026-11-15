---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.171e2487a1ec36cd4e08b7b53b9ef9f43243ebac337e37b24740bb4733ce4822
symbol: scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetIconAttribute.#ctor(System.String,System.String,System.Int32)
title: AssetIconAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: editor-script
reviewed: d89af5925a7201ccf6be5c32b2cf725d9a82dfc5842fc7ab4b96b50fa8ca5655
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when `icon` is empty.
