---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2d6bf082d87a79e3bcecbaebb0ad60ded759a7fdd84fa4d5867904cd563283ae
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.#ctor(InnoEditor.Graph.GraphCanvasState,System.Numerics.Vector2,System.Numerics.Vector2)
title: GraphCanvasView.Constructor
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: 2fba8081c496d84709cfc8da7b05e03282f86f4903b3713b59c800fc4902d89f
apiScope: Editor
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
