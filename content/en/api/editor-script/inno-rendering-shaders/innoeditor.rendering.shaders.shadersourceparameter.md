---
title: "ShaderSourceParameter"
description: "Reference for ShaderSourceParameter in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.ba14974cfa5f4742
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceParameter`

This reference describes `ShaderSourceParameter` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cf79d9805774065b) | Method |
| [`direction`](#api-7a9c1217c760e154) | Property |
| [`name`](#api-5ece648e78cec5b3) | Property |
| [`type`](#api-2f613c79a7bcdac8) | Property |

## Type declaration

<a id="api-ba14974cfa5f4742"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceParameter c1a23ab1e6e0dc10865ad8402d01ac7974e30d7e409869572cd8572cfb9ea26a -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceParameter
```

Describes one parameter parsed from a public source declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L29).

## `#ctor`

<a id="api-cf79d9805774065b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceParameter.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection) 650274d4399d61094038858bd01e383cbee6317817c7d97a50cc10759a28fbc5 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceParameter.ShaderSourceParameter(string name, InnoEditor.Rendering.Shaders.ShaderSourceType type, InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection direction)
```

Creates a validated function parameter.

**Parameter `name`:** Public parameter name, used for semantic port matching rather than ordinal matching.

**Parameter `type`:** Canonical value type.

**Parameter `direction`:** Declared value flow.

**Throws `System.ArgumentException`:** The parameter has void type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L46).

## `direction`

<a id="api-7a9c1217c760e154"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceParameter.direction 298d90176a9a3d44b7de2e7347287ce80dabddd4a8ae3d213b79b1a4e5eabcde -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection InnoEditor.Rendering.Shaders.ShaderSourceParameter.direction { get; }
```

Gets the declared value flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L71).

## `name`

<a id="api-5ece648e78cec5b3"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceParameter.name 13d4a627d6c95dbdcb7c88c6ec6b70316d2097727f80b30fb74b5a59cc6ce78e -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceParameter.name { get; }
```

Gets the public parameter name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L63).

## `type`

<a id="api-2f613c79a7bcdac8"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceParameter.type 4bf6a698686b0c77186514886acdc43cb5bb59e5fcc4c28f5d77c96e6d6e6fdb -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceParameter.type { get; }
```

Gets the complete canonical value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L67).
