---
title: "AssemblyModuleInfo"
description: "Reference for AssemblyModuleInfo in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.19cf03aa2fb1cee4
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyModuleInfo`

This reference describes `AssemblyModuleInfo` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Extensibility.Modules.AssemblyModuleInfo>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bf7dddd6689a9398) | Method |
| [`Deconstruct`](#api-7f27f4f4350ef92d) | Method |
| [`Equals`](#api-e6640c7fd31d00c5) | Method |
| [`Equals`](#api-10b659eeda9874f2) | Method |
| [`GetHashCode`](#api-6f52c0622da93f8f) | Method |
| [`op_Equality`](#api-e511089a0f57b1b7) | Method |
| [`op_Inequality`](#api-af29b8add2c2ca0e) | Method |
| [`ToString`](#api-c306bcc43d077240) | Method |
| [`assemblyNames`](#api-7773fb87ccf32eef) | Property |
| [`collectible`](#api-93b6e2aae2e6caba) | Property |
| [`domain`](#api-90c5d71d3511f83f) | Property |
| [`externallyOwned`](#api-4a3f8ca0b1ae887e) | Property |
| [`generation`](#api-517fd422d6b53a24) | Property |
| [`handle`](#api-c3c00b378e943886) | Property |
| [`moduleName`](#api-ec74cb25871591b6) | Property |
| [`scope`](#api-b382459227b522b1) | Property |
| [`status`](#api-11d6f38f5763ad1e) | Property |
| [`upstreamModuleNames`](#api-ccafc51b3117b11b) | Property |

## Type declaration

<a id="api-19cf03aa2fb1cee4"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyModuleInfo 792fc44422937b76a1711466b2abf3974bf160ce2897116950e968dc49abe4c1 -->

```csharp
public sealed record Inno.Extensibility.Modules.AssemblyModuleInfo : System.IEquatable<Inno.Extensibility.Modules.AssemblyModuleInfo>
```

Provides non-owning diagnostic information about an active assembly module.

**Parameter `handle`:** The opaque handle validated by this operation.

**Parameter `moduleName`:** The string value used to initialize this instance.

**Parameter `generation`:** The owner generation used to reject stale handles or snapshots.

**Parameter `collectible`:** The bool value used to initialize this instance.

**Parameter `externallyOwned`:** The bool value used to initialize this instance.

**Parameter `domain`:** The assembly domain value used to initialize this instance.

**Parameter `scope`:** The assembly scope value used to initialize this instance.

**Parameter `status`:** The assembly module status value used to initialize this instance.

**Parameter `assemblyNames`:** The immutable assembly names exposed for this active module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `#ctor`

<a id="api-bf7dddd6689a9398"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.#ctor(Inno.Extensibility.Modules.AssemblyModuleHandle,System.String,System.Int32,System.Boolean,System.Boolean,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,Inno.Extensibility.Modules.AssemblyModuleStatus,System.Collections.Generic.IReadOnlyList{System.String}) 8b296cf174ac33b160092d3e08371d6d956543939d0ab220ea29fa1864e92130 -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleInfo.AssemblyModuleInfo(Inno.Extensibility.Modules.AssemblyModuleHandle handle, string moduleName, int generation, bool collectible, bool externallyOwned, Inno.Extensibility.Modules.AssemblyDomain domain, Inno.Extensibility.Modules.AssemblyScope scope, Inno.Extensibility.Modules.AssemblyModuleStatus status, System.Collections.Generic.IReadOnlyList<string> assemblyNames)
```

Provides non-owning diagnostic information about an active assembly module.

**Parameter `handle`:** The opaque handle validated by this operation.

**Parameter `moduleName`:** The string value used to initialize this instance.

**Parameter `generation`:** The owner generation used to reject stale handles or snapshots.

**Parameter `collectible`:** The bool value used to initialize this instance.

**Parameter `externallyOwned`:** The bool value used to initialize this instance.

**Parameter `domain`:** The assembly domain value used to initialize this instance.

**Parameter `scope`:** The assembly scope value used to initialize this instance.

**Parameter `status`:** The assembly module status value used to initialize this instance.

**Parameter `assemblyNames`:** The immutable assembly names exposed for this active module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `Deconstruct`

<a id="api-7f27f4f4350ef92d"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.Deconstruct(Inno.Extensibility.Modules.AssemblyModuleHandle@,System.String@,System.Int32@,System.Boolean@,System.Boolean@,Inno.Extensibility.Modules.AssemblyDomain@,Inno.Extensibility.Modules.AssemblyScope@,Inno.Extensibility.Modules.AssemblyModuleStatus@,System.Collections.Generic.IReadOnlyList{System.String}@) 5c528f566713bbd358c5730c563816a49b9c76d8e840c18e444fd0066df649f1 -->

```csharp
public void Inno.Extensibility.Modules.AssemblyModuleInfo.Deconstruct(out Inno.Extensibility.Modules.AssemblyModuleHandle handle, out string moduleName, out int generation, out bool collectible, out bool externallyOwned, out Inno.Extensibility.Modules.AssemblyDomain domain, out Inno.Extensibility.Modules.AssemblyScope scope, out Inno.Extensibility.Modules.AssemblyModuleStatus status, out System.Collections.Generic.IReadOnlyList<string> assemblyNames)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `Equals`

<a id="api-e6640c7fd31d00c5"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.Equals(Inno.Extensibility.Modules.AssemblyModuleInfo) f66c5d3bb160872c7c401a2696f0da0983dcd64aa59349379bc9ec0edc8ac8e5 -->

