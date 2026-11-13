---
uid: api.a2086a52891996a59edad5104d53bd53a91e732975cf84be55e677f2c1140475
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderOutputSession.#ctor(System.String,Inno.References.ContentReadScope,Inno.Rendering.RenderViewport,System.UInt64,System.Single,Inno.Rendering.Runtime.IViewContentCollector,Inno.Rendering.Runtime.RenderOutputInput,Inno.Rendering.Runtime.RenderOutputRoute)"
source: xml
reviewed: 29dd5638d515f74062eb69cfba952fcb22da7723f3b688a137fc99b89b52a9fb
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
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
