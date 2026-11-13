---
uid: api.71c72ea14e5f764ee8262cb9f525a90fedcf2a9c176505c92fcaf4c044a980bd
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderTarget.Expand(Inno.Rendering.Shaders.ShaderTargetContext,System.Threading.CancellationToken)"
source: xml
reviewed: 090c3f21d4ccc53ba3a150c525e812bb09e2748840069bd4abcdaebdc7db0f05
title: "Expand"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Builds explicit stage interfaces, resource declarations, techniques and pass states.

**Parameter `context`:** Invocation-scoped detached document and complete owner serialization services.

**Parameter `cancellationToken`:** Cancellation between expansion operations.

**Returns:** A detached graph for the common typed compiler; all required capabilities belong in its pass contracts.
