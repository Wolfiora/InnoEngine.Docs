---
title: "GameSystem"
description: "Reference for GameSystem in Inno.Scene."
uid: api.inno.scene.65af3e79c0137419
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `GameSystem`

This reference describes `GameSystem` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.EngineObject`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`, `Inno.Scene.ISceneLifecycleObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2ec6eb93b08f51bf) | Method |
| [`Awake`](#api-206e523828fa9ece) | Method |
| [```GetComponents``1```](#api-6760db39b41478fa) | Method |
| [`GetObjects`](#api-fa9b301d6dc18012) | Method |
| [`OnDestroy`](#api-956cdd8cf3de8957) | Method |
| [`OnDisable`](#api-745afb4cfbdb1ede) | Method |
| [`OnEnable`](#api-e81d9bf7f8a34c2b) | Method |
| [`OnFixedUpdate`](#api-212d83249d65c68d) | Method |
| [`OnLateUpdate`](#api-e7723170f2fdf71d) | Method |
| [`OnUpdate`](#api-2af9a7de34f368a0) | Method |
| [```Query``1```](#api-1717ffdda6264a99) | Method |
| [```Query``2```](#api-f87f83eacf18731a) | Method |
| [```Query``3```](#api-9e5695e9408c1782) | Method |
| [`Reset`](#api-ad44538f533da3ff) | Method |
| [`Start`](#api-97b1fa74368c5f14) | Method |
| [`enabled`](#api-e767bd4b540e96e3) | Property |
| [`isActiveAndEnabled`](#api-6ffc8e6d18652829) | Property |
| [`order`](#api-96eae0efccd82b64) | Property |
| [`scene`](#api-5745522a9dd23d37) | Property |

## Type declaration

<a id="api-65af3e79c0137419"></a>
<!-- api: T:Inno.Scene.GameSystem d77cecad47fbd0e232887783ecf37360b304d7580b811865c331d6b706a58141 -->

```csharp
public abstract class Inno.Scene.GameSystem : Inno.Scene.EngineObject, Inno.Core.Serialization.ISerializable, Inno.Scene.ISceneLifecycleObject
```

Base type for serializable, ordered scene-level behaviors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L13).

## `#ctor`

<a id="api-2ec6eb93b08f51bf"></a>
<!-- api: M:Inno.Scene.GameSystem.#ctor 8d1d9dc5678d32a5e593e6fa3bbfd7a79e19697c536c910d103e5e8f3308cb66 -->

```csharp
protected Inno.Scene.GameSystem.GameSystem()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L13).

## `Awake`

<a id="api-206e523828fa9ece"></a>
<!-- api: M:Inno.Scene.GameSystem.Awake 1b64ee775edf7b06eb4e167a92817c5b599524ea44e0832352a2f6133e61a566 -->

```csharp
protected virtual void Inno.Scene.GameSystem.Awake()
```

Called once before the system first becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L63).

## ```GetComponents``1```

<a id="api-6760db39b41478fa"></a>
<!-- api: M:Inno.Scene.GameSystem.GetComponents``1 813aa2cb7afb42bd51977e52081f41abd7c62e0bfabcc9c17d932869580200f3 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<TComponent> Inno.Scene.GameSystem.GetComponents<TComponent>() where TComponent : Inno.Scene.GameComponent
```

Gets all scene components assignable to a requested type.

**Type parameter `TComponent`:** The component base or concrete type included in the result.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L125).

## `GetObjects`

<a id="api-fa9b301d6dc18012"></a>
<!-- api: M:Inno.Scene.GameSystem.GetObjects a70092b5bf9c27b75f31d9b1d91e55efaa4e002623558754a8b1915b39ac3e20 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameSystem.GetObjects()
```

Gets all committed live game objects in deterministic scene storage order.

**Returns:** The immutable structure snapshot retained by the scene until its object or component structure changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L133).

## `OnDestroy`

<a id="api-956cdd8cf3de8957"></a>
<!-- api: M:Inno.Scene.GameSystem.OnDestroy 194e6d5a792e46b21a3299f22300fd9bc1538e5958ea366558b994de275ea4ba -->

```csharp
protected virtual void Inno.Scene.GameSystem.OnDestroy()
```

Called before a system that entered runtime lifecycle is destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L91).

## `OnDisable`

<a id="api-745afb4cfbdb1ede"></a>
<!-- api: M:Inno.Scene.GameSystem.OnDisable 1133d4ca51ff1c114aea7c4665851b0ecb610fe5be409a7fe64b55e982af5159 -->

```csharp
protected virtual void Inno.Scene.GameSystem.OnDisable()
```

Called when the system stops being active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L84).

## `OnEnable`

<a id="api-e81d9bf7f8a34c2b"></a>
<!-- api: M:Inno.Scene.GameSystem.OnEnable 4f80abad17aa8cefc52a9bf444054092e4561a0e388b986273e063deb4b05f0f -->

```csharp
protected virtual void Inno.Scene.GameSystem.OnEnable()
```

Called when the system becomes active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L77).

## `OnFixedUpdate`

<a id="api-212d83249d65c68d"></a>
<!-- api: M:Inno.Scene.GameSystem.OnFixedUpdate 8aaa04ddfcf448eb8407146f2c4c69297382b5e0401a366581239c385471af16 -->

```csharp
protected virtual void Inno.Scene.GameSystem.OnFixedUpdate()
```

Called during the fixed-rate scene stage. Use `Time.fixedDeltaTime` for step timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L98).

## `OnLateUpdate`

<a id="api-e7723170f2fdf71d"></a>
<!-- api: M:Inno.Scene.GameSystem.OnLateUpdate ca6eca1a2cd6358295c557ed4d3a8e2a6323c6c747cfcd4127d5407b9746623e -->

```csharp
protected virtual void Inno.Scene.GameSystem.OnLateUpdate()
```

Called during the late scene stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L112).

## `OnUpdate`

<a id="api-2af9a7de34f368a0"></a>
<!-- api: M:Inno.Scene.GameSystem.OnUpdate d81129ae05d3920b6957992f33b1d856f562855aaf4da45a0da498b3ead16f62 -->

```csharp
protected virtual void Inno.Scene.GameSystem.OnUpdate()
```

Called during the variable-rate scene stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L105).

## ```Query``1```

<a id="api-1717ffdda6264a99"></a>
<!-- api: M:Inno.Scene.GameSystem.Query``1 9c9af7d2cb6eb655a28bc70b84e1932b4622ab07bb948569b9f3eff5ced90b73 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameSystem.Query<T1>() where T1 : Inno.Scene.GameComponent
```

