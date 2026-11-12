---
title: "ShaderPreviews"
description: "Reference for ShaderPreviews in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.editor-script.e2111e04b2a081a7
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders-imgui
  - manual.scripting.use-script-api
---
# `ShaderPreviews`

This reference describes `ShaderPreviews` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ca3bcb4481061f33) | Method |
| [`Draw`](#api-8a56f4ea214f99ae) | Method |
| [`DrawMaterial`](#api-f9d37780748ddbaf) | Method |
| [`OnStop`](#api-07fcf2a122fbfc60) | Method |
| [`OnUpdate`](#api-f07a272c43890085) | Method |
| [`Release`](#api-2decc0d3aacd716b) | Method |

## Type declaration

<a id="api-e2111e04b2a081a7"></a>
<!-- api: T:InnoEditor.Shaders.ShaderPreviews 2039988b1b9900bf9200afe24f00a4fe367bb792caf3de02b6574e8aae82840b -->

```csharp
public sealed class InnoEditor.Shaders.ShaderPreviews : InnoEditor.Core.EditorModule
```

Hosts isolated Shader and Material images using domain-contributed preview pipelines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L21).

## `#ctor`

<a id="api-ca3bcb4481061f33"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviews.#ctor 9e9f359bbe57d910c328f7c6b2f195d360cbb4f461fe4dc4058b0c7862a12f2c -->

```csharp
public InnoEditor.Shaders.ShaderPreviews.ShaderPreviews()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L21).

## `Draw`

<a id="api-8a56f4ea214f99ae"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviews.Draw(System.Guid,InnoEngine.Rendering.MaterialAsset,InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot,System.Single) d00b7b82302e22918e8c1ec1ecdc7af4ca09b85432299d1d40334ee2f7b2cf95 -->

```csharp
public void InnoEditor.Shaders.ShaderPreviews.Draw(System.Guid ownerId, InnoEngine.Rendering.MaterialAsset material, InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot compilation, float logicalSize)
```

Draws a compiled draft without modifying the source Shader or its canonical runtime publication.

**Parameter `ownerId`:** Persistent document identity, independent of the canonical Shader publication.

**Parameter `material`:** Detached defaults or overrides with the current Shader reference.

**Parameter `compilation`:** Isolated draft compiler result, including explicit last-good state.

**Parameter `logicalSize`:** Positive square image size in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L88).

## `DrawMaterial`

<a id="api-f9d37780748ddbaf"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviews.DrawMaterial(System.Guid,InnoEngine.Rendering.MaterialAsset,System.Single) 98ca5def388ee0621bd48dc2c5cc6bd722f81d0491b4c862f78319bf021083f7 -->

```csharp
public void InnoEditor.Shaders.ShaderPreviews.DrawMaterial(System.Guid ownerId, InnoEngine.Rendering.MaterialAsset material, float logicalSize)
```

Draws detached Material overrides using its Shader's compiled contract.

**Parameter `ownerId`:** Persistent document identity; no Material is retained under this identity.

**Parameter `material`:** Invocation-local Material values.

**Parameter `logicalSize`:** Positive square image size in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L52).

## `OnStop`

<a id="api-07fcf2a122fbfc60"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviews.OnStop(InnoEditor.Core.EditorContext) 01d391ab6cf7b78b130cf23d59f195bdf0f4967858b5aae61c964bdc324b28f9 -->

```csharp
protected override void InnoEditor.Shaders.ShaderPreviews.OnStop(InnoEditor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L174).

## `OnUpdate`

<a id="api-f07a272c43890085"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviews.OnUpdate(InnoEditor.Core.EditorContext) df82b9a879ef62bd622914a105a4908b1b3f3ade5a74d5d7bf91ea962c53d204 -->

```csharp
protected override void InnoEditor.Shaders.ShaderPreviews.OnUpdate(InnoEditor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L161).

## `Release`

<a id="api-2decc0d3aacd716b"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviews.Release(System.Guid) 44d639eddc62d6da7bef78f6c32cfdffd205d0ed32dd00ab979bd0eb7aede27f -->

```csharp
public void InnoEditor.Shaders.ShaderPreviews.Release(System.Guid ownerId)
```

Releases this document's viewport and scoped GPU publication without touching other consumers.

**Parameter `ownerId`:** Closing or disabled preview owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L149).
