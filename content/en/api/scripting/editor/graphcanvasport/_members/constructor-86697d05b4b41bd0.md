---
uid: api.86697d05b4b41bd0078774e1381f32cb1bbdca9ad12695313c52a9832701438d
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasPort.#ctor(InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphPortDirection,System.Numerics.Vector2,System.String,System.Boolean,System.Boolean,System.Nullable{System.ValueTuple{System.Numerics.Vector2,System.Numerics.Vector2}})"
source: xml
reviewed: a0b727f7a5d389531510709fd947c2ede596ecf703d447450362d637b2557fee
title: "Constructor"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Creates a port presentation whose position is measured in unscaled node coordinates.

**Parameter `endpoint`:** The existing document endpoint represented by this port.

**Parameter `direction`:** The connection direction, independent of any domain-specific type system.

**Parameter `position`:** Node-relative graph coordinates of the port center.

**Parameter `label`:** The current display label, without domain objects or callbacks.

**Parameter `isOptional`:** Whether to distinguish an optional input visually.

**Parameter `isMissing`:** Whether retained document structure currently lacks its domain implementation.

**Parameter `labelBounds`:** Optional node-relative label bounds used by drawing and row hit testing; null limits hits to the socket.

**Exception `T:System.ArgumentException`:** An endpoint identity is empty.

**Exception `T:System.ArgumentNullException`:** The label is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The position or direction is invalid.
