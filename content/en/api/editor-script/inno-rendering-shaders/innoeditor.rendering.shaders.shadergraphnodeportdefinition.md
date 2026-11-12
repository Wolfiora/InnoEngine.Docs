---
title: "ShaderGraphNodePortDefinition"
description: "Reference for ShaderGraphNodePortDefinition in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.4970e7695264e4d4
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodePortDefinition`

This reference describes `ShaderGraphNodePortDefinition` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2e30a9fc500bc491) | Method |
| [`id`](#api-2921a456fb478caa) | Property |
| [`required`](#api-8eb60021ba5a9320) | Property |
| [`type`](#api-41bbe00919fdd7ad) | Property |

## Type declaration

<a id="api-4970e7695264e4d4"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition 0c26165e0bc8cf3a2b1ab75c0ed98e0d129d0b1beaf8554a8754a06a42606f49 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition : InnoEngine.Serialization.ISerializable
```

Declares one stable, typed port on a graph-authored node interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L74).

## `#ctor`

<a id="api-2e30a9fc500bc491"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.#ctor af48a12c527a12f306fcf927ef9e0bca38e4a0841f76c9f85c71d88e12b184e7 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.ShaderGraphNodePortDefinition()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L74).

## `id`

<a id="api-2921a456fb478caa"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.id 284e3feb7f020692da108557767617ebdcc93883d1f7d1f18b29a1628b920646 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.id { get; set; }
```

Gets or sets the stable node-local port identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L79).

## `required`

<a id="api-8eb60021ba5a9320"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.required 9397e12039eebf1a4797161c86e6edc3720b8ba59c56d2fd10fd3aed6623ca77 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.required { get; set; }
```

Gets or sets whether callers must connect the input instead of using an explicit/default zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L87).

## `type`

<a id="api-41bbe00919fdd7ad"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.type e4dfd2be635a143d6ad60fd447cfd87d77f7e45cc09a72d6ef6082054c2bdfa2 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition.type { get; set; }
```

Gets or sets the complete backend-neutral value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L83).
