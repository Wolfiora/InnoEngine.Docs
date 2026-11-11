---
title: "EditorViewportContribution"
description: "Reference for EditorViewportContribution in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.ac706567f2b98473
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportContribution`

This reference describes `EditorViewportContribution` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bff447173aa3fde9) | Method |
| [`data`](#api-d72418b40815f843) | Property |
| [`manipulationSpace`](#api-726d390434185ec9) | Property |
| [`pipeline`](#api-d95a3948b47cb055) | Property |
| [`targetFormat`](#api-465be9823b7c1fde) | Property |

## Type declaration

<a id="api-ac706567f2b98473"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportContribution e5b3e344f7cb9ae5071940092a1c77f5e5b4786125983fe9af344dbd912121df -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportContribution
```

Returns one rendering-model contribution without exposing a GPU backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L329).

## `#ctor`

<a id="api-bff447173aa3fde9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContribution.#ctor(Inno.Rendering.Runtime.RenderFrameData,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.RenderTextureFormat,System.Nullable{Inno.Editor.Rendering.EditorViewportManipulationSpace}) a5b80c36ca3dfc91f5f7b0ce053b3152d7a2805ae2135cb0249707dd4dc7ed78 -->

```csharp
public Inno.Editor.Rendering.EditorViewportContribution.EditorViewportContribution(Inno.Rendering.Runtime.RenderFrameData data, Inno.Rendering.Assets.RenderPipelineAsset? pipeline = null, Inno.Rendering.RenderTextureFormat targetFormat = Inno.Rendering.RenderTextureFormat.RGBA8Srgb, Inno.Editor.Rendering.EditorViewportManipulationSpace? manipulationSpace = null)
```

Creates a viewport model contribution.

**Parameter `data`:** Pipeline-defined frame-only data.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `targetFormat`:** Presentation target format expected by the pipeline.

**Parameter `manipulationSpace`:** Optional exact view/projection contract for host-owned transform manipulation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L346).

## `data`

<a id="api-d72418b40815f843"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContribution.data 7fc278fd4a3c06b336772f4d22c0d227e64e53a0baf12c73118cef6ad0645269 -->

```csharp
public Inno.Rendering.Runtime.RenderFrameData Inno.Editor.Rendering.EditorViewportContribution.data { get; }
```

Gets pipeline-defined frame-only data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L361).

## `manipulationSpace`

<a id="api-726d390434185ec9"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContribution.manipulationSpace 7a7a5480c6727687fe39b0970833983ef629826c55086a236130ca93a6242402 -->

```csharp
public Inno.Editor.Rendering.EditorViewportManipulationSpace? Inno.Editor.Rendering.EditorViewportContribution.manipulationSpace { get; }
```

Gets the optional exact view/projection contract used by host-owned transform manipulation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L376).

## `pipeline`

<a id="api-d95a3948b47cb055"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContribution.pipeline c0e2ec78475acdd786745c9d95c59f40e47b93b4c3383a821a9078d6329f2704 -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset? Inno.Editor.Rendering.EditorViewportContribution.pipeline { get; }
```

Gets the selected pipeline, or null for the project default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L366).

## `targetFormat`

<a id="api-465be9823b7c1fde"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContribution.targetFormat d8fd240ad72070fb0776fdb01263fa0e75e6b7626cf56ca825e843cac4816766 -->

```csharp
public Inno.Rendering.RenderTextureFormat Inno.Editor.Rendering.EditorViewportContribution.targetFormat { get; }
```

Gets the presentation target format expected by the pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L371).
