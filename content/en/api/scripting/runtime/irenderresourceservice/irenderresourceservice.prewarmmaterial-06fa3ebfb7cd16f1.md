---
uid: api.06fa3ebfb7cd16f171f364faa6da81a54244cf1be694790addd19cc7bfc80509
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.PrewarmMaterial(InnoEngine.Rendering.MaterialAsset)"
source: xml
reviewed: 19756efc57dd33649a148c7e79cae5f72e6677412c6d6e03cdee418b7d859f29
title: "IRenderResourceService.PrewarmMaterial"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Queues all target shader work required by a material without blocking the render thread.

**Parameter `material`:** Material whose selected static variant should be prepared.

**Returns:** The exact target artifact state for this material variant: Ready includes a usable last-good artifact, Pending means compilation is ongoing, and Failed or Unavailable means no artifact can currently be used.

**Exception `T:System.ArgumentException`:** The material has no shader or declares an invalid static variant.

**Exception `T:System.InvalidOperationException`:** No target artifact provider is available for this runtime.
