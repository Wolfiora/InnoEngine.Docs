---
uid: api.5af3233e5bd8ccb48239bc136de2961c85258c23923813cf7211d921fd7ccda0
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportContribution.#ctor(Inno.Rendering.Runtime.RenderFrameData,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.RenderTextureFormat,System.Nullable{Inno.Editor.Rendering.EditorViewportManipulationSpace})"
source: xml
reviewed: 84b34d9719fa7d982ca5cbf84cddf582d2c05ce09bc7e1cff96f79b967e3d437
title: "EditorViewportContribution.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Creates a viewport model contribution.

## Parameters

**Parameter `data`:** Pipeline-defined frame-only data.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `targetFormat`:** Presentation target format expected by the pipeline.

**Parameter `manipulationSpace`:** Optional exact view/projection contract for host-owned transform manipulation tools.
