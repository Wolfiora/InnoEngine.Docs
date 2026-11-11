---
title: "ShaderSourceParameterDirection"
description: "Reference for ShaderSourceParameterDirection in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.06226497a02f4463
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceParameterDirection`

This reference describes `ShaderSourceParameterDirection` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Input`](#api-cea8c9947a0bc4de) | Field |
| [`InputOutput`](#api-75eda891823de433) | Field |
| [`Output`](#api-16e9dcb5a8644bda) | Field |

## Type declaration

<a id="api-06226497a02f4463"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceParameterDirection bd835aa560ab6b268a5459f2c82a19016b93dc703c35780e5ec4cb8d4f4983a0 -->

```csharp
public enum Inno.Rendering.Shaders.ShaderSourceParameterDirection : int
```

Declares value flow across a source function parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L10).

## `Input`

<a id="api-cea8c9947a0bc4de"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderSourceParameterDirection.Input 6a62c067410a5ea036821907167553848de421d4637110d5fabc9367de6c73a9 -->

```csharp
Inno.Rendering.Shaders.ShaderSourceParameterDirection.Input = 0
```

The caller supplies a value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L15).

## `InputOutput`

<a id="api-75eda891823de433"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderSourceParameterDirection.InputOutput 15d08a641b8bf049ec8f7b919521ba5f2040c2852f4f83b6edae2756684d5d29 -->

```csharp
Inno.Rendering.Shaders.ShaderSourceParameterDirection.InputOutput = 2
```

The caller supplies a value and the function produces its replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L23).

## `Output`

<a id="api-16e9dcb5a8644bda"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderSourceParameterDirection.Output 5079160f8135a8adb6b6ad12139059d0aa15800f592abd0bc0800974a5778e9b -->

```csharp
Inno.Rendering.Shaders.ShaderSourceParameterDirection.Output = 1
```

The function produces a value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L19).
