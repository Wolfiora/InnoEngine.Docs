---
title: "IReferenceResolver"
description: "Reference for IReferenceResolver in Inno.References."
uid: api.inno.references.724def1662d5024b
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `IReferenceResolver`

This reference describes `IReferenceResolver` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Resolve`](#api-95ef2d82fe04ccc5) | Method |
| [`kindId`](#api-84245e9b38d2c926) | Property |

## Type declaration

<a id="api-724def1662d5024b"></a>
<!-- api: T:Inno.References.IReferenceResolver 0f74c2bdf7ce16bb9e2fb84fa8c5a06f0faacacc5db6a39f752e69cab83f2d28 -->

```csharp
public interface Inno.References.IReferenceResolver
```

Resolves one open reference kind against a complete immutable domain generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/IReferenceResolver.cs#L6).

## `Resolve`

<a id="api-95ef2d82fe04ccc5"></a>
<!-- api: M:Inno.References.IReferenceResolver.Resolve(Inno.References.ReferenceDescriptor) 2523d88ca2779aef752ee017d7f807965906c3e1a7a348938e63d79d01eca2b1 -->

```csharp
Inno.References.ReferenceResolution Inno.References.IReferenceResolver.Resolve(Inno.References.ReferenceDescriptor descriptor)
```

Resolves a descriptor without mutating its owner or the authoritative catalog.

**Parameter `descriptor`:** The descriptor whose `Inno.References.ReferenceDescriptor.kindId` matches this resolver.

**Returns:** A complete resolution result that preserves the supplied descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/IReferenceResolver.cs#L22).

## `kindId`

<a id="api-84245e9b38d2c926"></a>
<!-- api: P:Inno.References.IReferenceResolver.kindId 59a690ed7b8a12e4a65898afb7dfbcc4916ca56f691c4d4634c1c1f30374ddc6 -->

```csharp
Inno.References.ReferenceKindId Inno.References.IReferenceResolver.kindId { get; }
```

Gets the unique reference kind implemented by this resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/IReferenceResolver.cs#L11).
