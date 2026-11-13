---
uid: api.1c8d08eaa35fe1955e076d97de9b47035886a3e3b1cb34b634d418efc8ee2259
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceType.Structure(System.String,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceField})"
source: xml
reviewed: 483d98f13200de4e07d6c58a52dda31161e33e0ac6ecec439033e3acf4c50779
title: "Structure"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a nominal structure with a validated immutable field layout.

**Parameter `id`:** Public structure identity shared by alternative implementations.

**Parameter `fields`:** Unique named fields in declaration order.

**Returns:** An immutable structure type.

**Exception `T:System.ArgumentException`:** The identity is reserved, or fields are empty, null, or duplicated.
