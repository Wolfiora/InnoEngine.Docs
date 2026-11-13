---
uid: api.7f2651a12483af82c2f661ab2ff88bbaa7adc61130fbc06816dd1da628cb5d58
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderOutputSession.#ctor(System.String,InnoEngine.References.ContentReadScope,InnoEngine.Rendering.RenderViewport,System.UInt64,System.Single,InnoEngine.Rendering.IViewContentCollector,InnoEngine.Rendering.RenderOutputInput,InnoEngine.Rendering.RenderOutputRoute)"
source: xml
reviewed: 91728914b783822991ecf952e515eb1da8d604fa1d26caffc2608b55fafbbf83
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates a frame-scoped output session.

**Parameter `id`:** Stable host output identity.

**Parameter `content`:** Host-selected content roots.

**Parameter `viewport`:** Pixel rectangle within the target.

**Parameter `frameIndex`:** Shared output frame index.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `viewContent`:** Model-independent world content collector.

**Parameter `input`:** Viewport-local input.

**Parameter `route`:** Explicit composition route when several models are applicable.
