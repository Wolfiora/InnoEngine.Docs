---
title: "EditorViewportNavigationState"
description: "Reference for EditorViewportNavigationState in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.f749f409d60fa6c1
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportNavigationState`

This reference describes `EditorViewportNavigationState` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-12c35373e0dbdaae) | Method |
| [`ConfigureOrthographic`](#api-f5a6b0364e1ab726) | Method |
| [`ConfigurePerspective`](#api-8762e77047b5ee47) | Method |
| [`farClip`](#api-f7846cf605593291) | Property |
| [`fieldOfView`](#api-a171ee46270af2ce) | Property |
| [`focusDistance`](#api-9b2ccffa2405aba1) | Property |
| [`isInitialized`](#api-b9b4728bf4332237) | Property |
| [`mode`](#api-aa762b535bb0a25e) | Property |
| [`movementSpeed`](#api-4da9e71700398812) | Property |
| [`nearClip`](#api-32fe08e690b0ff6c) | Property |
| [`orthographicSize`](#api-3a658d160aa7efa5) | Property |
| [`pivot`](#api-2ef09ec4149a06c1) | Property |
| [`position`](#api-7d9104b05250ecc5) | Property |
| [`projection`](#api-f4e9139eb9a224ec) | Property |
| [`rotation`](#api-fab19f01c4ee269d) | Property |

## Type declaration

<a id="api-f749f409d60fa6c1"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportNavigationState 48b6f64a8c87dd5d6a54014455b9c1f6c52da2e04e435866fc3b6a6db53888fd -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportNavigationState
```

Stores rendering-model-neutral navigation state for one Editor viewport across provider reloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L303).

## `#ctor`

<a id="api-12c35373e0dbdaae"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationState.#ctor 34e1896da5f56d8be1acb476f9341a67dc24d98060d33dd65c75df87157e084d -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationState.EditorViewportNavigationState()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L303).

## `ConfigureOrthographic`

<a id="api-f5a6b0364e1ab726"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationState.ConfigureOrthographic(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Quaternion,System.Single) f8dc493c5c1797d0f942fd61019b403e66d96654d79680a0f9921b4d9360ce8b -->

```csharp
public void InnoEditor.Rendering.EditorViewportNavigationState.ConfigureOrthographic(InnoEngine.Mathematics.Vector3 position, InnoEngine.Mathematics.Quaternion rotation, float orthographicSize)
```

Atomically initializes an orthographic navigation view.

**Parameter `position`:** Provider-defined world-space position.

**Parameter `rotation`:** Provider-defined world-space rotation.

**Parameter `orthographicSize`:** Positive orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L501).

## `ConfigurePerspective`

<a id="api-8762e77047b5ee47"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationState.ConfigurePerspective(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Quaternion,System.Single,System.Single,System.Single) ba1810d1a67e909f825b611d555319527ac3b9e4105e1969349a179d93463bbb -->

```csharp
public void InnoEditor.Rendering.EditorViewportNavigationState.ConfigurePerspective(InnoEngine.Mathematics.Vector3 position, InnoEngine.Mathematics.Quaternion rotation, float fieldOfView, float nearClip, float farClip)
```

Atomically initializes a perspective navigation view.

**Parameter `position`:** Provider-defined world-space position.

**Parameter `rotation`:** Provider-defined world-space rotation.

**Parameter `fieldOfView`:** Perspective vertical field of view in degrees.

**Parameter `nearClip`:** Positive near clipping distance.

**Parameter `farClip`:** Far clipping distance greater than `nearClip`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L538).

## `farClip`

<a id="api-f7846cf605593291"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.farClip 06ab079088ab6269c4057ecfad0ab915a0f7e4b2163661202623f71d27a36090 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationState.farClip { get; set; }
```

Gets or sets the far clipping distance greater than the near distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L448).

## `fieldOfView`

<a id="api-a171ee46270af2ce"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.fieldOfView 7e6db4bcc0dc495d561ab6b77ec5b65a1b588ad014935598c52c59a8a47664dc -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationState.fieldOfView { get; set; }
```

Gets or sets the perspective vertical field of view in degrees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L418).

## `focusDistance`

<a id="api-9b2ccffa2405aba1"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.focusDistance 491b77b8782ede798e37c47bdcbbbb57a2a7055cdf7ddaf4e773b9f5ee2765a1 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationState.focusDistance { get; set; }
```

Gets or sets the positive orbit and framing distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L463).

## `isInitialized`

<a id="api-b9b4728bf4332237"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.isInitialized 9c3ae25559907f93856d69a9bcb68d3da36460e5b91c82b5f27a249bccf4af1f -->

```csharp
public bool InnoEditor.Rendering.EditorViewportNavigationState.isInitialized { get; }
```

Gets whether a provider or restored panel state initialized this state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L324).

## `mode`

<a id="api-aa762b535bb0a25e"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.mode 54283233f510949c8f25e51a25a7c4ccbb5fd4a5330c234de17d2659a56fc21a -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationMode InnoEditor.Rendering.EditorViewportNavigationState.mode { get; set; }
```

Gets or sets the active host navigation mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L344).

## `movementSpeed`

<a id="api-4da9e71700398812"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.movementSpeed e92112eba4f35b74e3880d518ee608a2c5d6fc73be15b486494a2495165666fd -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationState.movementSpeed { get; set; }
```

Gets or sets the positive base movement speed in world units per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L478).

## `nearClip`

<a id="api-32fe08e690b0ff6c"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.nearClip f0d0681fef44426935a9235ee2c1cce7a35ebd1db40e2d4b57e17692bebb748d -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationState.nearClip { get; set; }
```

Gets or sets the positive near clipping distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L433).

## `orthographicSize`

<a id="api-3a658d160aa7efa5"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.orthographicSize c896ad92216c91067c692cced9302a805d89a81f24f3ae33e2c94db6776d46de -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationState.orthographicSize { get; set; }
```

Gets or sets the positive orthographic half-height in provider world units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L403).

## `pivot`

<a id="api-2ef09ec4149a06c1"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.pivot c4daf2a13f86a1aa2c845cc9aff883e3a9c8bab38e084c857b2006132d8041a2 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEditor.Rendering.EditorViewportNavigationState.pivot { get; set; }
```

Gets or sets the world-space orbit and framing pivot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L389).

## `position`

<a id="api-7d9104b05250ecc5"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.position c176e2394ecbde0fc7b07b87c4db3ee6338e7324a6829bc6d6a24b0e529fb34e -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEditor.Rendering.EditorViewportNavigationState.position { get; set; }
```

Gets or sets the provider-defined world-space view position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L359).

## `projection`

<a id="api-f4e9139eb9a224ec"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.projection 8428bf7a94de8c6d6e8c39b5c4e94a0509972f8b262090eeaee28a11c66689e6 -->

```csharp
public InnoEditor.Rendering.EditorViewportProjection InnoEditor.Rendering.EditorViewportNavigationState.projection { get; set; }
```

Gets or sets the current projection family.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L329).

## `rotation`

<a id="api-fab19f01c4ee269d"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationState.rotation a3504cb3cba4b2ff7557aec140ff99c7559ef0f11009071e2d76853ca0187081 -->

```csharp
public InnoEngine.Mathematics.Quaternion InnoEditor.Rendering.EditorViewportNavigationState.rotation { get; set; }
```

Gets or sets the normalized provider-defined world-space view rotation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L373).
