---
title: "SceneContentSource"
description: "Reference for SceneContentSource in Inno.Scene."
uid: api.inno.scene.223aabd7a9d8e8fd
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneContentSource`

This reference describes `SceneContentSource` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateScope`](#api-abc07d5a9a1f75eb) | Method |
| [`CreateScope`](#api-e2c2aa4d84dc653a) | Method |

## Type declaration

<a id="api-223aabd7a9d8e8fd"></a>
<!-- api: T:Inno.Scene.SceneContentSource f5f700911f42350a7899d3c22569c37c541500a3b1b440e3bc0d803634af3b0f -->

```csharp
public static class Inno.Scene.SceneContentSource
```

Projects loaded scenes into the shared content protocol without depending on a rendering or audio model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Content/SceneContentSource.cs#L11).

## `CreateScope`

<a id="api-abc07d5a9a1f75eb"></a>
<!-- api: M:Inno.Scene.SceneContentSource.CreateScope(Inno.Scene.SceneWorld) b35af48f185fb4ea0ea7b4a6caa3d5f087dc5d5682a4c81db763305d8e65cc6c -->

```csharp
public static Inno.References.ContentReadScope Inno.Scene.SceneContentSource.CreateScope(Inno.Scene.SceneWorld world)
```

Captures the ordered roots and primary identity of one scene world.

**Parameter `world`:** The owner whose current scene set should be visible.

**Returns:** A caller-owned, operation-scoped identity view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Content/SceneContentSource.cs#L22).

## `CreateScope`

<a id="api-e2c2aa4d84dc653a"></a>
<!-- api: M:Inno.Scene.SceneContentSource.CreateScope(System.Collections.Generic.IEnumerable{Inno.Scene.GameScene},Inno.Scene.GameScene) a0f3185a2648d90378091fbc6c8524516e1601925efad1c04b4a2bc0ffcd01b1 -->

```csharp
public static Inno.References.ContentReadScope Inno.Scene.SceneContentSource.CreateScope(System.Collections.Generic.IEnumerable<Inno.Scene.GameScene> scenes, Inno.Scene.GameScene? activeScene)
```

Captures an explicit coherent scene presentation selected by a host.

**Parameter `scenes`:** The ordered live scene roots.

**Parameter `activeScene`:** The optional primary root, which must be in the collection.

**Returns:** A caller-owned scope that retains no scene instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Content/SceneContentSource.cs#L40).
