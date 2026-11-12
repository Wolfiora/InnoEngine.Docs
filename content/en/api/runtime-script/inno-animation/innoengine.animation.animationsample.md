---
title: "AnimationSample"
description: "Reference for AnimationSample in Inno.Animation."
uid: api.inno.animation.runtime-script.0b35559fba13b81c
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationSample`

This reference describes `AnimationSample` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Animation.AnimationSample>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6503641830fbf416) | Method |
| [`Equals`](#api-4a7e490c3c1cab1f) | Method |
| [`Equals`](#api-4472bb2c2d4986d3) | Method |
| [`GetHashCode`](#api-df91f9ab2cd326c6) | Method |
| [`op_Equality`](#api-7c59968f5d57c22a) | Method |
| [`op_Inequality`](#api-1d1b5cfc206916d4) | Method |
| [`ToString`](#api-f534bb094a919ac4) | Method |
| [`binding`](#api-3f7df4950f53e2e9) | Property |
| [`target`](#api-e1bbf41b44ae315e) | Property |
| [`value`](#api-0f867044942bf5d6) | Property |

## Type declaration

<a id="api-0b35559fba13b81c"></a>
<!-- api: T:InnoEngine.Animation.AnimationSample b5c7cf3b769c2987ee6f70b18938cce650b8daeae22eeafbaa257bff75036027 -->

```csharp
public readonly struct InnoEngine.Animation.AnimationSample : System.IEquatable<InnoEngine.Animation.AnimationSample>
```

Stores one final blended value emitted for a stable binding identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `#ctor`

<a id="api-6503641830fbf416"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.#ctor(InnoEngine.Animation.AnimationTarget,InnoEngine.Animation.AnimationBindingId,InnoEngine.Animation.AnimationValue) 7f4b2207ff4ef673288cd77f1d3103ba18085515bd6597215cb5c9cae810fbd5 -->

```csharp
public InnoEngine.Animation.AnimationSample.AnimationSample(InnoEngine.Animation.AnimationTarget target, InnoEngine.Animation.AnimationBindingId binding, InnoEngine.Animation.AnimationValue value)
```

Creates one final animation sample.

**Parameter `binding`:** Stable target binding.

**Parameter `value`:** Final blended value.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L336).

## `Equals`

<a id="api-4a7e490c3c1cab1f"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.Equals(InnoEngine.Animation.AnimationSample) aff7d4908ce2a9b3ba21346e9a7f3d1a97ee12d4c0368676dca182e4f816e26f -->

```csharp
public bool InnoEngine.Animation.AnimationSample.Equals(InnoEngine.Animation.AnimationSample other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `Equals`

<a id="api-4472bb2c2d4986d3"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.Equals(System.Object) d8dde408ee8ebf5e2b7c1ad60f0c6bfec795cb2083755e0b8a933bfcdca539a5 -->

```csharp
public override bool InnoEngine.Animation.AnimationSample.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `GetHashCode`

<a id="api-df91f9ab2cd326c6"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.GetHashCode 96a46319ce97969a72bd14bd637eaef396c0be372d545034a03bb34deb17f1d6 -->

```csharp
public override int InnoEngine.Animation.AnimationSample.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `op_Equality`

<a id="api-7c59968f5d57c22a"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.op_Equality(InnoEngine.Animation.AnimationSample,InnoEngine.Animation.AnimationSample) d0b733ca73c5c0c4171159cc810bd7af70364aae1630cc5dc2aa228f3897b7ad -->

```csharp
public static bool InnoEngine.Animation.AnimationSample.operator ==(InnoEngine.Animation.AnimationSample left, InnoEngine.Animation.AnimationSample right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `op_Inequality`

<a id="api-1d1b5cfc206916d4"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.op_Inequality(InnoEngine.Animation.AnimationSample,InnoEngine.Animation.AnimationSample) 7d664bac63780f44797f74e54ffd9882da23a90e7bcab24fd6df50fc0c382f1f -->

```csharp
public static bool InnoEngine.Animation.AnimationSample.operator !=(InnoEngine.Animation.AnimationSample left, InnoEngine.Animation.AnimationSample right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `ToString`

<a id="api-f534bb094a919ac4"></a>
<!-- api: M:InnoEngine.Animation.AnimationSample.ToString 68a190a7dfbc4c14376c875b782a242c65d1748cbe45b3925ce9646f4428af1e -->

```csharp
public override string InnoEngine.Animation.AnimationSample.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `binding`

<a id="api-3f7df4950f53e2e9"></a>
<!-- api: P:InnoEngine.Animation.AnimationSample.binding 541dc59a0c8c2adf16062cf12dfde2039caf6e385e16e5aa2903536be71d225d -->

```csharp
public InnoEngine.Animation.AnimationBindingId InnoEngine.Animation.AnimationSample.binding { get; }
```

Gets the stable target binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L353).

## `target`

<a id="api-e1bbf41b44ae315e"></a>
<!-- api: P:InnoEngine.Animation.AnimationSample.target 7da942674ded4b0b78481c36ddb876c40f813f9873783d845231a636fb518f53 -->

```csharp
public InnoEngine.Animation.AnimationTarget InnoEngine.Animation.AnimationSample.target { get; }
```

Gets the generation-qualified destination for this sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L358).

## `value`

<a id="api-0f867044942bf5d6"></a>
<!-- api: P:InnoEngine.Animation.AnimationSample.value ba7f579e4b4e6b1e5b473e067df593f7e49e03f8fabd5dd47ed041118c4b8fc7 -->

```csharp
public InnoEngine.Animation.AnimationValue InnoEngine.Animation.AnimationSample.value { get; }
```

Gets the final blended value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L363).
