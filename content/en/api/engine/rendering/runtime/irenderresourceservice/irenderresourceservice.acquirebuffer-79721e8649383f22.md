---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.79721e8649383f222ebdba8f5075f002e3027e57b67b8cf50ac0cc4a7ab3737e
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderResourceService.AcquireBuffer
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: de4987c762eb4af17be04d4a80f5a442c1e620c1c99ed5f762a00029c3fe4867
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
