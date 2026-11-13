---
uid: api.f434e39eef1c186422b14f40e2b417da2aff4c3009cf334d96bd88990f0bd8e4
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportLayer.#ctor(System.String,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32)"
source: xml
reviewed: 8c87ef6cd47885eb37516295b765b9dd77aa34b55a8eb7a373f5a68848b057ce
title: "EditorViewportLayer.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Creates one immutable model-neutral viewport layer.

**Parameter `contributorId`:** Stable identity of the rendering-model contributor that produced the layer.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `data`:** Contributor-defined frame-only data.

**Parameter `order`:** Ascending model-composition order.
