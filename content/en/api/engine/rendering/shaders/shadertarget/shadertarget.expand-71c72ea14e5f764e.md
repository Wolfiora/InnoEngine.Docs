---
uid: api.71c72ea14e5f764ee8262cb9f525a90fedcf2a9c176505c92fcaf4c044a980bd
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderTarget.Expand(Inno.Rendering.Shaders.ShaderTargetContext,System.Threading.CancellationToken)"
source: xml
reviewed: 24ed90f142ec045fddde18ef9fe7f3c73f87e52bc6a8be662df7579710ca3ccc
title: "ShaderTarget.Expand"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Builds explicit stage interfaces, resource declarations, techniques and pass states.

**Parameter `context`:** Invocation-scoped detached document and complete owner serialization services.

**Parameter `cancellationToken`:** Cancellation between expansion operations.

**Returns:** A detached graph for the common typed compiler; all required capabilities belong in its pass contracts.
