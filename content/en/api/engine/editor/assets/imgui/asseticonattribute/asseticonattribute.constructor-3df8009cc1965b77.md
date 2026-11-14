---
uid: api.3df8009cc1965b776f2ac7ae4bbb98d0236b937f10d072db63565e1243dc3458
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: b487fae10a9d0bda6f9ca632fe4380527c44771fc48488c70af77f34e046c34a
title: "AssetIconAttribute.Constructor"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Creates an icon declaration for files ending with a source extension.

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

**Exception `T:System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when `icon` is empty.
