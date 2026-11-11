---
title: "Layers.GameLayer"
description: "Reference for Layers.GameLayer in Inno.Scene."
uid: api.inno.scene.03d76f7e3826e994
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `Layers.GameLayer`

This reference describes `Layers.GameLayer` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Scene.Layers.GameLayer>`, `System.IComparable<Inno.Scene.Layers.GameLayer>`.

## Members

| Member | Kind |
| --- | --- |
| [`C_MAX_COUNT`](#api-f91e98d8d15c4e97) | Field |
| [`#ctor`](#api-3208d85aeb320f37) | Method |
| [`CompareTo`](#api-87ab6dc98f3e41af) | Method |
| [`Equals`](#api-46816a8a6847691a) | Method |
| [`Equals`](#api-494b46a3ded30056) | Method |
| [`GetHashCode`](#api-88c34fe5acd8de57) | Method |
| [`op_Equality`](#api-095c145c584515f1) | Method |
| [`op_Inequality`](#api-c8c26751f50b8c5e) | Method |
| [`ToString`](#api-05ed070821267fb1) | Method |
| [`defaultLayer`](#api-78343193c33b0220) | Property |
| [`index`](#api-070d1fa97604a477) | Property |

## Type declaration

<a id="api-03d76f7e3826e994"></a>
<!-- api: T:Inno.Scene.Layers.GameLayer 12e77af3925646e07cbe5ce3d8c462f9952123566efef8a6d67b5ee1e3727d68 -->

```csharp
public readonly struct Inno.Scene.Layers.GameLayer : System.IEquatable<Inno.Scene.Layers.GameLayer>, System.IComparable<Inno.Scene.Layers.GameLayer>
```

Identifies one of the thirty-two runtime layers available to scene objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L8).

## `C_MAX_COUNT`

<a id="api-f91e98d8d15c4e97"></a>
<!-- api: F:Inno.Scene.Layers.GameLayer.C_MAX_COUNT 792ce39c337e7d601e736f238699fd5ab5f9793e255c8a5c14dfc7ce6b3c6554 -->

```csharp
public const int Inno.Scene.Layers.GameLayer.C_MAX_COUNT = 32
```

Defines the number of layer slots supported by the runtime bit-mask representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L13).

## `#ctor`

<a id="api-3208d85aeb320f37"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.#ctor(System.Int32) 5cb6356d325f7854c143fd3b877043f80349102c3b6d4ec92140af5d9cd32dad -->

```csharp
public Inno.Scene.Layers.GameLayer.GameLayer(int index)
```

Creates a layer identifier from a zero-based layer index.

**Parameter `index`:** The layer index in the inclusive range from zero through thirty-one.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `index` is outside the supported range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L29).

## `CompareTo`

<a id="api-87ab6dc98f3e41af"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.CompareTo(Inno.Scene.Layers.GameLayer) d2fdc37157fae80f3c07d0b9f7f8d04f7e68f0e5fe2df2f549e1e92f27daa923 -->

```csharp
public int Inno.Scene.Layers.GameLayer.CompareTo(Inno.Scene.Layers.GameLayer other)
```

Compares this layer with another layer by index.

**Returns:** A signed value describing the relative index ordering.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L50).

## `Equals`

<a id="api-46816a8a6847691a"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.Equals(Inno.Scene.Layers.GameLayer) 79e93306e4f0f48c0f353a02d4a67279da0b4b42c0e0bda00f07a417f3ca820a -->

```csharp
public bool Inno.Scene.Layers.GameLayer.Equals(Inno.Scene.Layers.GameLayer other)
```

Determines whether another layer identifies the same index.

**Parameter `other`:** The layer to compare with this value.

**Returns:** `true` when both layers identify the same index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L61).

## `Equals`

<a id="api-494b46a3ded30056"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.Equals(System.Object) 33c66f3face869c5b9161b768b81f222087faafe05371be22f3df9603231c979 -->

```csharp
public override bool Inno.Scene.Layers.GameLayer.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L72).

## `GetHashCode`

<a id="api-88c34fe5acd8de57"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.GetHashCode a284fb890c95518d1ce4d806772e54d0611bb18735a781bb6f15a202ac907bf7 -->

```csharp
public override int Inno.Scene.Layers.GameLayer.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L80).

## `op_Equality`

<a id="api-095c145c584515f1"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.op_Equality(Inno.Scene.Layers.GameLayer,Inno.Scene.Layers.GameLayer) f4ee36d3100a9af69841a47d37bd1dfca43e983e707891a2958070c9aacc7126 -->

```csharp
public static bool Inno.Scene.Layers.GameLayer.operator ==(Inno.Scene.Layers.GameLayer left, Inno.Scene.Layers.GameLayer right)
```

Determines whether two layer identifiers contain the same index.

**Parameter `left`:** The first layer identifier.

**Parameter `right`:** The second layer identifier.

**Returns:** `true` when the identifiers are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L102).

## `op_Inequality`

<a id="api-c8c26751f50b8c5e"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.op_Inequality(Inno.Scene.Layers.GameLayer,Inno.Scene.Layers.GameLayer) 92f33046f8afc1860fad0be7c5ba91f8484bfb0e5de3eb2e8725064c85955442 -->

```csharp
public static bool Inno.Scene.Layers.GameLayer.operator !=(Inno.Scene.Layers.GameLayer left, Inno.Scene.Layers.GameLayer right)
```

Determines whether two layer identifiers contain different indices.

**Parameter `left`:** The first layer identifier.

**Parameter `right`:** The second layer identifier.

**Returns:** `true` when the identifiers are different.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L119).

## `ToString`

<a id="api-05ed070821267fb1"></a>
<!-- api: M:Inno.Scene.Layers.GameLayer.ToString 13a2b65c5312fdcb1527f99f7f12e350c87b0365b6fcd3da79639694ac93f41d -->

```csharp
public override string Inno.Scene.Layers.GameLayer.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L88).

## `defaultLayer`

<a id="api-78343193c33b0220"></a>
<!-- api: P:Inno.Scene.Layers.GameLayer.defaultLayer c5f78340b30f597fa7c934b74d53efa78c81470d0a61d6b4b13e42ecb6ce3048 -->

```csharp
public static Inno.Scene.Layers.GameLayer Inno.Scene.Layers.GameLayer.defaultLayer { get; }
```

Gets the built-in default layer stored in slot zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L18).

## `index`

<a id="api-070d1fa97604a477"></a>
<!-- api: P:Inno.Scene.Layers.GameLayer.index b04bd7773574ecf2ff1902f5cc7ead0e07af07f03656bf5a6081d38748028ada -->

```csharp
public int Inno.Scene.Layers.GameLayer.index { get; }
```

Gets the zero-based layer index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L39).
