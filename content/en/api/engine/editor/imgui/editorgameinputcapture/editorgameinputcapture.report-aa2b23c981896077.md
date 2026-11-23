---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.aa2b23c981896077094e464f6e19a7ecf050f143fdd530c01748873eb3e8260a
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorGameInputCapture.Report(System.UInt32,System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean,System.Boolean)
title: EditorGameInputCapture.Report
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: bb9259ef8ba0fdae107026df6d2ec406647e312c3d30699e8315b02e327ecc26
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `viewportID`:** The presentation viewport containing the Game View.

**Parameter `origin`:** The image's upper-left corner relative to that window.

**Parameter `size`:** The visible image size in logical pixels.

**Parameter `focused`:** Whether the Game View is selected and its platform window has focus.

**Parameter `hovered`:** Whether the image is inside the frontmost hovered ImGui window.

## Returns

`true` when the Game View and its platform window both own focus.
