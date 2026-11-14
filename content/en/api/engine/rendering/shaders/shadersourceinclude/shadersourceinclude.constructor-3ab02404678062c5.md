---
uid: api.3ab02404678062c543fcdcfe48003b8e9577f2894526c03103c47af5ae3702b3
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceInclude.#ctor(System.String,System.String,System.String)"
source: xml
reviewed: c2fe4a24999cf54007e94c378b0f998ad60f0d10c0bab6b76f28d66483bddcf6
title: "ShaderSourceInclude.Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.
