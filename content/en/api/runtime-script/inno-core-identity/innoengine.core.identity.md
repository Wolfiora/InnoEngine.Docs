---
title: "Identity"
description: "Reference for Identity in Inno.Core.Identity."
uid: api.inno.core.identity.runtime-script.9dfa2a602f0ceb9c
kind: api
owners:
  - Inno.Core.Identity
apiSurface: runtime-script
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `Identity`

This reference describes `Identity` in `Inno.Core.Identity`. Read the [shared contract](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8bcec998e3fe7e19) | Method |
| [```Resolve``1```](#api-aa69daba6695d2ae) | Method |
| [`persistentId`](#api-7766af87a382ad84) | Property |
| [`runtimeId`](#api-4167f4550bd1a359) | Property |
| [`runtimeIdentity`](#api-45bf664f8e631631) | Property |

## Type declaration

<a id="api-9dfa2a602f0ceb9c"></a>
<!-- api: T:InnoEngine.Core.Identity ed241e056f6cddd8750e953d429497d203cdf95273a4722ce328b002be3f4120 -->

```csharp
public struct InnoEngine.Core.Identity
```

Identity payload for an object, carrying persistent id and runtime id.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/Identity.cs#L8).

## `#ctor`

<a id="api-8bcec998e3fe7e19"></a>
<!-- api: M:InnoEngine.Core.Identity.#ctor(System.Guid) 0331aa018259878d1b1f82c3343f340121a5c9e9bb19a1a0f3e546866e2e9c7f -->

```csharp
public InnoEngine.Core.Identity.Identity(System.Guid persistentId)
```

Creates an unbound identity with the supplied persistent identifier.

**Parameter `persistentId`:** The stable identifier to preserve across serialization boundaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/Identity.cs#L59).

## ```Resolve``1```

<a id="api-aa69daba6695d2ae"></a>
<!-- api: M:InnoEngine.Core.Identity.Resolve``1 6491b3c30ddb5e2b8885bfc932a88b4a5a00027fe08e43b95da709dfa27ab980 -->

```csharp
public TObject? InnoEngine.Core.Identity.Resolve<TObject>() where TObject : InnoEngine.Core.IdentityObject
```

Resolves this transient snapshot through its original weak identity registry.

**Type parameter `TObject`:** The expected identity object type.

**Returns:** The current object, or null if the registry retired, the slot changed generation, or the type differs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/Identity.cs#L99).

## `persistentId`

<a id="api-7766af87a382ad84"></a>
<!-- api: P:InnoEngine.Core.Identity.persistentId d7665497ba0a58d7ea5eaf4270c0bb19853eba79933b0771f48cd79b43786129 -->

```csharp
public System.Guid InnoEngine.Core.Identity.persistentId { get; }
```

Gets the stable identifier preserved by serialization and runtime reconstruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/Identity.cs#L13).

## `runtimeId`

<a id="api-4167f4550bd1a359"></a>
<!-- api: P:InnoEngine.Core.Identity.runtimeId 8cad980994233740a38af0112836fbeffa5fe3609ed5e41c5ed5fa652a888c64 -->

```csharp
public int? InnoEngine.Core.Identity.runtimeId { get; }
```

Gets the identifier assigned by the currently bound runtime registry.

**Constraints:** The value is `null` while this identity is not bound to a live registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/Identity.cs#L21).

## `runtimeIdentity`

<a id="api-45bf664f8e631631"></a>
<!-- api: P:InnoEngine.Core.Identity.runtimeIdentity b69c0b1403dc9cb99713a28459cc85d231a12484dd6d5d729ed41cedc8eecff2 -->

```csharp
public InnoEngine.Core.RuntimeIdentity? InnoEngine.Core.Identity.runtimeIdentity { get; }
```

Gets the domain-qualified runtime identity while this object is registered.

**Constraints:** The value is `null` when this identity is detached or its registry is no longer reachable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Identity/Identity.cs#L38).
