---
uid: api.79721e8649383f222ebdba8f5075f002e3027e57b67b8cf50ac0cc4a7ab3737e
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)"
source: xml
reviewed: 9d24c0144ceec4182dec1ce0324e08aef39f50d2586f93e1558ea9725d731c29
title: "AcquireBuffer"
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
