---
title: "ContentPackIndex"
description: "Reference for ContentPackIndex in Inno.Content."
uid: api.inno.content.e62fc7378b965840
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentPackIndex`

This reference describes `ContentPackIndex` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`C_INDEX_KEY`](#api-e387a236e7a481ac) | Field |
| [`#ctor`](#api-39e5a35e70481743) | Method |
| [`TryGetEntry`](#api-e05f0a006aa403ae) | Method |
| [`entries`](#api-26b5f208e1f1bd8a) | Property |
| [`totalLength`](#api-d9533d3b8102dff8) | Property |

## Type declaration

<a id="api-e62fc7378b965840"></a>
<!-- api: T:Inno.Content.ContentPackIndex 8c11deb22d14a6749e3cf7c748d55480cb58dc7469c001860ce823980a6440d1 -->

```csharp
public sealed class Inno.Content.ContentPackIndex
```

Freezes the complete payload set and rejects ambiguous keys before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndex.cs#L11).

## `C_INDEX_KEY`

<a id="api-e387a236e7a481ac"></a>
<!-- api: F:Inno.Content.ContentPackIndex.C_INDEX_KEY 154923d760c7879a8254a46bd5ddd7a65e872d73b290e5ae7718cfa305eef862 -->

```csharp
public const string Inno.Content.ContentPackIndex.C_INDEX_KEY = "Content.index"
```

Gets the reserved archive entry that carries this index and never indexes itself.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndex.cs#L16).

## `#ctor`

<a id="api-39e5a35e70481743"></a>
<!-- api: M:Inno.Content.ContentPackIndex.#ctor(System.Collections.Generic.IEnumerable{Inno.Content.ContentEntry}) e4a68c7205b429cba906b7f340f9cc5c3b14d0287fb56b63f6f99b2eade93ad3 -->

```csharp
public Inno.Content.ContentPackIndex.ContentPackIndex(System.Collections.Generic.IEnumerable<Inno.Content.ContentEntry> entries)
```

Copies and sorts a complete payload inventory.

**Parameter `entries`:** Immutable payload descriptions; ownership of the input enumeration remains with the caller.

**Throws `System.ArgumentException`:** An entry is null, repeats a folded key, or uses the reserved index identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndex.cs#L29).

## `TryGetEntry`

<a id="api-e05f0a006aa403ae"></a>
<!-- api: M:Inno.Content.ContentPackIndex.TryGetEntry(Inno.Content.ContentKey,Inno.Content.ContentEntry@) e12b6cd6867d8547c5e7a511e8e55e5c6b22a7ae89c8e13f474181e8ead93f09 -->

```csharp
public bool Inno.Content.ContentPackIndex.TryGetEntry(Inno.Content.ContentKey key, out Inno.Content.ContentEntry? entry)
```

Finds the metadata for an exact assigned key.

**Parameter `key`:** The case-sensitive logical identity.

**Parameter `entry`:** The immutable metadata when present; otherwise null.

**Returns:** True only when the exact key is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndex.cs#L74).

## `entries`

<a id="api-26b5f208e1f1bd8a"></a>
<!-- api: P:Inno.Content.ContentPackIndex.entries 9f52e094f56d3ba64fbe8d2a6186cefc795556830b8f5babff4322e4484748ba -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Content.ContentEntry> Inno.Content.ContentPackIndex.entries { get; }
```

Gets the immutable inventory in deterministic logical-key order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndex.cs#L55).

## `totalLength`

<a id="api-d9533d3b8102dff8"></a>
<!-- api: P:Inno.Content.ContentPackIndex.totalLength 4e67d152b3c21ebd38bdbec7d6a54636cb53dbdc0cb6e9988a300cb76a97ad40 -->

```csharp
public long Inno.Content.ContentPackIndex.totalLength { get; }
```

Gets the checked sum of all decoded payload lengths, excluding the index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackIndex.cs#L60).
