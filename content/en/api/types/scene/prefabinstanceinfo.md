---
title: "PrefabInstanceInfo"
description: "Reference for PrefabInstanceInfo in Inno.Scene."
uid: api.inno.scene.0e68a1242d012171
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `PrefabInstanceInfo`

This reference describes `PrefabInstanceInfo` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`instanceRoot`](#api-4efa8e7561974cfa) | Property |
| [`isMissing`](#api-5c83e601d4a17d7c) | Property |
| [`isRoot`](#api-c61de9712b11e961) | Property |
| [`isVariant`](#api-c6e1adfd330707af) | Property |
| [`orphanedOverrideCount`](#api-2fd70fe2d51ddeb5) | Property |
| [`overrideCount`](#api-393cf1d273ea7b39) | Property |
| [`sourceAssetId`](#api-80f95460b0b1470b) | Property |
| [`sourceObjectId`](#api-79bf28fdf59bbd81) | Property |

## Type declaration

<a id="api-0e68a1242d012171"></a>
<!-- api: T:Inno.Scene.PrefabInstanceInfo cd8193dc1377428ae638a9b17dfea1757d202ef228b666b7750f71001aefa78d -->

```csharp
public sealed class Inno.Scene.PrefabInstanceInfo
```

Describes the read-only source connection retained by one prefab instance object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L10).

## `instanceRoot`

<a id="api-4efa8e7561974cfa"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.instanceRoot f84864bdb328dcadb5364f28f8f6edf3de77eeb3499b46b64f66c18b87e2a30d -->

```csharp
public Inno.Scene.GameObject Inno.Scene.PrefabInstanceInfo.instanceRoot { get; }
```

Gets the root object of this prefab instance connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L47).

## `isMissing`

<a id="api-5c83e601d4a17d7c"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.isMissing 369cef81c4cd8c8934ff19e842cc2ea018d75dac52e63be43c876d58e6cc608b -->

```csharp
public bool Inno.Scene.PrefabInstanceInfo.isMissing { get; }
```

Gets whether the source prefab was unavailable during restoration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L62).

## `isRoot`

<a id="api-c61de9712b11e961"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.isRoot 0b0884c3aae9afb291259db166b0858fa779df045af42c8dceb6820952c3b545 -->

```csharp
public bool Inno.Scene.PrefabInstanceInfo.isRoot { get; }
```

Gets whether this object is the instance connection root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L52).

## `isVariant`

<a id="api-c6e1adfd330707af"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.isVariant 3ee883758ac5bd588e2aaaf4cda39f2682f63ddb4a294d8123a0f91924536e0f -->

```csharp
public bool Inno.Scene.PrefabInstanceInfo.isVariant { get; }
```

Gets whether the connection originates from a prefab variant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L57).

## `orphanedOverrideCount`

<a id="api-2fd70fe2d51ddeb5"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.orphanedOverrideCount 0ea15274274478d9346950033aff4bfba69027781668367d84f94e8ff3ea9236 -->

```csharp
public int Inno.Scene.PrefabInstanceInfo.orphanedOverrideCount { get; }
```

Gets the number of retained overrides that no longer match the current source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L72).

## `overrideCount`

<a id="api-393cf1d273ea7b39"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.overrideCount 7ae60bee5a2188e8475d5ad2a98e0e88fcc40a41c102e7555287aaf758261fe1 -->

```csharp
public int Inno.Scene.PrefabInstanceInfo.overrideCount { get; }
```

Gets the number of retained overrides for this instance connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L67).

## `sourceAssetId`

<a id="api-80f95460b0b1470b"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.sourceAssetId 6f6846765812e0d5255034bcb708947b96a234b990ca3e9449f34afb8258b69d -->

```csharp
public System.Guid Inno.Scene.PrefabInstanceInfo.sourceAssetId { get; }
```

Gets the persistent identity of the source prefab asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L37).

## `sourceObjectId`

<a id="api-79bf28fdf59bbd81"></a>
<!-- api: P:Inno.Scene.PrefabInstanceInfo.sourceObjectId 02c6db8347bbef5375f37f268c1de441617edfe70c32bf4d7642353326ec7ce2 -->

```csharp
public System.Guid Inno.Scene.PrefabInstanceInfo.sourceObjectId { get; }
```

Gets the source-local identity represented by this object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L42).
