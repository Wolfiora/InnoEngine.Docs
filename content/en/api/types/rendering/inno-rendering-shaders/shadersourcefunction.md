---
title: "ShaderSourceFunction"
description: "Reference for ShaderSourceFunction in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.f06ff23b3edf2df1
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceFunction`

This reference describes `ShaderSourceFunction` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5128492ca62e9848) | Method |
| [`HasSameInterface`](#api-53dc6f723fe3a81e) | Method |
| [`location`](#api-0e4d3c0eacfd38ce) | Property |
| [`name`](#api-70d2ede40d414584) | Property |
| [`parameters`](#api-4385b234e5a82b3a) | Property |
| [`returnType`](#api-e0dee88ee97864e2) | Property |

## Type declaration

<a id="api-f06ff23b3edf2df1"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceFunction 97d386cc29540e8fe2b825a4b583ca32f9f327c798b6502ed0681c4b22de71b8 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceFunction
```

Contains the single callable interface exported by a source asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L77).

## `#ctor`

<a id="api-5128492ca62e9848"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFunction.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceParameter},Inno.Rendering.Shaders.ShaderSourcePosition) a6a345c77e15d4caacf46229d604aa56f5fa8ab78fef549db8f671a552453c46 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFunction.ShaderSourceFunction(string name, Inno.Rendering.Shaders.ShaderSourceType returnType, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderSourceParameter> parameters, Inno.Rendering.Shaders.ShaderSourcePosition location)
```

Captures a source function declaration without retaining parser or provider objects.

**Parameter `name`:** Implementation function name selected by import settings.

**Parameter `returnType`:** Canonical result type; void has no result port.

**Parameter `parameters`:** Unique named parameters in call order.

**Parameter `location`:** Original declaration location.

**Throws `System.ArgumentException`:** The name is reserved or parameters have duplicate names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L97).

## `HasSameInterface`

<a id="api-53dc6f723fe3a81e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(Inno.Rendering.Shaders.ShaderSourceFunction) 5ba9e6dc81206cf2f4856819a3abfa521bffbcd1c4ddb13981a7712c56886d75 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(Inno.Rendering.Shaders.ShaderSourceFunction? other)
```

Validates alternative implementations by semantic names, types, direction, and call order.

**Parameter `other`:** Candidate interface, whose private implementation function name may differ.

**Returns:** True when both implementations expose the same graph ports and calling interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L142).

## `location`

<a id="api-0e4d3c0eacfd38ce"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFunction.location 90d620aeee5b92d239a85c11f97cd44a0d561598a695f40eebe26ecce1d3c689 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourcePosition Inno.Rendering.Shaders.ShaderSourceFunction.location { get; }
```

Gets the original declaration position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L131).

## `name`

<a id="api-70d2ede40d414584"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFunction.name 665a84e80ac23d0fbd763ddfec6ef1d1c29ea6d4d61e18866bdfb62a6a1b4820 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceFunction.name { get; }
```

Gets the implementation function name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L119).

## `parameters`

<a id="api-4385b234e5a82b3a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFunction.parameters a60bbf99365da0d7587e6c69067d1e73022bb7f02dfd15e21657fb318866c969 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceParameter> Inno.Rendering.Shaders.ShaderSourceFunction.parameters { get; }
```

Gets the immutable function parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L127).

## `returnType`

<a id="api-e0dee88ee97864e2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFunction.returnType 42320f94866fd84ac9f0235ed8d685e42fbb6fb6dc8d40b8408fe5c2ca295401 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceFunction.returnType { get; }
```

Gets the canonical result type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L123).
