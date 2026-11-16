---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1fcfa13933ba43f83204d1c94cccd9349c65020af53657ea3b8c1207e4aa2341
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String)
title: ImGuiWidget.GetGlyphVisualBounds
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 24a5d81e9182d8d7bcf0fec9492188cdba67fb356d92f4338e953491792e3320
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `fontSize`:** The positive baked font size.

**Parameter `text`:** A nonempty string whose first Unicode scalar identifies the glyph.

## Returns

The glyph's visible left, top, right and bottom offsets.

## Exceptions

**Exception `T:System.ArgumentException`:** The glyph text is empty.
