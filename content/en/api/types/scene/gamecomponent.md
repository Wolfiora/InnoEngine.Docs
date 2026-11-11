---
title: "GameComponent"
description: "Reference for GameComponent in Inno.Scene."
uid: api.inno.scene.7ec592e790fda06e
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `GameComponent`

This reference describes `GameComponent` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.EngineObject`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cfeaa30c400738b8) | Method |
| [`Reset`](#api-eaad18b41df52183) | Method |
| [`gameObject`](#api-1eea17a5b0b41565) | Property |
| [`transform`](#api-16b25184d3564ff1) | Property |

## Type declaration

<a id="api-7ec592e790fda06e"></a>
<!-- api: T:Inno.Scene.GameComponent 8d9c6bb05b324161892ab6640ef28015d0e222847cafcec2b770143bb1dfe173 -->

```csharp
public abstract class Inno.Scene.GameComponent : Inno.Scene.EngineObject, Inno.Core.Serialization.ISerializable
```

Base type for data and behavior objects attached to a `Inno.Scene.GameObject`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameComponent.cs#L11).

## `#ctor`

<a id="api-cfeaa30c400738b8"></a>
<!-- api: M:Inno.Scene.GameComponent.#ctor d1db44f223dcbd7ac78edebca91a4998167fc194c80657996b5f8fc607152fa2 -->

```csharp
protected Inno.Scene.GameComponent.GameComponent()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameComponent.cs#L11).

## `Reset`

<a id="api-eaad18b41df52183"></a>
<!-- api: M:Inno.Scene.GameComponent.Reset a7453c41547d3bd86ee2b566babd4fa9bc66323f2563fc41fe902f5b71a04fa1 -->

```csharp
protected virtual void Inno.Scene.GameComponent.Reset()
```

Restores this component to its default state when it is added or explicitly reset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameComponent.cs#L37).

## `gameObject`

<a id="api-1eea17a5b0b41565"></a>
<!-- api: P:Inno.Scene.GameComponent.gameObject c4563c76f70500a579d6440a4493e2da13e190b29fe4853e421e84bf0d2d85ca -->

```csharp
public Inno.Scene.GameObject Inno.Scene.GameComponent.gameObject { get; }
```

Gets the owning game object.

**Throws `System.InvalidOperationException`:** Thrown when the component is detached or destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameComponent.cs#L21).

## `transform`

<a id="api-16b25184d3564ff1"></a>
<!-- api: P:Inno.Scene.GameComponent.transform 1d2dab6f5f1e7a9a4fe9ea7a8b53a8798379458a8c772ac961b85570e3a8c91e -->

```csharp
public Inno.Scene.Components.Transform Inno.Scene.GameComponent.transform { get; }
```

Gets the owning game object's transform.

**Throws `System.InvalidOperationException`:** Thrown when the component is detached or destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameComponent.cs#L32).
