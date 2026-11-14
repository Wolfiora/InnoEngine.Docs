---
uid: api.88d065d06ca49e8785a95a706cb2dd5089d0eda63c66cb4393e23c922092da34
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.ViewContentContext.#ctor(InnoEngine.References.ContentReadScope,System.String,InnoEngine.Rendering.RenderView,System.UInt64,System.Single,InnoEngine.Rendering.RenderOutputInput,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderView},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 26443701de5255a09856e0974bd34f5e2b37f86bf94cb21e0eae8bec6730d6f7
title: "ViewContentContext.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates a frame-scoped content collection context.

## Parameters

**Parameter `content`:** Ordered roots selected by the host.

**Parameter `sessionId`:** Stable identity of the host output session.

**Parameter `view`:** Exact view that will consume the content.

**Parameter `frameIndex`:** Monotonic output frame number.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `input`:** Pointer and keyboard input in output pixel coordinates.

**Parameter `views`:** All views in the same model output, used to choose shared content resolution.

**Parameter `sourceIds`:** Optional explicit source allowlist for a routed model layer.
