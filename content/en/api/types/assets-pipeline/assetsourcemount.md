---
title: "AssetSourceMount"
description: "Reference for AssetSourceMount in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.0b76680d8fa915b8
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSourceMount`

This reference describes `AssetSourceMount` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3c5d7a2558c228fc) | Method |
| [`Resolve`](#api-ca0c475b5e889873) | Method |
| [`dependencySourceIds`](#api-d4b62f6ffe98ecb9) | Property |
| [`id`](#api-70575aa62279d1d3) | Property |
| [`isReadOnly`](#api-a8facfdcc7451d5f) | Property |
| [`rootPath`](#api-a87b3a38a15333ee) | Property |

## Type declaration

<a id="api-0b76680d8fa915b8"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSourceMount bd60d96153c6567d84b6eb385c4bde601fb019595f352d517a82f13bb0c7c241 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSourceMount
```

Maps one isolated asset source to a controlled physical root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L14).

## `#ctor`

<a id="api-3c5d7a2558c228fc"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMount.#ctor(Inno.Assets.AssetSourceId,System.String,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Assets.AssetSourceId}) 42caae0ee856784e61253090d0296b5eb2453d8ac5c867008dab755f4f048714 -->

```csharp
public Inno.Assets.Pipeline.AssetSourceMount.AssetSourceMount(Inno.Assets.AssetSourceId id, string rootPath, bool isReadOnly, System.Collections.Generic.IEnumerable<Inno.Assets.AssetSourceId>? dependencies = null)
```

Creates an asset source mount.

**Parameter `id`:** Stable source identity.

**Parameter `rootPath`:** Absolute or resolvable physical source root.

**Parameter `isReadOnly`:** Whether all source mutations must be rejected.

**Parameter `dependencies`:** Other read-only sources this source may reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L31).

## `Resolve`

<a id="api-ca0c475b5e889873"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMount.Resolve(System.String) 15f9c3b17268171912281daceca69a479e212e4db337fc2fe92454c9e4dfd4ae -->

```csharp
public string Inno.Assets.Pipeline.AssetSourceMount.Resolve(string localPath)
```

Resolves a source-local path and rejects physical root escape.

**Parameter `localPath`:** Source-local path.

**Returns:** An absolute path contained by this mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L77).

## `dependencySourceIds`

<a id="api-d4b62f6ffe98ecb9"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceMount.dependencySourceIds 67c401ac1a77f8c967e2b86c7f75da365da23d9fb11fb59a9114bb6f9cd26e62 -->

```csharp
public System.Collections.Generic.IReadOnlySet<Inno.Assets.AssetSourceId> Inno.Assets.Pipeline.AssetSourceMount.dependencySourceIds { get; }
```

Gets explicitly declared cross-source dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L66).

## `id`

<a id="api-70575aa62279d1d3"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceMount.id 433f3e4b54ea14696aa22b973d9a353239c27e0fedae80048515f5441278605a -->

```csharp
public Inno.Assets.AssetSourceId Inno.Assets.Pipeline.AssetSourceMount.id { get; }
```

Gets the stable source identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L51).

## `isReadOnly`

<a id="api-a8facfdcc7451d5f"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceMount.isReadOnly 8a206062d945a2318b469f40b332ac1bf4d4c438bdac493f8eb7717f77277a37 -->

```csharp
public bool Inno.Assets.Pipeline.AssetSourceMount.isReadOnly { get; }
```

Gets whether source mutations are forbidden.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L61).

## `rootPath`

<a id="api-a87b3a38a15333ee"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceMount.rootPath 53fa646923a2a9d40b5309612f1e0eea17618d35e1886ba81f093332fd674596 -->

```csharp
public string Inno.Assets.Pipeline.AssetSourceMount.rootPath { get; }
```

Gets the controlled physical source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSourceMount.cs#L56).
