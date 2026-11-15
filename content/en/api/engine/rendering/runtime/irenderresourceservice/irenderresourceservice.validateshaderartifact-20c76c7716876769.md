---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.20c76c77168767698b34407ca373cab3ea09c4657b3e7bb3e1263057f469bb71
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ValidateShaderArtifact(Inno.Rendering.Assets.RenderShaderArtifact)
title: IRenderResourceService.ValidateShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 4275f6e6e3bf7df523c2ba7ab4bc2a2ed9ff3edd59fc880aff1f5b7389beb055

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.
