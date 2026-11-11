---
title: "SerializedMissingState"
description: "Reference for SerializedMissingState in Inno.References."
uid: api.inno.references.4b2d191ddba28bf3
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `SerializedMissingState`

This reference describes `SerializedMissingState` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-71b5e83d0d8941cd) | Method |
| [`descriptor`](#api-398deaafa303cc8f) | Property |
| [`key`](#api-d40e30531c0c7bb4) | Property |
| [`payload`](#api-dce8bf2d6fec543b) | Property |

## Type declaration

<a id="api-4b2d191ddba28bf3"></a>
<!-- api: T:Inno.References.SerializedMissingState 8a914475fad5483d1d7767ae506aa1a58d1b12f561fe328d7c70bdb3f7319cba -->

```csharp
public sealed class Inno.References.SerializedMissingState
```

Preserves one recoverable slot and its neutral owner state without retaining runtime objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/SerializedMissingState.cs#L8).

## `#ctor`

<a id="api-71b5e83d0d8941cd"></a>
<!-- api: M:Inno.References.SerializedMissingState.#ctor(Inno.References.ReferenceKey,Inno.References.ReferenceDescriptor,System.ReadOnlySpan{System.Byte}) 60905e1f1a7f6d4962efb4a216d24e9004617988e1ef0c676d9819a1e4b4c159 -->

```csharp
public Inno.References.SerializedMissingState.SerializedMissingState(Inno.References.ReferenceKey key, Inno.References.ReferenceDescriptor descriptor, System.ReadOnlySpan<byte> payload)
```

Creates an immutable missing-state record.

**Parameter `key`:** The persistent owner slot represented by this record.

**Parameter `descriptor`:** The persistent target intent that must survive unavailability.

**Parameter `payload`:** The neutral serialized owner state required for reconstruction.

**Throws `System.ArgumentNullException`:** Thrown when `descriptor` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/SerializedMissingState.cs#L27).

## `descriptor`

<a id="api-398deaafa303cc8f"></a>
<!-- api: P:Inno.References.SerializedMissingState.descriptor bdb5121f1215657c0eaff28e466b72da33724da6bb66a459e1168a6feb8022e4 -->

```csharp
public Inno.References.ReferenceDescriptor Inno.References.SerializedMissingState.descriptor { get; }
```

Gets the persistent target intent preserved by this record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/SerializedMissingState.cs#L46).

## `key`

<a id="api-d40e30531c0c7bb4"></a>
<!-- api: P:Inno.References.SerializedMissingState.key d9f07b096ef21afb3d73f80ddd48588307129895bcf23bec3036ec1ff977414a -->

```csharp
public Inno.References.ReferenceKey Inno.References.SerializedMissingState.key { get; }
```

Gets the persistent owner slot represented by this record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/SerializedMissingState.cs#L41).

## `payload`

<a id="api-dce8bf2d6fec543b"></a>
<!-- api: P:Inno.References.SerializedMissingState.payload 8bae13400f83da1b1a01c357755e257c81866fcac437a674eb4d2d7cae449d81 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.References.SerializedMissingState.payload { get; }
```

Gets immutable neutral bytes used to reconstruct the owner state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/SerializedMissingState.cs#L51).
