---
title: "GameLayerMask"
description: "Reference for GameLayerMask in Inno.Scene."
uid: api.inno.scene.runtime-script.6095f489c52abfb0
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameLayerMask`

This reference describes `GameLayerMask` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Scene.GameLayerMask>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70c3c0c38ced79d6) | Method |
| [`Contains`](#api-243c7e2cb365291b) | Method |
| [`Equals`](#api-2f45484863592608) | Method |
| [`Equals`](#api-c5ab8c3ef678a0ee) | Method |
| [`FromLayers`](#api-39a4c078dca84545) | Method |
| [`GetHashCode`](#api-a2dec595aecbdc94) | Method |
| [`op_BitwiseAnd`](#api-6b408fd432b8de5a) | Method |
| [`op_BitwiseOr`](#api-b76021e3a2aca738) | Method |
| [`op_Equality`](#api-5a3c8d7e66310ed3) | Method |
| [`op_Inequality`](#api-a488de701aa51630) | Method |
| [`op_OnesComplement`](#api-a06dd5a3f9b04daf) | Method |
| [`ToString`](#api-e39ba98220917384) | Method |
| [`With`](#api-1fc6793f809c3ca6) | Method |
| [`Without`](#api-0c844a3cae628c85) | Method |
| [`everything`](#api-2860402fb29ef2c9) | Property |
| [`none`](#api-e509d873ac675a94) | Property |
| [`value`](#api-1f5e7f4f3b269bb2) | Property |

## Type declaration

<a id="api-6095f489c52abfb0"></a>
<!-- api: T:InnoEngine.Scene.GameLayerMask 508c05bc771da9dcdfa9bd9a65b1e2731675f5bff1f23824ae0ea1841847b14b -->

```csharp
public readonly struct InnoEngine.Scene.GameLayerMask : System.IEquatable<InnoEngine.Scene.GameLayerMask>
```

Stores a compact set of scene layers for rendering, physics, and query filtering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L9).

## `#ctor`

<a id="api-70c3c0c38ced79d6"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.#ctor(System.UInt32) 6577eb8d47a4f201910eeb08c7665ced3f7dd5050e208b2e96d8f80cadcf1e0d -->

```csharp
public InnoEngine.Scene.GameLayerMask.GameLayerMask(uint value)
```

Creates a mask from its raw thirty-two-bit representation.

**Parameter `value`:** The raw mask bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L27).

## `Contains`

<a id="api-243c7e2cb365291b"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.Contains(InnoEngine.Scene.GameLayer) 05877290c074978b06d9cf61c19797b602dc081f78045a9e4e91db73630abcd2 -->

```csharp
public bool InnoEngine.Scene.GameLayerMask.Contains(InnoEngine.Scene.GameLayer layer)
```

Determines whether the supplied layer is contained in this mask.

**Returns:** `true` when the layer bit is enabled.

**Parameter `layer`:** The layer consumed by contains; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L67).

## `Equals`

<a id="api-2f45484863592608"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.Equals(InnoEngine.Scene.GameLayerMask) 653d785643d12a33b6e2006b02351b43337862bdb71c93e21debb49119d90217 -->

```csharp
public bool InnoEngine.Scene.GameLayerMask.Equals(InnoEngine.Scene.GameLayerMask other)
```

Determines whether another mask contains the same layer bits.

**Parameter `other`:** The mask to compare with this value.

**Returns:** `true` when both masks contain the same bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L100).

## `Equals`

<a id="api-c5ab8c3ef678a0ee"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.Equals(System.Object) d431b31d569d9be905583684b14261b111511fc94ff5f6d2c9b3942758bbb94e -->

```csharp
public override bool InnoEngine.Scene.GameLayerMask.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L111).

## `FromLayers`

<a id="api-39a4c078dca84545"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{InnoEngine.Scene.GameLayer}) d3745e92d5d2462898861840ab5293574744bd1623190f5e95faaa1d37522a4e -->

```csharp
public static InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable<InnoEngine.Scene.GameLayer> layers)
```

Creates a mask containing the supplied layers.

**Parameter `layers`:** The layers whose bits should be enabled.

**Returns:** A mask containing every supplied layer.

**Throws `System.ArgumentNullException`:** Thrown when `layers` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L49).

## `GetHashCode`

<a id="api-a2dec595aecbdc94"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.GetHashCode 45b5cca5a2c4555b19b9693e6f050c45cfb817e40e06b51114548bebe8a1406a -->

```csharp
public override int InnoEngine.Scene.GameLayerMask.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L119).

## `op_BitwiseAnd`

<a id="api-6b408fd432b8de5a"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.op_BitwiseAnd(InnoEngine.Scene.GameLayerMask,InnoEngine.Scene.GameLayerMask) 38d902bb2f66c61848ca71a75072305a99938b811a2d5a06b549d4598fdbc3c9 -->

