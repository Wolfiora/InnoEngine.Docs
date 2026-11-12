---
title: "PrefabAsset"
description: "Reference for PrefabAsset in Inno.Scene."
uid: api.inno.scene.runtime-script.066997beee0bdb11
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `PrefabAsset`

This reference describes `PrefabAsset` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9e6072ab7faf6d19) | Method |
| [`CreateImported`](#api-1714e28ec0535cfa) | Method |

## Type declaration

<a id="api-066997beee0bdb11"></a>
<!-- api: T:InnoEngine.Scene.PrefabAsset 2ce383d707c2c97e778f390216ff939d5792579bcf4efe2e314eed52d67e3e0c -->

```csharp
public sealed class InnoEngine.Scene.PrefabAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Stores a persistent game object subtree that can be instantiated repeatedly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L18).

## `#ctor`

<a id="api-9e6072ab7faf6d19"></a>
<!-- api: M:InnoEngine.Scene.PrefabAsset.#ctor b44354dfbfb856fd0580ea0fb119f1e12f16773e9728cb012db02d31bf6a0e63 -->

```csharp
public InnoEngine.Scene.PrefabAsset.PrefabAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L18).

## `CreateImported`

<a id="api-1714e28ec0535cfa"></a>
<!-- api: M:InnoEngine.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency}) 86f3e85124ed6db8caa28b799562683be464b6a10dfc3d8d5ec37420b7fac805 -->

```csharp
public static InnoEngine.Scene.PrefabAsset InnoEngine.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan<byte> payload, System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetDependency> dependencies)
```

Creates an imported prefab asset from validated runtime content produced by the prefab asset pipeline.

**Parameter `payload`:** The complete serialized runtime object subtree.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the subtree.

**Returns:** A prefab asset ready for an asset import writer to commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L112).
