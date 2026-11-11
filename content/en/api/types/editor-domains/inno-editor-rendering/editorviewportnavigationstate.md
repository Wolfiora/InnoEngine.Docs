---
title: "EditorViewportNavigationState"
description: "Reference for EditorViewportNavigationState in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.d3cf03954b9ed1fe
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportNavigationState`

This reference describes `EditorViewportNavigationState` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cf80569a13a00ecb) | Method |
| [`ConfigureOrthographic`](#api-4f7df0d3dbb907bf) | Method |
| [`ConfigurePerspective`](#api-ef7dbf10c6fc1c42) | Method |
| [`farClip`](#api-f7a92a215a4207c6) | Property |
| [`fieldOfView`](#api-d11ffadedfc4e2cc) | Property |
| [`focusDistance`](#api-450767269007e894) | Property |
| [`isInitialized`](#api-5bff30cb62d1cd4a) | Property |
| [`mode`](#api-900a0ffe3700abd7) | Property |
| [`movementSpeed`](#api-e70a7b79ce498bb4) | Property |
| [`nearClip`](#api-3b9d4c230a0ea901) | Property |
| [`orthographicSize`](#api-42cc827d84740538) | Property |
| [`pivot`](#api-0a37c8ededb3766d) | Property |
| [`position`](#api-5330e05e7bc62108) | Property |
| [`projection`](#api-9802d781f3794b86) | Property |
| [`rotation`](#api-2b9e56b3b2549c90) | Property |

## Type declaration

<a id="api-d3cf03954b9ed1fe"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportNavigationState b6f914aa8e2e6711acebc8c8f6d3b0cecea9d3c99d0f2aef8a17856f70d62d2f -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportNavigationState
```

Stores rendering-model-neutral navigation state for one Editor viewport across provider reloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L303).

## `#ctor`

<a id="api-cf80569a13a00ecb"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationState.#ctor 8c576186affb67372707cdbd46aecf1e21ee2117c660033b7f37ee1d386a7381 -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationState.EditorViewportNavigationState()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L303).

## `ConfigureOrthographic`

<a id="api-4f7df0d3dbb907bf"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationState.ConfigureOrthographic(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Quaternion,System.Single) 7d187b2b5a38ac956b883364252d84537efc3685043083d41ac03fda2be06ba0 -->

```csharp
public void Inno.Editor.Rendering.EditorViewportNavigationState.ConfigureOrthographic(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Quaternion rotation, float orthographicSize)
```

Atomically initializes an orthographic navigation view.

**Parameter `position`:** Provider-defined world-space position.

**Parameter `rotation`:** Provider-defined world-space rotation.

**Parameter `orthographicSize`:** Positive orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L501).

## `ConfigurePerspective`

<a id="api-ef7dbf10c6fc1c42"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationState.ConfigurePerspective(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Quaternion,System.Single,System.Single,System.Single) a0b61707a4026b4a10b0951e45b9e72ba99793631fb1b5b27fb43e9be395b2e7 -->

```csharp
public void Inno.Editor.Rendering.EditorViewportNavigationState.ConfigurePerspective(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Quaternion rotation, float fieldOfView, float nearClip, float farClip)
```

Atomically initializes a perspective navigation view.

**Parameter `position`:** Provider-defined world-space position.

**Parameter `rotation`:** Provider-defined world-space rotation.

**Parameter `fieldOfView`:** Perspective vertical field of view in degrees.

**Parameter `nearClip`:** Positive near clipping distance.

**Parameter `farClip`:** Far clipping distance greater than `nearClip`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L538).

## `farClip`

<a id="api-f7a92a215a4207c6"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.farClip 9d10e2bb261c899eae29c65a0a4c2939f4441ffe5ed70185d87377250696ec33 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationState.farClip { get; set; }
```

Gets or sets the far clipping distance greater than the near distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L448).

## `fieldOfView`

<a id="api-d11ffadedfc4e2cc"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.fieldOfView 61e2a6b0f6d06ced4271a307d30eb7a66773f6d3606cafec4a9f5d6be3cc2231 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationState.fieldOfView { get; set; }
```

Gets or sets the perspective vertical field of view in degrees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L418).

## `focusDistance`

<a id="api-450767269007e894"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.focusDistance c78bdc8f93a097c640b2cee9f9533841e03349bae3b817b4934086012e42acd6 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationState.focusDistance { get; set; }
```

Gets or sets the positive orbit and framing distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L463).

## `isInitialized`

<a id="api-5bff30cb62d1cd4a"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.isInitialized 47b3c2c271dc9deaea49455599b5e6120683bbf1c76f3fd1b2c74ac084625c4a -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportNavigationState.isInitialized { get; private set; }
```

Gets whether a provider or restored panel state initialized this state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L324).

## `mode`

<a id="api-900a0ffe3700abd7"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.mode f60fe66333e6f41060bd0eb6eb371c5802f12a3629f2f749f194deb75e1d9b8d -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationMode Inno.Editor.Rendering.EditorViewportNavigationState.mode { get; set; }
```

Gets or sets the active host navigation mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L344).

## `movementSpeed`

<a id="api-e70a7b79ce498bb4"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.movementSpeed 1644cbf164f061d6f611243ba4b2c72b16c2ebf290b34ca1b61438e373860588 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationState.movementSpeed { get; set; }
```

Gets or sets the positive base movement speed in world units per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L478).

## `nearClip`

<a id="api-3b9d4c230a0ea901"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.nearClip 14d7b37348e90f05e42c5815935bf602154233eb9f9e1d7dfdff83d9ac8744db -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationState.nearClip { get; set; }
```

Gets or sets the positive near clipping distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L433).

## `orthographicSize`

<a id="api-42cc827d84740538"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.orthographicSize 08ac6fb1e2fb39327011c54b934ff49bd9ca9d22eb359bd64baacdee896c1d25 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationState.orthographicSize { get; set; }
```

Gets or sets the positive orthographic half-height in provider world units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L403).

## `pivot`

<a id="api-0a37c8ededb3766d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.pivot b234e92ed6ee3b11d153970b04981a5e821204a312c9f58fdb3daee5552a6f20 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorViewportNavigationState.pivot { get; set; }
```

Gets or sets the world-space orbit and framing pivot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L389).

## `position`

<a id="api-5330e05e7bc62108"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.position a4df72a9d5df3986a44a4ff479ec6f41dbab6170c4ae3535508b178878fa8833 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorViewportNavigationState.position { get; set; }
```

Gets or sets the provider-defined world-space view position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L359).

## `projection`

<a id="api-9802d781f3794b86"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.projection d80d0b3b8df0e7423215b89900d29a8a8bdfe0b4bf5700f501123a262e2fbbea -->

```csharp
public Inno.Editor.Rendering.EditorViewportProjection Inno.Editor.Rendering.EditorViewportNavigationState.projection { get; set; }
```

Gets or sets the current projection family.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L329).

## `rotation`

<a id="api-2b9e56b3b2549c90"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationState.rotation 00a97d706a14ad84e65a2006afcbc3ddd755b90c8b7ad2ed19750011d334c57b -->

```csharp
public Inno.Core.Mathematics.Quaternion Inno.Editor.Rendering.EditorViewportNavigationState.rotation { get; set; }
```

Gets or sets the normalized provider-defined world-space view rotation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L373).
