---
title: IdentityDomainId
description: Identifies one isolated runtime identity namespace within the current process.
uid: api.core-identity.identitydomainid
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---
# IdentityDomainId

Identifies one isolated runtime identity namespace within the current process.

**Namespace:** `Inno.Core.Identity`  
**Project:** [Inno.Core.Identity](../../projects/inno-core-identity.md)  
**Surface:** Evaluated CLR source, Debug configuration. Script-projection availability requires its own manifest.

## Type declaration

<a id="api-23a3e219915d3dd0"></a>
<!-- api: T:Inno.Core.Identity.IdentityDomainId 4738d0fcb2e5c60e48c6f96a0e7c9d8e5e4b971031e6d53dbcbdc38941ac1cfb -->

```csharp
public readonly struct Inno.Core.Identity.IdentityDomainId : System.IEquatable<Inno.Core.Identity.IdentityDomainId>
```

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Identity.IdentityDomainId>`.

Domain identifiers are runtime-only values. They must never be serialized or used as persistent object identity.

[Register and release an identity object](../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.

## Members

| Member | Kind |
| --- | --- |
| [`value`](#api-ba9317d5579ebe3f) | Property |
| [`isValid`](#api-29337279b9a3f675) | Property |
| [`Equals(IdentityDomainId)`](#api-75f50dbdb74fd521) | Method |
| [`Equals(object?)`](#api-f8d6a57fad5b14b8) | Method |
| [`GetHashCode`](#api-d9e47fe8899ec2da) | Method |
| [`ToString`](#api-57f28063eb53de01) | Method |
| [`op_Equality(IdentityDomainId,IdentityDomainId)`](#api-0eae18545ba9250e) | Method |
| [`op_Inequality(IdentityDomainId,IdentityDomainId)`](#api-e8cceb1521dfdda4) | Method |

## `value`

<a id="api-ba9317d5579ebe3f"></a>
<!-- api: P:Inno.Core.Identity.IdentityDomainId.value 58f1eca0053a6cc6ec05e6655eda22acf6717098da679650a81627ab60882343 -->

```csharp
public int Inno.Core.Identity.IdentityDomainId.value { get; }
```

Gets the process-local numeric value assigned to this domain.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L21).

## `isValid`

<a id="api-29337279b9a3f675"></a>
<!-- api: P:Inno.Core.Identity.IdentityDomainId.isValid 51c4c701dec73a93a35b3891f2c5a61176b72671b74d2159f9a0a73417776c1a -->

```csharp
public bool Inno.Core.Identity.IdentityDomainId.isValid { get; }
```

Gets whether this value identifies an allocated runtime domain.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L26).

## `Equals(IdentityDomainId)`

<a id="api-75f50dbdb74fd521"></a>
<!-- api: M:Inno.Core.Identity.IdentityDomainId.Equals(Inno.Core.Identity.IdentityDomainId) 5309e9d4edbcdb5044599bec042ad6078051f9c689a39251887fbc245b342cb9 -->

```csharp
public bool Inno.Core.Identity.IdentityDomainId.Equals(Inno.Core.Identity.IdentityDomainId other)
```

Determines whether this value and another value identify the same runtime domain.

**Parameter `other`:** The domain identifier to compare with this value.

**Returns:** `true` when both values identify the same domain; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L37).

## `Equals(object?)`

<a id="api-f8d6a57fad5b14b8"></a>
<!-- api: M:Inno.Core.Identity.IdentityDomainId.Equals(System.Object) 3c236f30444a6e1141e2bd83e90df6e1f240fb08be053481412549571fa9c529 -->

```csharp
public override bool Inno.Core.Identity.IdentityDomainId.Equals(object? obj)
```

Determines whether an object represents the same runtime domain.

**Parameter `obj`:** The object to compare with this value.

**Returns:** `true` when the object is an equal domain identifier; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L48).

## `GetHashCode`

<a id="api-d9e47fe8899ec2da"></a>
<!-- api: M:Inno.Core.Identity.IdentityDomainId.GetHashCode 1c6baaf1ae2f1921a6886e23a07f772546552e99efc3c415530c975318b5b8ee -->

```csharp
public override int Inno.Core.Identity.IdentityDomainId.GetHashCode()
```

Computes a hash code for this runtime domain identifier.

**Returns:** A hash code derived from the process-local domain value.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L56).

## `ToString`

<a id="api-57f28063eb53de01"></a>
<!-- api: M:Inno.Core.Identity.IdentityDomainId.ToString 68d8fc75f0b31c787ffdc06e49f215c3da098e9d5e329a3edd356bbd00f3dc7f -->

```csharp
public override string Inno.Core.Identity.IdentityDomainId.ToString()
```

Formats this runtime domain identifier for diagnostics.

**Returns:** The numeric domain value, or `<invalid>` when the value is not allocated.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L64).

## `op_Equality(IdentityDomainId,IdentityDomainId)`

<a id="api-0eae18545ba9250e"></a>
<!-- api: M:Inno.Core.Identity.IdentityDomainId.op_Equality(Inno.Core.Identity.IdentityDomainId,Inno.Core.Identity.IdentityDomainId) d09a76d22ed4a4fd4f4853895164398a54c1edfed63e31a62d3c28c53dd88f00 -->

```csharp
public static bool Inno.Core.Identity.IdentityDomainId.operator ==(Inno.Core.Identity.IdentityDomainId left, Inno.Core.Identity.IdentityDomainId right)
```

Determines whether two values identify the same runtime domain.

**Parameter `left`:** The first domain identifier.

**Parameter `right`:** The second domain identifier.

**Returns:** `true` when the values are equal; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L78).

## `op_Inequality(IdentityDomainId,IdentityDomainId)`

<a id="api-e8cceb1521dfdda4"></a>
<!-- api: M:Inno.Core.Identity.IdentityDomainId.op_Inequality(Inno.Core.Identity.IdentityDomainId,Inno.Core.Identity.IdentityDomainId) dd3c1afd51fcfd5b4e48236c2045d5e1328a59c3ca93ad4f25f45ebfb44b1ce0 -->

```csharp
public static bool Inno.Core.Identity.IdentityDomainId.operator !=(Inno.Core.Identity.IdentityDomainId left, Inno.Core.Identity.IdentityDomainId right)
```

Determines whether two values identify different runtime domains.

**Parameter `left`:** The first domain identifier.

**Parameter `right`:** The second domain identifier.

**Returns:** `true` when the values are different; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L95).