---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7f2651a12483af82c2f661ab2ff88bbaa7adc61130fbc06816dd1da628cb5d58
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderOutputSession.#ctor(System.String,InnoEngine.References.ContentReadScope,InnoEngine.Rendering.RenderViewport,System.UInt64,System.Single,InnoEngine.Rendering.IViewContentCollector,InnoEngine.Rendering.RenderOutputInput,InnoEngine.Rendering.RenderOutputRoute)
title: RenderOutputSession.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: b9a3a0f62367d9885537afc74f7a0c0d7cf96adccf77dd96aee249bd091546f0
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable host output identity.

**Parameter `content`:** Host-selected content roots.

**Parameter `viewport`:** Pixel rectangle within the target.

**Parameter `frameIndex`:** Shared output frame index.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `viewContent`:** Model-independent world content collector.

**Parameter `input`:** Viewport-local input.

**Parameter `route`:** Explicit composition route when several models are applicable.
