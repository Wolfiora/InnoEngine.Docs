---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3df8009cc1965b776f2ac7ae4bbb98d0236b937f10d072db63565e1243dc3458
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.String,System.String,System.Int32)
title: AssetIconAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
reviewed: 8f20aaf0db262f6f5b20848bea24be3b67bbe0e059f7f89f3fd245e9c6a15fe9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when `icon` is empty.
