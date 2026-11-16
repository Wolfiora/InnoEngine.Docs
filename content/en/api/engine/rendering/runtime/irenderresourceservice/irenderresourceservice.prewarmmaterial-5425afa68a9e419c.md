---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5425afa68a9e419c725ea4f114d3dc5788f6f637c218948df6fdb204bb48d585
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.PrewarmMaterial(Inno.Rendering.Assets.MaterialAsset)
title: IRenderResourceService.PrewarmMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 5f9a4694eeee2cd1f41de69f57985ee1641d98e912f07d68eb118fb3dae94425
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material whose selected static variant should be prepared.

## Returns

The exact target artifact state for this material variant: Ready includes a usable last-good artifact, Pending means compilation is ongoing, and Failed or Unavailable means no artifact can currently be used.

## Exceptions

**Exception `T:System.ArgumentException`:** The material has no shader or declares an invalid static variant.

**Exception `T:System.InvalidOperationException`:** No target artifact provider is available for this runtime.
