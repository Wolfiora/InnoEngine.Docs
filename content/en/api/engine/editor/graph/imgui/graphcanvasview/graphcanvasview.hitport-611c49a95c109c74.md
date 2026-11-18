---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.611c49a95c109c74a0e0e3c3a1400ca44cd63cd0c84468899776e5f102aa47d2
symbol: engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.HitPort(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Numerics.Vector2,System.Single)
title: GraphCanvasView.HitPort
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: source-clr
sourceFingerprint: f5b96780b8b24101fd2a71a37dfccc6ce88d26336c7ea8390f74b7fcb495d3cc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Parameter `radius`:** The nonnegative minimum socket hit radius in screen pixels.

## Returns

The hit neutral port, including Missing state, or null over non-port content.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The radius is negative or nonfinite.
