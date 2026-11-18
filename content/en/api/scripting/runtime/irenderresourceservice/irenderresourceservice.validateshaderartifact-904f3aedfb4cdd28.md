---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.904f3aedfb4cdd284bd357eadc933ea60e5f22b54fc0c67ceedafeb3287a052d
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.ValidateShaderArtifact(InnoEngine.Rendering.RenderShaderArtifact)
title: IRenderResourceService.ValidateShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 5fd19b81e363fb937c7b9aecd0927ed5f4291d25edbbb41a972f1b8be01e68aa
apiScope: Runtime
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
