---
title: "GameBehavior"
description: "Reference for GameBehavior in Inno.Scene."
uid: api.inno.scene.runtime-script.e8e194b9836bef73
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameBehavior`

This reference describes `GameBehavior` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Scene.GameComponent`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-72673e0582084066) | Method |
| [`Awake`](#api-5944c09e5e25308c) | Method |
| [`FixedUpdate`](#api-15f5c79143b6e6b1) | Method |
| [`LateUpdate`](#api-f0551ed943375b54) | Method |
| [`OnDestroy`](#api-cd3d636d356cb186) | Method |
| [`OnDisable`](#api-29b8deb6e7d8cec0) | Method |
| [`OnEnable`](#api-5152ae04250ee3fc) | Method |
| [`Start`](#api-ef05413daa8b87c9) | Method |
| [`Update`](#api-38c56011c112dea2) | Method |
| [`enabled`](#api-6c1b57540c0d839b) | Property |
| [`isActiveAndEnabled`](#api-f398b768480fcfaa) | Property |

## Type declaration

<a id="api-e8e194b9836bef73"></a>
<!-- api: T:InnoEngine.Scene.GameBehavior 651059babb4d662adcd44572743b4e17e351c771d3f7db2fe4bd8dba52286c5d -->

```csharp
public abstract class InnoEngine.Scene.GameBehavior : InnoEngine.Scene.GameComponent, InnoEngine.Serialization.ISerializable
```

Base component for independently enabled scene functionality with frame lifecycle callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L10).

## `#ctor`

<a id="api-72673e0582084066"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.#ctor cd7ccfec090496eb93b39c3ccded8437a75dfd1387ba4058e5fca0ae7d851613 -->

```csharp
protected InnoEngine.Scene.GameBehavior.GameBehavior()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L10).

## `Awake`

<a id="api-5944c09e5e25308c"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.Awake 76668c8ee07de7518b31ee45cf8155554ac0f50d826f9b30624907d78465c2eb -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.Awake()
```

Called once before this behavior first becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L44).

## `FixedUpdate`

<a id="api-15f5c79143b6e6b1"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.FixedUpdate 3268ca342ad9f33300d9d3b6f3c69a07908e62a22c5c5fbdb1578eec858de235 -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.FixedUpdate()
```

Called during the fixed-rate update stage. Use `Time.fixedDeltaTime` for step timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L79).

## `LateUpdate`

<a id="api-f0551ed943375b54"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.LateUpdate 75f1452781dd0dc42df799f097cebd12ad59acbce1ea3ef874c64a419a6391af -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.LateUpdate()
```

Called during the late update stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L86).

## `OnDestroy`

<a id="api-cd3d636d356cb186"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.OnDestroy 97c4b62bc11c74e0efee0370632291e64f190a9e346f24f788744f118ed35400 -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.OnDestroy()
```

Called immediately before this behavior is detached and destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L93).

## `OnDisable`

<a id="api-29b8deb6e7d8cec0"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.OnDisable 56b20e0204989a23e059aa70653c37ff94e385da439588d632668d33e47a8863 -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.OnDisable()
```

Called when this component stops being active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L65).

## `OnEnable`

<a id="api-5152ae04250ee3fc"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.OnEnable a7ba5e7e1396c972ee7c144dac127479b01cfe602973bb97083749d67ecdc3f0 -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.OnEnable()
```

Called when this component becomes active and enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L58).

## `Start`

<a id="api-ef05413daa8b87c9"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.Start efd42c67d9c23ca6c1414d6e39c698a9b435a428a80dcacfe8a433533acdc4aa -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.Start()
```

Called once immediately before the first update of this behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L51).

## `Update`

<a id="api-38c56011c112dea2"></a>
<!-- api: M:InnoEngine.Scene.GameBehavior.Update 515049f02d7cdc6c6e3311297246b4dedd07d9692ce53fb063c4e0172c33f2d6 -->

```csharp
protected virtual void InnoEngine.Scene.GameBehavior.Update()
```

Called during the variable-rate update stage. Use `Time.deltaTime` for frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L72).

## `enabled`

<a id="api-6c1b57540c0d839b"></a>
<!-- api: P:InnoEngine.Scene.GameBehavior.enabled bad0cbf24871f85e83a94afbffa5b102cef2904e28a1539f7c3cc164794d76de -->

```csharp
public bool InnoEngine.Scene.GameBehavior.enabled { get; set; }
```

Gets or sets whether this component participates in scene lifecycle and frame updates.

**Constraints:** Changing this value while the component belongs to a loaded scene immediately reconciles
`InnoEngine.Scene.GameBehavior.OnEnable` and `InnoEngine.Scene.GameBehavior.OnDisable` against hierarchy activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L22).

## `isActiveAndEnabled`

<a id="api-f398b768480fcfaa"></a>
<!-- api: P:InnoEngine.Scene.GameBehavior.isActiveAndEnabled 3546be0f9f3b1ddd0ef08b228275503833a33a59629b4f40063740d8f1e5c51f -->

```csharp
public bool InnoEngine.Scene.GameBehavior.isActiveAndEnabled { get; }
```

Gets whether this component is enabled and active in its owning hierarchy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameBehavior.cs#L39).
