---
title: "RuntimeSubsystemId"
description: "Reference for RuntimeSubsystemId in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.09c418cf26add3c2
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystemId`

This reference describes `RuntimeSubsystemId` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Runtime.Contracts.RuntimeSubsystemId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-42193042c23e1b31) | Method |
| [`Equals`](#api-00a80a73260cc6cc) | Method |
| [`Equals`](#api-bdfa92be0924dd86) | Method |
| [`GetHashCode`](#api-f567d32a4b62d7a9) | Method |
| [`op_Equality`](#api-5f2d2da316ee7e43) | Method |
| [`op_Inequality`](#api-f3d89b16dd864811) | Method |
| [`ToString`](#api-6fd18439ca5ef27a) | Method |
| [`isValid`](#api-075778518df227e6) | Property |
| [`value`](#api-d5a256d3c704af13) | Property |

## Type declaration

<a id="api-09c418cf26add3c2"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystemId 773e865c835c08707e64e2ccafdeaebe06adc3c3f4e3e71068d487f772c08091 -->

```csharp
public readonly record struct Inno.Runtime.Contracts.RuntimeSubsystemId : System.IEquatable<Inno.Runtime.Contracts.RuntimeSubsystemId>
```

Identifies one backend-neutral runtime subsystem protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L8).

## `#ctor`

<a id="api-42193042c23e1b31"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.#ctor(System.String) f912ebd81241536f8ecd666516c711ef71afdc838cadd45337658374a887851e -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemId.RuntimeSubsystemId(string value)
```

Creates a stable runtime subsystem identifier.

**Parameter `value`:** The non-empty protocol identifier.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L19).

## `Equals`

<a id="api-00a80a73260cc6cc"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.Equals(Inno.Runtime.Contracts.RuntimeSubsystemId) 4528644589d5b9740314052ddb75cbfb4e6e18429db8aef6eef339d3912dc00c -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeSubsystemId.Equals(Inno.Runtime.Contracts.RuntimeSubsystemId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L8).

## `Equals`

<a id="api-bdfa92be0924dd86"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.Equals(System.Object) 95ff227ceaee461e7ce4dad7feea51db82586124de4392a781e2561e2f413917 -->

```csharp
public override bool Inno.Runtime.Contracts.RuntimeSubsystemId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L8).

## `GetHashCode`

<a id="api-f567d32a4b62d7a9"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.GetHashCode c33238b9b63f371a95b390d3ef118c572a7bd83d3a6cadb6b745ad12d1c0ce50 -->

```csharp
public override int Inno.Runtime.Contracts.RuntimeSubsystemId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L8).

## `op_Equality`

<a id="api-5f2d2da316ee7e43"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.op_Equality(Inno.Runtime.Contracts.RuntimeSubsystemId,Inno.Runtime.Contracts.RuntimeSubsystemId) 3b377c13d2fafcfc748bd33f3f583295a00207fb88569ae381fd3fc4db0199ad -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeSubsystemId.operator ==(Inno.Runtime.Contracts.RuntimeSubsystemId left, Inno.Runtime.Contracts.RuntimeSubsystemId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L8).

## `op_Inequality`

<a id="api-f3d89b16dd864811"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.op_Inequality(Inno.Runtime.Contracts.RuntimeSubsystemId,Inno.Runtime.Contracts.RuntimeSubsystemId) 940d10d06bf02b800516611ffc447747283e816af0d3ae274345690a32159072 -->

```csharp
public static bool Inno.Runtime.Contracts.RuntimeSubsystemId.operator !=(Inno.Runtime.Contracts.RuntimeSubsystemId left, Inno.Runtime.Contracts.RuntimeSubsystemId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L8).

## `ToString`

<a id="api-6fd18439ca5ef27a"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemId.ToString 6cf965ac1e07f423fc4bc6baa2f16b92a331bff7f8091ff4f6c150805f69a908 -->

```csharp
public override string Inno.Runtime.Contracts.RuntimeSubsystemId.ToString()
```

Formats the subsystem identifier for diagnostics.

**Returns:** The protocol value, or an empty string for an uninitialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L41).

## `isValid`

<a id="api-075778518df227e6"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemId.isValid af971e6adb349ae47c2b16e47f6b64e555ee0f1e90dd7241cd4c2cd3e253652f -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeSubsystemId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L33).

## `value`

<a id="api-d5a256d3c704af13"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemId.value b302d30e060e650dbc71d48dadb88e65f76bfc3391bc0805796200082db8e644 -->

```csharp
public string Inno.Runtime.Contracts.RuntimeSubsystemId.value { get; }
```

Gets the stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemId.cs#L28).
