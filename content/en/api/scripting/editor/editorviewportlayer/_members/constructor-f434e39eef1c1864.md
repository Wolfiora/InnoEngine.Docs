---
uid: api.f434e39eef1c186422b14f40e2b417da2aff4c3009cf334d96bd88990f0bd8e4
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportLayer.#ctor(System.String,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32)"
source: xml
reviewed: 2fb4d8ef97481da44e78d4e9414f2014ba1aa8a9e19861e778ea0c51736eccfe
title: "Constructor"
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