```csharp
public static InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.operator &(InnoEngine.Scene.GameLayerMask left, InnoEngine.Scene.GameLayerMask right)
```

Retains only layer bits enabled in both masks.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** The bitwise intersection of both masks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L158).

## `op_BitwiseOr`

<a id="api-b76021e3a2aca738"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.op_BitwiseOr(InnoEngine.Scene.GameLayerMask,InnoEngine.Scene.GameLayerMask) 296fb027f5f95eb4fb3f6f552a557c2c411585babe575976b9265b7f109d6f52 -->

```csharp
public static InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.operator |(InnoEngine.Scene.GameLayerMask left, InnoEngine.Scene.GameLayerMask right)
```

Combines the enabled bits from two masks.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** The bitwise union of both masks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L141).

## `op_Equality`

<a id="api-5a3c8d7e66310ed3"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.op_Equality(InnoEngine.Scene.GameLayerMask,InnoEngine.Scene.GameLayerMask) fd122c68f0d409222dc34773688463b4bc5a390e1eea30edf53d13d3bd40c2f7 -->

```csharp
public static bool InnoEngine.Scene.GameLayerMask.operator ==(InnoEngine.Scene.GameLayerMask left, InnoEngine.Scene.GameLayerMask right)
```

Determines whether two masks contain the same bits.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** `true` when both masks are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L186).

## `op_Inequality`

<a id="api-a488de701aa51630"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.op_Inequality(InnoEngine.Scene.GameLayerMask,InnoEngine.Scene.GameLayerMask) 39bebb7c73d651992f54cf17cc83b4963bd2d2f1aa08471789044a8504daa0e5 -->

```csharp
public static bool InnoEngine.Scene.GameLayerMask.operator !=(InnoEngine.Scene.GameLayerMask left, InnoEngine.Scene.GameLayerMask right)
```

Determines whether two masks contain different bits.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** `true` when both masks differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L203).

## `op_OnesComplement`

<a id="api-a06dd5a3f9b04daf"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.op_OnesComplement(InnoEngine.Scene.GameLayerMask) a0e4befd05f099309ce3ef264805ea4aab587740b92a9c94c576acff864e25f7 -->

```csharp
public static InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.operator ~(InnoEngine.Scene.GameLayerMask mask)
```

Inverts every layer bit in a mask.

**Parameter `mask`:** The mask to invert.

**Returns:** The complement of the supplied mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L172).

## `ToString`

<a id="api-e39ba98220917384"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.ToString 8bc9d768f0548cf0337124d080f789daccdf055bd28ad82efc51876835f494ba -->

```csharp
public override string InnoEngine.Scene.GameLayerMask.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L127).

## `With`

<a id="api-1fc6793f809c3ca6"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.With(InnoEngine.Scene.GameLayer) 3df854ba79b25ed551bd7011a260ee1f768ce3aa82d0bfb2e96dc3880483deba -->

```csharp
public InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.With(InnoEngine.Scene.GameLayer layer)
```

Returns a mask with the supplied layer enabled.

**Returns:** The updated immutable mask.

**Parameter `layer`:** The layer consumed by with; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L78).

## `Without`

<a id="api-0c844a3cae628c85"></a>
<!-- api: M:InnoEngine.Scene.GameLayerMask.Without(InnoEngine.Scene.GameLayer) 92017ff62288d6965e905f71ab4b3ecb176954d94d010c65225453d6663f7996 -->

```csharp
public InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.Without(InnoEngine.Scene.GameLayer layer)
```

Returns a mask with the supplied layer disabled.

**Returns:** The updated immutable mask.

**Parameter `layer`:** The layer consumed by without; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L89).

## `everything`

<a id="api-2860402fb29ef2c9"></a>
<!-- api: P:InnoEngine.Scene.GameLayerMask.everything 2dc9dfd0239419a6271d00c53765d3df458607bb3c598668af5ec25e6083b62b -->

```csharp
public static InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.everything { get; }
```

Gets a mask containing every supported layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L19).

## `none`

<a id="api-e509d873ac675a94"></a>
<!-- api: P:InnoEngine.Scene.GameLayerMask.none 7cbd675441484f2373bce497c6a487ec8d5a2d0c4a7f04e5064961a3004bbf93 -->

```csharp
public static InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerMask.none { get; }
```

Gets a mask containing no layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L14).

## `value`

<a id="api-1f5e7f4f3b269bb2"></a>
<!-- api: P:InnoEngine.Scene.GameLayerMask.value d9987089fb971ad700cf8be37fd32e7690edc710edc38b2a92d5bc64b142c7df -->

```csharp
public uint InnoEngine.Scene.GameLayerMask.value { get; }
```

Gets the raw thirty-two-bit mask value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L35).
