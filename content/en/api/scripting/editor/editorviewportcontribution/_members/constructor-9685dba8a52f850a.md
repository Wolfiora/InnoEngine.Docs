---
uid: api.9685dba8a52f850a54bbb7b6ea16f0be6703d43b350b54c7453eefd9cb0f7371
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportContribution.#ctor(InnoEngine.Rendering.RenderFrameData,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderTextureFormat,System.Nullable{InnoEditor.Rendering.EditorViewportManipulationSpace})"
source: xml
reviewed: 669d55976e43abcec68b0587d03e083efafc741283c6b5d757bc91de2b62c758
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Creates a viewport model contribution.

**Parameter `data`:** Pipeline-defined frame-only data.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `targetFormat`:** Presentation target format expected by the pipeline.

**Parameter `manipulationSpace`:** Optional exact view/projection contract for host-owned transform manipulation tools.
