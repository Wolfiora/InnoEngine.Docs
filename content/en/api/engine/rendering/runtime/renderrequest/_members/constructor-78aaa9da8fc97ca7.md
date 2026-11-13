---
uid: api.78aaa9da8fc97ca7152581a6c75db094e7d6e59ef61a171d015b3c81fb4c9b36
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRequest.#ctor(System.String,Inno.Rendering.RenderTarget,Inno.Rendering.RenderViewport,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.Runtime.RenderFrameData,System.Int32)"
source: xml
reviewed: f2fe8f10329142ff0eca4cf8b96b8c2c6f8a540e073ad7670294b452e3c269ec
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates an immutable render request.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `target`:** Render destination.

**Parameter `viewport`:** Destination pixel viewport.

**Parameter `pipeline`:** Optional per-request pipeline asset; the project default is used when null.

**Parameter `data`:** Optional pipeline-defined frame data copied into an immutable snapshot.

**Parameter `priority`:** Ascending frame scheduling priority.
