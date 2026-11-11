---
title: "RuntimeCapabilityId"
description: "Reference for RuntimeCapabilityId in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.86f6eacc513c2e78
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeCapabilityId`

This reference describes `RuntimeCapabilityId` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Runtime.Contracts.RuntimeCapabilityId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-334f3189d7aa1af9) | Method |
| [`Equals`](#api-76246c946ce84c6b) | Method |
| [`Equals`](#api-c00734e20170e35b) | Method |
| [`GetHashCode`](#api-c23e6c36aa5e93e3) | Method |
| [`op_Equality`](#api-8276f12d5fd71fd3) | Method |
| [`op_Inequality`](#api-c049ae3e4cb3e46b) | Method |
| [`ToString`](#api-249232c976d0933b) | Method |
| [`isValid`](#api-1b4f4dccb8b13d5b) | Property |
| [`value`](#api-20049a940d5c1afc) | Property |

## Type declaration

<a id="api-86f6eacc513c2e78"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeCapabilityId 524f3d15b490a5eeb622e7aa93d98fec0b5701b2cb1cccbeccbeb5b9ce5fc9e4 -->

```csharp
public readonly record struct Inno.Runtime.Contracts.RuntimeCapabilityId : System.IEquatable<Inno.Runtime.Contracts.RuntimeCapabilityId>
```

Identifies a backend-neutral capability supplied by composition, not an object or native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L8).

## `#ctor`

<a id="api-334f3189d7aa1af9"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.#ctor(System.String) 9ca8517fdd7c09da66056e0e329e63132a68baaf64fb12d38e5c72c47f81b7bb -->

```csharp
public Inno.Runtime.Contracts.RuntimeCapabilityId.RuntimeCapabilityId(string value)
```

Creates an open capability protocol identifier.

**Parameter `value`:** The non-empty, case-sensitive capability name.

**Throws `System.ArgumentException`:** The identifier is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L19).

## `Equals`

<a id="api-76246c946ce84c6b"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.Equals(Inno.Runtime.Contracts.RuntimeCapabilityId) 35954e93230cf889617d5e5c347e62579e73b23275690fe99aa765ffae65d910 -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeCapabilityId.Equals(Inno.Runtime.Contracts.RuntimeCapabilityId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L8).

## `Equals`

<a id="api-c00734e20170e35b"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.Equals(System.Object) a9ccf5ecf64472f95c355aef80bbdfd30c36a8d5926fbdeab06a132a8b3c5282 -->

```csharp
public override bool Inno.Runtime.Contracts.RuntimeCapabilityId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L8).

## `GetHashCode`

<a id="api-c23e6c36aa5e93e3"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.GetHashCode a23ad36917f865f0d6b3aef84337e68ceb772faaac5bdd3ffa15a63ff19f2231 -->

```csharp
public override int Inno.Runtime.Contracts.RuntimeCapabilityId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L8).

## `op_Equality`

<a id="api-8276f12d5fd71fd3"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.op_Equality(Inno.Runtime.Contracts.RuntimeCapabilityId,Inno.Runtime.Contracts.RuntimeCapabilityId) dc80c12e40f385434d81497a1e9034c4de57f772afe3243706853200988d1a18 -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeCapabilityId.operator ==(Inno.Runtime.Contracts.RuntimeCapabilityId left, Inno.Runtime.Contracts.RuntimeCapabilityId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L8).

## `op_Inequality`

<a id="api-c049ae3e4cb3e46b"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.op_Inequality(Inno.Runtime.Contracts.RuntimeCapabilityId,Inno.Runtime.Contracts.RuntimeCapabilityId) 80de9a4bd95bdda28ba03b88e132db8d7292803006266ff30242cac811d6ed62 -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeCapabilityId.operator !=(Inno.Runtime.Contracts.RuntimeCapabilityId left, Inno.Runtime.Contracts.RuntimeCapabilityId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L8).

## `ToString`

<a id="api-249232c976d0933b"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeCapabilityId.ToString 8971b09f69aab04460ffd162f57c83606383dcfc3ff37063a11b28ce9ee515bc -->

```csharp
public override string Inno.Runtime.Contracts.RuntimeCapabilityId.ToString()
```

Formats the capability for diagnostics.

**Returns:** The protocol name, or an empty string for an uninitialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L41).

## `isValid`

<a id="api-1b4f4dccb8b13d5b"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeCapabilityId.isValid dc0c203b915dbc14fefda506c95d324ff815fadb092a725979fee78fe56449c3 -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeCapabilityId.isValid { get; }
```

Gets whether this value contains a usable capability name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L33).

## `value`

<a id="api-20049a940d5c1afc"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeCapabilityId.value a735d37ba6f28fa69d156d0cfceeeec7fce17a3f7eb85d3534b6c3f676e77f1b -->

```csharp
public string Inno.Runtime.Contracts.RuntimeCapabilityId.value { get; }
```

Gets the stable capability name, without interpreting it as a backend name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeCapabilityId.cs#L28).
