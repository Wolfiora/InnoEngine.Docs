---
title: "ReferenceRecoveryChange"
description: "Reference for ReferenceRecoveryChange in Inno.References."
uid: api.inno.references.c09fea0ea84a0817
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceRecoveryChange`

This reference describes `ReferenceRecoveryChange` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0f0274f7df7685e9) | Method |
| [`missingState`](#api-0038a1eb33a3be06) | Property |
| [`resolution`](#api-c9158ba2d82bf88c) | Property |

## Type declaration

<a id="api-c09fea0ea84a0817"></a>
<!-- api: T:Inno.References.ReferenceRecoveryChange 824f0c24aaf09f74736943c01f37ea07330d137d4e4769dfd21959fccbcd83d1 -->

```csharp
public sealed class Inno.References.ReferenceRecoveryChange
```

Describes one candidate missing-state transition at an owner-thread safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryChange.cs#L6).

## `#ctor`

<a id="api-0f0274f7df7685e9"></a>
<!-- api: M:Inno.References.ReferenceRecoveryChange.#ctor(Inno.References.SerializedMissingState,Inno.References.ReferenceResolution) 50e23c7c5605e49b7af2bfdb124546d12446a182219d3474d2df3ee096ce18be -->

```csharp
public Inno.References.ReferenceRecoveryChange.ReferenceRecoveryChange(Inno.References.SerializedMissingState missingState, Inno.References.ReferenceResolution resolution)
```

Creates a recovery change from preserved state and its candidate resolution.

**Parameter `missingState`:** The immutable state captured before the candidate generation was applied.

**Parameter `resolution`:** The result produced by the candidate reference catalog.

**Throws `System.ArgumentNullException`:** Thrown when either argument is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryChange.cs#L20).

## `missingState`

<a id="api-0038a1eb33a3be06"></a>
<!-- api: P:Inno.References.ReferenceRecoveryChange.missingState 37cacc343dbf18a85a2862bb0aa1dd603fd86eedcc5cc330555d5e8f408922bd -->

```csharp
public Inno.References.SerializedMissingState Inno.References.ReferenceRecoveryChange.missingState { get; }
```

Gets the preserved owner and target state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryChange.cs#L33).

## `resolution`

<a id="api-c9158ba2d82bf88c"></a>
<!-- api: P:Inno.References.ReferenceRecoveryChange.resolution 91a348126d76cb6728c554ddff55589d18a14f864ca7e226c5250c9308868ddb -->

```csharp
public Inno.References.ReferenceResolution Inno.References.ReferenceRecoveryChange.resolution { get; }
```

Gets the candidate generation's resolution for the preserved descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceRecoveryChange.cs#L38).
