---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fddf239edfe41d162b950e7f8cdbec8c8cd4e086294c7509d92e1146ad19331b
symbol: engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.Step(Inno.Editor.Graph.ImGui.GraphCanvasView,Inno.Editor.Graph.ImGui.GraphCanvasLayout,Inno.Editor.Graph.ImGui.GraphCanvasPointerInput)
title: GraphCanvasPointerController.Step
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: source-clr
sourceFingerprint: 7a0b72784743974c4fa80bb4275a795a0e5a963c8acca34b161d5d3f3a039ca0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `view`:** The current canvas projection.

**Parameter `layout`:** The immutable neutral node snapshot used by drawing and hit testing.

**Parameter `input`:** Current pointer input after the caller's focus, navigation and overlay routing.

## Returns

Completed neutral intents. The feature owns validation, atomic mutation and History recording.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The pointer position is nonfinite.
