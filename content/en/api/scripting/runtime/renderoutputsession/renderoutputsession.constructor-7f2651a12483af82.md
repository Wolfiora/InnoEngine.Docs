---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7f2651a12483af82c2f661ab2ff88bbaa7adc61130fbc06816dd1da628cb5d58
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderOutputSession.#ctor(System.String,InnoEngine.References.ContentReadScope,InnoEngine.Rendering.RenderViewport,System.UInt64,System.Single,InnoEngine.Rendering.IViewContentCollector,InnoEngine.Rendering.RenderOutputInput,InnoEngine.Rendering.RenderOutputRoute)
title: RenderOutputSession.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: c07b7ed02d4fc30f7cff84b301b77891ccbcb00e914bff3e48fc0250f163eb0e
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
