---
title: "ReferenceCatalog"
description: "Reference for ReferenceCatalog in Inno.References."
uid: api.inno.references.9485d0799274b30f
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceCatalog`

This reference describes `ReferenceCatalog` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-2f5d6ec536389766) | Method |
| [`Resolve`](#api-d63544c925305759) | Method |
| [`empty`](#api-677b1258bbd55b00) | Property |
| [`generation`](#api-e0a66941a49c405f) | Property |

## Type declaration

<a id="api-9485d0799274b30f"></a>
<!-- api: T:Inno.References.ReferenceCatalog cda5e08ddb76250c99c1cbb77688c03d39cf82f5facd15659137d59b6c4f2586 -->

```csharp
public sealed class Inno.References.ReferenceCatalog
```

Owns one complete immutable generation of reference resolvers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceCatalog.cs#L9).

## `Create`

<a id="api-2f5d6ec536389766"></a>
<!-- api: M:Inno.References.ReferenceCatalog.Create(System.Int64,System.Collections.Generic.IEnumerable{Inno.References.IReferenceResolver}) bda231813284efb30882be38c167093f0cd62e24e06089409b9c6b956647805c -->

```csharp
public static Inno.References.ReferenceCatalog Inno.References.ReferenceCatalog.Create(long generation, System.Collections.Generic.IEnumerable<Inno.References.IReferenceResolver> resolvers)
```

Builds a complete resolver generation and rejects duplicate protocol identifiers.

**Parameter `generation`:** The positive generation assigned by the catalog owner.

**Parameter `resolvers`:** Every resolver that belongs to the candidate generation.

**Returns:** An immutable reference catalog ready for publication.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `generation` is not positive.

**Throws `System.ArgumentNullException`:** Thrown when `resolvers` or one of its elements is null.

**Throws `System.InvalidOperationException`:** Thrown when a resolver kind is invalid or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceCatalog.cs#L52).

## `Resolve`

<a id="api-d63544c925305759"></a>
<!-- api: M:Inno.References.ReferenceCatalog.Resolve(Inno.References.ReferenceDescriptor) f885f35ec34be7a4bb79279038374be381ab407f47d33778c72cf6cfb1202e1a -->

```csharp
public Inno.References.ReferenceResolution Inno.References.ReferenceCatalog.Resolve(Inno.References.ReferenceDescriptor descriptor)
```

Resolves a persistent descriptor using the resolver selected by its kind.

**Parameter `descriptor`:** The descriptor to resolve.

**Returns:** The resolver result, an unassigned result for an empty target, or a missing result when no resolver is installed.

**Throws `System.ArgumentNullException`:** Thrown when `descriptor` is null.

**Throws `System.InvalidOperationException`:** Thrown when a resolver returns a result for a different descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceCatalog.cs#L86).

## `empty`

<a id="api-677b1258bbd55b00"></a>
<!-- api: P:Inno.References.ReferenceCatalog.empty 6c9e393df012b041d9502500e4f09dd7639b80257e9c1de060b1eb8821f47d0e -->

```csharp
public static Inno.References.ReferenceCatalog Inno.References.ReferenceCatalog.empty { get; }
```

Gets an empty initial reference catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceCatalog.cs#L24).

## `generation`

<a id="api-e0a66941a49c405f"></a>
<!-- api: P:Inno.References.ReferenceCatalog.generation afe8d278ae23c3a0c7df86a1cd349be26e9be4833e9c74d5df0d498f54cc0aa4 -->

```csharp
public long Inno.References.ReferenceCatalog.generation { get; }
```

Gets the owner-assigned generation represented by this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceCatalog.cs#L29).
