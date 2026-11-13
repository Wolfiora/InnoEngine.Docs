---
uid: api.3ea4d2e80ded6f23218c39a1a4d790b08420ee8e0ed6c635485d837ae4823cd6
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireTexture(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderTextureSubresourceData},System.String)"
source: xml
reviewed: a6c3bff3acb7d3f3e88941bd9839181cea8348631d8bcd5ec2e84e61fad07816
title: "AcquireTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Acquires or atomically replaces a provider-owned persistent texture.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete texture descriptor.

**Parameter `subresources`:** Complete mip and layer uploads.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.
