---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6986bae82db65ce61308002c55a94a179a209fc0962ff8793626e330d0559a72
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequestProviderContext.#ctor(InnoEngine.Rendering.IRenderRequestSink,InnoEngine.References.ContentReadScope,InnoEngine.Rendering.GraphicsCapabilities,System.Nullable{InnoEngine.Rendering.RenderPresentationSize},System.Nullable{InnoEngine.Rendering.RenderViewport},System.UInt64,System.Single,InnoEngine.Rendering.IViewContentCollector,InnoEngine.Rendering.RenderOutputInput)
title: RenderRequestProviderContext.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 899e34de1319dbef0be21e69f633483fbd174666ad2d02e9a5a822f05e5dcb6e
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `requests`:** Sink accepting requests for the current frame.

**Parameter `content`:** Host-selected content roots visible to request providers this frame.

**Parameter `capabilities`:** Active backend-neutral capability snapshot.

**Parameter `primaryPresentationSize`:** Current primary pixel extent, or null while no primary output is available.

**Parameter `primaryPresentationViewport`:** Host-selected content region, or null when the primary extent is unavailable.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `viewContent`:** Collector for model-independent world items.

**Parameter `input`:** Viewport-local input for the primary output.
