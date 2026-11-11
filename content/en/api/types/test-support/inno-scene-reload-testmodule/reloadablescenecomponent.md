---
title: "ReloadableSceneComponent"
description: "Reference for ReloadableSceneComponent in Inno.Scene.Reload.TestModule."
uid: api.inno.scene.reload.testmodule.cc88d3132d71b0f5
kind: api
owners:
  - Inno.Scene.Reload.TestModule
apiSurface: source-clr
contracts:
  - project.inno-scene-reload-testmodule
---
# `ReloadableSceneComponent`

This reference describes `ReloadableSceneComponent` in `Inno.Scene.Reload.TestModule`. Read the [shared contract](../../../../contributing/testing/support/inno-scene-reload-testmodule.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.GameComponent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d54c39ecc3816518) | Method |
| [`asset`](#api-4655954ca0c04aa2) | Property |
| [`rejectRestore`](#api-fbae033dcd6a5c34) | Property |
| [`value`](#api-582c0a614a14f8b0) | Property |

## Type declaration

<a id="api-cc88d3132d71b0f5"></a>
<!-- api: T:Inno.Scene.Reload.TestModule.ReloadableSceneComponent 6ffd61c58ffbc074b1ca6ec4d4cfb655e917f8dfb014e48a24a3e0e35537ebb8 -->

```csharp
public sealed class Inno.Scene.Reload.TestModule.ReloadableSceneComponent : Inno.Scene.GameComponent
```

Provides reloadable scene state for validating Plugin generation removal and recovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneComponent.cs#L13).

## `#ctor`

<a id="api-d54c39ecc3816518"></a>
<!-- api: M:Inno.Scene.Reload.TestModule.ReloadableSceneComponent.#ctor 272b7e1934d74f97fe894fbcce2ffc41fb0b7665688a5cd3d5017990d25d0ae9 -->

```csharp
public Inno.Scene.Reload.TestModule.ReloadableSceneComponent.ReloadableSceneComponent()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneComponent.cs#L13).

## `asset`

<a id="api-4655954ca0c04aa2"></a>
<!-- api: P:Inno.Scene.Reload.TestModule.ReloadableSceneComponent.asset 3fc367d5e615f15f52238b7f1a595caecb8c5e5754b45e9bef0fd99758bbc5de -->

```csharp
public Inno.Assets.TextAsset? Inno.Scene.Reload.TestModule.ReloadableSceneComponent.asset { get; set; }
```

Gets or sets an asset reference whose persistent identity survives module removal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneComponent.cs#L25).

## `rejectRestore`

<a id="api-fbae033dcd6a5c34"></a>
<!-- api: P:Inno.Scene.Reload.TestModule.ReloadableSceneComponent.rejectRestore 6ae794e4a6a5c0f8e49400b64ce766d8b8b12ce39816211048b0fdc2888f40cd -->

```csharp
public bool Inno.Scene.Reload.TestModule.ReloadableSceneComponent.rejectRestore { get; set; }
```

Gets or sets whether restored state violates this component's domain validation rule.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneComponent.cs#L31).

## `value`

<a id="api-582c0a614a14f8b0"></a>
<!-- api: P:Inno.Scene.Reload.TestModule.ReloadableSceneComponent.value 4728696bccab2e5cf10044587e4a89202a356b63b5f53a28db0b10ef04f5dae7 -->

```csharp
public int Inno.Scene.Reload.TestModule.ReloadableSceneComponent.value { get; set; }
```

Gets or sets the state that must survive a temporarily unavailable Plugin generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/ReloadableSceneComponent.cs#L19).
