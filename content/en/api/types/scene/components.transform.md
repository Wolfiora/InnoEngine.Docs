---
title: "Components.Transform"
description: "Reference for Components.Transform in Inno.Scene."
uid: api.inno.scene.bca5da9533a89e7b
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `Components.Transform`

This reference describes `Components.Transform` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.GameComponent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-df72ab16dd66601b) | Method |
| [`InverseTransformPoint`](#api-ec594d6c7ffd9866) | Method |
| [`Reset`](#api-ad86042da30c7c2b) | Method |
| [`SetParent`](#api-f35410e4baaf27c8) | Method |
| [`SetSiblingIndex`](#api-ce219eabcc524f8b) | Method |
| [`SetWorldTransform`](#api-7197c393ac8a00ba) | Method |
| [`TransformPoint`](#api-f0278759126e5288) | Method |
| [`children`](#api-c52dee07e9ad5cc1) | Property |
| [`localPosition`](#api-3fead801ce47b317) | Property |
| [`localRotation`](#api-67b00267d26f9cb2) | Property |
| [`localScale`](#api-2c421b3ce0636ebe) | Property |
| [`localToWorldMatrix`](#api-6442179ac19af1c5) | Property |
| [`parent`](#api-3081063399fae2b8) | Property |
| [`siblingIndex`](#api-4c6d14599a824bdb) | Property |
| [`worldPosition`](#api-d6cef86a6b89ba86) | Property |
| [`worldRotation`](#api-2f1eccf1d9c768eb) | Property |
| [`worldScale`](#api-424e285db70e89aa) | Property |
| [`worldToLocalMatrix`](#api-c7b95c48b47031c5) | Property |

## Type declaration

<a id="api-bca5da9533a89e7b"></a>
<!-- api: T:Inno.Scene.Components.Transform be63513345b91ef7024f68d5abe63f53be82471c1b8d3f43d57d14036856317d -->

```csharp
public sealed class Inno.Scene.Components.Transform : Inno.Scene.GameComponent
```

Stores local transform data and exposes the scene hierarchy relationship.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L16).

## `#ctor`

<a id="api-df72ab16dd66601b"></a>
<!-- api: M:Inno.Scene.Components.Transform.#ctor dae3700f8960a20f27e8837e33c938797ac0671d544de540f16d73e32c137b1f -->

```csharp
public Inno.Scene.Components.Transform.Transform()
```

Creates a transform with identity local values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L33).

## `InverseTransformPoint`

<a id="api-ec594d6c7ffd9866"></a>
<!-- api: M:Inno.Scene.Components.Transform.InverseTransformPoint(Inno.Core.Mathematics.Vector3) 7d3f50d785042f141cbd40e08b3d6680c24febcf405ce0ce279f2cb6ee03f82f -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Scene.Components.Transform.InverseTransformPoint(Inno.Core.Mathematics.Vector3 point)
```

Transforms a world-space point into this transform's local space.

**Parameter `point`:** Point expressed in world space.

**Returns:** The corresponding local-space point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L206).

## `Reset`

<a id="api-ad86042da30c7c2b"></a>
<!-- api: M:Inno.Scene.Components.Transform.Reset cbf8fbad61d7bc3058a9bd43aa7dc11752a9e6ebfb0f0d33848ef6195fd02510 -->

```csharp
protected override void Inno.Scene.Components.Transform.Reset()
```

Restores this instance to its initial reusable state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L211).

## `SetParent`

<a id="api-f35410e4baaf27c8"></a>
<!-- api: M:Inno.Scene.Components.Transform.SetParent(Inno.Scene.Components.Transform) 5a9e9d70277786bf121761991fc0cfa171dbe979d46d2ff4f9d6e207087fa52b -->

```csharp
public void Inno.Scene.Components.Transform.SetParent(Inno.Scene.Components.Transform? parent)
```

Sets the parent while preserving this transform's world-space values.

**Parameter `parent`:** New parent, or `null` to move to scene level.

**Throws `System.InvalidOperationException`:** Thrown for hierarchy cycles, cross-scene parents, or a non-invertible parent hierarchy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L158).

## `SetSiblingIndex`

<a id="api-ce219eabcc524f8b"></a>
<!-- api: M:Inno.Scene.Components.Transform.SetSiblingIndex(System.Int32) d6f8949e721308446e3ab1f409a153c6793c778bc35f9cb74815ceca8c94c205 -->

```csharp
public void Inno.Scene.Components.Transform.SetSiblingIndex(int siblingIndex)
```

Moves this transform within its current sibling collection.

**Parameter `siblingIndex`:** Requested zero-based sibling index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L166).

## `SetWorldTransform`

<a id="api-7197c393ac8a00ba"></a>
<!-- api: M:Inno.Scene.Components.Transform.SetWorldTransform(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Quaternion,Inno.Core.Mathematics.Vector3) 3a6ecce28dc9bc02f34a0cfefa5877a35d928808de693ba8e099955175add54e -->

```csharp
public void Inno.Scene.Components.Transform.SetWorldTransform(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Quaternion rotation, Inno.Core.Mathematics.Vector3 scale)
```

Atomically applies world-space translation, rotation, and scale.

**Parameter `position`:** Requested world-space translation.

**Parameter `rotation`:** Requested world-space rotation.

**Parameter `scale`:** Requested world-space scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L180).

## `TransformPoint`

<a id="api-f0278759126e5288"></a>
<!-- api: M:Inno.Scene.Components.Transform.TransformPoint(Inno.Core.Mathematics.Vector3) 884a44d17429cf1fe81233bd2e832cd67a7ab4be30a00d28f556485981ce5a46 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Scene.Components.Transform.TransformPoint(Inno.Core.Mathematics.Vector3 point)
```

Transforms a local-space point through the complete parent hierarchy.

**Parameter `point`:** Point expressed in this transform's local space.

**Returns:** The corresponding world-space point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L195).

## `children`

<a id="api-c52dee07e9ad5cc1"></a>
<!-- api: P:Inno.Scene.Components.Transform.children 86d46abc503e58802db23d183d56ea3e09978c729f7ba68f31fba5f2a66daaee -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.Components.Transform> Inno.Scene.Components.Transform.children { get; }
```

Gets child transforms in sibling order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L138).

## `localPosition`

<a id="api-3fead801ce47b317"></a>
<!-- api: P:Inno.Scene.Components.Transform.localPosition 7ff88717e6eeb06820bdae6d837a0960c1fc5435ca2b829ee9522b5d39c6c3cf -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Scene.Components.Transform.localPosition { get; set; }
```

Gets or sets the local position relative to the parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L42).

## `localRotation`

<a id="api-67b00267d26f9cb2"></a>
<!-- api: P:Inno.Scene.Components.Transform.localRotation 861ef37990d3dfa79a0678239533459639ff36684647a8e087d4e945d3e2875c -->

```csharp
public Inno.Core.Mathematics.Quaternion Inno.Scene.Components.Transform.localRotation { get; set; }
```

Gets or sets the local rotation relative to the parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L57).

## `localScale`

<a id="api-2c421b3ce0636ebe"></a>
<!-- api: P:Inno.Scene.Components.Transform.localScale 39f23cc53d57fed2c5a69d57e78b35f9dd8730697f408c9d471f66cf23e5db54 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Scene.Components.Transform.localScale { get; set; }
```

Gets or sets the local scale relative to the parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L72).

## `localToWorldMatrix`

<a id="api-6442179ac19af1c5"></a>
<!-- api: P:Inno.Scene.Components.Transform.localToWorldMatrix ca5c116c9e690585b61115d38ae494865d4bd50f17cccc1e00ebd95a80491ebd -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Scene.Components.Transform.localToWorldMatrix { get; }
```

Gets the exact local-to-world matrix, including the complete parent hierarchy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L113).

## `parent`

<a id="api-3081063399fae2b8"></a>
<!-- api: P:Inno.Scene.Components.Transform.parent 3ac9b05e28607681d30f06f9f5685d22394e8724dfc82e9df3b5e5b466ab9a62 -->

```csharp
public Inno.Scene.Components.Transform? Inno.Scene.Components.Transform.parent { get; }
```

Gets the parent transform, or `null` for a scene-level object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L133).

## `siblingIndex`

<a id="api-4c6d14599a824bdb"></a>
<!-- api: P:Inno.Scene.Components.Transform.siblingIndex d28a325368ec300df3edb8a656c97244c95e2467b173df585969b4ef1f9f6d97 -->

```csharp
public int Inno.Scene.Components.Transform.siblingIndex { get; set; }
```

Gets or sets this transform's index among its siblings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L143).

## `worldPosition`

<a id="api-d6cef86a6b89ba86"></a>
<!-- api: P:Inno.Scene.Components.Transform.worldPosition 4608c358eaf35e305fb66fef24ddd2ae27b2936014b0bd5d99049e70348fcf1d -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Scene.Components.Transform.worldPosition { get; set; }
```

Gets or sets the world-space position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L86).

## `worldRotation`

<a id="api-2f1eccf1d9c768eb"></a>
<!-- api: P:Inno.Scene.Components.Transform.worldRotation 7d5131240ade5cc485808ee1493da1b2f31b865d2b4d420f8dda4eacaab9ed43 -->

```csharp
public Inno.Core.Mathematics.Quaternion Inno.Scene.Components.Transform.worldRotation { get; set; }
```

Gets or sets the world-space rotation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L95).

## `worldScale`

<a id="api-424e285db70e89aa"></a>
<!-- api: P:Inno.Scene.Components.Transform.worldScale f8db3464f0664b68126c20434b13e44146bbcafd48f45e47bd22f04069911c64 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Scene.Components.Transform.worldScale { get; set; }
```

Gets or sets the world-space scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L104).

## `worldToLocalMatrix`

<a id="api-c7b95c48b47031c5"></a>
<!-- api: P:Inno.Scene.Components.Transform.worldToLocalMatrix d2e8f2ba55edf3694609c53e24f8e00608293c3a84783ac1ce135f3c7240383e -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Scene.Components.Transform.worldToLocalMatrix { get; }
```

Gets the inverse of the exact local-to-world matrix.

**Throws `System.InvalidOperationException`:** Thrown when a zero-scale hierarchy is not invertible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/Transform.cs#L121).
