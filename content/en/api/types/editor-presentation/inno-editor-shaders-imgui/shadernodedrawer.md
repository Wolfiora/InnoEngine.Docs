---
title: "ShaderNodeDrawer"
description: "Reference for ShaderNodeDrawer in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.f2b00330bd85ad7c
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderNodeDrawer`

This reference describes `ShaderNodeDrawer` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a131b6bee5cbad7d) | Method |
| [`Draw`](#api-24c178db5786b364) | Method |

## Type declaration

<a id="api-f2b00330bd85ad7c"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderNodeDrawer 3fbfa656a1246135de7890879fb0d6aa48b8728b4ddd90441963e471d8f2554d -->

```csharp
public abstract class Inno.Editor.Shaders.ImGui.ShaderNodeDrawer
```

Provides reloadable Inspector controls; instances must not retain frame contexts or asset objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L123).

## `#ctor`

<a id="api-a131b6bee5cbad7d"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawer.#ctor 490f618cbac98f9eef667590ad7ca8e8b9c5fec96455f98cf6cfb7999efc400b -->

```csharp
protected Inno.Editor.Shaders.ImGui.ShaderNodeDrawer.ShaderNodeDrawer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L123).

## `Draw`

<a id="api-24c178db5786b364"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawer.Draw(Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext) 2cf1af003aa519f55c96d0097a62a8c4b7e249d669e913ea37a8d0bfb9e763d0 -->

```csharp
public abstract void Inno.Editor.Shaders.ImGui.ShaderNodeDrawer.Draw(Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext context)
```

Draws the selected node's controls using the shared Inspector styling.

**Parameter `context`:** Frame-scoped value access and undoable writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L131).
