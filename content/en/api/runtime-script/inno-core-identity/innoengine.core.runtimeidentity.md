---
title: "RuntimeIdentity"
description: "Reference for RuntimeIdentity in Inno.Core.Identity."
uid: api.inno.core.identity.runtime-script.dda2e1617223b79d
kind: api
owners:
  - Inno.Core.Identity
apiSurface: runtime-script
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `RuntimeIdentity`

This reference describes `RuntimeIdentity` in `Inno.Core.Identity`. Read the [shared contract](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Core.RuntimeIdentity>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6458c39ee16ff155) | Method |
| [`Equals`](#api-b68fd6000408f53c) | Method |
| [`Equals`](#api-00e129bc4b193105) | Method |
| [`GetHashCode`](#api-5aef9d725ee0c480) | Method |
| [`op_Equality`](#api-935f899327ae52aa) | Method |
| [`op_Inequality`](#api-4e0776844e0fb4bb) | Method |
| [`ToString`](#api-f68c139df0be4984) | Method |
| [`domainId`](#api-06432eedc98bc768) | Property |
| [`runtimeId`](#api-82494a5d9665a102) | Property |

## Type declaration

<a id="api-dda2e1617223b79d"></a>
<!-- api: T:InnoEngine.Core.RuntimeIdentity 77bc8f8d20b9ba84210dc6e51d59f5513b6a37843095dccdbc0f20ba4f1df40d -->

```csharp
public readonly struct InnoEngine.Core.RuntimeIdentity : System.IEquatable<InnoEngine.Core.RuntimeIdentity>
```

Addresses a live identity object within one explicitly identified runtime domain.

**Constraints:** This value is suitable for transient interaction payloads only and must never be persisted.
Equality compares the stored domain and runtime identifier; it does not verify that an object is still live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L12).

## `#ctor`

<a id="api-6458c39ee16ff155"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.#ctor(InnoEngine.Core.IdentityDomainId,System.Int32) 8727897d4fefbd782e6a98b06567d63a03183994a9aef7db4513c4e1a22c4c45 -->

```csharp
public InnoEngine.Core.RuntimeIdentity.RuntimeIdentity(InnoEngine.Core.IdentityDomainId domainId, int runtimeId)
```

Creates a runtime identity from its domain and generation-safe object identifier.

**Parameter `domainId`:** The identity domain that owns the runtime identifier.

**Parameter `runtimeId`:** The generation-safe runtime identifier allocated inside the domain.

**Throws `System.ArgumentException`:** Thrown when either value is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L26).

## `Equals`

<a id="api-b68fd6000408f53c"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.Equals(InnoEngine.Core.RuntimeIdentity) a67ded0f41a0947d353dbd8e172dadd56d53d5a879fccc95894a12e2299658de -->

```csharp
public bool InnoEngine.Core.RuntimeIdentity.Equals(InnoEngine.Core.RuntimeIdentity other)
```

Determines whether this value and another value address the same live identity slot.

**Parameter `other`:** The runtime identity to compare with this value.

**Returns:** `true` when both the domain and runtime identifier are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L57).

## `Equals`

<a id="api-00e129bc4b193105"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.Equals(System.Object) dcfa4a201102861e29ecc9f926857687b5082a9b6dc6f43cda0071958cfff3b3 -->

```csharp
public override bool InnoEngine.Core.RuntimeIdentity.Equals(object? obj)
```

Determines whether an object addresses the same live identity slot.

**Parameter `obj`:** The object to compare with this value.

**Returns:** `true` when the object is an equal runtime identity; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L68).

## `GetHashCode`

<a id="api-5aef9d725ee0c480"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.GetHashCode 2f1d13d5db91989a975231cfe3841ab28242af1539fdaba3acd9c90b22bfa0f4 -->

```csharp
public override int InnoEngine.Core.RuntimeIdentity.GetHashCode()
```

Computes a hash code from the domain and runtime identifier.

**Returns:** A hash code consistent with runtime identity equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L76).

## `op_Equality`

<a id="api-935f899327ae52aa"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.op_Equality(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.RuntimeIdentity) 72ee9e2481dc03ac3e59158d930795ae940288f4427f0a8a963cd91366a950e7 -->

```csharp
public static bool InnoEngine.Core.RuntimeIdentity.operator ==(InnoEngine.Core.RuntimeIdentity left, InnoEngine.Core.RuntimeIdentity right)
```

Determines whether two runtime identities are equal.

**Parameter `left`:** The first runtime identity.

**Parameter `right`:** The second runtime identity.

**Returns:** `true` when both values are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L98).

## `op_Inequality`

<a id="api-4e0776844e0fb4bb"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.op_Inequality(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.RuntimeIdentity) 256973a8a907e7ed54171a709038320aec03114b9fedaacdda0174c26decfbe3 -->

```csharp
public static bool InnoEngine.Core.RuntimeIdentity.operator !=(InnoEngine.Core.RuntimeIdentity left, InnoEngine.Core.RuntimeIdentity right)
```

Determines whether two runtime identities are different.

**Parameter `left`:** The first runtime identity.

**Parameter `right`:** The second runtime identity.

**Returns:** `true` when the values are different; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L115).

## `ToString`

<a id="api-f68c139df0be4984"></a>
<!-- api: M:InnoEngine.Core.RuntimeIdentity.ToString 684e84a4e9ca8ccf7f7859bad6cb3f3ae460c9e4418d54354f2c3b295d1095ce -->

```csharp
public override string InnoEngine.Core.RuntimeIdentity.ToString()
```

Formats this transient identity for diagnostics.

**Returns:** A domain-qualified runtime identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L84).

## `domainId`

<a id="api-06432eedc98bc768"></a>
<!-- api: P:InnoEngine.Core.RuntimeIdentity.domainId 8ab90da67fbd4f524f98fc08b16c2704d7afa762c40550cf59e0fa751f3e054d -->

```csharp
public InnoEngine.Core.IdentityDomainId InnoEngine.Core.RuntimeIdentity.domainId { get; }
```

Gets the identity domain that owns this runtime identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L41).

## `runtimeId`

<a id="api-82494a5d9665a102"></a>
<!-- api: P:InnoEngine.Core.RuntimeIdentity.runtimeId d0e3fa91aa92f70270745e69cbf535ed93346458d6e20f0ffaa929b03b92f732 -->

```csharp
public int InnoEngine.Core.RuntimeIdentity.runtimeId { get; }
```

Gets the generation-safe identifier interpreted inside `InnoEngine.Core.RuntimeIdentity.domainId`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/RuntimeIdentity.cs#L46).
