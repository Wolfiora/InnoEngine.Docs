---
title: "ShaderGraphNodeOutputSettings"
description: "Reference for ShaderGraphNodeOutputSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.cac0fa22fddda725
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodeOutputSettings`

This reference describes `ShaderGraphNodeOutputSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6b0c85fe99cc8dc2) | Method |
| [`ports`](#api-048a53dab837eefe) | Property |

## Type declaration

<a id="api-cac0fa22fddda725"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodeOutputSettings 6879388e64eeb4b007b9706811697eb4265fadb0d03eef662ff1f0cc561444d0 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphNodeOutputSettings : InnoEngine.Serialization.ISerializable
```

Stores values returned by a graph-authored function node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L107).

## `#ctor`

<a id="api-6b0c85fe99cc8dc2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodeOutputSettings.#ctor af7c1e7ff2ebed36b79b25bd423cce42c94451906218aa055c38f22ded28ac67 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeOutputSettings.ShaderGraphNodeOutputSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L107).

## `ports`

<a id="api-048a53dab837eefe"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeOutputSettings.ports eaa2186097d1abc57ba7fd4969129dbed19785cc80ad87988e97935ff96e8970 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition[] InnoEditor.Rendering.Shaders.ShaderGraphNodeOutputSettings.ports { get; set; }
```

Gets or sets values collected inside the node graph and exposed as outputs to callers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L112).
