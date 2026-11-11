---
title: "RuntimeFixedFrame"
description: "Reference for RuntimeFixedFrame in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.2957e8a7123139d0
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeFixedFrame`

This reference describes `RuntimeFixedFrame` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Runtime.Contracts.RuntimeFixedFrame>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1821a92650cf5009) | Method |
| [`Equals`](#api-e8aa3cc09b258011) | Method |
| [`Equals`](#api-5493e2239ded8518) | Method |
| [`GetHashCode`](#api-7ceae6c7a00c2afb) | Method |
| [`op_Equality`](#api-22b161b72e1576ad) | Method |
| [`op_Inequality`](#api-0a2440762ecc5fe6) | Method |
| [`ToString`](#api-3913fb65fb25f7c4) | Method |
| [`deltaTime`](#api-2a661453c30a4023) | Property |
| [`stepIndex`](#api-7bf72c07af75466b) | Property |
| [`time`](#api-7d21765c14e478f5) | Property |

## Type declaration

<a id="api-2957e8a7123139d0"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeFixedFrame af77e8f75c0c8b2024feef447dfe7cb5bdcd501ddc39acd16f7ce23b8c0ceaf6 -->

```csharp
public readonly record struct Inno.Runtime.Contracts.RuntimeFixedFrame : System.IEquatable<Inno.Runtime.Contracts.RuntimeFixedFrame>
```

Provides immutable timing state to one deterministic fixed simulation step.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `#ctor`

<a id="api-1821a92650cf5009"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.#ctor(System.Int64,System.Single,System.Single) e1de7a74642467d0625d0c7c32a5f2c815228c9b6fc836634b30688ed08b2f76 -->

```csharp
public Inno.Runtime.Contracts.RuntimeFixedFrame.RuntimeFixedFrame(long stepIndex, float time, float deltaTime)
```

Creates one deterministic fixed-step timing value.

**Parameter `stepIndex`:** The monotonically increasing fixed-step index.

**Parameter `time`:** Accumulated scaled fixed time.

**Parameter `deltaTime`:** The fixed interval.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L20).

## `Equals`

<a id="api-e8aa3cc09b258011"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.Equals(Inno.Runtime.Contracts.RuntimeFixedFrame) 91b3cd99300d9565ca47588e1b39ee3eb366252d729bd4c36c7fe6c140b6c910 -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeFixedFrame.Equals(Inno.Runtime.Contracts.RuntimeFixedFrame other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `Equals`

<a id="api-5493e2239ded8518"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.Equals(System.Object) 6295465225b66d90fdbb3e08c83c16629b0abfd88ab59f7f473b707be08dc46f -->

```csharp
public override bool Inno.Runtime.Contracts.RuntimeFixedFrame.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `GetHashCode`

<a id="api-7ceae6c7a00c2afb"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.GetHashCode 535fdb6616be772758fb658997ffc56859ac40a813a93a56c8243058af049a9a -->

```csharp
public override int Inno.Runtime.Contracts.RuntimeFixedFrame.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `op_Equality`

<a id="api-22b161b72e1576ad"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.op_Equality(Inno.Runtime.Contracts.RuntimeFixedFrame,Inno.Runtime.Contracts.RuntimeFixedFrame) 3587617606af689bb1e1600025e25e75347e0215f77005dc3ccb3536ee134e7d -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeFixedFrame.operator ==(Inno.Runtime.Contracts.RuntimeFixedFrame left, Inno.Runtime.Contracts.RuntimeFixedFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `op_Inequality`

<a id="api-0a2440762ecc5fe6"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.op_Inequality(Inno.Runtime.Contracts.RuntimeFixedFrame,Inno.Runtime.Contracts.RuntimeFixedFrame) 8de943a5ae4ae4336ec63e950565e47caa6373b09f9a84f264bd4495771bf483 -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeFixedFrame.operator !=(Inno.Runtime.Contracts.RuntimeFixedFrame left, Inno.Runtime.Contracts.RuntimeFixedFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `ToString`

<a id="api-3913fb65fb25f7c4"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFixedFrame.ToString 69fd68d4aa38c0cb7d70ccd0e62b474aa336ee409ccab848f38d05cf9282f0d5 -->

```csharp
public override string Inno.Runtime.Contracts.RuntimeFixedFrame.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L6).

## `deltaTime`

<a id="api-2a661453c30a4023"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFixedFrame.deltaTime 28481c24410e8151f996a3c48e00128af64a44356ee99ff78bd7dc4c74bf4400 -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFixedFrame.deltaTime { get; }
```

Gets the configured fixed simulation interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L43).

## `stepIndex`

<a id="api-7bf72c07af75466b"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFixedFrame.stepIndex 77b47c313a311da76a776582172fd43a3c9e4b77fe41b547c00e9ba9b06b7ad0 -->

```csharp
public long Inno.Runtime.Contracts.RuntimeFixedFrame.stepIndex { get; }
```

Gets the zero-based fixed-step index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L33).

## `time`

<a id="api-7d21765c14e478f5"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFixedFrame.time a6052da95943563bd9012cf5a37f4967c4fc0c0c4c75f4b1928f8f639b0ec0de -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFixedFrame.time { get; }
```

Gets accumulated fixed simulation time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFixedFrame.cs#L38).
