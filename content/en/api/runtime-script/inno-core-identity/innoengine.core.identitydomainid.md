---
title: "IdentityDomainId"
description: "Reference for IdentityDomainId in Inno.Core.Identity."
uid: api.inno.core.identity.runtime-script.68291c4f0eee33de
kind: api
owners:
  - Inno.Core.Identity
apiSurface: runtime-script
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `IdentityDomainId`

This reference describes `IdentityDomainId` in `Inno.Core.Identity`. Read the [shared contract](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Core.IdentityDomainId>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-7d89a2cd471e9259) | Method |
| [`Equals`](#api-5f07e2b04d1e617b) | Method |
| [`GetHashCode`](#api-2fcbc7aa6c936268) | Method |
| [`op_Equality`](#api-86b551f16afa1c2f) | Method |
| [`op_Inequality`](#api-deaf7a4738ac68b7) | Method |
| [`ToString`](#api-a54a807645d885de) | Method |
| [`isValid`](#api-863c37a506cab10f) | Property |
| [`value`](#api-f0c4f99788f7640e) | Property |

## Type declaration

<a id="api-68291c4f0eee33de"></a>
<!-- api: T:InnoEngine.Core.IdentityDomainId 78b04c469c2207064546b2823655972223a2217f8e9cfb21b236b13cc68a91d5 -->

```csharp
public readonly struct InnoEngine.Core.IdentityDomainId : System.IEquatable<InnoEngine.Core.IdentityDomainId>
```

Identifies one isolated runtime identity namespace within the current process.

**Constraints:** Domain identifiers are runtime-only values. They must never be serialized or used as persistent object identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L11).

## `Equals`

<a id="api-7d89a2cd471e9259"></a>
<!-- api: M:InnoEngine.Core.IdentityDomainId.Equals(InnoEngine.Core.IdentityDomainId) 54768ab66b2fdc30f195dd6590d2d818bd0656ea99c1f513b1266f13dec81fa2 -->

```csharp
public bool InnoEngine.Core.IdentityDomainId.Equals(InnoEngine.Core.IdentityDomainId other)
```

Determines whether this value and another value identify the same runtime domain.

**Parameter `other`:** The domain identifier to compare with this value.

**Returns:** `true` when both values identify the same domain; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L37).

## `Equals`

<a id="api-5f07e2b04d1e617b"></a>
<!-- api: M:InnoEngine.Core.IdentityDomainId.Equals(System.Object) f628b66e82cd5a7514ff899b73d796554b56d4f15ceeedf69e75c896b970179f -->

```csharp
public override bool InnoEngine.Core.IdentityDomainId.Equals(object? obj)
```

Determines whether an object represents the same runtime domain.

**Parameter `obj`:** The object to compare with this value.

**Returns:** `true` when the object is an equal domain identifier; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L48).

## `GetHashCode`

<a id="api-2fcbc7aa6c936268"></a>
<!-- api: M:InnoEngine.Core.IdentityDomainId.GetHashCode d123dc0e1794d8397f6de398ef3eb01905fa6be3efb86fa5a857b107dea53cd0 -->

```csharp
public override int InnoEngine.Core.IdentityDomainId.GetHashCode()
```

Computes a hash code for this runtime domain identifier.

**Returns:** A hash code derived from the process-local domain value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L56).

## `op_Equality`

<a id="api-86b551f16afa1c2f"></a>
<!-- api: M:InnoEngine.Core.IdentityDomainId.op_Equality(InnoEngine.Core.IdentityDomainId,InnoEngine.Core.IdentityDomainId) d6cb2cac38da105bff9eff62b8fc5ec1d26fe217a00bfe57ade2f70ec7fd2896 -->

```csharp
public static bool InnoEngine.Core.IdentityDomainId.operator ==(InnoEngine.Core.IdentityDomainId left, InnoEngine.Core.IdentityDomainId right)
```

Determines whether two values identify the same runtime domain.

**Parameter `left`:** The first domain identifier.

**Parameter `right`:** The second domain identifier.

**Returns:** `true` when the values are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L78).

## `op_Inequality`

<a id="api-deaf7a4738ac68b7"></a>
<!-- api: M:InnoEngine.Core.IdentityDomainId.op_Inequality(InnoEngine.Core.IdentityDomainId,InnoEngine.Core.IdentityDomainId) bac0cbaa8a68186a4d7fc9cd26aa2a07abe490557ab09f905ecd94fcd9c9ff75 -->

```csharp
public static bool InnoEngine.Core.IdentityDomainId.operator !=(InnoEngine.Core.IdentityDomainId left, InnoEngine.Core.IdentityDomainId right)
```

Determines whether two values identify different runtime domains.

**Parameter `left`:** The first domain identifier.

**Parameter `right`:** The second domain identifier.

**Returns:** `true` when the values are different; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L95).

## `ToString`

<a id="api-a54a807645d885de"></a>
<!-- api: M:InnoEngine.Core.IdentityDomainId.ToString 7c03e5aebd54db88016da98a4dcd88a126e423578fc19775ddc36b7c1757dd19 -->

```csharp
public override string InnoEngine.Core.IdentityDomainId.ToString()
```

Formats this runtime domain identifier for diagnostics.

**Returns:** The numeric domain value, or `<invalid>` when the value is not allocated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L64).

## `isValid`

<a id="api-863c37a506cab10f"></a>
<!-- api: P:InnoEngine.Core.IdentityDomainId.isValid f6b5725f1965f20c9b2f3955996d76298823963cef09a1ecfe7d707c69bd6348 -->

```csharp
public bool InnoEngine.Core.IdentityDomainId.isValid { get; }
```

Gets whether this value identifies an allocated runtime domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L26).

## `value`

<a id="api-f0c4f99788f7640e"></a>
<!-- api: P:InnoEngine.Core.IdentityDomainId.value 21dff4bc0f3fbe89cd5d166c3e85fb9f19870c72a08d421696432a23e8f04651 -->

```csharp
public int InnoEngine.Core.IdentityDomainId.value { get; }
```

Gets the process-local numeric value assigned to this domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityDomainId.cs#L21).
