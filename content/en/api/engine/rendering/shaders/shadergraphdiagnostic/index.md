---
uid: api.inno.rendering.shaders.8ab368e5851ba32f
symbol: "engine:Inno.Rendering.Shaders:T:Inno.Rendering.Shaders.ShaderGraphDiagnostic"
source: xml
reviewed: 6dbc7d3176c7cff7d863cfaf0e5ac798268a6bc1122fb125ec7f31a6b871fb7f
title: "ShaderGraphDiagnostic"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
contracts:
- project.inno-rendering-shaders
aliases: []
---

Identifies a graph compilation problem without retaining a node or compiler instance.

**Parameter `code`:** Stable diagnostic identity.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Human-readable explanation.

**Parameter `nodeId`:** Affected node identity when known.

**Parameter `portId`:** Affected semantic port when known.
