---
title: "GameSystem"
description: "Reference for GameSystem in Inno.Scene."
uid: api.inno.scene.runtime-script.1ba7fc3b31c0bb12
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameSystem`

This reference describes `GameSystem` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Scene.EngineObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0db143c6ed8c18b4) | Method |
| [`Awake`](#api-05a3454913781dc8) | Method |
| [```GetComponents``1```](#api-5fbf17902013ea97) | Method |
| [`GetObjects`](#api-ab64444849ce00c5) | Method |
| [`OnDestroy`](#api-80f1ca1505e93e32) | Method |
| [`OnDisable`](#api-2d9fcd7752cf328f) | Method |
| [`OnEnable`](#api-cec957c00587489f) | Method |
| [`OnFixedUpdate`](#api-c72c2338c5fa70b1) | Method |
| [`OnLateUpdate`](#api-bb2c319255370008) | Method |
| [`OnUpdate`](#api-d01277316ad4f6f9) | Method |
| [```Query``1```](#api-163d5e23db48dab9) | Method |
| [```Query``2```](#api-0e29af7e95cde31d) | Method |
| [```Query``3```](#api-d9d9e77a686f55a3) | Method |
| [`Reset`](#api-89b8626066cc5f35) | Method |
| [`Start`](#api-55f56e98cc996483) | Method |
| [`enabled`](#api-7c7ab8a0cfa18bfa) | Property |
| [`isActiveAndEnabled`](#api-f303aaa153753bdd) | Property |
| [`order`](#api-2fa1f6e37c49946a) | Property |
| [`scene`](#api-8bb59423ddde8621) | Property |

## Type declaration

<a id="api-1ba7fc3b31c0bb12"></a>
<!-- api: T:InnoEngine.Scene.GameSystem b413a02e77f101eb509b8371762346988bd15c2474046af05d2f7f6aae3a5618 -->

```csharp
public abstract class InnoEngine.Scene.GameSystem : InnoEngine.Scene.EngineObject, InnoEngine.Serialization.ISerializable
```

Base type for serializable, ordered scene-level behaviors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L13).

## `#ctor`

<a id="api-0db143c6ed8c18b4"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.#ctor dd6b4b1246e97039d4b53e20bfe47b96198573a3f9ee75f2d808e396f7d39ab7 -->

```csharp
protected InnoEngine.Scene.GameSystem.GameSystem()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L13).

## `Awake`

<a id="api-05a3454913781dc8"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.Awake f9fd0700b06cb6556b45d2c791f560f2a01eda71b8a67edb4a4d07d9c9b5bdd3 -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.Awake()
```

Called once before the system first becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L63).

## ```GetComponents``1```

<a id="api-5fbf17902013ea97"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.GetComponents``1 4b7228f1751100c76289b5ba32a2e1f552afb5ad4b46414d39f39586f818b196 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<TComponent> InnoEngine.Scene.GameSystem.GetComponents<TComponent>() where TComponent : InnoEngine.Scene.GameComponent
```

Gets all scene components assignable to a requested type.

**Type parameter `TComponent`:** The component base or concrete type included in the result.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L125).

## `GetObjects`

<a id="api-ab64444849ce00c5"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.GetObjects fb97415e7c025ff8df3495b3565e0c9f7a1f8ffa2bf615885dbdbed35b108d99 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameSystem.GetObjects()
```

Gets all committed live game objects in deterministic scene storage order.

**Returns:** The immutable structure snapshot retained by the scene until its object or component structure changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L133).

## `OnDestroy`

<a id="api-80f1ca1505e93e32"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.OnDestroy bd82af9f51b8e5182c85db1cd573a8d3911637ff971faaafb74171b1df2aa48e -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.OnDestroy()
```

Called before a system that entered runtime lifecycle is destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L91).

## `OnDisable`

<a id="api-2d9fcd7752cf328f"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.OnDisable bd8be7ef4980c564ccf5b1e4445b7b2e88d98ad2912fb2df7f61d2301324c7b2 -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.OnDisable()
```

Called when the system stops being active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L84).

## `OnEnable`

<a id="api-cec957c00587489f"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.OnEnable 61ed06d6ce3b95a8a9cb8024b62a8627d7bc315b235e794fa70d4d2fcfde4690 -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.OnEnable()
```

Called when the system becomes active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L77).

## `OnFixedUpdate`

<a id="api-c72c2338c5fa70b1"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.OnFixedUpdate 714c754872b63c5fd13131adc524eefc4d09c66e7557530fb8da98cfd171223c -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.OnFixedUpdate()
```

