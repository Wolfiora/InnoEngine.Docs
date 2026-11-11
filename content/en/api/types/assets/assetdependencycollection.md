---
title: "AssetDependencyCollection"
description: "Reference for AssetDependencyCollection in Inno.Assets."
uid: api.inno.assets.559aa4b1fff17720
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetDependencyCollection`

This reference describes `AssetDependencyCollection` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4440673e877d66fa) | Method |
| [`#ctor`](#api-262e2980bbafbfe1) | Method |
| [`Add`](#api-7ab1d1dd0c766f97) | Method |
| [`dependencies`](#api-54a459dc52a80eed) | Property |
| [`includeLastKnownPaths`](#api-0ebd0b0274139971) | Property |

## Type declaration

<a id="api-559aa4b1fff17720"></a>
<!-- api: T:Inno.Assets.AssetDependencyCollection 882fd3964970866278f0b867d955fdc7f5f2181a1dc34e8b363a4a0dc7ab88b6 -->

```csharp
public sealed class Inno.Assets.AssetDependencyCollection
```

Collects direct asset dependencies encountered by a serialization operation.

**Constraints:** Add this instance to a `Inno.Core.Serialization.SerializationContext` when
serializing an asset source that must publish dependency metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetDependencyCollection.cs#L17).

## `#ctor`

<a id="api-4440673e877d66fa"></a>
<!-- api: M:Inno.Assets.AssetDependencyCollection.#ctor 3c69fd9f3c2dc02e45d337d6683f78587c2a104effc3887b09f70f875a4ae3af -->

```csharp
public Inno.Assets.AssetDependencyCollection.AssetDependencyCollection()
```

Creates a dependency collector that preserves last-known source paths in serialized references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetDependencyCollection.cs#L24).

## `#ctor`

<a id="api-262e2980bbafbfe1"></a>
<!-- api: M:Inno.Assets.AssetDependencyCollection.#ctor(System.Boolean) 09c67b0f15514f9ed80f23dd881a63ed12301a7021d27c6c826148e230689a0c -->

```csharp
public Inno.Assets.AssetDependencyCollection.AssetDependencyCollection(bool includeLastKnownPaths)
```

Creates a dependency collector with an explicit location-hint policy.

**Parameter `includeLastKnownPaths`:** Whether serialized asset references and collected dependency descriptors retain source path hints.
Disable this only for semantic content comparison; persistent identity and stable type identity remain encoded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetDependencyCollection.cs#L36).

## `Add`

<a id="api-7ab1d1dd0c766f97"></a>
<!-- api: M:Inno.Assets.AssetDependencyCollection.Add(Inno.Assets.AssetDependency) d517ba652c4c596cbcfd7584ebfef73227cce46dd3cf01c078e63c194b333374 -->

```csharp
public void Inno.Assets.AssetDependencyCollection.Add(Inno.Assets.AssetDependency dependency)
```

Includes a dependency already captured inside a neutral nested property payload.

**Parameter `dependency`:** Stable asset/type identity and optional location hint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetDependencyCollection.cs#L81).

## `dependencies`

<a id="api-54a459dc52a80eed"></a>
<!-- api: P:Inno.Assets.AssetDependencyCollection.dependencies ea44fdb03f43cf71d1a7f32c1cec57c0d8f6b5e4452a7aaaff364ce3731d58f4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> Inno.Assets.AssetDependencyCollection.dependencies { get; }
```

Gets the collected dependencies in deterministic persistent-identity order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetDependencyCollection.cs#L49).

## `includeLastKnownPaths`

<a id="api-0ebd0b0274139971"></a>
<!-- api: P:Inno.Assets.AssetDependencyCollection.includeLastKnownPaths 8670b140a1de6e55dd360aea7a65d70ab16283c08be28c91204e92a326475a32 -->

```csharp
public bool Inno.Assets.AssetDependencyCollection.includeLastKnownPaths { get; }
```

Gets whether serialized asset references and collected dependencies retain source path hints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetDependencyCollection.cs#L44).
