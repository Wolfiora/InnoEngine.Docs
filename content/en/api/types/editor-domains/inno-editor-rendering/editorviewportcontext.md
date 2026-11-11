---
title: "EditorViewportContext"
description: "Reference for EditorViewportContext in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.807b5f27f0198e84
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportContext`

This reference describes `EditorViewportContext` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`content`](#api-773259b2b45d23d0) | Property |
| [`editor`](#api-12eebec7449fad3c) | Property |
| [`frameIndex`](#api-4afd1dea99b11e80) | Property |
| [`input`](#api-f248161030dd1feb) | Property |
| [`interactions`](#api-f817158068c00a34) | Property |
| [`kind`](#api-066a790b79ba8c59) | Property |
| [`navigation`](#api-5e780c6c7dd20fa3) | Property |
| [`pixelHeight`](#api-3d7f301e3d3fbf8b) | Property |
| [`pixelWidth`](#api-b2291012dacb71f6) | Property |
| [`presentation`](#api-f9e99de39d6a83b4) | Property |
| [`viewContent`](#api-6a67fb84ba0b0be6) | Property |
| [`viewportId`](#api-2d6d495e0b4614c0) | Property |

## Type declaration

<a id="api-807b5f27f0198e84"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportContext 45b769e7fc458aceb2851fdb3d2b72dc969a84de6af3d78a79759a6ada523cf2 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportContext
```

Supplies frame-only Editor interaction and output dimensions to a contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L108).

## `content`

<a id="api-773259b2b45d23d0"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.content eb04b7fe4def2b9d90ae0a367b2ae51c16e78769132826006e07aa151d0278d4 -->

```csharp
public Inno.References.ContentReadScope Inno.Editor.Rendering.EditorViewportContext.content { get; }
```

Gets the explicit ordered host content visible to this viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L184).

## `editor`

<a id="api-12eebec7449fad3c"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.editor d26a2816496c43e5ead9a81991fa26fb294244bb69452b16fd72b69427e7aee5 -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Rendering.EditorViewportContext.editor { get; }
```

Gets the current Editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L149).

## `frameIndex`

<a id="api-4afd1dea99b11e80"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.frameIndex 02ca5cf729bfe54747bbfd1ba9489b0c2cb5b728b983e2a7a2a27f973747c5d8 -->

```csharp
public ulong Inno.Editor.Rendering.EditorViewportContext.frameIndex { get; }
```

Gets the frame index shared by all Editor views in this output frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L199).

## `input`

<a id="api-f248161030dd1feb"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.input 3687e30a30798a05a0302edd8221708201f7cbbdb0d91f83c1ee11e88f843a51 -->

```csharp
public Inno.Rendering.Runtime.RenderOutputInput Inno.Editor.Rendering.EditorViewportContext.input { get; }
```

Gets input located in this viewport's physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L203).

## `interactions`

<a id="api-f817158068c00a34"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.interactions 495bf27c0ae0fe8f3082a5cc532a0eff8e8b1f9100bfb6a18b90fb8c4840b8aa -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Rendering.EditorViewportContext.interactions { get; }
```

Gets the shared Editor interaction and selection service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L154).

## `kind`

<a id="api-066a790b79ba8c59"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.kind 1e0f611f3fada0a1c92b667528cb817f54d9e950c78fadbf8c3c32122a87e849 -->

```csharp
public Inno.Editor.Rendering.EditorViewportKindId Inno.Editor.Rendering.EditorViewportContext.kind { get; }
```

Gets the open viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L159).

## `navigation`

<a id="api-5e780c6c7dd20fa3"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.navigation 6cb1a8b194556a55885b8c5590874f647a6e8146f52a288d391450d68c142bfd -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationState Inno.Editor.Rendering.EditorViewportContext.navigation { get; }
```

Gets host-owned neutral navigation state that the selected controller can map to its camera model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L179).

## `pixelHeight`

<a id="api-3d7f301e3d3fbf8b"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.pixelHeight a8220fe6715a34229fdd08ed8799f5f741631ea746a181282c0d906b285496d6 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportContext.pixelHeight { get; }
```

Gets target height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L174).

## `pixelWidth`

<a id="api-b2291012dacb71f6"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.pixelWidth 655a19e64d4d83bbd8a8467089c6c37ce701b9b7c97b9bd0510db678b9104e9f -->

```csharp
public int Inno.Editor.Rendering.EditorViewportContext.pixelWidth { get; }
```

Gets target width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L169).

## `presentation`

<a id="api-f9e99de39d6a83b4"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.presentation c5f0a11d2bbb5924ee2efcfcdf2346817961654c79505be394c68ce52067afb9 -->

```csharp
public Inno.Editor.Rendering.EditorViewportPresentation Inno.Editor.Rendering.EditorViewportContext.presentation { get; }
```

Gets host-selected presentation preferences for this viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L189).

## `viewContent`

<a id="api-6a67fb84ba0b0be6"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.viewContent a3922cff9c91854b7ec0685610fceb6c8b02786ed4a5e16943cf40991190d586 -->

```csharp
public Inno.Rendering.Runtime.IViewContentCollector Inno.Editor.Rendering.EditorViewportContext.viewContent { get; }
```

Gets the active generation's model-independent world-content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L194).

## `viewportId`

<a id="api-2d6d495e0b4614c0"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContext.viewportId 273aa2cf4108f6539bf00144b92749ec48e2645d8a6226c42422dde6d91821de -->

```csharp
public string Inno.Editor.Rendering.EditorViewportContext.viewportId { get; }
```

Gets the stable panel viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L164).
