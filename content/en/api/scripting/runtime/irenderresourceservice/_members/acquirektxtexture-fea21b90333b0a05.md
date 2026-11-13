---
uid: api.fea21b90333b0a0536a4d6bf70082e5d01aa82a372b33b41e1697fec0a17552d
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireKtxTexture(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String)"
source: xml
reviewed: bb0c492562b544fbc165531605f302e14ffb381aed30de4d42a817d2c67419ff
title: "AcquireKtxTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Acquires or atomically replaces a sampled texture from a portable KTX container.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `containerData`:** Complete validated KTX bytes.

**Parameter `sRgb`:** Whether texture sampling performs sRGB decoding.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.
