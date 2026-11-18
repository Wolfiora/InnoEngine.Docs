---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a2ed4a91fc3670876664c5a0796fca293905073fa857c0269377382ec17e0360
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireBuffer(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderResourceService.AcquireBuffer
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 92ab1b214809142f80e91c943f5c5d4854db9325cfa0113f09445395f027870a
apiScope: Runtime
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
