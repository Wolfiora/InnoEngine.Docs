---
title: "ShaderPreviewProvider"
description: "Reference for ShaderPreviewProvider in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.editor-script.e57e44bfa7091dfb
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders
  - manual.scripting.use-script-api
---
# `ShaderPreviewProvider`

This reference describes `ShaderPreviewProvider` in `Inno.Editor.Shaders`. Read the [shared contract](../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-96b4c9e43b6fcde4) | Method |
| [`CreateLayer`](#api-bf6234a59521c3e6) | Method |

## Type declaration

<a id="api-e57e44bfa7091dfb"></a>
<!-- api: T:InnoEditor.Shaders.ShaderPreviewProvider 45f4c70ed872bfaa333fd26e4dc3546510d76dc3692b5f174e5c76b234a4d76f -->

```csharp
public abstract class InnoEditor.Shaders.ShaderPreviewProvider
```

Builds domain-owned preview geometry and pass inputs without changing a scene or canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L29).

## `#ctor`

<a id="api-96b4c9e43b6fcde4"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviewProvider.#ctor ed6fbe465e8d8abfdf64235154a0e07af6b616c28fd2768fc8bab93be551734e -->

```csharp
protected InnoEditor.Shaders.ShaderPreviewProvider.ShaderPreviewProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L29).

## `CreateLayer`

<a id="api-bf6234a59521c3e6"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPreviewProvider.CreateLayer(InnoEditor.Shaders.ShaderPreviewContext) 5d2587ae0ca7f605baf3be7f2bb99c13542bff68147609c0c6ff1cf03c5df464 -->

```csharp
public abstract InnoEditor.Rendering.EditorViewportLayer InnoEditor.Shaders.ShaderPreviewProvider.CreateLayer(InnoEditor.Shaders.ShaderPreviewContext context)
```

Creates one frame-local rendering layer through the ordinary Render Graph.

**Parameter `context`:** Detached Material, immutable candidate and isolated diagnostics for this invocation.

**Returns:** A domain-selected pipeline and frame payload; no instance may be retained beyond the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Previews/ShaderPreviewProvider.cs#L40).
