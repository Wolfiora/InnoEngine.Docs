---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.20c76c77168767698b34407ca373cab3ea09c4657b3e7bb3e1263057f469bb71
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ValidateShaderArtifact(Inno.Rendering.Assets.RenderShaderArtifact)
title: IRenderResourceService.ValidateShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: ded36a9ba61bb8ef3972795fb1f9edb1f04bfdd759be5e5303c8e20108f0ae0a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.
