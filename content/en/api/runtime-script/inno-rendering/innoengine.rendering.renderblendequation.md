---
title: "RenderBlendEquation"
description: "Reference for RenderBlendEquation in Inno.Rendering."
uid: api.inno.rendering.runtime-script.74879487fe02baa0
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBlendEquation`

This reference describes `RenderBlendEquation` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Add`](#api-166d8d7cba2cf57d) | Field |
| [`Maximum`](#api-8ff567bf0c3120d0) | Field |
| [`Minimum`](#api-d0b4a1f7cefcf879) | Field |
| [`ReverseSubtract`](#api-87f8e10b805c0006) | Field |
| [`Subtract`](#api-e9681143bba50bb6) | Field |

## Type declaration

<a id="api-74879487fe02baa0"></a>
<!-- api: T:InnoEngine.Rendering.RenderBlendEquation 0b6f0b8a1ccad14568d789ca5a33fdc5e202c96345138e68eb637463b51f0a5b -->

```csharp
public enum InnoEngine.Rendering.RenderBlendEquation : int
```

Selects the arithmetic operation combining source and destination blend terms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L69).

## `Add`

<a id="api-166d8d7cba2cf57d"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendEquation.Add e09d9626e143c486e7dc218bd2fdf21b5eb0a97000046c85cced7200287581e0 -->

```csharp
InnoEngine.Rendering.RenderBlendEquation.Add = 0
```

Adds source and destination terms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L74).

## `Maximum`

<a id="api-8ff567bf0c3120d0"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendEquation.Maximum 706d5f66fef6ac1008f3de9b2fcf0cd37dde1040798938b075be89143f0b61d6 -->

```csharp
InnoEngine.Rendering.RenderBlendEquation.Maximum = 4
```

Selects the component-wise maximum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L90).

## `Minimum`

<a id="api-d0b4a1f7cefcf879"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendEquation.Minimum e97c51da9c61fd5348daf1060233720afc6e1443a2f243b9a2de8d72e99a27ea -->

```csharp
InnoEngine.Rendering.RenderBlendEquation.Minimum = 3
```

Selects the component-wise minimum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L86).

## `ReverseSubtract`

<a id="api-87f8e10b805c0006"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendEquation.ReverseSubtract f63261a122e133e65cacedd6b62e1232f2a95c8c4630297040312be1cac52487 -->

```csharp
InnoEngine.Rendering.RenderBlendEquation.ReverseSubtract = 2
```

Subtracts the source term from the destination term.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L82).

## `Subtract`

<a id="api-e9681143bba50bb6"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendEquation.Subtract ee7592a3774373743934ae03fa1bfc30c4c389211e05d145ecc25e782573599e -->

```csharp
InnoEngine.Rendering.RenderBlendEquation.Subtract = 1
```

Subtracts the destination term from the source term.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L78).
