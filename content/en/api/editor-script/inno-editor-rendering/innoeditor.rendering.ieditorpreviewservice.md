---
title: "IEditorPreviewService"
description: "Reference for IEditorPreviewService in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.8b7a43dc3079a9f3
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `IEditorPreviewService`

This reference describes `IEditorPreviewService` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-c70ac7543341ec0b) | Method |
| [`Release`](#api-1e4d7f2da71671c5) | Method |
| [`ReleaseAll`](#api-b241ba3a1e5b961e) | Method |
| [`ReleaseRendered`](#api-b406c6a03172ac7d) | Method |
| [`TryGetTexture`](#api-f2b70a1a4aec383e) | Method |
| [`TryGetTextureArtifact`](#api-918c8324584802f9) | Method |
| [`TryRender`](#api-b6a4b9487234e0dc) | Method |
| [`deviceGeneration`](#api-d0a9ce14b94c3b4d) | Property |

## Type declaration

<a id="api-8b7a43dc3079a9f3"></a>
<!-- api: T:InnoEditor.Rendering.IEditorPreviewService 97bc8aa27f9420c48d7d19bdb21aa19c96c22de822608df7c1b6b95a41bed1f7 -->

```csharp
public interface InnoEditor.Rendering.IEditorPreviewService
```

Provides one shared preview texture bridge for browsers, inspectors, and document canvases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L73).

## `Draw`

<a id="api-c70ac7543341ec0b"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.Draw(InnoEditor.Rendering.EditorPreviewHandle,System.Numerics.Vector2) be5d80473df584ff1b712cfcb8870a25339e190512640c103bcdcb3a09b9c8c1 -->

```csharp
void InnoEditor.Rendering.IEditorPreviewService.Draw(InnoEditor.Rendering.EditorPreviewHandle handle, System.Numerics.Vector2 logicalSize)
```

Draws one current-generation preview into the active presentation surface.

**Parameter `handle`:** Preview handle returned by this service.

**Parameter `logicalSize`:** Positive destination size in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L156).

## `Release`

<a id="api-1e4d7f2da71671c5"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.Release(InnoEditor.Rendering.EditorPreviewHandle) 187350f6b3c93fcd2fe605e4f8d62e7475dda990296058d5cea5d443241c7c78 -->

```csharp
bool InnoEditor.Rendering.IEditorPreviewService.Release(InnoEditor.Rendering.EditorPreviewHandle handle)
```

Releases one cached preview registration.

**Parameter `handle`:** Preview handle returned by this service.

**Returns:** `true` when the handle was active and released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L170).

## `ReleaseAll`

<a id="api-b241ba3a1e5b961e"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.ReleaseAll 3d6ad8ba83d0483883ccd170c1b305a3e44bb1ffd3dd70f764d57dd65310b89a -->

```csharp
void InnoEditor.Rendering.IEditorPreviewService.ReleaseAll()
```

Releases every cached preview registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L175).

## `ReleaseRendered`

<a id="api-b406c6a03172ac7d"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.ReleaseRendered(System.String) ad31a8bcefaace317be1216f04afca49880f50a646d7e778f4026f218882d915 -->

```csharp
void InnoEditor.Rendering.IEditorPreviewService.ReleaseRendered(string viewportId)
```

Releases an offscreen preview, including one which has not produced its first handle.

**Parameter `viewportId`:** The same consumer-qualified identity submitted in the composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L103).

## `TryGetTexture`

<a id="api-f2b70a1a4aec383e"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.TryGetTexture(InnoEngine.Rendering.TextureAsset,InnoEditor.Rendering.EditorPreviewHandle@) d02feed0d60e00c9cf07809848264a4d8fca910dfc6b4472abdebb1a5905341d -->

```csharp
bool InnoEditor.Rendering.IEditorPreviewService.TryGetTexture(InnoEngine.Rendering.TextureAsset texture, out InnoEditor.Rendering.EditorPreviewHandle handle)
```

Tries to resolve a standalone texture preview without blocking target compilation.

**Parameter `texture`:** Texture asset to preview.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L117).

## `TryGetTextureArtifact`

<a id="api-918c8324584802f9"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.TryGetTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference,System.Int32,System.Int32,InnoEditor.Rendering.EditorPreviewHandle@) 10537da9303a1b6e6a7787d1ae663b863841e878265d0de6f6ecf19b33f5bad4 -->

```csharp
bool InnoEditor.Rendering.IEditorPreviewService.TryGetTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference texture, int pixelWidth, int pixelHeight, out InnoEditor.Rendering.EditorPreviewHandle handle)
```

Tries to resolve a named texture artifact preview without blocking target compilation.

**Parameter `texture`:** Stable named texture artifact reference.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L140).

## `TryRender`

<a id="api-b6a4b9487234e0dc"></a>
<!-- api: M:InnoEditor.Rendering.IEditorPreviewService.TryRender(InnoEditor.Rendering.EditorViewportComposition,InnoEditor.Rendering.EditorPreviewHandle@) 2649ca71c2aa27aa7e3ba5e37d7e3a61e6ec80967957b49f6e2e96ff0ac939bd -->

```csharp
bool InnoEditor.Rendering.IEditorPreviewService.TryRender(InnoEditor.Rendering.EditorViewportComposition composition, out InnoEditor.Rendering.EditorPreviewHandle handle)
```

Submits an isolated rendering composition through the shared offscreen viewport bridge.

**Parameter `composition`:** Invocation-local layers; the host retains no contributor instances after the frame.

**Parameter `handle`:** Receives a current-generation preview once its target is resident.

**Returns:** True when the completed previous output can be drawn; false during initial allocation or resize.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L92).

## `deviceGeneration`

<a id="api-d0a9ce14b94c3b4d"></a>
<!-- api: P:InnoEditor.Rendering.IEditorPreviewService.deviceGeneration f7d872ce4ee8d1020fb00d711d1649e00309d92fafb8af928472d757c66a069c -->

```csharp
uint InnoEditor.Rendering.IEditorPreviewService.deviceGeneration { get; }
```

Gets the active rendering-device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L78).
