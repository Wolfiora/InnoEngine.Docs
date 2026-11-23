---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b5f8599e1ed87853a08580a34b640b805caf85270b37e6908e6ce57b62259d4a
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireTexture(Inno.Rendering.Runtime.RenderPersistentResourceID,System.Int64,Inno.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderTextureSubresourceData},System.String)
title: IRenderResourceService.AcquireTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 566572a07843f9c4bca97fde166ced8c2d3d026b760b092bcaad07cbd8eb45a6
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
