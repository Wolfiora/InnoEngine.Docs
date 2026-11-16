---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a0dc747de6416c25675ab0df6fb2e5910715c181237c73e28555e9603956e4d2
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String)
title: ImGuiWidget.GetGlyphVisualBounds
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 966fbaadaeea2d9a34cb32f7f67f99269916d7cff0552f06777e01cbd5e6328f
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
