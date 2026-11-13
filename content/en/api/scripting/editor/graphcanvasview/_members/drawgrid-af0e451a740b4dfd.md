---
uid: api.af0e451a740b4dfd2eb9f512b78e15d517c06a4acb29142301e96590cdbe424a
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.DrawGrid(System.UInt32,System.Single)"
source: xml
reviewed: 252fbc60d989ad26df824e03a7cc5a57dcd3aeff9ac5df37e1bf480756a9ba3e
title: "DrawGrid"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a bounded graph-space grid through the current UI drawing context.

**Parameter `color`:** The packed presentation color.

**Parameter `spacing`:** Positive graph-space grid spacing.

**Exception `T:System.ArgumentOutOfRangeException`:** Spacing is nonpositive or nonfinite.
