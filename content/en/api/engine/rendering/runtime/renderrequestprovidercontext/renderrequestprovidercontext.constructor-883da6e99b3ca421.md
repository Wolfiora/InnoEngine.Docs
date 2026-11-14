---
uid: api.883da6e99b3ca42139fabe77db1ad62c5dfd585f67caaf58ba6b82da7d2a6aef
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRequestProviderContext.#ctor(Inno.Rendering.Runtime.IRenderRequestSink,Inno.References.ContentReadScope,Inno.Rendering.GraphicsCapabilities,System.Nullable{Inno.Rendering.RenderPresentationSize},System.Nullable{Inno.Rendering.RenderViewport},System.UInt64,System.Single,Inno.Rendering.Runtime.IViewContentCollector,Inno.Rendering.Runtime.RenderOutputInput)"
source: xml
reviewed: f9ec6102eaed0a008f28156183778e429b002330a334fca0614dc2114124149c
title: "RenderRequestProviderContext.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a frame-scoped provider context.

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
