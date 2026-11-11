---
title: "RuntimeFrame"
description: "Reference for RuntimeFrame in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.167789a09a16b983
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeFrame`

This reference describes `RuntimeFrame` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Runtime.Contracts.RuntimeFrame>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-47b48447b84c6c93) | Method |
| [`Equals`](#api-740e26f7c0374124) | Method |
| [`Equals`](#api-3452d8fde1e33cb6) | Method |
| [`GetHashCode`](#api-2e60f4619733e4e1) | Method |
| [`op_Equality`](#api-f0ae6c58d9b5a50c) | Method |
| [`op_Inequality`](#api-87b13bbdfa1d8263) | Method |
| [`ToString`](#api-e25ef5d12f2659ab) | Method |
| [`deltaTime`](#api-9743b949ba82533a) | Property |
| [`frameIndex`](#api-ba5b6838765e9dce) | Property |
| [`isPaused`](#api-a48d9b20a775c966) | Property |
| [`time`](#api-5f5c49743959ff0d) | Property |
| [`timeScale`](#api-ccff96588d57a05e) | Property |
| [`unscaledDeltaTime`](#api-f40c33fdf4a197b9) | Property |
| [`unscaledTime`](#api-7443d47cf0a22c31) | Property |

## Type declaration

<a id="api-167789a09a16b983"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeFrame 0a726d099ad2fbbce0d6c6649cec4431ec4a8e6e7b84739062f7380fdd1c7037 -->

```csharp
public readonly record struct Inno.Runtime.Contracts.RuntimeFrame : System.IEquatable<Inno.Runtime.Contracts.RuntimeFrame>
```

Provides immutable timing state to one variable runtime frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `#ctor`

<a id="api-47b48447b84c6c93"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.#ctor(System.Int64,System.Single,System.Single,System.Single,System.Single,System.Single,System.Boolean) 45e531a5d50489a118ae72c2b52380890f966c664ee84e8d94a4f507e969c9a1 -->

```csharp
public Inno.Runtime.Contracts.RuntimeFrame.RuntimeFrame(long frameIndex, float time, float unscaledTime, float deltaTime, float unscaledDeltaTime, float timeScale, bool isPaused)
```

Creates the immutable timing snapshot for one variable frame.

**Parameter `frameIndex`:** The monotonically increasing owner frame index.

**Parameter `time`:** Accumulated scaled time.

**Parameter `unscaledTime`:** Accumulated unscaled time.

**Parameter `deltaTime`:** Scaled interval.

**Parameter `unscaledDeltaTime`:** Unscaled interval.

**Parameter `timeScale`:** Simulation multiplier.

**Parameter `isPaused`:** Whether scaled simulation is paused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L34).

## `Equals`

<a id="api-740e26f7c0374124"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.Equals(Inno.Runtime.Contracts.RuntimeFrame) 168f863b4b62050adf66d2ca60c20395c46d0dcb828adcf9ea2ed78c61882f54 -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeFrame.Equals(Inno.Runtime.Contracts.RuntimeFrame other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `Equals`

<a id="api-3452d8fde1e33cb6"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.Equals(System.Object) 825fd4627c9b8e09edcecf50d686279daa58daa2d44b30d2cce4d75907530d59 -->

```csharp
public override bool Inno.Runtime.Contracts.RuntimeFrame.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `GetHashCode`

<a id="api-2e60f4619733e4e1"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.GetHashCode 1382325f0f010828ecb586f7b41328993df948330841d568db57bda43619bde8 -->

```csharp
public override int Inno.Runtime.Contracts.RuntimeFrame.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `op_Equality`

<a id="api-f0ae6c58d9b5a50c"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.op_Equality(Inno.Runtime.Contracts.RuntimeFrame,Inno.Runtime.Contracts.RuntimeFrame) 1698d9bd4b2831ffed4930468a153b80f7c6f1b98503cad5c9e7d14aaee86a53 -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeFrame.operator ==(Inno.Runtime.Contracts.RuntimeFrame left, Inno.Runtime.Contracts.RuntimeFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `op_Inequality`

<a id="api-87b13bbdfa1d8263"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.op_Inequality(Inno.Runtime.Contracts.RuntimeFrame,Inno.Runtime.Contracts.RuntimeFrame) 2dc6eae85eba2e879101dc4ebd8527be31320d6cc0f53069cc7ed8819b900778 -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeFrame.operator !=(Inno.Runtime.Contracts.RuntimeFrame left, Inno.Runtime.Contracts.RuntimeFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `ToString`

<a id="api-e25ef5d12f2659ab"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeFrame.ToString 47a279899b7b1d60be2abc51506a5947259dd9672f9f9dcff8a3d27b8483a91c -->

```csharp
public override string Inno.Runtime.Contracts.RuntimeFrame.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L8).

## `deltaTime`

<a id="api-9743b949ba82533a"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.deltaTime 2dd1f374362704a163855e8d2d834b7d29fb39917d076b998b4b84c143a53ca8 -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFrame.deltaTime { get; }
```

Gets the scaled variable frame interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L70).

## `frameIndex`

<a id="api-ba5b6838765e9dce"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.frameIndex d0fdd0b4a6b80139267ca70f3b06bea36c3d83d7afa15440a17d65f61822f421 -->

```csharp
public long Inno.Runtime.Contracts.RuntimeFrame.frameIndex { get; }
```

Gets the zero-based session frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L55).

## `isPaused`

<a id="api-a48d9b20a775c966"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.isPaused 667f39ce0431a670a32fb40fba7589566353645f13890244c9a5550077944fca -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeFrame.isPaused { get; }
```

Gets whether scaled simulation is paused for this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L85).

## `time`

<a id="api-5f5c49743959ff0d"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.time 9d7f6d6eda8a1923e653350602445b70ea7fddf3e40510512a178f30db85b47c -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFrame.time { get; }
```

Gets accumulated scaled session time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L60).

## `timeScale`

<a id="api-ccff96588d57a05e"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.timeScale 1e45351d9ce8600aad30554ec0aefd26cfec427160ffc0abe22a64a5a2d68805 -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFrame.timeScale { get; }
```

Gets the simulation time multiplier used for this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L80).

## `unscaledDeltaTime`

<a id="api-f40c33fdf4a197b9"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.unscaledDeltaTime ccc00163fd6f39aba0a3d36756c9275c63234b9d147c9924bdde73c7e1b2f91a -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFrame.unscaledDeltaTime { get; }
```

Gets the unscaled variable frame interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L75).

## `unscaledTime`

<a id="api-7443d47cf0a22c31"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeFrame.unscaledTime 907ad6592da218044023f0aea1317d0a0e9d5024ab2c038368bb16448f2baedd -->

```csharp
public float Inno.Runtime.Contracts.RuntimeFrame.unscaledTime { get; }
```

Gets accumulated unscaled session time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeFrame.cs#L65).
