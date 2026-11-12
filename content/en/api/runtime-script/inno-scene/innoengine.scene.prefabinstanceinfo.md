---
title: "PrefabInstanceInfo"
description: "Reference for PrefabInstanceInfo in Inno.Scene."
uid: api.inno.scene.runtime-script.8fe7ac46e521ff9a
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `PrefabInstanceInfo`

This reference describes `PrefabInstanceInfo` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e10c8ce113641122) | Method |
| [`instanceRoot`](#api-d1f8fa43edf21508) | Property |
| [`isMissing`](#api-91ab33324ad72dce) | Property |
| [`isRoot`](#api-f7fab3d83f2f92c1) | Property |
| [`isVariant`](#api-2bb25eb613fae927) | Property |
| [`orphanedOverrideCount`](#api-159e175d16df6c03) | Property |
| [`overrideCount`](#api-8c460d76292e12d6) | Property |
| [`sourceAssetId`](#api-6da79d986902521c) | Property |
| [`sourceObjectId`](#api-0a0e3384c98b385e) | Property |

## Type declaration

<a id="api-8fe7ac46e521ff9a"></a>
<!-- api: T:InnoEngine.Scene.PrefabInstanceInfo eb779a51a32b35d13ebe8ee46f4daadc461a54e0ca10715336aff1181f00f02a -->

```csharp
public sealed class InnoEngine.Scene.PrefabInstanceInfo
```

Describes the read-only source connection retained by one prefab instance object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L10).

## `#ctor`

<a id="api-e10c8ce113641122"></a>
<!-- api: M:InnoEngine.Scene.PrefabInstanceInfo.#ctor c7efe1ef8050aa2522af79c70ac7d6dc26a9a1ed64e430ac2df29bec05f6d36e -->

```csharp
public InnoEngine.Scene.PrefabInstanceInfo.PrefabInstanceInfo()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L10).

## `instanceRoot`

<a id="api-d1f8fa43edf21508"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.instanceRoot ca179adefa7fa28666e13f1721f81d1e68cf37f295a217f40145cec3f6256b7c -->

```csharp
public InnoEngine.Scene.GameObject InnoEngine.Scene.PrefabInstanceInfo.instanceRoot { get; }
```

Gets the root object of this prefab instance connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L47).

## `isMissing`

<a id="api-91ab33324ad72dce"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.isMissing 0fe99619908c1316af8b685942e452e82fca89717734657d01df5fa1513c9627 -->

```csharp
public bool InnoEngine.Scene.PrefabInstanceInfo.isMissing { get; }
```

Gets whether the source prefab was unavailable during restoration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L62).

## `isRoot`

<a id="api-f7fab3d83f2f92c1"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.isRoot 87d69a4eb7b2c0e7f5643e631fd41b2817772a9ab677e5fec841065f049b6637 -->

```csharp
public bool InnoEngine.Scene.PrefabInstanceInfo.isRoot { get; }
```

Gets whether this object is the instance connection root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L52).

## `isVariant`

<a id="api-2bb25eb613fae927"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.isVariant 1800f02a1a0411e9181465acdb6b2464435a346ade70295fc98be505487a454d -->

```csharp
public bool InnoEngine.Scene.PrefabInstanceInfo.isVariant { get; }
```

Gets whether the connection originates from a prefab variant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L57).

## `orphanedOverrideCount`

<a id="api-159e175d16df6c03"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.orphanedOverrideCount 3aaae61b94b2ca04cdb0b264fa1b439345b50e3a365880238d130a7c41d4c452 -->

```csharp
public int InnoEngine.Scene.PrefabInstanceInfo.orphanedOverrideCount { get; }
```

Gets the number of retained overrides that no longer match the current source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L72).

## `overrideCount`

<a id="api-8c460d76292e12d6"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.overrideCount 6564d5155e39a73836375ab59a3dd0531eee017c1b289ef6e405b4033a301a9e -->

```csharp
public int InnoEngine.Scene.PrefabInstanceInfo.overrideCount { get; }
```

Gets the number of retained overrides for this instance connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L67).

## `sourceAssetId`

<a id="api-6da79d986902521c"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.sourceAssetId e3be63b70381d9e81755ee7d3d3952332530e32d39c320ca9cb85de3ea4b1b2e -->

```csharp
public System.Guid InnoEngine.Scene.PrefabInstanceInfo.sourceAssetId { get; }
```

Gets the persistent identity of the source prefab asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L37).

## `sourceObjectId`

<a id="api-0a0e3384c98b385e"></a>
<!-- api: P:InnoEngine.Scene.PrefabInstanceInfo.sourceObjectId ea975e80a789ecdc5a274bb84389d36c59d547d53263522a2d205db0fa15de5a -->

```csharp
public System.Guid InnoEngine.Scene.PrefabInstanceInfo.sourceObjectId { get; }
```

Gets the source-local identity represented by this object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Prefabs/PrefabInstanceInfo.cs#L42).