Called during the fixed-rate scene stage. Use `Time.fixedDeltaTime` for step timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L98).

## `OnLateUpdate`

<a id="api-bb2c319255370008"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.OnLateUpdate f541115ee793e7e1d488c688b5f200f90c22a31942cfd24a6aff0bea649a1939 -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.OnLateUpdate()
```

Called during the late scene stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L112).

## `OnUpdate`

<a id="api-d01277316ad4f6f9"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.OnUpdate fb1d3df2fa9098267238bfe92ebedd133b62318beb61c3428f3f3803cd45a66d -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.OnUpdate()
```

Called during the variable-rate scene stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L105).

## ```Query``1```

<a id="api-163d5e23db48dab9"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.Query``1 d8b2f37384ba0839185571797f8c681cdaea5d3a3d9ab461b2946bb4040ce108 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameSystem.Query<T1>() where T1 : InnoEngine.Scene.GameComponent
```

Queries game objects containing one required component type.

**Type parameter `T1`:** The first component type required on every returned game object.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L144).

## ```Query``2```

<a id="api-0e29af7e95cde31d"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.Query``2 8f91e3394f8be08c027936043da6d3e64b4c1cd1817eefc1e5e26bfd0ac8c219 -->

```csharp
protected System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameSystem.Query<T1, T2>() where T1 : InnoEngine.Scene.GameComponent where T2 : InnoEngine.Scene.GameComponent
```

Queries game objects containing two required component types.

**Type parameter `T1`:** The first component type required on every returned game object.

**Type parameter `T2`:** The second component type required on every returned game object.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L158).

## ```Query``3```

<a id="api-d9d9e77a686f55a3"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.Query``3 5cb7c70b196a1beeb8fdd80c2c32a98b173094b7aca80f2274b91d566d5b2bfa -->

```csharp
protected System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameSystem.Query<T1, T2, T3>() where T1 : InnoEngine.Scene.GameComponent where T2 : InnoEngine.Scene.GameComponent where T3 : InnoEngine.Scene.GameComponent
```

Queries game objects containing three required component types.

**Type parameter `T1`:** The first component type required on every returned game object.

**Type parameter `T2`:** The second component type required on every returned game object.

**Type parameter `T3`:** The third component type required on every returned game object.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L178).

## `Reset`

<a id="api-89b8626066cc5f35"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.Reset 919d8d8e1059a0846b61eed913e796a46afff92d0e549c8138b971159cb9081d -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.Reset()
```

Restores this system to defaults when added or explicitly reset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L56).

## `Start`

<a id="api-55f56e98cc996483"></a>
<!-- api: M:InnoEngine.Scene.GameSystem.Start f441ddb6c2f566444a10da74e18159bc33bc2c9d334801d2c1395aeb0c763540 -->

```csharp
protected virtual void InnoEngine.Scene.GameSystem.Start()
```

Called once immediately before the first update.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L70).

## `enabled`

<a id="api-7c7ab8a0cfa18bfa"></a>
<!-- api: P:InnoEngine.Scene.GameSystem.enabled 7ab6e9b8cbe4666a9ef37c66b7f19b468579c3c8c72833eb6dbefd781ce28781 -->

```csharp
public bool InnoEngine.Scene.GameSystem.enabled { get; set; }
```

Gets or sets whether this system participates in scene lifecycle updates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L22).

## `isActiveAndEnabled`

<a id="api-f303aaa153753bdd"></a>
<!-- api: P:InnoEngine.Scene.GameSystem.isActiveAndEnabled 731016b798f698b3d04742cc49a809481030f1d45153b2e4c7a72fe484c5452d -->

```csharp
public bool InnoEngine.Scene.GameSystem.isActiveAndEnabled { get; }
```

Gets whether this system is registered, enabled, and dispatchable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L39).

## `order`

<a id="api-2fa1f6e37c49946a"></a>
<!-- api: P:InnoEngine.Scene.GameSystem.order caa64b4c7cd82ea4c6060ca99f55765a0950dbb4f9ae30a4ff1f5046fa7f0cbe -->

```csharp
public virtual int InnoEngine.Scene.GameSystem.order { get; }
```

Gets the ascending execution order used by the owning scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L44).

## `scene`

<a id="api-8bb59423ddde8621"></a>
<!-- api: P:InnoEngine.Scene.GameSystem.scene cbb2075094103aad57b3851c581ad2a53fc2bf26a2cdb6a7446476edabbd3b30 -->

```csharp
protected InnoEngine.Scene.GameScene InnoEngine.Scene.GameSystem.scene { get; }
```

Gets the owning scene after this system has been registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameSystem.cs#L49).
