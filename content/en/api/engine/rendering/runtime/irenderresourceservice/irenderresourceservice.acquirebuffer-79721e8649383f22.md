---
uid: api.79721e8649383f222ebdba8f5075f002e3027e57b67b8cf50ac0cc4a7ab3737e
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)"
source: xml
reviewed: 88ed5fc30cb158909ff4aa5ebbaccad552a4b3e10e1df3d31756d651b12bc2a6
title: "IRenderResourceService.AcquireBuffer"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Acquires or atomically replaces a provider-owned persistent buffer.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete buffer descriptor.

**Parameter `initialData`:** Complete initial bytes.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.
