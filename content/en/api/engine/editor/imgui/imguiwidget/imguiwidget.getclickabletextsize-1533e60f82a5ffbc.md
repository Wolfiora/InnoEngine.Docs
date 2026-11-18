---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1533e60f82a5ffbc29a43410ca3de865f463ec72f39e439babd84af5d652359f
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2)
title: ImGuiWidget.GetClickableTextSize
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 0faa610954c3628e00f265e9f8e256d11cd299787db1fadd5164138387ed247e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** Visible text whose dimensions determine the content size.

**Parameter `padding`:** Horizontal and vertical padding surrounding the text.

## Returns

The complete transparent interaction area size.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `padding` is negative.
