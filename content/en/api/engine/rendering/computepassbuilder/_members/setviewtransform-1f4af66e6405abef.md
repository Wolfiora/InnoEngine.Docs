---
uid: api.1f4af66e6405abef60c1a01eea48d892dc7d216771d2219c83341a5e971a2e72
symbol: "engine:Inno.Rendering:M:Inno.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single})"
source: xml
reviewed: 70a2fd585bd6e7168060d3fe44b984947feb2f28d4b27d76c5707b5a306e77b4
title: "SetViewTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Sets backend-ready column-major transform matrices exposed to this compute view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.
