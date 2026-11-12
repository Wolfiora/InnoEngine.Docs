---
title: "EditorViewportContext"
description: "Reference for EditorViewportContext in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.21483d8f1f900fe8
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportContext`

This reference describes `EditorViewportContext` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2f24d3defda0c7e3) | Method |
| [`content`](#api-1b6428e57158780d) | Property |
| [`editor`](#api-a9dcd3d40677683d) | Property |
| [`frameIndex`](#api-954cf6c6e6119bb0) | Property |
| [`input`](#api-958b702b808f75fc) | Property |
| [`interactions`](#api-28b51df89e2dfea6) | Property |
| [`kind`](#api-20ddd513351ada78) | Property |
| [`navigation`](#api-e436ebd7ba28acf8) | Property |
| [`pixelHeight`](#api-497686332ca90ae6) | Property |
| [`pixelWidth`](#api-ddd1578ad9f62b12) | Property |
| [`presentation`](#api-51b5026aa318e203) | Property |
| [`viewContent`](#api-132cd5a04883019e) | Property |
| [`viewportId`](#api-ae75b0be5f928fb7) | Property |

## Type declaration

<a id="api-21483d8f1f900fe8"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportContext 79b91e8b7a977cefc367be5898c25630d32b4f26b07997706e10ec0b4d2e4c21 -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportContext
```

Supplies frame-only Editor interaction and output dimensions to a contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L108).

## `#ctor`

<a id="api-2f24d3defda0c7e3"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContext.#ctor 81215c2eccf55d11ed884d34de8613beb30f358e2dd42bc8e306d4ce6b873379 -->

```csharp
public InnoEditor.Rendering.EditorViewportContext.EditorViewportContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L108).

## `content`

<a id="api-1b6428e57158780d"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.content 57052126c3e64b739c85fefa67111a4a8e0220079463baded0dca8e2c12d5641 -->

```csharp
public InnoEngine.References.ContentReadScope InnoEditor.Rendering.EditorViewportContext.content { get; }
```

Gets the explicit ordered host content visible to this viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L184).

## `editor`

<a id="api-a9dcd3d40677683d"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.editor f0749aa9a5433998e3bf147c5db8f4fbdfb2345d92e5883f4a504d7ca40ccb99 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Rendering.EditorViewportContext.editor { get; }
```

Gets the current Editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L149).

## `frameIndex`

<a id="api-954cf6c6e6119bb0"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.frameIndex a6bf20137872376f8fcb712b4d3c4d5d43f1e6c2a9bdc6f24a025d761a72f852 -->

```csharp
public ulong InnoEditor.Rendering.EditorViewportContext.frameIndex { get; }
```

Gets the frame index shared by all Editor views in this output frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L199).

## `input`

<a id="api-958b702b808f75fc"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.input ce37dd7278e2dc66ae84547f981ccb4a2a27257955f309caeee67ba474e61500 -->

```csharp
public InnoEngine.Rendering.RenderOutputInput InnoEditor.Rendering.EditorViewportContext.input { get; }
```

Gets input located in this viewport's physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L203).

## `interactions`

<a id="api-28b51df89e2dfea6"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.interactions f8175a5b35d0c5b53030771616816543d1c8604913da1867ba2b2786963afa07 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Rendering.EditorViewportContext.interactions { get; }
```

Gets the shared Editor interaction and selection service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L154).

## `kind`

<a id="api-20ddd513351ada78"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.kind 996c500e93ec9f68cfeeabeed0696555f28acd155f3d7f5cd4cec9ce120389ee -->

```csharp
public InnoEditor.Rendering.EditorViewportKindId InnoEditor.Rendering.EditorViewportContext.kind { get; }
```

Gets the open viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L159).

## `navigation`

<a id="api-e436ebd7ba28acf8"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.navigation bd7336f46650bb25ea5bc4415d4bab2516fcfe4106438f5c2f51bc6382072bbc -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationState InnoEditor.Rendering.EditorViewportContext.navigation { get; }
```

Gets host-owned neutral navigation state that the selected controller can map to its camera model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L179).

## `pixelHeight`

<a id="api-497686332ca90ae6"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.pixelHeight 69cfb9ccdd6bdadf93b4b8bdc7804b424e675e6eb4a598b65fc03eead0205351 -->

```csharp
public int InnoEditor.Rendering.EditorViewportContext.pixelHeight { get; }
```

Gets target height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L174).

## `pixelWidth`

<a id="api-ddd1578ad9f62b12"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.pixelWidth 5f7ac9ba263549700d61e7f0a6ed64a51a88ff050bdadbfba20e372a612ae458 -->

```csharp
public int InnoEditor.Rendering.EditorViewportContext.pixelWidth { get; }
```

Gets target width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L169).

## `presentation`

<a id="api-51b5026aa318e203"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.presentation 7417aa9d82da34128002c9f687a59956ea0c1ec47b9df13c358e7a92168a32f0 -->

```csharp
public InnoEditor.Rendering.EditorViewportPresentation InnoEditor.Rendering.EditorViewportContext.presentation { get; }
```

Gets host-selected presentation preferences for this viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L189).

## `viewContent`

<a id="api-132cd5a04883019e"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.viewContent 17442ef2d0cffe98d1aac95d577113bd21b6f0171ee8ecb47554763da775a5b2 -->

```csharp
public InnoEngine.Rendering.IViewContentCollector InnoEditor.Rendering.EditorViewportContext.viewContent { get; }
```

Gets the active generation's model-independent world-content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L194).

## `viewportId`

<a id="api-ae75b0be5f928fb7"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContext.viewportId a1a7c225805de6aa2b78e0fb3fd3931db668827d0b3ea0a69dba52d260211a88 -->

```csharp
public string InnoEditor.Rendering.EditorViewportContext.viewportId { get; }
```

Gets the stable panel viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L164).
