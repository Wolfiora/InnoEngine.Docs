---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ad5468edf4894db7a35115d648c730b740cbb98430e17dbc9bec95793796391b
symbol: engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.#ctor(Inno.Editor.Graph.GraphCanvasState,System.Numerics.Vector2,System.Numerics.Vector2)
title: GraphCanvasView.Constructor
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: source-clr
reviewed: 006f18ab1065eaec2f30b2e2a56194e4fab0fa7e3451756d9e520ada45b9fe05
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** The existing neutral navigation and selection state.

**Parameter `origin`:** The screen-space canvas origin.

**Parameter `size`:** The finite nonnegative canvas extent.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The document-owned navigation state is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The canvas geometry is invalid.
