---
uid: api.20c76c77168767698b34407ca373cab3ea09c4657b3e7bb3e1263057f469bb71
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ValidateShaderArtifact(Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: 4275f6e6e3bf7df523c2ba7ab4bc2a2ed9ff3edd59fc880aff1f5b7389beb055
title: "IRenderResourceService.ValidateShaderArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates and retires every program in one compiled artifact through the active device without publishing it.

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

**Exception `T:System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.
