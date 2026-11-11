---
title: "ReferenceRecoveryTransaction"
description: "Reference for ReferenceRecoveryTransaction in Inno.References."
uid: api.inno.references.69bd6f7e2916e24d
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceRecoveryTransaction`

This reference describes `ReferenceRecoveryTransaction` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Reload.IGenerationChange`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b61ab80a24872ab8) | Method |
| [`Apply`](#api-996bf223bf0f9c26) | Method |
| [`Complete`](#api-d5cd52dfd7df292c) | Method |
| [`PrepareForActivation`](#api-d83ff7601097298e) | Method |
| [`RestorePreviousState`](#api-cf2c098d471b5855) | Method |
| [`RollbackStructure`](#api-f9a3b8016b7882a9) | Method |
| [`changes`](#api-e7a2a30736b8ad3b) | Property |

## Type declaration

<a id="api-69bd6f7e2916e24d"></a>
<!-- api: T:Inno.References.ReferenceRecoveryTransaction bbed3d1ecd182e85bb6343658eb22b5897416e09076e74468fd460576ee0c976 -->

```csharp
public sealed class Inno.References.ReferenceRecoveryTransaction : Inno.Extensibility.Reload.IGenerationChange
```

Coordinates preserved reference slots using the host generation publication and two-phase rollback protocol.

**Constraints:** The generation owner calls these phases at its safe point. This transaction never publishes types or
rolls back automatically: old structures must be restored before old converters, and old values after them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L16).

## `#ctor`

<a id="api-b61ab80a24872ab8"></a>
<!-- api: M:Inno.References.ReferenceRecoveryTransaction.#ctor(Inno.References.ReferenceCatalog,System.Collections.Generic.IEnumerable{Inno.References.SerializedMissingState},System.Collections.Generic.IEnumerable{Inno.References.IReferenceRecoveryParticipant}) 2d1900738658540ce26f471a5539fd8b83d5d5e0ba81df139f6135e5a3b0fe5c -->

```csharp
public Inno.References.ReferenceRecoveryTransaction.ReferenceRecoveryTransaction(Inno.References.ReferenceCatalog catalog, System.Collections.Generic.IEnumerable<Inno.References.SerializedMissingState> missingStates, System.Collections.Generic.IEnumerable<Inno.References.IReferenceRecoveryParticipant> participants)
```

Captures neutral slots and ordered domain owners without resolving or mutating live state.

**Parameter `catalog`:** The candidate resolver set, consulted after provisional objects are registered.

**Parameter `missingStates`:** Preserved object and dependency slots, each with a unique owner key.

**Parameter `participants`:** Domain changes in dependency order, owned until commit or complete rollback.

**Throws `System.ArgumentNullException`:** An input or collection entry is null.

**Throws `System.ArgumentException`:** A slot key is invalid or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L45).

## `Apply`

<a id="api-996bf223bf0f9c26"></a>
<!-- api: M:Inno.References.ReferenceRecoveryTransaction.Apply 65182cf023863f5824db4ec0b20245e12c4b292606f3e358264ea2d7cf386bc6 -->

```csharp
public void Inno.References.ReferenceRecoveryTransaction.Apply()
```

Applies provisional objects and values, resolves preserved slots, and validates the candidate before commit.

**Throws `System.InvalidOperationException`:** Preparation is incomplete or the caller is not the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L97).

## `Complete`

<a id="api-d5cd52dfd7df292c"></a>
<!-- api: M:Inno.References.ReferenceRecoveryTransaction.Complete 72f8e121c5553ccfb2c3a868aa1b526f739bcb2a5b8598e698196b66db6bb804 -->

```csharp
public void Inno.References.ReferenceRecoveryTransaction.Complete()
```

Retires previous objects after irreversible publication and releases every completed domain owner.

**Throws `System.InvalidOperationException`:** Application is incomplete or the caller is not the owner thread.

**Throws `System.AggregateException`:** One or more completed retirement operations failed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Unfinished retirement retains all owners and blocks further phases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L122).

## `PrepareForActivation`

<a id="api-d83ff7601097298e"></a>
<!-- api: M:Inno.References.ReferenceRecoveryTransaction.PrepareForActivation 5cda3b5dcf50ba5c75a0e5d7e6fe86f4ed16f57ea8d9cb2addebcf2f9bff9a9c -->

```csharp
public void Inno.References.ReferenceRecoveryTransaction.PrepareForActivation()
```

Quiesces domain owners while the previous type and serialization publication is still active.

**Throws `System.InvalidOperationException`:** The phase is out of order or the caller is not the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L79).

## `RestorePreviousState`

<a id="api-cf2c098d471b5855"></a>
<!-- api: M:Inno.References.ReferenceRecoveryTransaction.RestorePreviousState aa47b90144ede7e566051b288ecb91e56a08755bf40a2a64c6300ec2fa28fbf6 -->

```csharp
public void Inno.References.ReferenceRecoveryTransaction.RestorePreviousState()
```

Restores previous values and lifecycle after the old type and serializer publication is active again.

**Throws `System.InvalidOperationException`:** Structure rollback is incomplete or the caller is not the owner thread.

**Throws `System.AggregateException`:** One or more previous-state restorations failed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** An unfinished restoration retains its owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L169).

## `RollbackStructure`

<a id="api-f9a3b8016b7882a9"></a>
<!-- api: M:Inno.References.ReferenceRecoveryTransaction.RollbackStructure b234e42db1fa3066f1275c4e94b0e590c70596202c6924ff7a1eb70cc7a941c7 -->

```csharp
public void Inno.References.ReferenceRecoveryTransaction.RollbackStructure()
```

Restores attempted domain structures in reverse order before the previous publication is restored.

**Throws `System.InvalidOperationException`:** The transaction is terminal or the caller is not the owner thread.

**Throws `System.AggregateException`:** One or more structure compensations failed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** An unfinished compensation retains its owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L141).

## `changes`

<a id="api-e7a2a30736b8ad3b"></a>
<!-- api: P:Inno.References.ReferenceRecoveryTransaction.changes e3ae4297045145ce263d4f401ae6d2059e017272339d7acf0566bc8f42a5508d -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.References.ReferenceRecoveryChange> Inno.References.ReferenceRecoveryTransaction.changes { get; }
```

Gets candidate resolutions after provisional application, or an empty set before resolution or after rollback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryTransaction.cs#L71).
