---
title: "ReloadableSceneSystem"
description: "Reference for ReloadableSceneSystem in Inno.Scene.Reload.TestModule."
uid: api.inno.scene.reload.testmodule.bbd720f667b969e0
kind: api
owners:
  - Inno.Scene.Reload.TestModule
apiSurface: source-clr
contracts:
  - project.inno-scene-reload-testmodule
---
# `ReloadableSceneSystem`

This reference describes `ReloadableSceneSystem` in `Inno.Scene.Reload.TestModule`. Read the [shared contract](../../../../contributing/testing/support/inno-scene-reload-testmodule.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.GameSystem`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-22f6c22b5fb8456f) | Method |
| [`value`](#api-80084bf3b851cc07) | Property |

## Type declaration

<a id="api-bbd720f667b969e0"></a>
<!-- api: T:Inno.Scene.Reload.TestModule.ReloadableSceneSystem e2d4ddb21ed77e9af2f20f506db965b4f7a3b89057a082917c02ab3899b9a78d -->

```csharp
public sealed class Inno.Scene.Reload.TestModule.ReloadableSceneSystem : Inno.Scene.GameSystem
```

Provides persistent system state for exercising missing-system History and reload recovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneSystem.cs#L11).

## `#ctor`

<a id="api-22f6c22b5fb8456f"></a>
<!-- api: M:Inno.Scene.Reload.TestModule.ReloadableSceneSystem.#ctor 040d2449a905033a1b9a84cb56724cb4c1bfe8236b8166b3a5e2ba60a136cd44 -->

```csharp
public Inno.Scene.Reload.TestModule.ReloadableSceneSystem.ReloadableSceneSystem()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneSystem.cs#L11).

## `value`

<a id="api-80084bf3b851cc07"></a>
<!-- api: P:Inno.Scene.Reload.TestModule.ReloadableSceneSystem.value 2997be094ea460a2cb8590e9d787ad7958c22e9ff67b64cb3a927896a373f57e -->

```csharp
public int Inno.Scene.Reload.TestModule.ReloadableSceneSystem.value { get; set; }
```

Gets or sets the state retained while the system implementation is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneSystem.cs#L17).
