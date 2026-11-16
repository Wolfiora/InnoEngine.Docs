---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3ea4d2e80ded6f23218c39a1a4d790b08420ee8e0ed6c635485d837ae4823cd6
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireTexture(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderTextureSubresourceData},System.String)
title: IRenderResourceService.AcquireTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: ce12ab5a6c3d74c1f164bd68593f72d4606374b1fde523195214a2767e78f277
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete texture descriptor.

**Parameter `subresources`:** Complete mip and layer uploads.

**Parameter `name`:** Diagnostic name.

## Returns

A handle owned by the active device generation.
