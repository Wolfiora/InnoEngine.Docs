---
uid: api.inno.rendering.shaders.645b08a55926df12
symbol: "engine:Inno.Rendering.Shaders:T:Inno.Rendering.Shaders.ShaderSourceInclude"
source: xml
reviewed: 1488566b62e7ef4635152261cee4a5b33c06fd28d12a16ed6188f9fc12ac145b
title: "ShaderSourceInclude"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
contracts:
- project.inno-rendering-shaders
aliases: []
---

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
