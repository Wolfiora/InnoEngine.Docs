---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2039719957adc46ed20eca2885ef4ba7166e2cc96ca53311d22975fcbfca8148
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireTexture(InnoEngine.Rendering.RenderPersistentResourceID,System.Int64,InnoEngine.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderTextureSubresourceData},System.String)
title: IRenderResourceService.AcquireTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 9a529c4aa00d91ccbce4305c610c70bfdfdf0fb739ffc5f09872cc532ad4e867
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
