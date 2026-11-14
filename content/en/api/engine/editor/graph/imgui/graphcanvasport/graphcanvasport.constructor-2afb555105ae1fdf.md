---
uid: api.2afb555105ae1fdfd1e28316e3b578fca283b5a183b182d8f34d1f30490ef219
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasPort.#ctor(Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphPortDirection,System.Numerics.Vector2,System.String,System.Boolean,System.Boolean,System.Nullable{System.ValueTuple{System.Numerics.Vector2,System.Numerics.Vector2}})"
source: xml
reviewed: 5126c7f8cecd2d6410bff4dde616173a03abd1377e5ee44318d85e36787dbc24
title: "GraphCanvasPort.Constructor"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
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
