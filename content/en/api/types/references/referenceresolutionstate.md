---
title: "ReferenceResolutionState"
description: "Reference for ReferenceResolutionState in Inno.References."
uid: api.inno.references.4cd97975e9f19575
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceResolutionState`

This reference describes `ReferenceResolutionState` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Invalid`](#api-44bee6c88a0236e0) | Field |
| [`Missing`](#api-e688054114437215) | Field |
| [`Resolved`](#api-7ca9bbd1aaa5b8f6) | Field |
| [`TypeMismatch`](#api-018a86922d641e6e) | Field |
| [`Unassigned`](#api-0fbc8919eeabe166) | Field |

## Type declaration

<a id="api-4cd97975e9f19575"></a>
<!-- api: T:Inno.References.ReferenceResolutionState 52b0f6c8d2f2b2ae84365381db24eb861e422393ad5434239208dafd229c00cc -->

```csharp
public enum Inno.References.ReferenceResolutionState : int
```

Describes the current resolution state without discarding persistent reference intent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolutionState.cs#L6).

## `Invalid`

<a id="api-44bee6c88a0236e0"></a>
<!-- api: F:Inno.References.ReferenceResolutionState.Invalid c28a97d6b7076250e9b0191eeb02b8f082a17b03c2f10b8ce40f7e3d34d7b244 -->

```csharp
Inno.References.ReferenceResolutionState.Invalid = 4
```

The descriptor or authoritative source is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolutionState.cs#L31).

## `Missing`

<a id="api-e688054114437215"></a>
<!-- api: F:Inno.References.ReferenceResolutionState.Missing a37f3bd4050f0c096171f4a3e593d447faf1dc996fe86eda57d00395bd67f416 -->

```csharp
Inno.References.ReferenceResolutionState.Missing = 2
```

The intended target is temporarily unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolutionState.cs#L21).

## `Resolved`

<a id="api-7ca9bbd1aaa5b8f6"></a>
<!-- api: F:Inno.References.ReferenceResolutionState.Resolved f7528756009baa806d05fc67d619065b79c4b98509a2a3e01b5b284acf0a798a -->

```csharp
Inno.References.ReferenceResolutionState.Resolved = 1
```

The current generation resolved a compatible live target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolutionState.cs#L16).

## `TypeMismatch`

<a id="api-018a86922d641e6e"></a>
<!-- api: F:Inno.References.ReferenceResolutionState.TypeMismatch 8eb7b3a0cfdc226333cd6a9e7f795fbdf22c36b3efc8fc04dfe4d52754e504ee -->

```csharp
Inno.References.ReferenceResolutionState.TypeMismatch = 3
```

The intended target exists but does not satisfy the stable type constraint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolutionState.cs#L26).

## `Unassigned`

<a id="api-0fbc8919eeabe166"></a>
<!-- api: F:Inno.References.ReferenceResolutionState.Unassigned 3cd46ad4ec1b00b252c6ca3cbd523727f28095b8afe4b69650c298d90bfd1fbe -->

```csharp
Inno.References.ReferenceResolutionState.Unassigned = 0
```

The slot has no assigned target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolutionState.cs#L11).
