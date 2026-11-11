---
title: "ShaderSourceParameter"
description: "Reference for ShaderSourceParameter in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.0d3c5d42f9960b82
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceParameter`

This reference describes `ShaderSourceParameter` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1917859015a83edf) | Method |
| [`direction`](#api-8c26345344625ee2) | Property |
| [`name`](#api-0bb1b0ea329fb349) | Property |
| [`type`](#api-86f17a4bd0074889) | Property |

## Type declaration

<a id="api-0d3c5d42f9960b82"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceParameter bd935a5352eb55f57de3bd275c21da4244c5c61818f6e42f08d04c87621244ea -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceParameter
```

Describes one parameter parsed from a public source declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L29).

## `#ctor`

<a id="api-1917859015a83edf"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceParameter.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderSourceParameterDirection) 47200cf8002ca19544010cfd9943d6eca9621b0eec042f3003a28ec56ef59407 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceParameter.ShaderSourceParameter(string name, Inno.Rendering.Shaders.ShaderSourceType type, Inno.Rendering.Shaders.ShaderSourceParameterDirection direction)
```

Creates a validated function parameter.

**Parameter `name`:** Public parameter name, used for semantic port matching rather than ordinal matching.

**Parameter `type`:** Canonical value type.

**Parameter `direction`:** Declared value flow.

**Throws `System.ArgumentException`:** The parameter has void type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L46).

## `direction`

<a id="api-8c26345344625ee2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceParameter.direction 1f3b7a84e388e7e59558ac040c30040393199e2d742a2aa3f06128996a9c371d -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceParameterDirection Inno.Rendering.Shaders.ShaderSourceParameter.direction { get; }
```

Gets the declared value flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L71).

## `name`

<a id="api-0bb1b0ea329fb349"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceParameter.name 137d4464a70559110a3f2efc69b430e99ef2e1ef4f3aed02f1780b6f31dcda5b -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceParameter.name { get; }
```

Gets the public parameter name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L63).

## `type`

<a id="api-86f17a4bd0074889"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceParameter.type 0b9413a687203117581b2307e9ceb43af495cff1a0b0c1fab21292973fbb2828 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceParameter.type { get; }
```

Gets the complete canonical value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L67).
