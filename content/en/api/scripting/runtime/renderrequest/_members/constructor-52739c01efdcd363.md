---
uid: api.52739c01efdcd363ed41900b4211220c8b20d63eac4e1abe8237f9f805022d9e
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequest.#ctor(System.String,InnoEngine.Rendering.RenderTarget,InnoEngine.Rendering.RenderViewport,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32)"
source: xml
reviewed: b49dadb007d08bcc3b1a33f2085d03b7483f1a4d616db44ab4eae4588c085958
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable render request.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `target`:** Render destination.

**Parameter `viewport`:** Destination pixel viewport.

**Parameter `pipeline`:** Optional per-request pipeline asset; the project default is used when null.

**Parameter `data`:** Optional pipeline-defined frame data copied into an immutable snapshot.

**Parameter `priority`:** Ascending frame scheduling priority.
