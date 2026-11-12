---
title: "GameComponent"
description: "Reference for GameComponent in Inno.Scene."
uid: api.inno.scene.runtime-script.92710a2d65aaa8b1
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameComponent`

This reference describes `GameComponent` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Scene.EngineObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-38097c25a676e5a8) | Method |
| [`Reset`](#api-fa1e82e4ad15ea87) | Method |
| [`gameObject`](#api-cef9749130aad71e) | Property |
| [`transform`](#api-046430a28045698e) | Property |

## Type declaration

<a id="api-92710a2d65aaa8b1"></a>
<!-- api: T:InnoEngine.Scene.GameComponent 6a7299b4e5dc0b1311945322eb0be4f2f0524a93e0bcdc885b22a97a595077c0 -->

```csharp
public abstract class InnoEngine.Scene.GameComponent : InnoEngine.Scene.EngineObject, InnoEngine.Serialization.ISerializable
```

Base type for data and behavior objects attached to a `InnoEngine.Scene.GameObject`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameComponent.cs#L11).

## `#ctor`

<a id="api-38097c25a676e5a8"></a>
<!-- api: M:InnoEngine.Scene.GameComponent.#ctor 6f78c8df4a9b7e268e6c4c339c09bbf9a2ff5005a4127df01c29001bb3500bc9 -->

```csharp
protected InnoEngine.Scene.GameComponent.GameComponent()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameComponent.cs#L11).

## `Reset`

<a id="api-fa1e82e4ad15ea87"></a>
<!-- api: M:InnoEngine.Scene.GameComponent.Reset ad376023c37aeda54f9c695a380961eb0333ae2a0267aca250f14e656ebefc4e -->

```csharp
protected virtual void InnoEngine.Scene.GameComponent.Reset()
```

Restores this component to its default state when it is added or explicitly reset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameComponent.cs#L37).

## `gameObject`

<a id="api-cef9749130aad71e"></a>
<!-- api: P:InnoEngine.Scene.GameComponent.gameObject 0f9797a831947d34f8c4f0bf7cb62e357271717d7ff49cfb672009e9c3631d97 -->

```csharp
public InnoEngine.Scene.GameObject InnoEngine.Scene.GameComponent.gameObject { get; }
```

Gets the owning game object.

**Throws `System.InvalidOperationException`:** Thrown when the component is detached or destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameComponent.cs#L21).

## `transform`

<a id="api-046430a28045698e"></a>
<!-- api: P:InnoEngine.Scene.GameComponent.transform 10c753dc3195e202dc80c19ecf06fda40f8dce26207fffb955451cdaf3903a07 -->

```csharp
public InnoEngine.Scene.Transform InnoEngine.Scene.GameComponent.transform { get; }
```

Gets the owning game object's transform.

**Throws `System.InvalidOperationException`:** Thrown when the component is detached or destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameComponent.cs#L32).
