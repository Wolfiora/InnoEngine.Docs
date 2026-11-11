---
title: "MaterialDocuments"
description: "Reference for MaterialDocuments in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.f3cfffca15badf5b
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders
---
# `MaterialDocuments`

This reference describes `MaterialDocuments` in `Inno.Editor.Shaders`. Read the [shared contract](../../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`OnStart`](#api-049e169aefa5a985) | Method |
| [`OnStop`](#api-268a6df1ecdcaf3c) | Method |
| [`OnUpdate`](#api-f8470e3f67eb49af) | Method |
| [`Open`](#api-464ce7a6e4e865e7) | Method |
| [`Open`](#api-738ddcbc341d8003) | Method |
| [`OpenDraft`](#api-248fad302df7a1d2) | Method |
| [`Presentation`](#api-8bf7707677bcbf4c) | Method |
| [`Read`](#api-a2d5385fcfa3ab20) | Method |
| [`Replace`](#api-505edbee219e69f6) | Method |
| [`ReplaceMany`](#api-2a4ebf7f3be3a910) | Method |
| [`assets`](#api-907ea2fe17ff5173) | Property |
| [`previews`](#api-33f9da429cf4160e) | Property |

## Type declaration

<a id="api-f3cfffca15badf5b"></a>
<!-- api: T:Inno.Editor.Shaders.MaterialDocuments 1b0656a2573ae7a939d4308c8276064d4624c9540437f2b9590f61cda25c43d7 -->

```csharp
public sealed class Inno.Editor.Shaders.MaterialDocuments : Inno.Editor.Core.EditorModule
```

Owns Material authoring sessions; native source editing uses the shared asset draft lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L23).

## `OnStart`

<a id="api-049e169aefa5a985"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.OnStart(Inno.Editor.Core.EditorContext) 978c23e17cb008269041800a42474e92675b096f36de8db95624554b38d623b7 -->

```csharp
protected override void Inno.Editor.Shaders.MaterialDocuments.OnStart(Inno.Editor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L195).

## `OnStop`

<a id="api-268a6df1ecdcaf3c"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.OnStop(Inno.Editor.Core.EditorContext) 9f17c2507991b95522197194c5372005b0a57fd4c5a83c8d2d5094a673831ea0 -->

```csharp
protected override void Inno.Editor.Shaders.MaterialDocuments.OnStop(Inno.Editor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L209).

## `OnUpdate`

<a id="api-f8470e3f67eb49af"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.OnUpdate(Inno.Editor.Core.EditorContext) 23d0c13311e2b8af244cf0d8f1e5e30e0895f003e1561159696e8120ea3fe6bb -->

```csharp
protected override void Inno.Editor.Shaders.MaterialDocuments.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L202).

## `Open`

<a id="api-464ce7a6e4e865e7"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.Open(Inno.Assets.AssetPath) 9963afc9b37f8f4169e5a9c694e13654b3425238f22391da19e780faa7b77de6 -->

```csharp
public System.Guid Inno.Editor.Shaders.MaterialDocuments.Open(Inno.Assets.AssetPath path)
```

Opens native source, including a source with failed import, without publishing its draft.

**Parameter `path`:** Mounted Material source path.

**Returns:** The persistent identity used for subsequent draft operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L64).

## `Open`

<a id="api-738ddcbc341d8003"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.Open(Inno.Rendering.Assets.MaterialAsset) 998106c5d6d6111b5967294e6fe8c21792d2d6c3a2a214baf812cf8cf7c17264 -->

```csharp
public Inno.Editor.Assets.AssetDraftDocuments<Inno.Rendering.Assets.MaterialAsset>.Draft Inno.Editor.Shaders.MaterialDocuments.Open(Inno.Rendering.Assets.MaterialAsset material)
```

Resolves the source draft for a canonical Material identity.

**Parameter `material`:** The current canonical Material whose source is edited.

**Returns:** The generation-scoped editable source draft.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L126).

## `OpenDraft`

<a id="api-248fad302df7a1d2"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.OpenDraft(Inno.Assets.AssetPath) 0fc30c928fa638897bc0b60ce59a2d57ce8021f01811e14113f224d92038617e -->

```csharp
public Inno.Editor.Assets.AssetDraftDocuments<Inno.Rendering.Assets.MaterialAsset>.Draft Inno.Editor.Shaders.MaterialDocuments.OpenDraft(Inno.Assets.AssetPath path)
```

Opens the current source draft without publishing it.

**Parameter `path`:** The isolated Material source path.

**Returns:** The generation-scoped draft; callers must not retain it across a reload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L115).

## `Presentation`

<a id="api-8bf7707677bcbf4c"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.Presentation(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.ShaderPropertyId,System.String@) ad8a27634184814d70c804087779022b7334b63f46a577c79c10476cfde176bf -->

```csharp
public Inno.Editor.Shaders.ShaderParameterPresentation Inno.Editor.Shaders.MaterialDocuments.Presentation(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.ShaderPropertyId propertyId, out string error)
```

Reads parameter presentation from the current authoring Shader graph.

**Parameter `shader`:** The canonical Shader used by the Material.

**Parameter `propertyId`:** The stable binding identity.

**Parameter `error`:** Receives the source diagnostic, or an empty string when presentation is available.

**Returns:** Detached presentation values; an unavailable graph uses the ordinary presentation defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L149).

## `Read`

<a id="api-a2d5385fcfa3ab20"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.Read(System.Guid) aaf3afc046125423a8d8ac4039a91a97f21c2b86578835c7b43a3f6513ad4f65 -->

```csharp
public Inno.Rendering.Assets.MaterialAsset Inno.Editor.Shaders.MaterialDocuments.Read(System.Guid assetId)
```

Reads a detached current-generation Material; referenced assets remain canonical read-only inputs.

**Parameter `assetId`:** Open Material source identity.

**Returns:** The current unsaved Material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L74).

## `Replace`

<a id="api-505edbee219e69f6"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.Replace(System.Guid,Inno.Rendering.Assets.MaterialAsset,System.String) 6765e5cdb2a23b336ed23fd889058857ff2769fbee6b671ddef33a616d57ba5b -->

```csharp
public void Inno.Editor.Shaders.MaterialDocuments.Replace(System.Guid assetId, Inno.Rendering.Assets.MaterialAsset candidate, string? mergeKey = null)
```

Changes a draft through shared History without modifying its source or Scene/Game.

**Parameter `assetId`:** Open Material source identity.

**Parameter `candidate`:** Detached edited Material.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L87).

## `ReplaceMany`

<a id="api-2a4ebf7f3be3a910"></a>
<!-- api: M:Inno.Editor.Shaders.MaterialDocuments.ReplaceMany(System.Collections.Generic.IReadOnlyDictionary{System.Guid,Inno.Rendering.Assets.MaterialAsset},System.String) 14fa2491cbb3f7608230e63e0ec4bb8ba234838ad918c12dddf16dc126bc6d84 -->

```csharp
public void Inno.Editor.Shaders.MaterialDocuments.ReplaceMany(System.Collections.Generic.IReadOnlyDictionary<System.Guid, Inno.Rendering.Assets.MaterialAsset> candidates, string? mergeKey = null)
```

Changes compatible selected drafts within one shared gesture.

**Parameter `candidates`:** Detached Material values keyed by persistent source identity.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L101).

## `assets`

<a id="api-907ea2fe17ff5173"></a>
<!-- api: P:Inno.Editor.Shaders.MaterialDocuments.assets 40dfd346e1392c353f8c7f8569e610ce1f1f7f5aae8119aa2cf869af63fc7826 -->

```csharp
public Inno.Assets.Pipeline.AssetPipeline Inno.Editor.Shaders.MaterialDocuments.assets { get; }
```

Gets the authoritative asset catalog used by source-aware inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L33).

## `previews`

<a id="api-33f9da429cf4160e"></a>
<!-- api: P:Inno.Editor.Shaders.MaterialDocuments.previews ceca0a7b49afe76121a6f621f3d91674af0d4693331162fea929762ce33410c9 -->

```csharp
public Inno.Editor.Rendering.IEditorPreviewService Inno.Editor.Shaders.MaterialDocuments.previews { get; }
```

Gets the generation-scoped preview service shared by material presentations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L40).
