---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.aa2b23c981896077094e464f6e19a7ecf050f143fdd530c01748873eb3e8260a
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorGameInputCapture.Report(System.UInt32,System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean,System.Boolean)
title: EditorGameInputCapture.Report
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 0deeb15d79975ab2d6e2c3d788dd8babbaab9d7c634533d05d85a252c798dcd6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `viewportId`:** The presentation viewport containing the Game View.

**Parameter `origin`:** The image's upper-left corner relative to that window.

**Parameter `size`:** The visible image size in logical pixels.

**Parameter `focused`:** Whether the Game View is selected and its platform window has focus.

**Parameter `hovered`:** Whether the image is inside the frontmost hovered ImGui window.

## Returns

`true` when the Game View and its platform window both own focus.
