---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.79721e8649383f222ebdba8f5075f002e3027e57b67b8cf50ac0cc4a7ab3737e
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderResourceService.AcquireBuffer
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 3c1ec22f8fc7011295f26d351374cb861571111ba1a5e0493fc712da81994995
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete buffer descriptor.

**Parameter `initialData`:** Complete initial bytes.

**Parameter `name`:** Diagnostic name.

## Returns

A handle owned by the active device generation.
