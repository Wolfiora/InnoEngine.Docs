---
title: "ShaderPreviews"
description: "Reference for ShaderPreviews in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.67e03b0cc3b26154
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderPreviews`

This reference describes `ShaderPreviews` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-f2607aa63964b884) | Method |
| [`DrawMaterial`](#api-f5109c3ce9975ab3) | Method |
| [`OnStop`](#api-c1a109b0196116eb) | Method |
| [`OnUpdate`](#api-90089ec4e8bbc696) | Method |
| [`Release`](#api-4da72e0057da5b99) | Method |

## Type declaration

<a id="api-67e03b0cc3b26154"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderPreviews 6067321f1d590b0dc0e39d02dd7c5abbf81696e6c9b6eaac2532ab2b17eac6b8 -->

```csharp
public sealed class Inno.Editor.Shaders.ImGui.ShaderPreviews : Inno.Editor.Core.EditorModule
```

Hosts isolated Shader and Material images using domain-contributed preview pipelines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L21).

## `Draw`

<a id="api-f2607aa63964b884"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPreviews.Draw(System.Guid,Inno.Rendering.Assets.MaterialAsset,Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot,System.Single) f58b116e5d6c27569f363c7b1baead045ed7394044a1db5b381d3c8b05741548 -->

```csharp
public void Inno.Editor.Shaders.ImGui.ShaderPreviews.Draw(System.Guid ownerId, Inno.Rendering.Assets.MaterialAsset material, Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot compilation, float logicalSize)
```

Draws a compiled draft without modifying the source Shader or its canonical runtime publication.

**Parameter `ownerId`:** Persistent document identity, independent of the canonical Shader publication.

**Parameter `material`:** Detached defaults or overrides with the current Shader reference.

**Parameter `compilation`:** Isolated draft compiler result, including explicit last-good state.

**Parameter `logicalSize`:** Positive square image size in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L88).

## `DrawMaterial`

<a id="api-f5109c3ce9975ab3"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPreviews.DrawMaterial(System.Guid,Inno.Rendering.Assets.MaterialAsset,System.Single) 3d1c25ac63b4c6606b6779d6e2ccd86293a40596d513ac0976a8ffbf88a8ea57 -->

```csharp
public void Inno.Editor.Shaders.ImGui.ShaderPreviews.DrawMaterial(System.Guid ownerId, Inno.Rendering.Assets.MaterialAsset material, float logicalSize)
```

Draws detached Material overrides using its Shader's compiled contract.

**Parameter `ownerId`:** Persistent document identity; no Material is retained under this identity.

**Parameter `material`:** Invocation-local Material values.

**Parameter `logicalSize`:** Positive square image size in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L52).

## `OnStop`

<a id="api-c1a109b0196116eb"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPreviews.OnStop(Inno.Editor.Core.EditorContext) 93d3f97c87ae6d3148fcec5ac14fbb451a54d9cb905944f4e13f96880f9f9347 -->

```csharp
protected override void Inno.Editor.Shaders.ImGui.ShaderPreviews.OnStop(Inno.Editor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L174).

## `OnUpdate`

<a id="api-90089ec4e8bbc696"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPreviews.OnUpdate(Inno.Editor.Core.EditorContext) 6d054afc99e90988ad71008392a04945a30ba405a4a6bd605744aff9f07f2778 -->

```csharp
protected override void Inno.Editor.Shaders.ImGui.ShaderPreviews.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L161).

## `Release`

<a id="api-4da72e0057da5b99"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPreviews.Release(System.Guid) b03251bc7638705845ea9674604706c37b8910b05e2475ee127fd823851d4671 -->

```csharp
public void Inno.Editor.Shaders.ImGui.ShaderPreviews.Release(System.Guid ownerId)
```

Releases this document's viewport and scoped GPU publication without touching other consumers.

**Parameter `ownerId`:** Closing or disabled preview owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Previews/ShaderPreviews.cs#L149).
