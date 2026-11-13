---
uid: api.904f3aedfb4cdd284bd357eadc933ea60e5f22b54fc0c67ceedafeb3287a052d
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.ValidateShaderArtifact(InnoEngine.Rendering.RenderShaderArtifact)"
source: xml
reviewed: 4dcdfb175130a57a803a0a6a4b57472535704ebdaef1fbdac65531c81610855c
title: "IRenderResourceService.ValidateShaderArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates and retires every program in one compiled artifact through the active device without publishing it.

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

**Exception `T:System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.
