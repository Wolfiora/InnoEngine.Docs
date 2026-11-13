---
uid: api.3df8009cc1965b776f2ac7ae4bbb98d0236b937f10d072db63565e1243dc3458
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: afd0f227640fd72eba317a69056bd51f52cf71b1e48a6541cf65db87a18b4ee3
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Creates an icon declaration for files ending with a source extension.

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

**Exception `T:System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when `icon` is empty.
