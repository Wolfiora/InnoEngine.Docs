---
uid: api.5425afa68a9e419c725ea4f114d3dc5788f6f637c218948df6fdb204bb48d585
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.PrewarmMaterial(Inno.Rendering.Assets.MaterialAsset)"
source: xml
reviewed: 784d5ff8693a8a12ab1ed41d395cf6524b5083e6945d6932ada01aa1456c67bc
title: "PrewarmMaterial"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Queues all target shader work required by a material without blocking the render thread.

**Parameter `material`:** Material whose selected static variant should be prepared.

**Returns:** The exact target artifact state for this material variant: Ready includes a usable last-good artifact, Pending means compilation is ongoing, and Failed or Unavailable means no artifact can currently be used.

**Exception `T:System.ArgumentException`:** The material has no shader or declares an invalid static variant.

**Exception `T:System.InvalidOperationException`:** No target artifact provider is available for this runtime.
