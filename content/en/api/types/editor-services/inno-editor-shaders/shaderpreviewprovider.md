---
title: "ShaderPreviewProvider"
description: "Reference for ShaderPreviewProvider in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.155f73b4d6305de8
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders
---
# `ShaderPreviewProvider`

This reference describes `ShaderPreviewProvider` in `Inno.Editor.Shaders`. Read the [shared contract](../../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8857e0785476e17e) | Method |
| [`CreateLayer`](#api-459cb3d4f863a3c5) | Method |

## Type declaration

<a id="api-155f73b4d6305de8"></a>
<!-- api: T:Inno.Editor.Shaders.ShaderPreviewProvider 8b7304ab6221436f7731d1bad238b71ab3616192d3b3f102981714db0d49c309 -->

```csharp
public abstract class Inno.Editor.Shaders.ShaderPreviewProvider
```

Builds domain-owned preview geometry and pass inputs without changing a scene or canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L29).

## `#ctor`

<a id="api-8857e0785476e17e"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderPreviewProvider.#ctor 78cfacb38ebdbbea60efc9535e2219856e52c7230050928843052b560e24417a -->

```csharp
protected Inno.Editor.Shaders.ShaderPreviewProvider.ShaderPreviewProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L29).

## `CreateLayer`

<a id="api-459cb3d4f863a3c5"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderPreviewProvider.CreateLayer(Inno.Editor.Shaders.ShaderPreviewContext) 67ba65bd49cb7ef9617f19475108be1248d36e4436e3951feb4341f99eae5376 -->

```csharp
public abstract Inno.Editor.Rendering.EditorViewportLayer Inno.Editor.Shaders.ShaderPreviewProvider.CreateLayer(Inno.Editor.Shaders.ShaderPreviewContext context)
```

Creates one frame-local rendering layer through the ordinary Render Graph.

**Parameter `context`:** Detached Material, immutable candidate and isolated diagnostics for this invocation.

**Returns:** A domain-selected pipeline and frame payload; no instance may be retained beyond the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L40).
