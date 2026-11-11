---
title: "ReferenceKindId"
description: "Reference for ReferenceKindId in Inno.References."
uid: api.inno.references.de15ead94eef7195
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceKindId`

This reference describes `ReferenceKindId` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.References.ReferenceKindId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1281d97bde975f83) | Method |
| [`Equals`](#api-88fc066e7a8cd027) | Method |
| [`Equals`](#api-50698b456e55a2ef) | Method |
| [`GetHashCode`](#api-e7a5b2abdcebe730) | Method |
| [`op_Equality`](#api-cedd8d9c606ea28b) | Method |
| [`op_Inequality`](#api-22d6d237e7412d32) | Method |
| [`ToString`](#api-e410c0e29134532e) | Method |
| [`isValid`](#api-5cc8eb41544c568f) | Property |
| [`value`](#api-2372e49a3c87f319) | Property |

## Type declaration

<a id="api-de15ead94eef7195"></a>
<!-- api: T:Inno.References.ReferenceKindId 8c77405bcab3fd7bac4b6d901d078529e46ea610d848ca098656f3b10e8abe99 -->

```csharp
public readonly struct Inno.References.ReferenceKindId : System.IEquatable<Inno.References.ReferenceKindId>
```

Identifies an open reference-resolution protocol independently of its current implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L8).

## `#ctor`

<a id="api-1281d97bde975f83"></a>
<!-- api: M:Inno.References.ReferenceKindId.#ctor(System.String) 807e961a9a0add68a4cbc5850f7e3afaadc2382fa26c17d64d48bdd4bdb4e609 -->

```csharp
public Inno.References.ReferenceKindId.ReferenceKindId(string value)
```

Creates a stable reference kind identifier.

**Parameter `value`:** The non-empty protocol identifier.

**Throws `System.ArgumentException`:** Thrown when `value` is empty or contains surrounding whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L19).

## `Equals`

<a id="api-88fc066e7a8cd027"></a>
<!-- api: M:Inno.References.ReferenceKindId.Equals(Inno.References.ReferenceKindId) 2177ecf0bee6319afa4b35f305f4897ee1c51babfa6f0ed499ff7860c0215663 -->

```csharp
public bool Inno.References.ReferenceKindId.Equals(Inno.References.ReferenceKindId other)
```

Compares two identifiers using ordinal protocol identity.

**Parameter `other`:** The identifier to compare with this value.

**Returns:** `true` when the identifiers are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L45).

## `Equals`

<a id="api-50698b456e55a2ef"></a>
<!-- api: M:Inno.References.ReferenceKindId.Equals(System.Object) 3693b28f565b9ed6870cadfae8951bda15f8a312e7ee518a24e3af9ec4153654 -->

```csharp
public override bool Inno.References.ReferenceKindId.Equals(object? obj)
```

Determines whether an object contains the same reference kind identifier.

**Parameter `obj`:** The object to compare with this value.

**Returns:** `true` when the object is an equal identifier; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L56).

## `GetHashCode`

<a id="api-e7a5b2abdcebe730"></a>
<!-- api: M:Inno.References.ReferenceKindId.GetHashCode 37245fb0bb90b0633b038699fc01ebee8797899122dbbd626d5ed8fa170fecf0 -->

```csharp
public override int Inno.References.ReferenceKindId.GetHashCode()
```

Computes an ordinal hash code for this identifier.

**Returns:** A hash code consistent with ordinal equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L64).

## `op_Equality`

<a id="api-cedd8d9c606ea28b"></a>
<!-- api: M:Inno.References.ReferenceKindId.op_Equality(Inno.References.ReferenceKindId,Inno.References.ReferenceKindId) 90b77bb294f4b43cc8b697a36bc06ea8f1923aff6b188f598640d317fb087aab -->

```csharp
public static bool Inno.References.ReferenceKindId.operator ==(Inno.References.ReferenceKindId left, Inno.References.ReferenceKindId right)
```

Determines whether two reference kind identifiers are equal.

**Parameter `left`:** The first identifier.

**Parameter `right`:** The second identifier.

**Returns:** `true` when the identifiers are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L86).

## `op_Inequality`

<a id="api-22d6d237e7412d32"></a>
<!-- api: M:Inno.References.ReferenceKindId.op_Inequality(Inno.References.ReferenceKindId,Inno.References.ReferenceKindId) 04abee6dfaef8f998801ef03979efd854f7ea425b62b84cdbeb9c89146bebecb -->

```csharp
public static bool Inno.References.ReferenceKindId.operator !=(Inno.References.ReferenceKindId left, Inno.References.ReferenceKindId right)
```

Determines whether two reference kind identifiers are different.

**Parameter `left`:** The first identifier.

**Parameter `right`:** The second identifier.

**Returns:** `true` when the identifiers are different; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L103).

## `ToString`

<a id="api-e410c0e29134532e"></a>
<!-- api: M:Inno.References.ReferenceKindId.ToString 1f543f8fdd8da87a233d2aff412c53223050f1ce3134076ef80aed65acb659bf -->

```csharp
public override string Inno.References.ReferenceKindId.ToString()
```

Formats the protocol identifier for diagnostics.

**Returns:** The stable identifier, or `<invalid>` when empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L72).

## `isValid`

<a id="api-5cc8eb41544c568f"></a>
<!-- api: P:Inno.References.ReferenceKindId.isValid df49a3c87c56b7753032073f940a4c6c44f1485d34acc3429fb59b3e50690f50 -->

```csharp
public bool Inno.References.ReferenceKindId.isValid { get; }
```

Gets whether this value contains a usable protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L34).

## `value`

<a id="api-2372e49a3c87f319"></a>
<!-- api: P:Inno.References.ReferenceKindId.value 043d26c95fbe508d1446552d666b2340262c38e74934d5478c65e5fbdffa2bbf -->

```csharp
public string Inno.References.ReferenceKindId.value { get; }
```

Gets the stable protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKindId.cs#L29).
