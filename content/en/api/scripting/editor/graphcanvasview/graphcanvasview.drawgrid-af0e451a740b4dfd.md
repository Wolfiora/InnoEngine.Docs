---
uid: api.af0e451a740b4dfd2eb9f512b78e15d517c06a4acb29142301e96590cdbe424a
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.DrawGrid(System.UInt32,System.Single)"
source: xml
reviewed: c95430b4bc5925f3452469509c09f2f53e3e529c2f0bd03b18304ee22b903491
title: "GraphCanvasView.DrawGrid"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a bounded graph-space grid through the current UI drawing context.

**Parameter `color`:** The packed presentation color.

**Parameter `spacing`:** Positive graph-space grid spacing.

**Exception `T:System.ArgumentOutOfRangeException`:** Spacing is nonpositive or nonfinite.
