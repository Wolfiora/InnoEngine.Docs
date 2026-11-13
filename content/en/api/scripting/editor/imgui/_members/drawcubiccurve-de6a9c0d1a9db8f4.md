---
uid: api.de6a9c0d1a9db8f458cb15e3a4392fa51982569a82e1ff33836523f5416bf9cc
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.DrawCubicCurve(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single)"
source: xml
reviewed: d5d82374b93046cb4d3a7bc787444f4f786367e82e0bf83d04d4676ccbdde01c
title: "DrawCubicCurve"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a cubic curve without exposing a native draw list or borrowed pointer.

**Parameter `start`:** The first screen-space endpoint.

**Parameter `firstControl`:** The control point beside the first endpoint.

**Parameter `secondControl`:** The control point beside the final endpoint.

**Parameter `end`:** The final screen-space endpoint.

**Parameter `color`:** The packed presentation color.

**Parameter `thickness`:** The positive stroke width.
