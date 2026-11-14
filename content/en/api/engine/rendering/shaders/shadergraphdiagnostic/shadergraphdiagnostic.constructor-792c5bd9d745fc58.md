---
uid: api.792c5bd9d745fc58ef8adb144da1d31355e986a8f007d2f60f3b66c833800cec
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{Inno.Core.Graphs.GraphNodeId},System.String)"
source: xml
reviewed: bdebbd84ae59de56da15eb31f0fa6ea1e3de7ed4683d730002b7d86798954ec8
title: "ShaderGraphDiagnostic.Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Identifies a graph compilation problem without retaining a node or compiler instance.

## Parameters

**Parameter `code`:** Stable diagnostic identity.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Human-readable explanation.

**Parameter `nodeId`:** Affected node identity when known.

**Parameter `portId`:** Affected semantic port when known.
