---
title: "Transform"
description: "Reference for Transform in Inno.Scene."
uid: api.inno.scene.runtime-script.d0f15ed36b9812ec
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `Transform`

This reference describes `Transform` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Scene.GameComponent`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a803f0fd6b2cd3cd) | Method |
| [`InverseTransformPoint`](#api-57fadefe29c2693c) | Method |
| [`Reset`](#api-da1294b5896a63a1) | Method |
| [`SetParent`](#api-ed8436dc591bcebf) | Method |
| [`SetSiblingIndex`](#api-e98a7b98c0bc4ded) | Method |
| [`SetWorldTransform`](#api-e0ebebfaf45a6ea3) | Method |
| [`TransformPoint`](#api-2bd0658b3b618acd) | Method |
| [`children`](#api-5adabf5d6d67033b) | Property |
| [`localPosition`](#api-60c95079cb2e8feb) | Property |
| [`localRotation`](#api-863158f66dfa169b) | Property |
| [`localScale`](#api-f87a7c431b41b80c) | Property |
| [`localToWorldMatrix`](#api-9379947fd4a4b2ce) | Property |
| [`parent`](#api-eeb30910ec3a4f21) | Property |
| [`siblingIndex`](#api-0124f5daf7ea7fcc) | Property |
| [`worldPosition`](#api-bb689e3aaf90b301) | Property |
| [`worldRotation`](#api-f2d70f4ed7fd449e) | Property |
| [`worldScale`](#api-c6abecfd893d8e2e) | Property |
| [`worldToLocalMatrix`](#api-b76e577c0a8a2b78) | Property |

## Type declaration

<a id="api-d0f15ed36b9812ec"></a>
<!-- api: T:InnoEngine.Scene.Transform f085384ba301cb6d467f33be78d53b7310eb2c9744020f39afaf41b723f278d0 -->

```csharp
public sealed class InnoEngine.Scene.Transform : InnoEngine.Scene.GameComponent, InnoEngine.Serialization.ISerializable
```

Stores local transform data and exposes the scene hierarchy relationship.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L16).

## `#ctor`

<a id="api-a803f0fd6b2cd3cd"></a>
<!-- api: M:InnoEngine.Scene.Transform.#ctor ee2a24cf468430f912cfc93c6264da9e9c04e2ac0abfcb40b674217382ab4c66 -->

```csharp
public InnoEngine.Scene.Transform.Transform()
```

Creates a transform with identity local values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L33).

## `InverseTransformPoint`

<a id="api-57fadefe29c2693c"></a>
<!-- api: M:InnoEngine.Scene.Transform.InverseTransformPoint(InnoEngine.Mathematics.Vector3) 2eaf77c88b2dd8715e3f2f818dc125bf68798ab788e8bfee4bd68bea13349d78 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Scene.Transform.InverseTransformPoint(InnoEngine.Mathematics.Vector3 point)
```

Transforms a world-space point into this transform's local space.

**Parameter `point`:** Point expressed in world space.

**Returns:** The corresponding local-space point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L206).

## `Reset`

<a id="api-da1294b5896a63a1"></a>
<!-- api: M:InnoEngine.Scene.Transform.Reset b43537c841642ca9df19d32b306fb9409c77dd7b520b3f49d9bc183724f7e896 -->

```csharp
protected override void InnoEngine.Scene.Transform.Reset()
```

Restores this instance to its initial reusable state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L211).

## `SetParent`

<a id="api-ed8436dc591bcebf"></a>
<!-- api: M:InnoEngine.Scene.Transform.SetParent(InnoEngine.Scene.Transform) b2596619b00dbc07c1426e61136b635e7c057245ee206de9b5951bc8caba35f8 -->

```csharp
public void InnoEngine.Scene.Transform.SetParent(InnoEngine.Scene.Transform? parent)
```

Sets the parent while preserving this transform's world-space values.

**Parameter `parent`:** New parent, or `null` to move to scene level.

**Throws `System.InvalidOperationException`:** Thrown for hierarchy cycles, cross-scene parents, or a non-invertible parent hierarchy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L158).

## `SetSiblingIndex`

<a id="api-e98a7b98c0bc4ded"></a>
<!-- api: M:InnoEngine.Scene.Transform.SetSiblingIndex(System.Int32) 2c0dce88dba44ded6a841ef910df02745994444eceebf0ad11581b5030864ab7 -->

```csharp
public void InnoEngine.Scene.Transform.SetSiblingIndex(int siblingIndex)
```

Moves this transform within its current sibling collection.

**Parameter `siblingIndex`:** Requested zero-based sibling index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L166).

## `SetWorldTransform`

<a id="api-e0ebebfaf45a6ea3"></a>
<!-- api: M:InnoEngine.Scene.Transform.SetWorldTransform(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Quaternion,InnoEngine.Mathematics.Vector3) 2a7247b1ab09c18ca5f83bc50652d3bcaba93fc9e40473c1abe37e3319a64572 -->

```csharp
public void InnoEngine.Scene.Transform.SetWorldTransform(InnoEngine.Mathematics.Vector3 position, InnoEngine.Mathematics.Quaternion rotation, InnoEngine.Mathematics.Vector3 scale)
```

Atomically applies world-space translation, rotation, and scale.

**Parameter `position`:** Requested world-space translation.

**Parameter `rotation`:** Requested world-space rotation.

**Parameter `scale`:** Requested world-space scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L180).

## `TransformPoint`

<a id="api-2bd0658b3b618acd"></a>
<!-- api: M:InnoEngine.Scene.Transform.TransformPoint(InnoEngine.Mathematics.Vector3) ad9dfe1e01216f95d43bfd4ec2c95a73ad76c0a5bae90879fcada6dd75cbf7fe -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Scene.Transform.TransformPoint(InnoEngine.Mathematics.Vector3 point)
```

