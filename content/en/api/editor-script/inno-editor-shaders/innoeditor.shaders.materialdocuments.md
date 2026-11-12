---
title: "MaterialDocuments"
description: "Reference for MaterialDocuments in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.editor-script.f19b0a3fbdcca733
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders
  - manual.scripting.use-script-api
---
# `MaterialDocuments`

This reference describes `MaterialDocuments` in `Inno.Editor.Shaders`. Read the [shared contract](../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bb4cf06750d32eb1) | Method |
| [`OnStart`](#api-242f568ef67c5c16) | Method |
| [`OnStop`](#api-11f7b6abcefa5771) | Method |
| [`OnUpdate`](#api-0ab412232b381dad) | Method |
| [`Open`](#api-7ea709314417368b) | Method |
| [`Presentation`](#api-5467d0c043fc36bc) | Method |
| [`Read`](#api-ffe5a9ea9c7cbc23) | Method |
| [`Replace`](#api-965a5850458dc188) | Method |
| [`ReplaceMany`](#api-56b7ee9cca321708) | Method |
| [`previews`](#api-86079de39a443780) | Property |

## Type declaration

<a id="api-f19b0a3fbdcca733"></a>
<!-- api: T:InnoEditor.Shaders.MaterialDocuments a69dce1521e1270b93e139021ce5b4c4ea51460da0294293c5840a513ec5cb95 -->

```csharp
public sealed class InnoEditor.Shaders.MaterialDocuments : InnoEditor.Core.EditorModule
```

Owns Material authoring sessions; native source editing uses the shared asset draft lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L23).

## `#ctor`

<a id="api-bb4cf06750d32eb1"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.#ctor f271b864fe8c0f28561a77c956957ec0a6baef21fba195893e5be7a2fa6b9c61 -->

```csharp
public InnoEditor.Shaders.MaterialDocuments.MaterialDocuments()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L23).

## `OnStart`

<a id="api-242f568ef67c5c16"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.OnStart(InnoEditor.Core.EditorContext) 0f0b1688b3f6bd34cbd9ca5ae504a20fda1cc0430e2993bcaa1121b16bb64b08 -->

```csharp
protected override void InnoEditor.Shaders.MaterialDocuments.OnStart(InnoEditor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L195).

## `OnStop`

<a id="api-11f7b6abcefa5771"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.OnStop(InnoEditor.Core.EditorContext) adf4a6947f0fc9f57fa4801dfee7cf5fbc8019fbcbb78a55a3d44e3794ec31a4 -->

```csharp
protected override void InnoEditor.Shaders.MaterialDocuments.OnStop(InnoEditor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L209).

## `OnUpdate`

<a id="api-0ab412232b381dad"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.OnUpdate(InnoEditor.Core.EditorContext) 84f96bffac24534c88bb3321b00cff70129eefb64561b3d0488fcd1387b68423 -->

```csharp
protected override void InnoEditor.Shaders.MaterialDocuments.OnUpdate(InnoEditor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L202).

## `Open`

<a id="api-7ea709314417368b"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.Open(InnoEngine.Assets.AssetPath) feff78d35e294ef4f78f0ae31d89c74af066fcc2dcd59e53cba7f57a35336ac7 -->

```csharp
public System.Guid InnoEditor.Shaders.MaterialDocuments.Open(InnoEngine.Assets.AssetPath path)
```

Opens native source, including a source with failed import, without publishing its draft.

**Parameter `path`:** Mounted Material source path.

**Returns:** The persistent identity used for subsequent draft operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L64).

## `Presentation`

<a id="api-5467d0c043fc36bc"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.Presentation(InnoEngine.Rendering.ShaderAsset,InnoEngine.Rendering.ShaderPropertyId,System.String@) fc7cb838bfe3472e2aa101c18c858ec414d7eb9145a1b3bbaa56b6372093817b -->

```csharp
public InnoEditor.Shaders.ShaderParameterPresentation InnoEditor.Shaders.MaterialDocuments.Presentation(InnoEngine.Rendering.ShaderAsset shader, InnoEngine.Rendering.ShaderPropertyId propertyId, out string error)
```

Reads parameter presentation from the current authoring Shader graph.

**Parameter `shader`:** The canonical Shader used by the Material.

**Parameter `propertyId`:** The stable binding identity.

**Parameter `error`:** Receives the source diagnostic, or an empty string when presentation is available.

**Returns:** Detached presentation values; an unavailable graph uses the ordinary presentation defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L149).

## `Read`

<a id="api-ffe5a9ea9c7cbc23"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.Read(System.Guid) 3afbae2b6b068d4142146af1960878fc167c1c696b07820b52d78692e83a63f8 -->

```csharp
public InnoEngine.Rendering.MaterialAsset InnoEditor.Shaders.MaterialDocuments.Read(System.Guid assetId)
```

Reads a detached current-generation Material; referenced assets remain canonical read-only inputs.

**Parameter `assetId`:** Open Material source identity.

**Returns:** The current unsaved Material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L74).

## `Replace`

<a id="api-965a5850458dc188"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.Replace(System.Guid,InnoEngine.Rendering.MaterialAsset,System.String) 5ac306ea2ecf2148b647f89b2fca572faef1866c5635a0dd7a2d6767c39471f1 -->

```csharp
public void InnoEditor.Shaders.MaterialDocuments.Replace(System.Guid assetId, InnoEngine.Rendering.MaterialAsset candidate, string? mergeKey = null)
```

Changes a draft through shared History without modifying its source or Scene/Game.

**Parameter `assetId`:** Open Material source identity.

**Parameter `candidate`:** Detached edited Material.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L87).

## `ReplaceMany`

<a id="api-56b7ee9cca321708"></a>
<!-- api: M:InnoEditor.Shaders.MaterialDocuments.ReplaceMany(System.Collections.Generic.IReadOnlyDictionary{System.Guid,InnoEngine.Rendering.MaterialAsset},System.String) 3e3d60f19476e2d8e1bb93fe22b85b4ceeb5c3178a6d21b54f786ba53c8878f2 -->

```csharp
public void InnoEditor.Shaders.MaterialDocuments.ReplaceMany(System.Collections.Generic.IReadOnlyDictionary<System.Guid, InnoEngine.Rendering.MaterialAsset> candidates, string? mergeKey = null)
```

Changes compatible selected drafts within one shared gesture.

**Parameter `candidates`:** Detached Material values keyed by persistent source identity.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L101).

## `previews`

<a id="api-86079de39a443780"></a>
<!-- api: P:InnoEditor.Shaders.MaterialDocuments.previews 6ac30b8fbc30cc2e3919e8bada4aa2f28cd16269a6a29687e6b8b91295c18c52 -->

```csharp
public InnoEditor.Rendering.IEditorPreviewService InnoEditor.Shaders.MaterialDocuments.previews { get; }
```

Gets the generation-scoped preview service shared by material presentations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/MaterialDocuments.cs#L40).
