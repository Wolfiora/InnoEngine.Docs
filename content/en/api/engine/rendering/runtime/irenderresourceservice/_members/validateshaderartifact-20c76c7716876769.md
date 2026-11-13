---
uid: api.20c76c77168767698b34407ca373cab3ea09c4657b3e7bb3e1263057f469bb71
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.ValidateShaderArtifact(Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: ffa71daf9a854a6f96c8ae837ba9c3464c7ce91984b54fd5da697cd512592ef4
title: "ValidateShaderArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates and retires every program in one compiled artifact through the active device without publishing it.

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

**Exception `T:System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.
