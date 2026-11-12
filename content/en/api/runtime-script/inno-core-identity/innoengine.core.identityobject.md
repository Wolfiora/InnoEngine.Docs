---
title: "IdentityObject"
description: "Reference for IdentityObject in Inno.Core.Identity."
uid: api.inno.core.identity.runtime-script.bd4cff918e5d5f40
kind: api
owners:
  - Inno.Core.Identity
apiSurface: runtime-script
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `IdentityObject`

This reference describes `IdentityObject` in `Inno.Core.Identity`. Read the [shared contract](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a5c8c0407594720b) | Method |
| [`identity`](#api-6f72fdb2c7164c77) | Property |

## Type declaration

<a id="api-bd4cff918e5d5f40"></a>
<!-- api: T:InnoEngine.Core.IdentityObject 5cffaa23e37d929681bd1b8d9fd2f923b6fb1f9a5e4aa2fa318f279fa5ee4b97 -->

```csharp
public abstract class InnoEngine.Core.IdentityObject
```

Provides instance-owned persistent and session-local identity state managed by an `InnoEngine.Core.IdentityAllocator`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityObject.cs#L6).

## `#ctor`

<a id="api-a5c8c0407594720b"></a>
<!-- api: M:InnoEngine.Core.IdentityObject.#ctor b380937df9327570e14623544ec46b32b0c360a146388704bc37ac0b41989043 -->

```csharp
protected InnoEngine.Core.IdentityObject.IdentityObject()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityObject.cs#L6).

## `identity`

<a id="api-6f72fdb2c7164c77"></a>
<!-- api: P:InnoEngine.Core.IdentityObject.identity 23d348963ae7bbedfa413ddded40b0685036b2dbdd3431d671c4aacc42db70d8 -->

```csharp
public InnoEngine.Core.Identity InnoEngine.Core.IdentityObject.identity { get; }
```

Gets this object's current persistent and optional session-local identity snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/IdentityObject.cs#L13).
