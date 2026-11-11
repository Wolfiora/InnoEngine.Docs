---
title: "RenderSamplerState"
description: "Reference for RenderSamplerState in Inno.Rendering."
uid: api.inno.rendering.4c6b41a322f9d891
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderSamplerState`

This reference describes `RenderSamplerState` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderSamplerState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-792f7556ae3fdcf4) | Method |
| [`Equals`](#api-edf6ebde9df2c6f5) | Method |
| [`Equals`](#api-d9a7768544b37f70) | Method |
| [`GetHashCode`](#api-ec870ae39b390812) | Method |
| [`op_Equality`](#api-3c2997778db5d9bd) | Method |
| [`op_Inequality`](#api-d5e9a3b150f2570e) | Method |
| [`addressU`](#api-eff53abfb08dd7ed) | Property |
| [`addressV`](#api-112a94baca2576b2) | Property |
| [`addressW`](#api-1e28ac26d768435b) | Property |
| [`filter`](#api-cdaf209840776926) | Property |
| [`linearClamp`](#api-c4d4694f5ad20597) | Property |

## Type declaration

<a id="api-4c6b41a322f9d891"></a>
<!-- api: T:Inno.Rendering.RenderSamplerState be86301bd00f0c621dcf5e4d36141b54356cfb2063ddc24814e1d185482bbf21 -->

```csharp
public struct Inno.Rendering.RenderSamplerState : System.IEquatable<Inno.Rendering.RenderSamplerState>
```

Describes one native-serializable backend-neutral sampler binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L52).

## `#ctor`

<a id="api-792f7556ae3fdcf4"></a>
<!-- api: M:Inno.Rendering.RenderSamplerState.#ctor(Inno.Rendering.RenderSamplerFilter,Inno.Rendering.RenderSamplerAddressMode,Inno.Rendering.RenderSamplerAddressMode,Inno.Rendering.RenderSamplerAddressMode) 5f1b869b6869a53f56a29024c0a136ac2e92247156866119f1c609aa2cdcf3be -->

```csharp
public Inno.Rendering.RenderSamplerState.RenderSamplerState(Inno.Rendering.RenderSamplerFilter filter, Inno.Rendering.RenderSamplerAddressMode addressU, Inno.Rendering.RenderSamplerAddressMode addressV, Inno.Rendering.RenderSamplerAddressMode addressW)
```

Creates a sampler state.

**Parameter `filter`:** Minification, magnification, and mip filtering contract.

**Parameter `addressU`:** Horizontal address mode.

**Parameter `addressV`:** Vertical address mode.

**Parameter `addressW`:** Depth or cube address mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L78).

## `Equals`

<a id="api-edf6ebde9df2c6f5"></a>
<!-- api: M:Inno.Rendering.RenderSamplerState.Equals(Inno.Rendering.RenderSamplerState) 2c6c239c46d3b7950119a45250af2ecbf03825fd4454bebb1fdedab8447772d3 -->

```csharp
public readonly bool Inno.Rendering.RenderSamplerState.Equals(Inno.Rendering.RenderSamplerState other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L119).

## `Equals`

<a id="api-d9a7768544b37f70"></a>
<!-- api: M:Inno.Rendering.RenderSamplerState.Equals(System.Object) 02bad8aa17d2b292311a8e073e4d15b48a4d488febfc08b859a32f51f30266cd -->

```csharp
public override readonly bool Inno.Rendering.RenderSamplerState.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L134).

## `GetHashCode`

<a id="api-ec870ae39b390812"></a>
<!-- api: M:Inno.Rendering.RenderSamplerState.GetHashCode 1d3cb73eb18f5ae1f940819bf31baf838a9f2c004ee4d3d5fa92e47604d4dd9d -->

```csharp
public override readonly int Inno.Rendering.RenderSamplerState.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L142).

## `op_Equality`

<a id="api-3c2997778db5d9bd"></a>
<!-- api: M:Inno.Rendering.RenderSamplerState.op_Equality(Inno.Rendering.RenderSamplerState,Inno.Rendering.RenderSamplerState) c83901cd6b97cb047be19cf567a0c91081b5abe0fda9e3f25dd96f4e15e17c5a -->

```csharp
public static bool Inno.Rendering.RenderSamplerState.operator ==(Inno.Rendering.RenderSamplerState left, Inno.Rendering.RenderSamplerState right)
```

Determines whether two sampler descriptions are equal.

**Parameter `left`:** Left sampler description.

**Parameter `right`:** Right sampler description.

**Returns:** True when every filtering and addressing field is equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L156).

## `op_Inequality`

<a id="api-d5e9a3b150f2570e"></a>
<!-- api: M:Inno.Rendering.RenderSamplerState.op_Inequality(Inno.Rendering.RenderSamplerState,Inno.Rendering.RenderSamplerState) 2c651126ae4fc0d4c506118b48a10e3c6ec64742569ee803f89f6af6f235fb36 -->

```csharp
public static bool Inno.Rendering.RenderSamplerState.operator !=(Inno.Rendering.RenderSamplerState left, Inno.Rendering.RenderSamplerState right)
```

Determines whether two sampler descriptions differ.

**Parameter `left`:** Left sampler description.

**Parameter `right`:** Right sampler description.

**Returns:** True when at least one filtering or addressing field differs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L173).

## `addressU`

<a id="api-eff53abfb08dd7ed"></a>
<!-- api: P:Inno.Rendering.RenderSamplerState.addressU d0d26d38273f19094096bf025ccf728ee29479d2a9b869c6b612ad499d5bdc44 -->

```csharp
public Inno.Rendering.RenderSamplerAddressMode Inno.Rendering.RenderSamplerState.addressU { get; set; }
```

Gets horizontal addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L98).

## `addressV`

<a id="api-112a94baca2576b2"></a>
<!-- api: P:Inno.Rendering.RenderSamplerState.addressV 62dc39a489f86c232180c81e5128fd0916a70dd76a19988e06c171c801ce815d -->

```csharp
public Inno.Rendering.RenderSamplerAddressMode Inno.Rendering.RenderSamplerState.addressV { get; set; }
```

Gets vertical addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L103).

## `addressW`

<a id="api-1e28ac26d768435b"></a>
<!-- api: P:Inno.Rendering.RenderSamplerState.addressW 1dd4748bbe3a556d017fa0b1323aaa63b4dede3ede4fa4abff5574a178cc43bf -->

```csharp
public Inno.Rendering.RenderSamplerAddressMode Inno.Rendering.RenderSamplerState.addressW { get; set; }
```

Gets depth or cube addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L108).

## `filter`

<a id="api-cdaf209840776926"></a>
<!-- api: P:Inno.Rendering.RenderSamplerState.filter 6f23ac18258d2d88f1508dcaf984a2c23e78f4c5bc57b1dd67454dd82b4eb606 -->

```csharp
public Inno.Rendering.RenderSamplerFilter Inno.Rendering.RenderSamplerState.filter { get; set; }
```

Gets the filter contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L93).

## `linearClamp`

<a id="api-c4d4694f5ad20597"></a>
<!-- api: P:Inno.Rendering.RenderSamplerState.linearClamp 84020b09e2cce0d7f65f7eb6866b4540e4b7bdfd4c03e3caf205975e8a846486 -->

```csharp
public static Inno.Rendering.RenderSamplerState Inno.Rendering.RenderSamplerState.linearClamp { get; }
```

Gets linear filtering with clamped addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L57).
