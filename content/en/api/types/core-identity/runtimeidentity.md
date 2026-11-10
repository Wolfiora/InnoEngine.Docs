---
title: RuntimeIdentity
description: Addresses a live identity object within one explicitly identified runtime domain.
uid: api.core-identity.runtimeidentity
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---
# RuntimeIdentity

Addresses a live identity object within one explicitly identified runtime domain.

**Namespace:** `Inno.Core.Identity`  
**Project:** [Inno.Core.Identity](../../projects/inno-core-identity.md)  
**Surface:** Evaluated CLR source, Debug configuration. Script-projection availability requires its own manifest.

## Type declaration

<a id="api-d0a8ebd12dfc6ab9"></a>
<!-- api: T:Inno.Core.Identity.RuntimeIdentity 63e876f3bd538ebd55e3b86a7a2d212c44d0525f7b0799ca62e8d8fa499fd3f9 -->

```csharp
public readonly struct Inno.Core.Identity.RuntimeIdentity : System.IEquatable<Inno.Core.Identity.RuntimeIdentity>
```

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Identity.RuntimeIdentity>`.

This value is suitable for transient interaction payloads only and must never be persisted. Equality compares the stored domain and runtime identifier; it does not verify that an object is still live.

[Register and release an identity object](../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.

## Members

| Member | Kind |
| --- | --- |
| [`RuntimeIdentity(IdentityDomainId,int)`](#api-25fd8c87a6da20ac) | Method |
| [`domainId`](#api-ccc79c3482e5fc01) | Property |
| [`runtimeId`](#api-292ff9b836cea786) | Property |
| [`Equals(RuntimeIdentity)`](#api-7b4b9343fe650354) | Method |
| [`Equals(object?)`](#api-bdf09237329ab979) | Method |
| [`GetHashCode`](#api-80a83f7b83912c26) | Method |
| [`ToString`](#api-7dfbf326bc5c8b7b) | Method |
| [`op_Equality(RuntimeIdentity,RuntimeIdentity)`](#api-f289518236c81b16) | Method |
| [`op_Inequality(RuntimeIdentity,RuntimeIdentity)`](#api-7d58d9620b059f8f) | Method |

## `RuntimeIdentity(IdentityDomainId,int)`

<a id="api-25fd8c87a6da20ac"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.#ctor(Inno.Core.Identity.IdentityDomainId,System.Int32) f08aba03a70dd294e65a1c19eb14059a3795a9b7b4f2ced81a72d54f341a887c -->

```csharp
public Inno.Core.Identity.RuntimeIdentity.RuntimeIdentity(Inno.Core.Identity.IdentityDomainId domainId, int runtimeId)
```

Creates a runtime identity from its domain and generation-safe object identifier.

**Parameter `domainId`:** The identity domain that owns the runtime identifier.

**Parameter `runtimeId`:** The generation-safe runtime identifier allocated inside the domain.

**Throws `System.ArgumentException`:** Thrown when either value is invalid.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L26).

## `domainId`

<a id="api-ccc79c3482e5fc01"></a>
<!-- api: P:Inno.Core.Identity.RuntimeIdentity.domainId 689d9d1687ed047bf7662ea67e7a6dd951c726fce89915599bfae01f796cb9d1 -->

```csharp
public Inno.Core.Identity.IdentityDomainId Inno.Core.Identity.RuntimeIdentity.domainId { get; }
```

Gets the identity domain that owns this runtime identifier.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L41).

## `runtimeId`

<a id="api-292ff9b836cea786"></a>
<!-- api: P:Inno.Core.Identity.RuntimeIdentity.runtimeId d7b22f3e084fa579118499c448b3fbe7ed2665c3d1b61bdcd847b05810e710e0 -->

```csharp
public int Inno.Core.Identity.RuntimeIdentity.runtimeId { get; }
```

Gets the generation-safe identifier interpreted inside `Inno.Core.Identity.RuntimeIdentity.domainId`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L46).

## `Equals(RuntimeIdentity)`

<a id="api-7b4b9343fe650354"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.Equals(Inno.Core.Identity.RuntimeIdentity) b8cc60e6667e01c84e0e997c273e689e8c4d7983727e857dd85e111e145cff7c -->

```csharp
public bool Inno.Core.Identity.RuntimeIdentity.Equals(Inno.Core.Identity.RuntimeIdentity other)
```

Determines whether this value and another value address the same live identity slot.

**Parameter `other`:** The runtime identity to compare with this value.

**Returns:** `true` when both the domain and runtime identifier are equal; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L57).

## `Equals(object?)`

<a id="api-bdf09237329ab979"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.Equals(System.Object) b96157da4e295220e8020b76192cfb0be4134a4352275308102e12b78b9a9d4a -->

```csharp
public override bool Inno.Core.Identity.RuntimeIdentity.Equals(object? obj)
```

Determines whether an object addresses the same live identity slot.

**Parameter `obj`:** The object to compare with this value.

**Returns:** `true` when the object is an equal runtime identity; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L68).

## `GetHashCode`

<a id="api-80a83f7b83912c26"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.GetHashCode ff0bebb6bf1e02b975a0dcf0830f6f713589d3074e4511fbbed89de829e3bce5 -->

```csharp
public override int Inno.Core.Identity.RuntimeIdentity.GetHashCode()
```

Computes a hash code from the domain and runtime identifier.

**Returns:** A hash code consistent with runtime identity equality.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L76).

## `ToString`

<a id="api-7dfbf326bc5c8b7b"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.ToString d5caa62854f8c64aa712f1a75b9789b1b8a4c79d2dc76f5b3f24ccd9bc9d5866 -->

```csharp
public override string Inno.Core.Identity.RuntimeIdentity.ToString()
```

Formats this transient identity for diagnostics.

**Returns:** A domain-qualified runtime identifier.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L84).

## `op_Equality(RuntimeIdentity,RuntimeIdentity)`

<a id="api-f289518236c81b16"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.op_Equality(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.RuntimeIdentity) c1b66a8567006108e35f0c514efa1fb44d029e829c5cc6c98abd19bf0c330b06 -->

```csharp
public static bool Inno.Core.Identity.RuntimeIdentity.operator ==(Inno.Core.Identity.RuntimeIdentity left, Inno.Core.Identity.RuntimeIdentity right)
```

Determines whether two runtime identities are equal.

**Parameter `left`:** The first runtime identity.

**Parameter `right`:** The second runtime identity.

**Returns:** `true` when both values are equal; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L98).

## `op_Inequality(RuntimeIdentity,RuntimeIdentity)`

<a id="api-7d58d9620b059f8f"></a>
<!-- api: M:Inno.Core.Identity.RuntimeIdentity.op_Inequality(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.RuntimeIdentity) cc161dcfec706d58b6b37f5944e4a535921a53c644e9fe2551c00e9fdedc775e -->

```csharp
public static bool Inno.Core.Identity.RuntimeIdentity.operator !=(Inno.Core.Identity.RuntimeIdentity left, Inno.Core.Identity.RuntimeIdentity right)
```

Determines whether two runtime identities are different.

**Parameter `left`:** The first runtime identity.

**Parameter `right`:** The second runtime identity.

**Returns:** `true` when the values are different; otherwise, `false`.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L115).