---
title: "RenderBlendEquation"
description: "Reference for RenderBlendEquation in Inno.Rendering."
uid: api.inno.rendering.ab149a9128514c11
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBlendEquation`

This reference describes `RenderBlendEquation` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Add`](#api-2b5b4af9c15a2407) | Field |
| [`Maximum`](#api-f13c547a46ff55e6) | Field |
| [`Minimum`](#api-90099c36f3bb52e3) | Field |
| [`ReverseSubtract`](#api-0f33a0b20603b69b) | Field |
| [`Subtract`](#api-8f7f94de49ab3bdc) | Field |

## Type declaration

<a id="api-ab149a9128514c11"></a>
<!-- api: T:Inno.Rendering.RenderBlendEquation 1a1154def47f5658e781f785d95f08960d0546a0ca565a1d340b1c6a555ceea5 -->

```csharp
public enum Inno.Rendering.RenderBlendEquation : int
```

Selects the arithmetic operation combining source and destination blend terms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L69).

## `Add`

<a id="api-2b5b4af9c15a2407"></a>
<!-- api: F:Inno.Rendering.RenderBlendEquation.Add e7377a08c28caeb1051f4baa6780ce4f33098758d6c7494f7a65851fdc313874 -->

```csharp
Inno.Rendering.RenderBlendEquation.Add = 0
```

Adds source and destination terms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L74).

## `Maximum`

<a id="api-f13c547a46ff55e6"></a>
<!-- api: F:Inno.Rendering.RenderBlendEquation.Maximum bbe3f7672d2db073afb0f0275dce0dd78b8164fa2816f9df685bb980d5ccd892 -->

```csharp
Inno.Rendering.RenderBlendEquation.Maximum = 4
```

Selects the component-wise maximum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L90).

## `Minimum`

<a id="api-90099c36f3bb52e3"></a>
<!-- api: F:Inno.Rendering.RenderBlendEquation.Minimum 27c398e927d13827a9af5091e074ae68fa851835b4537c7890a7b73b4c5227b9 -->

```csharp
Inno.Rendering.RenderBlendEquation.Minimum = 3
```

Selects the component-wise minimum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L86).

## `ReverseSubtract`

<a id="api-0f33a0b20603b69b"></a>
<!-- api: F:Inno.Rendering.RenderBlendEquation.ReverseSubtract 2af0b85ed5af4e92140212edc27947bb28cbbe5075358f8f6d2c3a8b964857ae -->

```csharp
Inno.Rendering.RenderBlendEquation.ReverseSubtract = 2
```

Subtracts the source term from the destination term.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L82).

## `Subtract`

<a id="api-8f7f94de49ab3bdc"></a>
<!-- api: F:Inno.Rendering.RenderBlendEquation.Subtract 1ca75d0a16fd098a0f17c92dc02ecb2ed99da4deaf49cecbe59284858f331a74 -->

```csharp
Inno.Rendering.RenderBlendEquation.Subtract = 1
```

Subtracts the destination term from the source term.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L78).
