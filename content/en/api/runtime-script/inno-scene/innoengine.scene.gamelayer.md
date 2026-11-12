---
title: "GameLayer"
description: "Reference for GameLayer in Inno.Scene."
uid: api.inno.scene.runtime-script.216ec4bbbecf226b
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameLayer`

This reference describes `GameLayer` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Scene.GameLayer>`, `System.IComparable<InnoEngine.Scene.GameLayer>`.

## Members

| Member | Kind |
| --- | --- |
| [`C_MAX_COUNT`](#api-a441c71986443f9c) | Field |
| [`#ctor`](#api-6304884021976f3f) | Method |
| [`CompareTo`](#api-b1c9466a66d66339) | Method |
| [`Equals`](#api-0c2e15816365ea4e) | Method |
| [`Equals`](#api-83b8693e766c9d8c) | Method |
| [`GetHashCode`](#api-d78575e675e3f350) | Method |
| [`op_Equality`](#api-b9420488325c7c04) | Method |
| [`op_Inequality`](#api-34dc3d259c09adce) | Method |
| [`ToString`](#api-9e9f3df59dea92bd) | Method |
| [`defaultLayer`](#api-ba516f8d2ecf5d36) | Property |
| [`index`](#api-920d828799c6f95f) | Property |

## Type declaration

<a id="api-216ec4bbbecf226b"></a>
<!-- api: T:InnoEngine.Scene.GameLayer 0b46ce154c468a473456fbb0cd123d633ce345d4967da27e9f61012320af8fb8 -->

```csharp
public readonly struct InnoEngine.Scene.GameLayer : System.IEquatable<InnoEngine.Scene.GameLayer>, System.IComparable<InnoEngine.Scene.GameLayer>
```

Identifies one of the thirty-two runtime layers available to scene objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L8).

## `C_MAX_COUNT`

<a id="api-a441c71986443f9c"></a>
<!-- api: F:InnoEngine.Scene.GameLayer.C_MAX_COUNT 134f616f460c786fe4f73e1335a12d3574dcc2a40f23ef1d03dbd34b247541ac -->

```csharp
public const int InnoEngine.Scene.GameLayer.C_MAX_COUNT = 32
```

Defines the number of layer slots supported by the runtime bit-mask representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L13).

## `#ctor`

<a id="api-6304884021976f3f"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.#ctor(System.Int32) 68beb99f1413ed53aa75bca228f65974eaabaeff538b98618d350ed9783f68f7 -->

```csharp
public InnoEngine.Scene.GameLayer.GameLayer(int index)
```

Creates a layer identifier from a zero-based layer index.

**Parameter `index`:** The layer index in the inclusive range from zero through thirty-one.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `index` is outside the supported range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L29).

## `CompareTo`

<a id="api-b1c9466a66d66339"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.CompareTo(InnoEngine.Scene.GameLayer) 4e2260cf642c6886295095861e39b023f7ab42de93991ba66cd9c165128708ea -->

```csharp
public int InnoEngine.Scene.GameLayer.CompareTo(InnoEngine.Scene.GameLayer other)
```

Compares this layer with another layer by index.

**Returns:** A signed value describing the relative index ordering.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L50).

## `Equals`

<a id="api-0c2e15816365ea4e"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.Equals(InnoEngine.Scene.GameLayer) 5074f92fedc9a4d0ecaad01e20619048a21238660d965642d3ccb4f244a3cc29 -->

```csharp
public bool InnoEngine.Scene.GameLayer.Equals(InnoEngine.Scene.GameLayer other)
```

Determines whether another layer identifies the same index.

**Parameter `other`:** The layer to compare with this value.

**Returns:** `true` when both layers identify the same index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L61).

## `Equals`

<a id="api-83b8693e766c9d8c"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.Equals(System.Object) 6b8e9128c080bbd8b92332ba14f146a95e6238a5aa777c908733d3b077c5dcc5 -->

```csharp
public override bool InnoEngine.Scene.GameLayer.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L72).

## `GetHashCode`

<a id="api-d78575e675e3f350"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.GetHashCode 13c62a55bf648adca3c5955fea7f556b0dfd333e43fc4ce5f62ab2c56a72af4f -->

```csharp
public override int InnoEngine.Scene.GameLayer.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L80).

## `op_Equality`

<a id="api-b9420488325c7c04"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.op_Equality(InnoEngine.Scene.GameLayer,InnoEngine.Scene.GameLayer) 78cb965e77a842206828bcec3f37a0fa95fcd329f863cc3107023d51ae8bbd11 -->

```csharp
public static bool InnoEngine.Scene.GameLayer.operator ==(InnoEngine.Scene.GameLayer left, InnoEngine.Scene.GameLayer right)
```

Determines whether two layer identifiers contain the same index.

**Parameter `left`:** The first layer identifier.

**Parameter `right`:** The second layer identifier.

**Returns:** `true` when the identifiers are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L102).

## `op_Inequality`

<a id="api-34dc3d259c09adce"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.op_Inequality(InnoEngine.Scene.GameLayer,InnoEngine.Scene.GameLayer) b8157116d1b5626d1315d21d54d48e73607847c7190242975d3999ec8446d0b2 -->

```csharp
public static bool InnoEngine.Scene.GameLayer.operator !=(InnoEngine.Scene.GameLayer left, InnoEngine.Scene.GameLayer right)
```

Determines whether two layer identifiers contain different indices.

**Parameter `left`:** The first layer identifier.

**Parameter `right`:** The second layer identifier.

**Returns:** `true` when the identifiers are different.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L119).

## `ToString`

<a id="api-9e9f3df59dea92bd"></a>
<!-- api: M:InnoEngine.Scene.GameLayer.ToString 40c1ef4170b5cc76398294b793e307e213fc4f991004b55f595c1d387c34a915 -->

```csharp
public override string InnoEngine.Scene.GameLayer.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L88).

## `defaultLayer`

<a id="api-ba516f8d2ecf5d36"></a>
<!-- api: P:InnoEngine.Scene.GameLayer.defaultLayer c2eb03e2fd5463f999cfee060bf3d37bc0b4acee958022e3f205bf92cdbefe0c -->

```csharp
public static InnoEngine.Scene.GameLayer InnoEngine.Scene.GameLayer.defaultLayer { get; }
```

Gets the built-in default layer stored in slot zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L18).

## `index`

<a id="api-920d828799c6f95f"></a>
<!-- api: P:InnoEngine.Scene.GameLayer.index b530539004db12c1ac1753948d7d2555239d738f5812e14794f78f057d5f735f -->

```csharp
public int InnoEngine.Scene.GameLayer.index { get; }
```

Gets the zero-based layer index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayer.cs#L39).
