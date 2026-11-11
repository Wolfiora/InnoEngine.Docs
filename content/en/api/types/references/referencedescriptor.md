---
title: "ReferenceDescriptor"
description: "Reference for ReferenceDescriptor in Inno.References."
uid: api.inno.references.7478933caa756035
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceDescriptor`

This reference describes `ReferenceDescriptor` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9d15a551f4142f54) | Method |
| [`expectedStableTypeId`](#api-225a44ba37b039d9) | Property |
| [`isUnassigned`](#api-3cc7a43dd3effa5b) | Property |
| [`kindId`](#api-acb19c44bf1b20a4) | Property |
| [`lastKnownName`](#api-fceaf75e30a1ee1c) | Property |
| [`lastKnownPath`](#api-5f978099d7506cdf) | Property |
| [`targetPersistentId`](#api-0e2648447791233d) | Property |

## Type declaration

<a id="api-7478933caa756035"></a>
<!-- api: T:Inno.References.ReferenceDescriptor a91a24bcf1b0d8448460a9d062f6e07c67ab2a23deb0907a0776abe4921e6163 -->

```csharp
public sealed class Inno.References.ReferenceDescriptor
```

Preserves the stable intent and diagnostic metadata for one logical object reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L8).

## `#ctor`

<a id="api-9d15a551f4142f54"></a>
<!-- api: M:Inno.References.ReferenceDescriptor.#ctor(Inno.References.ReferenceKindId,System.Guid,System.Guid,System.String,System.String) bca2bfcc16fcfc833d72b179e3ab177aef93a4e0c58db8fe7b62e2cf76a1e676 -->

```csharp
public Inno.References.ReferenceDescriptor.ReferenceDescriptor(Inno.References.ReferenceKindId kindId, System.Guid targetPersistentId, System.Guid expectedStableTypeId = default(System.Guid), string? lastKnownName = null, string? lastKnownPath = null)
```

Creates a persistent reference descriptor.

**Parameter `kindId`:** The open protocol used to resolve the target.

**Parameter `targetPersistentId`:** The target object's persistent identity, or an empty value for an explicitly unassigned slot.

**Parameter `expectedStableTypeId`:** An optional stable type constraint interpreted by the resolver.

**Parameter `lastKnownName`:** Optional non-authoritative display text retained while the target is missing.

**Parameter `lastKnownPath`:** Optional non-authoritative source path retained for diagnostics.

**Throws `System.ArgumentException`:** Thrown when `kindId` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L31).

## `expectedStableTypeId`

<a id="api-225a44ba37b039d9"></a>
<!-- api: P:Inno.References.ReferenceDescriptor.expectedStableTypeId 61e803d8bdf2ec34f364d7fe6165e56548a00e6670ed2965f54212db064e54b7 -->

```csharp
public System.Guid Inno.References.ReferenceDescriptor.expectedStableTypeId { get; }
```

Gets the optional stable type constraint interpreted by the selected resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L60).

## `isUnassigned`

<a id="api-3cc7a43dd3effa5b"></a>
<!-- api: P:Inno.References.ReferenceDescriptor.isUnassigned daf7ec6e8983069a583b1f3d05ba8e69cbdc8d3ff14680193fe49afbddbfed0f -->

```csharp
public bool Inno.References.ReferenceDescriptor.isUnassigned { get; }
```

Gets whether the user explicitly left this reference unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L75).

## `kindId`

<a id="api-acb19c44bf1b20a4"></a>
<!-- api: P:Inno.References.ReferenceDescriptor.kindId 9f35f6242b6067380c01a713173f24830281af4080f4328f87ea607388ce0943 -->

```csharp
public Inno.References.ReferenceKindId Inno.References.ReferenceDescriptor.kindId { get; }
```

Gets the protocol used to resolve this reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L50).

## `lastKnownName`

<a id="api-fceaf75e30a1ee1c"></a>
<!-- api: P:Inno.References.ReferenceDescriptor.lastKnownName 4c93f94a94d65b62995054b6cc406eb30bab1cf2d28e2f19a516ab5df94e902d -->

```csharp
public string? Inno.References.ReferenceDescriptor.lastKnownName { get; }
```

Gets optional display text retained only for diagnostics and missing-state presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L65).

## `lastKnownPath`

<a id="api-5f978099d7506cdf"></a>
<!-- api: P:Inno.References.ReferenceDescriptor.lastKnownPath eae85fd593616925ba8960c587d562c350a2ef37befc77d5eabb3a7637548095 -->

```csharp
public string? Inno.References.ReferenceDescriptor.lastKnownPath { get; }
```

Gets an optional last-known source path that is never used as resolution authority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L70).

## `targetPersistentId`

<a id="api-0e2648447791233d"></a>
<!-- api: P:Inno.References.ReferenceDescriptor.targetPersistentId b7b622b6177acf4654e1bb0ae9ee1ffe0481c88394121a318010e7d3b8a650ef -->

```csharp
public System.Guid Inno.References.ReferenceDescriptor.targetPersistentId { get; }
```

Gets the persistent identity of the intended target, or an empty value when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceDescriptor.cs#L55).
