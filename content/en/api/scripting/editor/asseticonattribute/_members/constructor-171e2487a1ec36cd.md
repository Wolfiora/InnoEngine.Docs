---
uid: api.171e2487a1ec36cd4e08b7b53b9ef9f43243ebac337e37b24740bb4733ce4822
symbol: "scripting:Inno.Editor.Assets.ImGui:M:InnoEditor.Assets.AssetIconAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: b32df278158a2c0eafb23f81b9cf7c1018097743fd6b91144efe20cd12c6b04b
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Creates an icon declaration for files ending with a source extension.

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

**Exception `T:System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when `icon` is empty.