```csharp
public bool Inno.Extensibility.Modules.AssemblyModuleInfo.Equals(Inno.Extensibility.Modules.AssemblyModuleInfo? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `Equals`

<a id="api-10b659eeda9874f2"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.Equals(System.Object) 046784b76b23446366c7c3388c486102dde3e9742cb07066cf1f0f328be65bca -->

```csharp
public override bool Inno.Extensibility.Modules.AssemblyModuleInfo.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `GetHashCode`

<a id="api-6f52c0622da93f8f"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.GetHashCode 12704d9d618eb3d2bf19055042aca7f14e54df1aef5c4e44b3ebb2b59ee47bb1 -->

```csharp
public override int Inno.Extensibility.Modules.AssemblyModuleInfo.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `op_Equality`

<a id="api-e511089a0f57b1b7"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.op_Equality(Inno.Extensibility.Modules.AssemblyModuleInfo,Inno.Extensibility.Modules.AssemblyModuleInfo) 80bea7fa5b85275aa9b63a7e8ecb7446b0b02969818f83cdf5660db8e80b2143 -->

```csharp
public static bool Inno.Extensibility.Modules.AssemblyModuleInfo.operator ==(Inno.Extensibility.Modules.AssemblyModuleInfo? left, Inno.Extensibility.Modules.AssemblyModuleInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `op_Inequality`

<a id="api-af29b8add2c2ca0e"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.op_Inequality(Inno.Extensibility.Modules.AssemblyModuleInfo,Inno.Extensibility.Modules.AssemblyModuleInfo) 213aafaad57ccdba7c6d0d6235ef8dbc7dcede39c36df1fd69e460e7da55e4e6 -->

```csharp
public static bool Inno.Extensibility.Modules.AssemblyModuleInfo.operator !=(Inno.Extensibility.Modules.AssemblyModuleInfo? left, Inno.Extensibility.Modules.AssemblyModuleInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `ToString`

<a id="api-c306bcc43d077240"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleInfo.ToString d64ebbd35d5b557d9d6f7705ea71143b5bbda053f8a9270bec7fbf61063ab7c7 -->

```csharp
public override string Inno.Extensibility.Modules.AssemblyModuleInfo.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L47).

## `assemblyNames`

<a id="api-7773fb87ccf32eef"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.assemblyNames ac43f4c7eb4613d4faea856ddee15c41c686f4f3ba9068c9275355e9cacd6ece -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Extensibility.Modules.AssemblyModuleInfo.assemblyNames { get; init; }
```

The immutable assembly names exposed for this active module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L56).

## `collectible`

<a id="api-93b6e2aae2e6caba"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.collectible e392ddbc6bcd8f1e82f73b473ed7131be84947b80a17fb7e5e7c9452312e26bd -->

```csharp
public bool Inno.Extensibility.Modules.AssemblyModuleInfo.collectible { get; init; }
```

The bool value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L51).

## `domain`

<a id="api-90c5d71d3511f83f"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.domain 79c73dad7535f6b35b329dd81a77d957bc5168a9e1848e1fc479a5734c68596d -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Extensibility.Modules.AssemblyModuleInfo.domain { get; init; }
```

The assembly domain value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L53).

## `externallyOwned`

<a id="api-4a3f8ca0b1ae887e"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.externallyOwned 9da3068d5dca52cd1d64a8d23a06164c9d5d5cf536269505b9ca4911106592e7 -->

```csharp
public bool Inno.Extensibility.Modules.AssemblyModuleInfo.externallyOwned { get; init; }
```

The bool value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L52).

## `generation`

<a id="api-517fd422d6b53a24"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.generation 566dfe95739f78ac4cfce17870f596cca4bf7c46b8a2e3f8232575662bc50933 -->

```csharp
public int Inno.Extensibility.Modules.AssemblyModuleInfo.generation { get; init; }
```

The owner generation used to reject stale handles or snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L50).

## `handle`

<a id="api-c3c00b378e943886"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.handle 69146e3f2d18eab406c50caecc7bbcc8aa8e981e01a823213a82012e1e44a5b9 -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleHandle Inno.Extensibility.Modules.AssemblyModuleInfo.handle { get; init; }
```

The opaque handle validated by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L48).

## `moduleName`

<a id="api-ec74cb25871591b6"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.moduleName 6941b13a989f44dac4191f8ffcfef47ea50b406c03e03950da3e83a405ec96d0 -->

```csharp
public string Inno.Extensibility.Modules.AssemblyModuleInfo.moduleName { get; init; }
```

The string value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L49).

## `scope`

<a id="api-b382459227b522b1"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.scope 4abdcb39c0fc07176ff1d5d3b44ce8ea735e31f92c9db595d1047919b904d3c4 -->

```csharp
public Inno.Extensibility.Modules.AssemblyScope Inno.Extensibility.Modules.AssemblyModuleInfo.scope { get; init; }
```

The assembly scope value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L54).

## `status`

<a id="api-11d6f38f5763ad1e"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.status c326dbe05493dfc83aaca0caf4803e60161fa2ce625d05c3e661b606d15200e4 -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleStatus Inno.Extensibility.Modules.AssemblyModuleInfo.status { get; init; }
```

The assembly module status value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L55).

## `upstreamModuleNames`

<a id="api-ccafc51b3117b11b"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleInfo.upstreamModuleNames 3f83cf5607e17557e1cb2edfff46fc95239428a271be5ae7570e1fcc7b5b4ff7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Extensibility.Modules.AssemblyModuleInfo.upstreamModuleNames { get; init; }
```

Gets stable module dependencies used by this active generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L61).
