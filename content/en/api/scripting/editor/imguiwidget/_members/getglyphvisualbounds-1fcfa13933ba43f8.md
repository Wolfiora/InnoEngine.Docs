---
uid: api.1fcfa13933ba43f83204d1c94cccd9349c65020af53657ea3b8c1207e4aa2341
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String)"
source: xml
reviewed: aff835f7fa464a77816ee192662c1f7cd2be34e9b73c11c1ff9f52d097fc26e0
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
