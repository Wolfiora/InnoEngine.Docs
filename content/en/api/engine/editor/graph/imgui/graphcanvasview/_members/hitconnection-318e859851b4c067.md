---
uid: api.318e859851b4c0676440087ef8e6616963ceeaf8c8a12a034af9a680008f58b8
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.HitConnection(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Single)"
source: xml
reviewed: 904bb259df66007c657d6b8a2b178576b19ec7637141ceaba3a52491fea8ce7b
title: "HitConnection"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Checks pointer distance against the displayed cubic connection without any UI or document access.

**Parameter `point`:** The screen-space pointer location.

**Parameter `output`:** The displayed output endpoint.

**Parameter `input`:** The displayed input endpoint.

**Parameter `radius`:** Nonnegative screen-space acceptance radius.

**Returns:** True when the pointer is within the curve's hit area, including its endpoints.

**Exception `T:System.ArgumentOutOfRangeException`:** Radius is negative or nonfinite.
