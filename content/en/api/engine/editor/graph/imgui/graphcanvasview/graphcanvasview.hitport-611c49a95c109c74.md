---
uid: api.611c49a95c109c74a0e0e3c3a1400ca44cd63cd0c84468899776e5f102aa47d2
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.HitPort(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Numerics.Vector2,System.Single)"
source: xml
reviewed: 3fb8bf0bc50099bdc1691bfd57d9c0584ffad272ad3697fa87a4a8d5ea044327
title: "GraphCanvasView.HitPort"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Finds a port by its displayed socket or label row, without interpreting its domain type.

## Parameters

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Parameter `radius`:** The nonnegative minimum socket hit radius in screen pixels.

## Returns

The hit neutral port, including Missing state, or null over non-port content.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The radius is negative or nonfinite.
