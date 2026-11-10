---
title: IdentityObject
description: Provides instance-owned persistent and session-local identity state managed by an `Inno.Core.Identity.IdentityAllocator`.
uid: api.core-identity.identityobject
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---
# IdentityObject

Provides instance-owned persistent and session-local identity state managed by an `Inno.Core.Identity.IdentityAllocator`.

**Namespace:** `Inno.Core.Identity`  
**Project:** [Inno.Core.Identity](../../projects/inno-core-identity.md)  
**Surface:** Evaluated CLR source, Debug configuration. Script-projection availability requires its own manifest.

## Type declaration

<a id="api-f1cabb67f91f0492"></a>
<!-- api: T:Inno.Core.Identity.IdentityObject c5d8af87d1f5f3bb9a6a1c02fd63b09dc6ece3194b918261e5f77d0f7289a904 -->

```csharp
public abstract class Inno.Core.Identity.IdentityObject
```

**Base type:** `object`.

[Register and release an identity object](../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.

## Members

| Member | Kind |
| --- | --- |
| [`identity`](#api-af4176cd424cf819) | Property |
| [`IdentityObject`](#api-aec5948761a52394) | Method |

## `identity`

<a id="api-af4176cd424cf819"></a>
<!-- api: P:Inno.Core.Identity.IdentityObject.identity 0ab2c53f62d845ef715ee9a0f93e61dd1961f6fa9220bad6a81ee6f8c7fc8bfd -->

```csharp
public Inno.Core.Identity.Identity Inno.Core.Identity.IdentityObject.identity { get; }
```

Gets this object's current persistent and optional session-local identity snapshot.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityObject.cs#L13).

## `IdentityObject`

<a id="api-aec5948761a52394"></a>
<!-- api: M:Inno.Core.Identity.IdentityObject.#ctor 174baefe3fe31b119268ac1b70040dd10d22d4d34459e575fcd641628df6c78c -->

```csharp
protected Inno.Core.Identity.IdentityObject.IdentityObject()
```

Compiler-supplied declaration. Construction follows the containing type's initialization and shared lifecycle contracts.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityObject.cs#L6).