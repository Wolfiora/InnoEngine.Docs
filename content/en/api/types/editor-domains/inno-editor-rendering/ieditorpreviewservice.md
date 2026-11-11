---
title: "IEditorPreviewService"
description: "Reference for IEditorPreviewService in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.b224f095409413db
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `IEditorPreviewService`

This reference describes `IEditorPreviewService` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-b96363db1499d1ae) | Method |
| [`Release`](#api-5f67ece97aa917e6) | Method |
| [`ReleaseAll`](#api-472ceb833a465909) | Method |
| [`ReleaseRendered`](#api-71ecb213c4051d87) | Method |
| [`TryGetTexture`](#api-93775a8d93ca6cf2) | Method |
| [`TryGetTextureArtifact`](#api-60af39e1e719d827) | Method |
| [`TryRender`](#api-77cdfa952245ebe3) | Method |
| [`deviceGeneration`](#api-573daff6bbf1b495) | Property |

## Type declaration

<a id="api-b224f095409413db"></a>
<!-- api: T:Inno.Editor.Rendering.IEditorPreviewService 6ccfbe606eac6f58143ecc48e7fd3149fc16db7f910503ebf88e4932289a6b42 -->

```csharp
public interface Inno.Editor.Rendering.IEditorPreviewService
```

Provides one shared preview texture bridge for browsers, inspectors, and document canvases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L73).

## `Draw`

<a id="api-b96363db1499d1ae"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.Draw(Inno.Editor.Rendering.EditorPreviewHandle,System.Numerics.Vector2) 11415bca08264595428649be1752786e576902d5d46f9ab9b8c9f4b7296c9894 -->

```csharp
void Inno.Editor.Rendering.IEditorPreviewService.Draw(Inno.Editor.Rendering.EditorPreviewHandle handle, System.Numerics.Vector2 logicalSize)
```

Draws one current-generation preview into the active presentation surface.

**Parameter `handle`:** Preview handle returned by this service.

**Parameter `logicalSize`:** Positive destination size in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L156).

## `Release`

<a id="api-5f67ece97aa917e6"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.Release(Inno.Editor.Rendering.EditorPreviewHandle) dce03c975c82e6f5cf8ced33c01e321767f00e9b1d637feae540c69eaef0f13c -->

```csharp
bool Inno.Editor.Rendering.IEditorPreviewService.Release(Inno.Editor.Rendering.EditorPreviewHandle handle)
```

Releases one cached preview registration.

**Parameter `handle`:** Preview handle returned by this service.

**Returns:** `true` when the handle was active and released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L170).

## `ReleaseAll`

<a id="api-472ceb833a465909"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.ReleaseAll fc4a59d8af0fd43e2b5cd9c68e980b8763993975717b057967b9f1ec14a13bce -->

```csharp
void Inno.Editor.Rendering.IEditorPreviewService.ReleaseAll()
```

Releases every cached preview registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L175).

## `ReleaseRendered`

<a id="api-71ecb213c4051d87"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.ReleaseRendered(System.String) 144e52c5e86166c0cdf0de55daf7c6a6c9b05b4d7d2905ec06dd99e1d11a6409 -->

```csharp
void Inno.Editor.Rendering.IEditorPreviewService.ReleaseRendered(string viewportId)
```

Releases an offscreen preview, including one which has not produced its first handle.

**Parameter `viewportId`:** The same consumer-qualified identity submitted in the composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L103).

## `TryGetTexture`

<a id="api-93775a8d93ca6cf2"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.TryGetTexture(Inno.Rendering.Assets.TextureAsset,Inno.Editor.Rendering.EditorPreviewHandle@) 7f76cf5d817ca8e848d0489fdcb7f75a27c02d992b8a46eaeedf09858fd67880 -->

```csharp
bool Inno.Editor.Rendering.IEditorPreviewService.TryGetTexture(Inno.Rendering.Assets.TextureAsset texture, out Inno.Editor.Rendering.EditorPreviewHandle handle)
```

Tries to resolve a standalone texture preview without blocking target compilation.

**Parameter `texture`:** Texture asset to preview.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L117).

## `TryGetTextureArtifact`

<a id="api-60af39e1e719d827"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.TryGetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.Int32,System.Int32,Inno.Editor.Rendering.EditorPreviewHandle@) 8d6a9263948d2dd4016dcc4a7d1b143154919a2726a555b3c3f59141c3525df2 -->

```csharp
bool Inno.Editor.Rendering.IEditorPreviewService.TryGetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference texture, int pixelWidth, int pixelHeight, out Inno.Editor.Rendering.EditorPreviewHandle handle)
```

Tries to resolve a named texture artifact preview without blocking target compilation.

**Parameter `texture`:** Stable named texture artifact reference.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L140).

## `TryRender`

<a id="api-77cdfa952245ebe3"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorPreviewService.TryRender(Inno.Editor.Rendering.EditorViewportComposition,Inno.Editor.Rendering.EditorPreviewHandle@) 466a3c4aaa88e53ef952f0e83620d7381321dfc38dc5c67fc8aa2cc5f6b98ca8 -->

```csharp
bool Inno.Editor.Rendering.IEditorPreviewService.TryRender(Inno.Editor.Rendering.EditorViewportComposition composition, out Inno.Editor.Rendering.EditorPreviewHandle handle)
```

Submits an isolated rendering composition through the shared offscreen viewport bridge.

**Parameter `composition`:** Invocation-local layers; the host retains no contributor instances after the frame.

**Parameter `handle`:** Receives a current-generation preview once its target is resident.

**Returns:** True when the completed previous output can be drawn; false during initial allocation or resize.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L92).

## `deviceGeneration`

<a id="api-573daff6bbf1b495"></a>
<!-- api: P:Inno.Editor.Rendering.IEditorPreviewService.deviceGeneration a8e2a59d827fc422f72d43f24f95b3c083c4f36cb3b32b7fe78bab4859611728 -->

```csharp
uint Inno.Editor.Rendering.IEditorPreviewService.deviceGeneration { get; }
```

Gets the active rendering-device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L78).
