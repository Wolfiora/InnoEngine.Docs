---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1533e60f82a5ffbc29a43410ca3de865f463ec72f39e439babd84af5d652359f
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2)
title: ImGuiWidget.GetClickableTextSize
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 59ae2565872fb5b8c9e5763ba675d4e2c005443e26061062c05c73c366c6e166
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
