---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.649d4176cba3f2667877a6ab6ca4c8902fae530ebe4c095d5752e3fe86f88281
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireTexture(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderTextureSubresourceData},System.String)
title: IRenderResourceService.AcquireTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: ba723b8f16568350c32e60a6babf83a78b5b7adb8829d62ec59d4ffe4e7a4208
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
