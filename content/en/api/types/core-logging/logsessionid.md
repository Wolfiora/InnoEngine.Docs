---
title: "LogSessionId"
description: "Reference for LogSessionId in Inno.Core.Logging."
uid: api.inno.core.logging.c169673038288000
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `LogSessionId`

This reference describes `LogSessionId` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Logging.LogSessionId>`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-2fb479cb2cfb6772) | Method |
| [`Equals`](#api-272f9713aa822c80) | Method |
| [`Equals`](#api-9552126eb2e33b5d) | Method |
| [`GetHashCode`](#api-b5855fae1ecdea52) | Method |
| [`op_Equality`](#api-b204966815874cf4) | Method |
| [`op_Inequality`](#api-c791e1ca26200be1) | Method |
| [`ToString`](#api-c6e1bc1a9c8b79e8) | Method |
| [`isAssigned`](#api-912f00173511fab9) | Property |
| [`none`](#api-7af7bb15e14dda5f) | Property |

## Type declaration

<a id="api-c169673038288000"></a>
<!-- api: T:Inno.Core.Logging.LogSessionId e9131116c6d2bfd839469f7d7976d1dee5422da3064b6b1a0deb4731cc339a4b -->

```csharp
public readonly record struct Inno.Core.Logging.LogSessionId : System.IEquatable<Inno.Core.Logging.LogSessionId>
```

Identifies the isolated runtime session that produced a log entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `Create`

<a id="api-2fb479cb2cfb6772"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.Create 03f2a1782ad0a27cb1a56292f1d34a5fa4fc909c9dcb20402391e8563ed41ac7 -->

```csharp
public static Inno.Core.Logging.LogSessionId Inno.Core.Logging.LogSessionId.Create()
```

Creates a unique identifier for a new isolated runtime session.

**Returns:** A newly allocated non-empty session identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L33).

## `Equals`

<a id="api-272f9713aa822c80"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.Equals(Inno.Core.Logging.LogSessionId) c4fa95e2f19605574a0d9e5df41c07fda118d34e9128a9da5bca505c0b62a02b -->

```csharp
public bool Inno.Core.Logging.LogSessionId.Equals(Inno.Core.Logging.LogSessionId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `Equals`

<a id="api-9552126eb2e33b5d"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.Equals(System.Object) 5f3544a879f66cf6cfb9a42fceb6e64053dd7f8f6a9bf1cca17c7546dab07eac -->

```csharp
public override bool Inno.Core.Logging.LogSessionId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `GetHashCode`

<a id="api-b5855fae1ecdea52"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.GetHashCode 2db208a6c272b081a2cd7df22126b79750c6521e1591eb89c2c469751637558b -->

```csharp
public override int Inno.Core.Logging.LogSessionId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `op_Equality`

<a id="api-b204966815874cf4"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.op_Equality(Inno.Core.Logging.LogSessionId,Inno.Core.Logging.LogSessionId) c41781d4dd464ba5cac9937c0e29a435a0831d1d3a323b8a38f3085262498fcd -->

```csharp
public static bool Inno.Core.Logging.LogSessionId.operator ==(Inno.Core.Logging.LogSessionId left, Inno.Core.Logging.LogSessionId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `op_Inequality`

<a id="api-c791e1ca26200be1"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.op_Inequality(Inno.Core.Logging.LogSessionId,Inno.Core.Logging.LogSessionId) b2476ddaa68d497afa6adc2d3c9e200410fd727b7228036f942ae7dff3468c1f -->

```csharp
public static bool Inno.Core.Logging.LogSessionId.operator !=(Inno.Core.Logging.LogSessionId left, Inno.Core.Logging.LogSessionId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `ToString`

<a id="api-c6e1bc1a9c8b79e8"></a>
<!-- api: M:Inno.Core.Logging.LogSessionId.ToString be3b1f0b53b6bb8948a59053d914d5f062359fff78aa6c11007b718f50bef427 -->

```csharp
public override string Inno.Core.Logging.LogSessionId.ToString()
```

Returns the stable textual representation used by diagnostics and persisted logs.

**Returns:** The lowercase hexadecimal identifier, or an empty string for process-level work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L41).

## `isAssigned`

<a id="api-912f00173511fab9"></a>
<!-- api: P:Inno.Core.Logging.LogSessionId.isAssigned 1b13482f269878402adba64ac80c2b1d0727f4d6d3c873ea3ecc69e1dc74612c -->

```csharp
public bool Inno.Core.Logging.LogSessionId.isAssigned { get; }
```

Gets whether this identifier names an isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L25).

## `none`

<a id="api-7af7bb15e14dda5f"></a>
<!-- api: P:Inno.Core.Logging.LogSessionId.none 4a41b49cbc6c0fcb09078aa575872fec7b01fa330358e93dc40e6d72ce6baa2a -->

```csharp
public static Inno.Core.Logging.LogSessionId Inno.Core.Logging.LogSessionId.none { get; }
```

Gets an identifier that represents process-level work outside an isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L20).
