---
uid: api.3ab02404678062c543fcdcfe48003b8e9577f2894526c03103c47af5ae3702b3
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceInclude.#ctor(System.String,System.String,System.String)"
source: xml
reviewed: 431ce29e892ad621e58e2f4c036b2a8b902ac8e0266e75a1d09310e73d5a0ba6
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
