---
title: "GameBehavior"
description: "Reference for GameBehavior in Inno.Scene."
uid: api.inno.scene.a242ae00b59fd2d9
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `GameBehavior`

This reference describes `GameBehavior` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.GameComponent`.

**Direct interfaces:** `Inno.Scene.ISceneLifecycleObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5ad8a5e4e2b4dbff) | Method |
| [`Awake`](#api-09401c1a631d0e80) | Method |
| [`FixedUpdate`](#api-a9d213cf79580d63) | Method |
| [`LateUpdate`](#api-6e3808cb7484c1d5) | Method |
| [`OnDestroy`](#api-21e9be392279fe53) | Method |
| [`OnDisable`](#api-6f72ab8347b20553) | Method |
| [`OnEnable`](#api-d48df1188a3b1c2a) | Method |
| [`Start`](#api-2a783039be291949) | Method |
| [`Update`](#api-294fcf678533efe4) | Method |
| [`enabled`](#api-d5c7292f6f751ad9) | Property |
| [`isActiveAndEnabled`](#api-eae58f0e400a6884) | Property |

## Type declaration

<a id="api-a242ae00b59fd2d9"></a>
<!-- api: T:Inno.Scene.GameBehavior 7ff12bd4f235007beb29b918ff52c3f60bc7aaf8a0351e78bcdc49323f0c9c2c -->

```csharp
public abstract class Inno.Scene.GameBehavior : Inno.Scene.GameComponent, Inno.Scene.ISceneLifecycleObject
```

Base component for independently enabled scene functionality with frame lifecycle callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L10).

## `#ctor`

<a id="api-5ad8a5e4e2b4dbff"></a>
<!-- api: M:Inno.Scene.GameBehavior.#ctor 5d859ca6315dd08b62dbcbc48d4ae1c9fea5985256c0df333b3c98b6d3d2cdd6 -->

```csharp
protected Inno.Scene.GameBehavior.GameBehavior()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L10).

## `Awake`

<a id="api-09401c1a631d0e80"></a>
<!-- api: M:Inno.Scene.GameBehavior.Awake 4193fac2e0868044bea1cdf916a84c927f505c2d37c5222b0aab2faf08b8f6c9 -->

```csharp
protected virtual void Inno.Scene.GameBehavior.Awake()
```

Called once before this behavior first becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L44).

## `FixedUpdate`

<a id="api-a9d213cf79580d63"></a>
<!-- api: M:Inno.Scene.GameBehavior.FixedUpdate 8152dd1d2d0c7496010ed30856b9362fe0ca735edeb9d1574f2a56275fc87955 -->

```csharp
protected virtual void Inno.Scene.GameBehavior.FixedUpdate()
```

Called during the fixed-rate update stage. Use `Time.fixedDeltaTime` for step timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L79).

## `LateUpdate`

<a id="api-6e3808cb7484c1d5"></a>
<!-- api: M:Inno.Scene.GameBehavior.LateUpdate 0b29e94a92c8962de728ae71c09429e94c919b9c7542ae7263a2c0aafb710995 -->

```csharp
protected virtual void Inno.Scene.GameBehavior.LateUpdate()
```

Called during the late update stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L86).

## `OnDestroy`

<a id="api-21e9be392279fe53"></a>
<!-- api: M:Inno.Scene.GameBehavior.OnDestroy 848aee7d1ceafbc43736a2f5f621cdcae51c13f7b9fc01fe6dcbba9176e24bc5 -->

```csharp
protected virtual void Inno.Scene.GameBehavior.OnDestroy()
```

Called immediately before this behavior is detached and destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L93).

## `OnDisable`

<a id="api-6f72ab8347b20553"></a>
<!-- api: M:Inno.Scene.GameBehavior.OnDisable ff18aadb29c6a11586278be77e36a27b7a15cbaae6b6e38d5124c787197c6961 -->

```csharp
protected virtual void Inno.Scene.GameBehavior.OnDisable()
```

Called when this component stops being active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L65).

## `OnEnable`

<a id="api-d48df1188a3b1c2a"></a>
<!-- api: M:Inno.Scene.GameBehavior.OnEnable f27744e5cfeaedca56104a533fba8cc195a13de6d7896e5ba9bcff1d332535fc -->

```csharp
protected virtual void Inno.Scene.GameBehavior.OnEnable()
```

Called when this component becomes active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L58).

## `Start`

<a id="api-2a783039be291949"></a>
<!-- api: M:Inno.Scene.GameBehavior.Start 229b74c6a1fa6ad010c5387191c1f0eca6b4b6354458e4eaa879cece2d87f77b -->

```csharp
protected virtual void Inno.Scene.GameBehavior.Start()
```

Called once immediately before the first update of this behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L51).

## `Update`

<a id="api-294fcf678533efe4"></a>
<!-- api: M:Inno.Scene.GameBehavior.Update a208c3b1f6efcee8f1d0e9b0aed371fce7ce60a4c37d864c7759952f86251711 -->

```csharp
protected virtual void Inno.Scene.GameBehavior.Update()
```

Called during the variable-rate update stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L72).

## `enabled`

<a id="api-d5c7292f6f751ad9"></a>
<!-- api: P:Inno.Scene.GameBehavior.enabled 3e999fbaf3531743f27dcc8ec44e708425834f9965de42ea0de8ee979937f16e -->

```csharp
public bool Inno.Scene.GameBehavior.enabled { get; set; }
```

Gets or sets whether this component participates in scene lifecycle and frame updates.

**Constraints:** Changing this value while the component belongs to a loaded scene immediately reconciles
`Inno.Scene.GameBehavior.OnEnable` and `Inno.Scene.GameBehavior.OnDisable` against hierarchy activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L22).

## `isActiveAndEnabled`

<a id="api-eae58f0e400a6884"></a>
<!-- api: P:Inno.Scene.GameBehavior.isActiveAndEnabled bca11fd0a09ed2891545af9ee2d099fdb6747063fcb579ee405d032e0e952e6d -->

```csharp
public bool Inno.Scene.GameBehavior.isActiveAndEnabled { get; }
```

Gets whether this component is enabled and active in its owning hierarchy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L39).
