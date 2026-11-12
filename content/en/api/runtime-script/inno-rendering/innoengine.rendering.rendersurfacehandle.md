---
title: "RenderSurfaceHandle"
description: "Reference for RenderSurfaceHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.413b5b33838483fa
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderSurfaceHandle`

This reference describes `RenderSurfaceHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderSurfaceHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-8fecffbc7549ac57) | Method |
| [`Equals`](#api-bb80639180c3d109) | Method |
| [`GetHashCode`](#api-57cab72567d32ab7) | Method |
| [`op_Equality`](#api-856634cae1ccc216) | Method |
| [`op_Inequality`](#api-a422a0593ddd5356) | Method |
| [`ToString`](#api-40ceeaf6458723c2) | Method |
| [`isValid`](#api-69ab16dbe21e3421) | Property |

## Type declaration

<a id="api-413b5b33838483fa"></a>
<!-- api: T:InnoEngine.Rendering.RenderSurfaceHandle ef5f309ba332749a87529c2f513086cbb6bd4d27db8bfb13d36806f48a7515fa -->

```csharp
public readonly struct InnoEngine.Rendering.RenderSurfaceHandle : System.IEquatable<InnoEngine.Rendering.RenderSurfaceHandle>
```

Identifies a persistent presentation surface without exposing a backend framebuffer or swapchain handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `Equals`

<a id="api-8fecffbc7549ac57"></a>
<!-- api: M:InnoEngine.Rendering.RenderSurfaceHandle.Equals(InnoEngine.Rendering.RenderSurfaceHandle) 47f66acb8dc22f456e8f887db644ebc74b253f74fcc298bea10debe3b4d29831 -->

```csharp
public bool InnoEngine.Rendering.RenderSurfaceHandle.Equals(InnoEngine.Rendering.RenderSurfaceHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `Equals`

<a id="api-bb80639180c3d109"></a>
<!-- api: M:InnoEngine.Rendering.RenderSurfaceHandle.Equals(System.Object) a3439bbe2947f0e9e47aa600cdf4c2e370e7bdd9af5c6999736806d3e63e3d4d -->

```csharp
public override bool InnoEngine.Rendering.RenderSurfaceHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `GetHashCode`

<a id="api-57cab72567d32ab7"></a>
<!-- api: M:InnoEngine.Rendering.RenderSurfaceHandle.GetHashCode ce3db0e82f245ffe1e2d4ef3c5dc5c06441365c8b00589fd0c911c4d42e1e6fb -->

```csharp
public override int InnoEngine.Rendering.RenderSurfaceHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `op_Equality`

<a id="api-856634cae1ccc216"></a>
<!-- api: M:InnoEngine.Rendering.RenderSurfaceHandle.op_Equality(InnoEngine.Rendering.RenderSurfaceHandle,InnoEngine.Rendering.RenderSurfaceHandle) de16569cd1564a233d7a715c94cc8cf8bee4c3b07684b20438250fda852e106d -->

```csharp
public static bool InnoEngine.Rendering.RenderSurfaceHandle.operator ==(InnoEngine.Rendering.RenderSurfaceHandle left, InnoEngine.Rendering.RenderSurfaceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `op_Inequality`

<a id="api-a422a0593ddd5356"></a>
<!-- api: M:InnoEngine.Rendering.RenderSurfaceHandle.op_Inequality(InnoEngine.Rendering.RenderSurfaceHandle,InnoEngine.Rendering.RenderSurfaceHandle) 1f6d6f015c0450b47aa7bb4e048e61dc8df8130722c74b905aa86cdf0c14aa83 -->

```csharp
public static bool InnoEngine.Rendering.RenderSurfaceHandle.operator !=(InnoEngine.Rendering.RenderSurfaceHandle left, InnoEngine.Rendering.RenderSurfaceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `ToString`

<a id="api-40ceeaf6458723c2"></a>
<!-- api: M:InnoEngine.Rendering.RenderSurfaceHandle.ToString cddf950baa99146842b1b9048079e889ef5665d22eb35e9a5e987dd3d60a09f6 -->

```csharp
public override string InnoEngine.Rendering.RenderSurfaceHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `isValid`

<a id="api-69ab16dbe21e3421"></a>
<!-- api: P:InnoEngine.Rendering.RenderSurfaceHandle.isValid 958a4f5de7f78578b75bed247bbc0d239af6c3609efa16727be575ec74bc3119 -->

```csharp
public bool InnoEngine.Rendering.RenderSurfaceHandle.isValid { get; }
```

Gets whether the handle identifies a presentation surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L553).
