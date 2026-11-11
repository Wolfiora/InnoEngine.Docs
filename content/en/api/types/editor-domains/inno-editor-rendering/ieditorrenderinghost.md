---
title: "IEditorRenderingHost"
description: "Reference for IEditorRenderingHost in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.110244ea41e2a86f
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `IEditorRenderingHost`

This reference describes `IEditorRenderingHost` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-97e7f729b365ac07) | Method |
| [`Release`](#api-0ad21165a6f64845) | Method |
| [`ReleaseAll`](#api-ddc62e744b867af9) | Method |
| [`Submit`](#api-73339a10450c2cb6) | Method |
| [`currentFrameIndex`](#api-03087949e49c90c1) | Property |
| [`viewContent`](#api-24dfcd1dc254bc0a) | Property |

## Type declaration

<a id="api-110244ea41e2a86f"></a>
<!-- api: T:Inno.Editor.Rendering.IEditorRenderingHost 894352a8c0e637e6fc4f6511a91d8f6b5347ae5a2c0dae914272a8814441f254 -->

```csharp
public interface Inno.Editor.Rendering.IEditorRenderingHost
```

Bridges editor extensions to a host-owned render request sink and opaque texture presenter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L76).

## `Draw`

<a id="api-97e7f729b365ac07"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorRenderingHost.Draw(Inno.Editor.Rendering.EditorViewportOutput,System.Numerics.Vector2) ddb2c86c28606e8b50885df27e7c3e8157fdc337447cfde5ba07f0b41dec98fe -->

```csharp
void Inno.Editor.Rendering.IEditorRenderingHost.Draw(Inno.Editor.Rendering.EditorViewportOutput output, System.Numerics.Vector2 logicalSize)
```

Draws a ready viewport output inside the current ImGui window.

**Parameter `output`:** Output returned by `Inno.Editor.Rendering.IEditorRenderingHost.Submit(Inno.Editor.Rendering.EditorViewportComposition)`.

**Parameter `logicalSize`:** Destination size in logical UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L108).

## `Release`

<a id="api-0ad21165a6f64845"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorRenderingHost.Release(System.String) b5b91d8f25092c726a9a47c88778bdaa1e3729567476cc17adef1a636b6bf620 -->

```csharp
void Inno.Editor.Rendering.IEditorRenderingHost.Release(string viewportId)
```

Releases one viewport and queues its GPU target for frame-safe destruction.

**Parameter `viewportId`:** Stable viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L119).

## `ReleaseAll`

<a id="api-ddc62e744b867af9"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorRenderingHost.ReleaseAll 7ece6991baeca350af5ce173240faff8a81343baa86991ff5fe6bef7bf59d769 -->

```csharp
void Inno.Editor.Rendering.IEditorRenderingHost.ReleaseAll()
```

Releases every viewport owned by this editor host service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L124).

## `Submit`

<a id="api-73339a10450c2cb6"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorRenderingHost.Submit(Inno.Editor.Rendering.EditorViewportComposition) 7be9ae1fe97fcb3fb91727d415db6c049c9d6a09e2315f5a3cff1e7de6868c70 -->

```csharp
Inno.Editor.Rendering.EditorViewportOutput Inno.Editor.Rendering.IEditorRenderingHost.Submit(Inno.Editor.Rendering.EditorViewportComposition composition)
```

Submits or updates one composed offscreen editor viewport.

**Parameter `composition`:** Complete ordered model composition for the current frame.

**Returns:** The current presentation output, which can be warming up for one frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L97).

## `currentFrameIndex`

<a id="api-03087949e49c90c1"></a>
<!-- api: P:Inno.Editor.Rendering.IEditorRenderingHost.currentFrameIndex 14af5fde4fe79e73d8aa7233b17a52037ebbd598e37557cdc4e1ac26d43cfcd0 -->

```csharp
ulong Inno.Editor.Rendering.IEditorRenderingHost.currentFrameIndex { get; }
```

Gets the current output frame index shared by Editor views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L86).

## `viewContent`

<a id="api-24dfcd1dc254bc0a"></a>
<!-- api: P:Inno.Editor.Rendering.IEditorRenderingHost.viewContent 435ebf11f807963f3300267b10cf5e82c1577717aac8bd9b6f4140efc177feef -->

```csharp
Inno.Rendering.Runtime.IViewContentCollector Inno.Editor.Rendering.IEditorRenderingHost.viewContent { get; }
```

Gets the active generation's model-independent world-content collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L81).
