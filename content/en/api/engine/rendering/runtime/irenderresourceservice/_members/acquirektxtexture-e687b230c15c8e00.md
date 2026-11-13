---
uid: api.e687b230c15c8e003d300d90868b0556de5cbf98886fd1ded3ad4a4e25b37911
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireKtxTexture(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String)"
source: xml
reviewed: 2fdc429930bbe06add1cdbd9ec915bbbe67b548fbee0c059a65997b1026462ed
title: "AcquireKtxTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Acquires or atomically replaces a sampled texture from a portable KTX container.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `containerData`:** Complete validated KTX bytes.

**Parameter `sRgb`:** Whether texture sampling performs sRGB decoding.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.
