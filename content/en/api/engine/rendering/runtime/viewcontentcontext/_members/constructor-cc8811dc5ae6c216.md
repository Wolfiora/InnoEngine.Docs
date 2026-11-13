---
uid: api.cc8811dc5ae6c21640aebb8de8e7004863442d2e335b9d9810ecbe19751edb4b
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ViewContentContext.#ctor(Inno.References.ContentReadScope,System.String,Inno.Rendering.Runtime.RenderView,System.UInt64,System.Single,Inno.Rendering.Runtime.RenderOutputInput,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderView},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: be26f698172bfc29b91232c8414347d2739730c77d55c1fdb4ad8f78058549fb
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a frame-scoped content collection context.

**Parameter `content`:** Ordered roots selected by the host.

**Parameter `sessionId`:** Stable identity of the host output session.

**Parameter `view`:** Exact view that will consume the content.

**Parameter `frameIndex`:** Monotonic output frame number.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `input`:** Pointer and keyboard input in output pixel coordinates.

**Parameter `views`:** All views in the same model output, used to choose shared content resolution.

**Parameter `sourceIds`:** Optional explicit source allowlist for a routed model layer.
