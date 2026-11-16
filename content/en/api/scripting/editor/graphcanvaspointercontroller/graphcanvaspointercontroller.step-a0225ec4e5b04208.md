---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a0225ec4e5b042086712e237e5aa4605398553fece93197bbb4316238e171d49
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasPointerController.Step(InnoEditor.Graph.GraphCanvasView,InnoEditor.Graph.GraphCanvasLayout,InnoEditor.Graph.GraphCanvasPointerInput)
title: GraphCanvasPointerController.Step
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
reviewed: 29b376011047e663c8f9911a262b7f4cf8169ef280a274ad2c109969a7a170d7
apiScope: Editor
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