Transforms a local-space point through the complete parent hierarchy.

**Parameter `point`:** Point expressed in this transform's local space.

**Returns:** The corresponding world-space point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L195).

## `children`

<a id="api-5adabf5d6d67033b"></a>
<!-- api: P:InnoEngine.Scene.Transform.children 061c1d5e0613e6f8088b3d255bbd19a0712cbeeee97df9d8063665af4068cf2e -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.Transform> InnoEngine.Scene.Transform.children { get; }
```

Gets child transforms in sibling order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L138).

## `localPosition`

<a id="api-60c95079cb2e8feb"></a>
<!-- api: P:InnoEngine.Scene.Transform.localPosition e025b77ab9a77c13825ed95ebda0b4f686d474b7e054333352a7aada2ee95d9f -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Scene.Transform.localPosition { get; set; }
```

Gets or sets the local position relative to the parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L42).

## `localRotation`

<a id="api-863158f66dfa169b"></a>
<!-- api: P:InnoEngine.Scene.Transform.localRotation f5e00d958e87275436fedf6f51514417b42eba7202e6cd5525e6c339a6cb5322 -->

```csharp
public InnoEngine.Mathematics.Quaternion InnoEngine.Scene.Transform.localRotation { get; set; }
```

Gets or sets the local rotation relative to the parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L57).

## `localScale`

<a id="api-f87a7c431b41b80c"></a>
<!-- api: P:InnoEngine.Scene.Transform.localScale b1bf7027ab51b6dde77f2e3b640a6695d128a9a6f62180520f9ebf3a0a76b4d6 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Scene.Transform.localScale { get; set; }
```

Gets or sets the local scale relative to the parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L72).

## `localToWorldMatrix`

<a id="api-9379947fd4a4b2ce"></a>
<!-- api: P:InnoEngine.Scene.Transform.localToWorldMatrix 8091e79e7a0bf42e1837fe1aedcdadb2612b7dfc08869a91ceac3704712281be -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Scene.Transform.localToWorldMatrix { get; }
```

Gets the exact local-to-world matrix, including the complete parent hierarchy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L113).

## `parent`

<a id="api-eeb30910ec3a4f21"></a>
<!-- api: P:InnoEngine.Scene.Transform.parent b0f414b8c46f62b5256d1339177b250a8cebaac9601254a68ad1d5da8323e870 -->

```csharp
public InnoEngine.Scene.Transform? InnoEngine.Scene.Transform.parent { get; }
```

Gets the parent transform, or `null` for a scene-level object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L133).

## `siblingIndex`

<a id="api-0124f5daf7ea7fcc"></a>
<!-- api: P:InnoEngine.Scene.Transform.siblingIndex 7a3e7228944b61cb5c1dbd48ae34b58771fb77b923de1b88dcfcfaad40ed158f -->

```csharp
public int InnoEngine.Scene.Transform.siblingIndex { get; set; }
```

Gets or sets this transform's index among its siblings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L143).

## `worldPosition`

<a id="api-bb689e3aaf90b301"></a>
<!-- api: P:InnoEngine.Scene.Transform.worldPosition 21172a8a975dffc25c417d257272363d8a301213f9ba6124a5e380528a385e87 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Scene.Transform.worldPosition { get; set; }
```

Gets or sets the world-space position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L86).

## `worldRotation`

<a id="api-f2d70f4ed7fd449e"></a>
<!-- api: P:InnoEngine.Scene.Transform.worldRotation 8ed3eb58c5dd1396865485a945553e1c13292891febd3c44bac725d9db442d3e -->

```csharp
public InnoEngine.Mathematics.Quaternion InnoEngine.Scene.Transform.worldRotation { get; set; }
```

Gets or sets the world-space rotation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L95).

## `worldScale`

<a id="api-c6abecfd893d8e2e"></a>
<!-- api: P:InnoEngine.Scene.Transform.worldScale 9c0778aa7f351de766da61adbe137b375f4cea69dde34a65febecedc74a57a1b -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Scene.Transform.worldScale { get; set; }
```

Gets or sets the world-space scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L104).

## `worldToLocalMatrix`

<a id="api-b76e577c0a8a2b78"></a>
<!-- api: P:InnoEngine.Scene.Transform.worldToLocalMatrix 5c1be1d9b070442f09304a5417c9e95a325253851dc4447a321f3abc85b7f078 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Scene.Transform.worldToLocalMatrix { get; }
```

Gets the inverse of the exact local-to-world matrix.

**Throws `System.InvalidOperationException`:** Thrown when a zero-scale hierarchy is not invertible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Concrete/Transform.cs#L121).
