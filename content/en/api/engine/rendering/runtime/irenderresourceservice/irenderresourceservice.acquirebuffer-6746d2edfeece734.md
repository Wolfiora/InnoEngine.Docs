---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6746d2edfeece7342761372c2a6f46b42f5644b14f54b1593972c361c6307cc4
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceID,System.Int64,Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderResourceService.AcquireBuffer
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 6ca45595cd106f944332b780da87e805c05a3aabe3f5b1c683de595384c59b52
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
