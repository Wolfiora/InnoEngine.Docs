---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a0dc747de6416c25675ab0df6fb2e5910715c181237c73e28555e9603956e4d2
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetGlyphVisualBounds(System.Single,System.String)
title: ImGuiWidget.GetGlyphVisualBounds
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 2339286bf0b5dbdd873a23b8a2ad153a141999f383c44c98420de4a28e9128d6
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
