---
uid: api.ad5468edf4894db7a35115d648c730b740cbb98430e17dbc9bec95793796391b
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.#ctor(Inno.Editor.Graph.GraphCanvasState,System.Numerics.Vector2,System.Numerics.Vector2)"
source: xml
reviewed: c65f8891d976b6c40c9ce901798979d0fd99cbb089e7d985f9b11417c3f3cb6b
title: "Constructor"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Creates a frame-local graph presenter over navigation owned by its document.

**Parameter `state`:** The existing neutral navigation and selection state.

**Parameter `origin`:** The screen-space canvas origin.

**Parameter `size`:** The finite nonnegative canvas extent.

**Exception `T:System.ArgumentNullException`:** The document-owned navigation state is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The canvas geometry is invalid.
