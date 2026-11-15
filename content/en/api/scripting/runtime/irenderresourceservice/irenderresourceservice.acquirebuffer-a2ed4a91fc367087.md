---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a2ed4a91fc3670876664c5a0796fca293905073fa857c0269377382ec17e0360
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireBuffer(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderResourceService.AcquireBuffer
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 75141059ac555dcb13b6713284ae0896e3c1f040884f624c000db94ca1714054
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Acquires or atomically replaces a provider-owned persistent buffer.

## Parameters

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete buffer descriptor.

**Parameter `initialData`:** Complete initial bytes.

**Parameter `name`:** Diagnostic name.

## Returns

A handle owned by the active device generation.
