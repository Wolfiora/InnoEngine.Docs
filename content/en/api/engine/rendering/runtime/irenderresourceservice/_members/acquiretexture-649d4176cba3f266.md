---
uid: api.649d4176cba3f2667877a6ab6ca4c8902fae530ebe4c095d5752e3fe86f88281
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireTexture(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderTextureSubresourceData},System.String)"
source: xml
reviewed: 8dcc18aa382c7afc19d6288a40ace2ae6d6254af70c52e00d523db07a41fd9bd
title: "AcquireTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Acquires or atomically replaces a provider-owned persistent texture.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete texture descriptor.

**Parameter `subresources`:** Complete mip and layer uploads.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.
