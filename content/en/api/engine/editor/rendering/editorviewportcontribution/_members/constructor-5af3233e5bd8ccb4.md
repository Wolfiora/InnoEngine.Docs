---
uid: api.5af3233e5bd8ccb48239bc136de2961c85258c23923813cf7211d921fd7ccda0
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportContribution.#ctor(Inno.Rendering.Runtime.RenderFrameData,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.RenderTextureFormat,System.Nullable{Inno.Editor.Rendering.EditorViewportManipulationSpace})"
source: xml
reviewed: 9f50bb9fd20aad4ddfd721372d01c1a65ec4a81953f4d53b406c10f391e676df
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Creates a viewport model contribution.

**Parameter `data`:** Pipeline-defined frame-only data.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `targetFormat`:** Presentation target format expected by the pipeline.

**Parameter `manipulationSpace`:** Optional exact view/projection contract for host-owned transform manipulation tools.
