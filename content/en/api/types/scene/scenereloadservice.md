---
title: "SceneReloadService"
description: "Reference for SceneReloadService in Inno.Scene."
uid: api.inno.scene.269fe7aca5134be6
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneReloadService`

This reference describes `SceneReloadService` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1c759f6295a49151) | Method |
| [`Capture`](#api-3e39b725064fa5d8) | Method |

## Type declaration

<a id="api-269fe7aca5134be6"></a>
<!-- api: T:Inno.Scene.SceneReloadService 3d35629252baee42b0faa7ea84c287741565fa55f1f1fecd5d569d668b60a3b8 -->

```csharp
public sealed class Inno.Scene.SceneReloadService
```

Creates scene state-transfer transactions for assembly generation changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadService.cs#L12).

## `#ctor`

<a id="api-1c759f6295a49151"></a>
<!-- api: M:Inno.Scene.SceneReloadService.#ctor(Inno.Scene.SceneWorld,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 02e52622dad7f3d796ef90c5f8bea679993e522dfa73af82fcae3bb2622d75a3 -->

```csharp
public Inno.Scene.SceneReloadService.SceneReloadService(Inno.Scene.SceneWorld world, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Creates a scene reload service bound to one serialization generation owner.

**Parameter `serialization`:** The serialization registry used to capture and restore scene state.

**Parameter `world`:** The isolated scene world whose active generation is captured.

**Parameter `assets`:** The asset reference generation used throughout capture, activation, and rollback.

**Throws `System.ArgumentNullException`:** Thrown when `world`, `serialization`, or
`assets` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadService.cs#L34).

## `Capture`

<a id="api-3e39b725064fa5d8"></a>
<!-- api: M:Inno.Scene.SceneReloadService.Capture(Inno.Extensibility.Types.TypeCacheReloadContext) cabe8bfb5cd0c279508a90f29527a781d6ffe9a17441edea66b8e29cd7d0075f -->

```csharp
public Inno.Scene.ISceneReloadStateTransfer Inno.Scene.SceneReloadService.Capture(Inno.Extensibility.Types.TypeCacheReloadContext context)
```

Captures all loaded scene objects affected by a prepared type-cache reload.

**Parameter `context`:** The prepared type-cache reload context.

**Returns:** A staged state transfer that has not modified live objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadService.cs#L53).
