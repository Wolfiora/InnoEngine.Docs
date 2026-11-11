---
title: "ShaderNodeLoweringContext"
description: "Reference for ShaderNodeLoweringContext in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.1615a4fb8a4db4ed
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderNodeLoweringContext`

This reference describes `ShaderNodeLoweringContext` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Input`](#api-fb7599e821506ce7) | Method |
| [`builder`](#api-00b5176d479d96c6) | Property |
| [`description`](#api-1aff326b66e21a0c) | Property |
| [`inputs`](#api-fc8d8eb785c69429) | Property |

## Type declaration

<a id="api-1615a4fb8a4db4ed"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderNodeLoweringContext e87eaf1f3af015b5382ed7a4a601a3b3a89729d8975737355115948e48d795ca -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderNodeLoweringContext
```

Supplies one node's connected values and the region builder during lowering only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L138).

## `Input`

<a id="api-fb7599e821506ce7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeLoweringContext.Input(System.String) 9aba5de3fd94fda8966d2bcc3ba4d47e4bcbd8f6a11267629eae13fd03dad3c0 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrValue Inno.Rendering.Shaders.ShaderNodeLoweringContext.Input(string id)
```

Requires one connected input without implicit defaults or positional rebinding.

**Parameter `id`:** Exact semantic input port identity.

**Returns:** The connected typed value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L171).

## `builder`

<a id="api-00b5176d479d96c6"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeLoweringContext.builder b4f0c41272b04f74731e2841ac9b2cccaa1ae32a91e88bc805331690356899ad -->

```csharp
public Inno.Rendering.Shaders.ShaderIrBuilder Inno.Rendering.Shaders.ShaderNodeLoweringContext.builder { get; }
```

Gets the builder shared by nodes in this typed region.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L157).

## `description`

<a id="api-1aff326b66e21a0c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeLoweringContext.description 308be04e99680eba51407e490786abce22e9a8a39e254b95688ff186c1edfbea -->

```csharp
public Inno.Rendering.Shaders.ShaderNodeDescriptionContext Inno.Rendering.Shaders.ShaderNodeLoweringContext.description { get; }
```

Gets the invocation-scoped node description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L153).

## `inputs`

<a id="api-fc8d8eb785c69429"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeLoweringContext.inputs 5e64f017707c2ccf777a885c7e87b003031459f8526830e7557dd98e349822a9 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderNodeLoweringContext.inputs { get; }
```

Gets connected values keyed by semantic input port identity, never connection order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L161).
