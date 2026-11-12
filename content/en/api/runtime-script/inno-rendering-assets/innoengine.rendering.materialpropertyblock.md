---
title: "MaterialPropertyBlock"
description: "Reference for MaterialPropertyBlock in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.6776bc1caccda30b
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialPropertyBlock`

This reference describes `MaterialPropertyBlock` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c7a3d32259aaf73a) | Method |
| [`Clear`](#api-590550448038546f) | Method |
| [`Set`](#api-eaea2a4b2ade24bf) | Method |
| [`TryGet`](#api-1ad99e3feb61883a) | Method |
| [`count`](#api-37dfdc9904ae54df) | Property |

## Type declaration

<a id="api-6776bc1caccda30b"></a>
<!-- api: T:InnoEngine.Rendering.MaterialPropertyBlock 9a42f93c9e4e783021b9eecb8de5b1ac9583e2904b3d438c6f9e22f63cfa0a18 -->

```csharp
public sealed class InnoEngine.Rendering.MaterialPropertyBlock
```

Holds frame-local material overrides without modifying a shared asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L16).

## `#ctor`

<a id="api-c7a3d32259aaf73a"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPropertyBlock.#ctor 0021845ef77d0942aa6dd078dbd9402c225cfeedd23c70e3be0b79e14398e803 -->

```csharp
public InnoEngine.Rendering.MaterialPropertyBlock.MaterialPropertyBlock()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L16).

## `Clear`

<a id="api-590550448038546f"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPropertyBlock.Clear 19829c639b79c95762f07004cfa4704838f15dfc34426c51378e1ac159998470 -->

```csharp
public void InnoEngine.Rendering.MaterialPropertyBlock.Clear()
```

Removes all frame-local overrides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L63).

## `Set`

<a id="api-eaea2a4b2ade24bf"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPropertyBlock.Set(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.MaterialValue) 663df05e6a00c86e902f1146cbd617edeea454991adf844cb5a19bd2cbcac3a1 -->

```csharp
public void InnoEngine.Rendering.MaterialPropertyBlock.Set(InnoEngine.Rendering.ShaderPropertyId id, InnoEngine.Rendering.MaterialValue value)
```

Creates or replaces one frame-local override.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L34).

## `TryGet`

<a id="api-1ad99e3feb61883a"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPropertyBlock.TryGet(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.MaterialValue@) 9084c2b38827884e09507034a4c555621c51f43df92b6fc226deb510d65a9d1d -->

```csharp
public bool InnoEngine.Rendering.MaterialPropertyBlock.TryGet(InnoEngine.Rendering.ShaderPropertyId id, out InnoEngine.Rendering.MaterialValue value)
```

Tries to read one frame-local override.

**Parameter `id`:** Stable shader property identifier.

**Returns:** `true` when the override exists.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L55).

## `count`

<a id="api-37dfdc9904ae54df"></a>
<!-- api: P:InnoEngine.Rendering.MaterialPropertyBlock.count 7d46bee1a1de392a98fa98431ce50e5597d336037c8882c3e6ec5e3c252bfb05 -->

```csharp
public int InnoEngine.Rendering.MaterialPropertyBlock.count { get; }
```

Gets the number of active overrides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L23).
