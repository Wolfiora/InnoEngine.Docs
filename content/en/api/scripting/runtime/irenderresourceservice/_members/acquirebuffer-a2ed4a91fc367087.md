---
uid: api.a2ed4a91fc3670876664c5a0796fca293905073fa857c0269377382ec17e0360
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireBuffer(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)"
source: xml
reviewed: 8c42b14c2d81b20a860d49dca51b3d51dc103bd06161069370f7e3e4d55e44ab
title: "AcquireBuffer"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Acquires or atomically replaces a provider-owned persistent buffer.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete buffer descriptor.

**Parameter `initialData`:** Complete initial bytes.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.
