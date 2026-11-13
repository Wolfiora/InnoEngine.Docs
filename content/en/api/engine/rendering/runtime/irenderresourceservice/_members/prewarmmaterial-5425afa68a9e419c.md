---
uid: api.5425afa68a9e419c725ea4f114d3dc5788f6f637c218948df6fdb204bb48d585
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.PrewarmMaterial(Inno.Rendering.Assets.MaterialAsset)"
source: xml
reviewed: 63eeb2566f3ad725b194935fc4170be8d17e7ecc51fc855cb14b57fe7292bc03
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
