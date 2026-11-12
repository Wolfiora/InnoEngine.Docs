---
title: "ShaderNodeDrawer"
description: "Reference for ShaderNodeDrawer in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.editor-script.1fac30e85e69158d
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders-imgui
  - manual.scripting.use-script-api
---
# `ShaderNodeDrawer`

This reference describes `ShaderNodeDrawer` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1a4515b01f48fbe0) | Method |
| [`Draw`](#api-9f4da9fabf1170f7) | Method |

## Type declaration

<a id="api-1fac30e85e69158d"></a>
<!-- api: T:InnoEditor.Shaders.ShaderNodeDrawer 7e45573475bc186e005e96d58260b4bd280ea3d0acc71ae551eb8b2bc5b94e74 -->

```csharp
public abstract class InnoEditor.Shaders.ShaderNodeDrawer
```

Provides reloadable Inspector controls; instances must not retain frame contexts or asset objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L123).

## `#ctor`

<a id="api-1a4515b01f48fbe0"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawer.#ctor 86ec5db0421823be68448529ee4b5e9e188f9385a5b4091caa05bd890623a285 -->

```csharp
protected InnoEditor.Shaders.ShaderNodeDrawer.ShaderNodeDrawer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L123).

## `Draw`

<a id="api-9f4da9fabf1170f7"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawer.Draw(InnoEditor.Shaders.ShaderNodeDrawContext) f01a9b3e5c758a66e5e6ddee00c4dfec6c5abe9519c21fe9c69ca9672062f470 -->

```csharp
public abstract void InnoEditor.Shaders.ShaderNodeDrawer.Draw(InnoEditor.Shaders.ShaderNodeDrawContext context)
```

Draws the selected node's controls using the shared Inspector styling.

**Parameter `context`:** Frame-scoped value access and undoable writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L131).