Queries game objects containing one required component type.

**Type parameter `T1`:** The first component type required on every returned game object.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L144).

## ```Query``2```

<a id="api-f87f83eacf18731a"></a>
<!-- api: M:Inno.Scene.GameSystem.Query``2 790cd1bc100dedb407f9e3036518e2358cf0e168d3784a9460c4ab6cf6b64ced -->

```csharp
protected System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameSystem.Query<T1, T2>() where T1 : Inno.Scene.GameComponent where T2 : Inno.Scene.GameComponent
```

Queries game objects containing two required component types.

**Type parameter `T1`:** The first component type required on every returned game object.

**Type parameter `T2`:** The second component type required on every returned game object.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L158).

## ```Query``3```

<a id="api-9e5695e9408c1782"></a>
<!-- api: M:Inno.Scene.GameSystem.Query``3 366e3e3a1aaa7c5ce6ebb249f7e6879ecbfd9d0e2cb7c7cdaffd3638a0f4886d -->

```csharp
protected System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameSystem.Query<T1, T2, T3>() where T1 : Inno.Scene.GameComponent where T2 : Inno.Scene.GameComponent where T3 : Inno.Scene.GameComponent
```

Queries game objects containing three required component types.

**Type parameter `T1`:** The first component type required on every returned game object.

**Type parameter `T2`:** The second component type required on every returned game object.

**Type parameter `T3`:** The third component type required on every returned game object.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L178).

## `Reset`

<a id="api-ad44538f533da3ff"></a>
<!-- api: M:Inno.Scene.GameSystem.Reset 28f59d8fac84aad39e1af9ae84b21bdd1ea12b9bfe5210988be4781e3566951a -->

```csharp
protected virtual void Inno.Scene.GameSystem.Reset()
```

Restores this system to defaults when added or explicitly reset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L56).

## `Start`

<a id="api-97b1fa74368c5f14"></a>
<!-- api: M:Inno.Scene.GameSystem.Start 497daa3aa4fee206a7c9fd058741558f58cb13562ee8647395d47664030f1ec2 -->

```csharp
protected virtual void Inno.Scene.GameSystem.Start()
```

Called once immediately before the first update.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L70).

## `enabled`

<a id="api-e767bd4b540e96e3"></a>
<!-- api: P:Inno.Scene.GameSystem.enabled 6add502350e7f5ebc7b4f908cef8847faf1d52d76c207cff15c44d9952c38126 -->

```csharp
public bool Inno.Scene.GameSystem.enabled { get; set; }
```

Gets or sets whether this system participates in scene lifecycle updates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L22).

## `isActiveAndEnabled`

<a id="api-6ffc8e6d18652829"></a>
<!-- api: P:Inno.Scene.GameSystem.isActiveAndEnabled 08cf9cd9918572ddf7132226cdbc8e99b90ec5da44322b13171236bc99ca78b5 -->

```csharp
public bool Inno.Scene.GameSystem.isActiveAndEnabled { get; }
```

Gets whether this system is registered, enabled, and dispatchable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L39).

## `order`

<a id="api-96eae0efccd82b64"></a>
<!-- api: P:Inno.Scene.GameSystem.order bd3fa84e69916cc93bb288e1d7177243936059432b81b213d6cfd1bcc36080bc -->

```csharp
public virtual int Inno.Scene.GameSystem.order { get; }
```

Gets the ascending execution order used by the owning scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L44).

## `scene`

<a id="api-5745522a9dd23d37"></a>
<!-- api: P:Inno.Scene.GameSystem.scene 13906905f3383acd15aa5ca1abe6f95257cd0f13ecdbe858bf927bf113bed9e5 -->

```csharp
protected Inno.Scene.GameScene Inno.Scene.GameSystem.scene { get; }
```

Gets the owning scene after this system has been registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameSystem.cs#L49).
