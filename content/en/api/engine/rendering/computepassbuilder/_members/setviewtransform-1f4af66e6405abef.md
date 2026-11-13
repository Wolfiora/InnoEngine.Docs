---
uid: api.1f4af66e6405abef60c1a01eea48d892dc7d216771d2219c83341a5e971a2e72
symbol: "engine:Inno.Rendering:M:Inno.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single})"
source: xml
reviewed: 113c908650921fc94e45b0e91e04a8149291c182a7342a989e4280f9645a2a5b
title: "SetViewTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Sets backend-ready column-major transform matrices exposed to this compute view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.
