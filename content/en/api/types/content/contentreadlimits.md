---
title: "ContentReadLimits"
description: "Reference for ContentReadLimits in Inno.Content."
uid: api.inno.content.ac50138c4fb60523
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentReadLimits`

This reference describes `ContentReadLimits` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f66a9904df946838) | Method |
| [`entryBytes`](#api-6aab874fea1bcb8f) | Property |
| [`entryCount`](#api-e86c2a7f90bc9197) | Property |
| [`indexBytes`](#api-e690386a97bb2ecf) | Property |
| [`packBytes`](#api-4058995bb47541c7) | Property |
| [`totalBytes`](#api-01792d52499b36b0) | Property |

## Type declaration

<a id="api-ac50138c4fb60523"></a>
<!-- api: T:Inno.Content.ContentReadLimits be5a535b483ee3494b514433e960c9eb0eafad3092dd5ab4e3c45f802ab7b34e -->

```csharp
public sealed class Inno.Content.ContentReadLimits
```

Bounds encoded packs, decoded entries, inventory size, and total expansion before any content is accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L8).

## `#ctor`

<a id="api-f66a9904df946838"></a>
<!-- api: M:Inno.Content.ContentReadLimits.#ctor(System.Int64,System.Int64,System.Int64,System.Int32,System.Int32) 8b7bf604038398c18256d1d6ba7618a4863eb95dfeed891586892e520b934929 -->

```csharp
public Inno.Content.ContentReadLimits.ContentReadLimits(long packBytes = 2147483648, long entryBytes = 536870912, long totalBytes = 8589934592, int indexBytes = 33554432, int entryCount = 100000)
```

Creates explicit positive budgets for one content preparation operation.

**Parameter `packBytes`:** The maximum encoded pack length.

**Parameter `entryBytes`:** The maximum decoded length of one payload.

**Parameter `totalBytes`:** The maximum sum of all decoded payload lengths.

**Parameter `indexBytes`:** The maximum decoded inventory document length.

**Parameter `entryCount`:** The maximum number of payload entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L28).

## `entryBytes`

<a id="api-6aab874fea1bcb8f"></a>
<!-- api: P:Inno.Content.ContentReadLimits.entryBytes 3acc10af10a59908e32ed21eeec15fed9c87c1cd560b7cea2c4f0c7e870f5519 -->

```csharp
public long Inno.Content.ContentReadLimits.entryBytes { get; }
```

Gets the decoded single-payload budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L55).

## `entryCount`

<a id="api-e86c2a7f90bc9197"></a>
<!-- api: P:Inno.Content.ContentReadLimits.entryCount 4dd5394e601dc54ac636f30e42867900aac12e244bb641a2abe46c55a2143d61 -->

```csharp
public int Inno.Content.ContentReadLimits.entryCount { get; }
```

Gets the payload count budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L70).

## `indexBytes`

<a id="api-e690386a97bb2ecf"></a>
<!-- api: P:Inno.Content.ContentReadLimits.indexBytes fe64beb536b264ee5b81dda4f82196b20e0d3a45953a17c8e8a1d23ee41c9989 -->

```csharp
public int Inno.Content.ContentReadLimits.indexBytes { get; }
```

Gets the decoded index budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L65).

## `packBytes`

<a id="api-4058995bb47541c7"></a>
<!-- api: P:Inno.Content.ContentReadLimits.packBytes b6dcbc00b1369acf1e340752442ae6585bb6e50d9c6e47c6f1f5b2e28873adc2 -->

```csharp
public long Inno.Content.ContentReadLimits.packBytes { get; }
```

Gets the encoded pack budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L50).

## `totalBytes`

<a id="api-01792d52499b36b0"></a>
<!-- api: P:Inno.Content.ContentReadLimits.totalBytes 439a176ca8d08c6e3254fa9d1669b716c578a24b0ab1c0efb18de79fb54be5b3 -->

```csharp
public long Inno.Content.ContentReadLimits.totalBytes { get; }
```

Gets the decoded total payload budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLimits.cs#L60).
