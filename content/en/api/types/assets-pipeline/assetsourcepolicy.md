---
title: "AssetSourcePolicy"
description: "Reference for AssetSourcePolicy in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.38412f25e71621f2
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSourcePolicy`

This reference describes `AssetSourcePolicy` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c878b51dcced01d6) | Method |
| [`#ctor`](#api-8525b75c146565ce) | Method |
| [`IsGeneratedPath`](#api-a06c715d7ca98ccb) | Method |
| [`IsIgnored`](#api-e7da001d1b6b996c) | Method |
| [`defaultPolicy`](#api-cbf49d372a816446) | Property |

## Type declaration

<a id="api-38412f25e71621f2"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSourcePolicy 69bfdbb93376d7478ce3a63f2449786bb00254017633e5c8a0013251de0a0088 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSourcePolicy
```

Defines which physical entries are excluded from an asset source tree.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/Filtering/AssetSourcePolicy.cs#L11).

## `#ctor`

<a id="api-c878b51dcced01d6"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourcePolicy.#ctor 1b7ca9774c0d28470b974529044406466de361ffae9146dc95e7a5dceec400d4 -->

```csharp
public Inno.Assets.Pipeline.AssetSourcePolicy.AssetSourcePolicy()
```

Creates a source policy using the engine's default noise filters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/Filtering/AssetSourcePolicy.cs#L48).

## `#ctor`

<a id="api-8525b75c146565ce"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourcePolicy.#ctor(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String}) 93eb426ac86b14ed126387c3206cc519d3e8ee69b334e6b6323e176db12f7ddf -->

```csharp
public Inno.Assets.Pipeline.AssetSourcePolicy.AssetSourcePolicy(System.Collections.Generic.IEnumerable<string>? ignoredFileNames, System.Collections.Generic.IEnumerable<string>? ignoredDirectoryNames, System.Collections.Generic.IEnumerable<string>? ignoredPrefixes, System.Collections.Generic.IEnumerable<string>? ignoredSuffixes)
```

Creates a source policy with additional ignored names and affixes.

**Parameter `ignoredFileNames`:** Additional case-insensitive file names excluded from every source mount.

**Parameter `ignoredDirectoryNames`:** Additional case-insensitive directory names excluded with their descendants.

**Parameter `ignoredPrefixes`:** Additional file-name prefixes treated as transient authoring noise.

**Parameter `ignoredSuffixes`:** Additional file-name suffixes treated as transient authoring noise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/Filtering/AssetSourcePolicy.cs#L68).

## `IsGeneratedPath`

<a id="api-a06c715d7ca98ccb"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourcePolicy.IsGeneratedPath(System.String) b591abe14671ccd2f88585dfb8f960c62cc2fb32008c2b46f1d8e50119e11f09 -->

```csharp
public static bool Inno.Assets.Pipeline.AssetSourcePolicy.IsGeneratedPath(string relativePath)
```

Determines whether a path is generated asset metadata.

**Parameter `relativePath`:** The normalized path relative to its owning source mount.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/Filtering/AssetSourcePolicy.cs#L132).

## `IsIgnored`

<a id="api-e7da001d1b6b996c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourcePolicy.IsIgnored(System.String,System.Boolean) c05b78291bdcca2767c23b9db6b81a901b0692496560c65d4f38e942aded69f5 -->

```csharp
public bool Inno.Assets.Pipeline.AssetSourcePolicy.IsIgnored(string relativePath, bool isDirectory)
```

Determines whether an entry is excluded from the source database.

**Parameter `relativePath`:** The normalized path relative to its owning source mount.

**Parameter `isDirectory`:** Whether the source entry represents a directory.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/Filtering/AssetSourcePolicy.cs#L99).

## `defaultPolicy`

<a id="api-cbf49d372a816446"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourcePolicy.defaultPolicy c57f215da9544533a3a71ecceff11dd692ea35684ef7501c0ecd64e390f7abfe -->

```csharp
public static Inno.Assets.Pipeline.AssetSourcePolicy Inno.Assets.Pipeline.AssetSourcePolicy.defaultPolicy { get; }
```

Gets the default source policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/Filtering/AssetSourcePolicy.cs#L85).
