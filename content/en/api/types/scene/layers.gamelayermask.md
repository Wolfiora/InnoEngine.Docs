---
title: "Layers.GameLayerMask"
description: "Reference for Layers.GameLayerMask in Inno.Scene."
uid: api.inno.scene.b09093b6b1884c7c
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `Layers.GameLayerMask`

This reference describes `Layers.GameLayerMask` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Scene.Layers.GameLayerMask>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-749e7df94527d245) | Method |
| [`Contains`](#api-f832dec1a098d72c) | Method |
| [`Equals`](#api-03db392b0dd9b99c) | Method |
| [`Equals`](#api-4f7ca7593f27ec5c) | Method |
| [`FromLayers`](#api-febda5e4931b5ef1) | Method |
| [`GetHashCode`](#api-8fd131bc11a2c151) | Method |
| [`op_BitwiseAnd`](#api-3608e156acb3bc7a) | Method |
| [`op_BitwiseOr`](#api-22b6a9e41f45aa40) | Method |
| [`op_Equality`](#api-de6a099b82ebb583) | Method |
| [`op_Inequality`](#api-e7a6157d9604a159) | Method |
| [`op_OnesComplement`](#api-4343aa8f0117c767) | Method |
| [`ToString`](#api-0e37b5f5f259625a) | Method |
| [`With`](#api-460ae2b2bd7313df) | Method |
| [`Without`](#api-737a872e1cf8859e) | Method |
| [`everything`](#api-aa70a30c136760d7) | Property |
| [`none`](#api-8d57cca2f1215154) | Property |
| [`value`](#api-ca1151b3b8aba571) | Property |

## Type declaration

<a id="api-b09093b6b1884c7c"></a>
<!-- api: T:Inno.Scene.Layers.GameLayerMask fdf906da88f76797b254e9b837a454ce97f1084054f38c7ebbdafa681b4d38b3 -->

```csharp
public readonly struct Inno.Scene.Layers.GameLayerMask : System.IEquatable<Inno.Scene.Layers.GameLayerMask>
```

Stores a compact set of scene layers for rendering, physics, and query filtering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L9).

## `#ctor`

<a id="api-749e7df94527d245"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.#ctor(System.UInt32) 4cdf57942ccdcdaf417ba69a38d46ce7c354b5eb2abe03c0b57669c77cf93877 -->

```csharp
public Inno.Scene.Layers.GameLayerMask.GameLayerMask(uint value)
```

Creates a mask from its raw thirty-two-bit representation.

**Parameter `value`:** The raw mask bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L27).

## `Contains`

<a id="api-f832dec1a098d72c"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.Contains(Inno.Scene.Layers.GameLayer) 9e655ab32f2cfd63cbe82680047b13906b21ae4c08eb00f73193e5f25372572e -->

```csharp
public bool Inno.Scene.Layers.GameLayerMask.Contains(Inno.Scene.Layers.GameLayer layer)
```

Determines whether the supplied layer is contained in this mask.

**Returns:** `true` when the layer bit is enabled.

**Parameter `layer`:** The layer consumed by contains; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L67).

## `Equals`

<a id="api-03db392b0dd9b99c"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.Equals(Inno.Scene.Layers.GameLayerMask) 3d45e85da55c094af5a73321793ceaf30a0195130b853de9600ff17df76349be -->

```csharp
public bool Inno.Scene.Layers.GameLayerMask.Equals(Inno.Scene.Layers.GameLayerMask other)
```

Determines whether another mask contains the same layer bits.

**Parameter `other`:** The mask to compare with this value.

**Returns:** `true` when both masks contain the same bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L100).

## `Equals`

<a id="api-4f7ca7593f27ec5c"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.Equals(System.Object) 2db9aa397d760a4d27c9ecf0f340f218bb1ab5be33d5cf8aa1a36b0240278a2c -->

```csharp
public override bool Inno.Scene.Layers.GameLayerMask.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L111).

## `FromLayers`

<a id="api-febda5e4931b5ef1"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{Inno.Scene.Layers.GameLayer}) 8ed1b40c4af0fb681cc406ba86b4ee9931c873926c3b43c026b25221102f5fe0 -->

```csharp
public static Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable<Inno.Scene.Layers.GameLayer> layers)
```

Creates a mask containing the supplied layers.

**Parameter `layers`:** The layers whose bits should be enabled.

**Returns:** A mask containing every supplied layer.

**Throws `System.ArgumentNullException`:** Thrown when `layers` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L49).

## `GetHashCode`

<a id="api-8fd131bc11a2c151"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.GetHashCode 30dc2fa3301812343a5282f7ee891eff0608501c69eb9a4ff0dced1fb49a9800 -->

```csharp
public override int Inno.Scene.Layers.GameLayerMask.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L119).

## `op_BitwiseAnd`

<a id="api-3608e156acb3bc7a"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.op_BitwiseAnd(Inno.Scene.Layers.GameLayerMask,Inno.Scene.Layers.GameLayerMask) c884ca5057e60069e1c208b3cc89dd2c19b8b2830d2fcaa43c8c930bceb22f42 -->

```csharp
public static Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.operator &(Inno.Scene.Layers.GameLayerMask left, Inno.Scene.Layers.GameLayerMask right)
```

Retains only layer bits enabled in both masks.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** The bitwise intersection of both masks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L158).

## `op_BitwiseOr`

<a id="api-22b6a9e41f45aa40"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.op_BitwiseOr(Inno.Scene.Layers.GameLayerMask,Inno.Scene.Layers.GameLayerMask) bc7812575971e990b5346de194d2610ce8b57bfc7f97c53d96a81a4f1e4a62d8 -->

```csharp
public static Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.operator |(Inno.Scene.Layers.GameLayerMask left, Inno.Scene.Layers.GameLayerMask right)
```

Combines the enabled bits from two masks.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** The bitwise union of both masks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L141).

## `op_Equality`

<a id="api-de6a099b82ebb583"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.op_Equality(Inno.Scene.Layers.GameLayerMask,Inno.Scene.Layers.GameLayerMask) f2230713470b627fbcb8bcc7e3a4cc1962b58782b1f6a4a6fab66bbe42da2bc9 -->

```csharp
public static bool Inno.Scene.Layers.GameLayerMask.operator ==(Inno.Scene.Layers.GameLayerMask left, Inno.Scene.Layers.GameLayerMask right)
```

Determines whether two masks contain the same bits.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** `true` when both masks are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L186).

## `op_Inequality`

<a id="api-e7a6157d9604a159"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.op_Inequality(Inno.Scene.Layers.GameLayerMask,Inno.Scene.Layers.GameLayerMask) 7487035a727a192bd189b40f30bf488e3c730f34b0ae70bcc780ae327c8ab1de -->

```csharp
public static bool Inno.Scene.Layers.GameLayerMask.operator !=(Inno.Scene.Layers.GameLayerMask left, Inno.Scene.Layers.GameLayerMask right)
```

Determines whether two masks contain different bits.

**Parameter `left`:** The first mask.

**Parameter `right`:** The second mask.

**Returns:** `true` when both masks differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L203).

## `op_OnesComplement`

<a id="api-4343aa8f0117c767"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.op_OnesComplement(Inno.Scene.Layers.GameLayerMask) a06b5ab27fd6ee9585ba97752737fd6b38e45d1a24af50a87ecbad6d07cbe933 -->

```csharp
public static Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.operator ~(Inno.Scene.Layers.GameLayerMask mask)
```

Inverts every layer bit in a mask.

**Parameter `mask`:** The mask to invert.

**Returns:** The complement of the supplied mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L172).

## `ToString`

<a id="api-0e37b5f5f259625a"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.ToString 43b5487057fb565984692267c38c974148c3f79238ebce0b80a1095f24580daf -->

```csharp
public override string Inno.Scene.Layers.GameLayerMask.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L127).

## `With`

<a id="api-460ae2b2bd7313df"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.With(Inno.Scene.Layers.GameLayer) 88aa4b78c6f72313b778daf0b00662405124f63f9fe024da2bed1694bfa552d6 -->

```csharp
public Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.With(Inno.Scene.Layers.GameLayer layer)
```

Returns a mask with the supplied layer enabled.

**Returns:** The updated immutable mask.

**Parameter `layer`:** The layer consumed by with; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L78).

## `Without`

<a id="api-737a872e1cf8859e"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerMask.Without(Inno.Scene.Layers.GameLayer) 4330dce1073777224f8834ce8f19b8d1677633dcd108dd2960a4a1b01e1f7155 -->

```csharp
public Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.Without(Inno.Scene.Layers.GameLayer layer)
```

Returns a mask with the supplied layer disabled.

**Returns:** The updated immutable mask.

**Parameter `layer`:** The layer consumed by without; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L89).

## `everything`

<a id="api-aa70a30c136760d7"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerMask.everything 9813f9a4b0d86d360c33271a172d545f6f99b85708f3fe3c267ac2eb190e8fe3 -->

```csharp
public static Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.everything { get; }
```

Gets a mask containing every supported layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L19).

## `none`

<a id="api-8d57cca2f1215154"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerMask.none 29d159cba3c35a2e16f58305d9673149193038c1eb221d40ba4f3f7d104b33d0 -->

```csharp
public static Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerMask.none { get; }
```

Gets a mask containing no layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L14).

## `value`

<a id="api-ca1151b3b8aba571"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerMask.value 1f779ab3e50d1c42a32529caf5f7a5865a3c0e26f7cebd7e3cbc6d192bb44745 -->

```csharp
public uint Inno.Scene.Layers.GameLayerMask.value { get; }
```

Gets the raw thirty-two-bit mask value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerMask.cs#L35).
