---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1fcfa13933ba43f83204d1c94cccd9349c65020af53657ea3b8c1207e4aa2341
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String)
title: ImGuiWidget.GetGlyphVisualBounds
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 3f799f1ce27a5044698e653fd5d7944df52b23289d09d7b1d4b4dac28e9107de
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
