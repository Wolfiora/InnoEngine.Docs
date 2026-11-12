---
title: "EditorViewportContribution"
description: "Reference for EditorViewportContribution in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.23a12fce2b95e54a
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportContribution`

This reference describes `EditorViewportContribution` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f250467b2079c265) | Method |
| [`data`](#api-984222b223baec28) | Property |
| [`manipulationSpace`](#api-059e18c611978b85) | Property |
| [`pipeline`](#api-80a0859718dfd6bf) | Property |
| [`targetFormat`](#api-6e2e4fdf567d387d) | Property |

## Type declaration

<a id="api-23a12fce2b95e54a"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportContribution 0d74ae9aa1a39c7ac1e560aefd34eb3c1e70424609db91d33575ea7adeeb5d5b -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportContribution
```

Returns one rendering-model contribution without exposing a GPU backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L329).

## `#ctor`

<a id="api-f250467b2079c265"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContribution.#ctor(InnoEngine.Rendering.RenderFrameData,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderTextureFormat,System.Nullable{InnoEditor.Rendering.EditorViewportManipulationSpace}) c92b51c725b0af7e37762c33c5042c4d8aa543c96803b8cb3387ec6a26992dde -->

```csharp
public InnoEditor.Rendering.EditorViewportContribution.EditorViewportContribution(InnoEngine.Rendering.RenderFrameData data, InnoEngine.Rendering.RenderPipelineAsset? pipeline = null, InnoEngine.Rendering.RenderTextureFormat targetFormat = InnoEngine.Rendering.RenderTextureFormat.RGBA8Srgb, InnoEditor.Rendering.EditorViewportManipulationSpace? manipulationSpace = null)
```

Creates a viewport model contribution.

**Parameter `data`:** Pipeline-defined frame-only data.

**Parameter `pipeline`:** Contributor-selected pipeline, or null for the project default.

**Parameter `targetFormat`:** Presentation target format expected by the pipeline.

**Parameter `manipulationSpace`:** Optional exact view/projection contract for host-owned transform manipulation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L346).

## `data`

<a id="api-984222b223baec28"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContribution.data c9c34462850b98335d8700326dd982e7835abce93c0c071b39fdcfa77287bc3a -->

```csharp
public InnoEngine.Rendering.RenderFrameData InnoEditor.Rendering.EditorViewportContribution.data { get; }
```

Gets pipeline-defined frame-only data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L361).

## `manipulationSpace`

<a id="api-059e18c611978b85"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContribution.manipulationSpace e5958524bc986e71a9843973e49deef9d433cc7a92feeb9f2982e82e2642425e -->

```csharp
public InnoEditor.Rendering.EditorViewportManipulationSpace? InnoEditor.Rendering.EditorViewportContribution.manipulationSpace { get; }
```

Gets the optional exact view/projection contract used by host-owned transform manipulation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L376).

## `pipeline`

<a id="api-80a0859718dfd6bf"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContribution.pipeline bd05ddc960ecbd518b34d7a5912c367bdc5d1217fa340aa2b779582083363a10 -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset? InnoEditor.Rendering.EditorViewportContribution.pipeline { get; }
```

Gets the selected pipeline, or null for the project default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L366).

## `targetFormat`

<a id="api-6e2e4fdf567d387d"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContribution.targetFormat 781e23964527f64110b0dce070914eedaa9f745c8abee75ec4970de1ededb12e -->

```csharp
public InnoEngine.Rendering.RenderTextureFormat InnoEditor.Rendering.EditorViewportContribution.targetFormat { get; }
```

Gets the presentation target format expected by the pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L371).
