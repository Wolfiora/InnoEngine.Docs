---
uid: api.67862fe5ae01bbc6aa5bf93a463f5d64c4bac65f37736019b5b76d3067315465
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceAnalysis.#ctor(Inno.Rendering.Shaders.ShaderSourceFunction,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceDiagnostic})"
source: xml
reviewed: 863d04456538cf12253086f68f7b869439cf1ef6b1cc64ce61a0c3b749ec5ef1
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Captures a completed analysis without retaining compiler objects.

**Parameter `function`:** Parsed interface, or null when parsing failed.

**Parameter `dependencies`:** Resolved included sources, excluding the root.

**Parameter `diagnostics`:** All problems discovered by the frontend.
