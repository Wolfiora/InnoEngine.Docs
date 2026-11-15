---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.904f3aedfb4cdd284bd357eadc933ea60e5f22b54fc0c67ceedafeb3287a052d
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.ValidateShaderArtifact(InnoEngine.Rendering.RenderShaderArtifact)
title: IRenderResourceService.ValidateShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 4dcdfb175130a57a803a0a6a4b57472535704ebdaef1fbdac65531c81610855c
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.
