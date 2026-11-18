---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a0225ec4e5b042086712e237e5aa4605398553fece93197bbb4316238e171d49
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasPointerController.Step(InnoEditor.Graph.GraphCanvasView,InnoEditor.Graph.GraphCanvasLayout,InnoEditor.Graph.GraphCanvasPointerInput)
title: GraphCanvasPointerController.Step
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: f98e2c4b523aeca623c2b47eaa4788bbbdab8f5746c264a3a6c7004ae7c39296
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
