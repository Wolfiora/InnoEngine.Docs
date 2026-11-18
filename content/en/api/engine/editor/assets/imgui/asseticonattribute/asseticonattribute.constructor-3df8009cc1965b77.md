---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3df8009cc1965b776f2ac7ae4bbb98d0236b937f10d072db63565e1243dc3458
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.String,System.String,System.Int32)
title: AssetIconAttribute.Constructor
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
sourceFingerprint: cc0f470f7c70599f081e198a52ac282a8474a5402d10008afbee3aa0374dc57d
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
