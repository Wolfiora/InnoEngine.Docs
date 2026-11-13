---
uid: api.1fcfa13933ba43f83204d1c94cccd9349c65020af53657ea3b8c1207e4aa2341
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String)"
source: xml
reviewed: 026db44abfc9a1aa6e195638bb57dcd8260cd6b27b2cb607b74dc96882fbd612
title: "GetGlyphVisualBounds"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Measures a glyph using the current font without exposing its native font handle.

**Parameter `fontSize`:** The positive baked font size.

**Parameter `text`:** A nonempty string whose first Unicode scalar identifies the glyph.

**Returns:** The glyph's visible left, top, right and bottom offsets.

**Exception `T:System.ArgumentException`:** The glyph text is empty.
