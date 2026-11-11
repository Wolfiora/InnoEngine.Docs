---
title: "RenderSurfaceHandle"
description: "Reference for RenderSurfaceHandle in Inno.Rendering."
uid: api.inno.rendering.c2334adaa5f43966
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderSurfaceHandle`

This reference describes `RenderSurfaceHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderSurfaceHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-bb44d575d42be074) | Method |
| [`Equals`](#api-07b3669d17d6ec55) | Method |
| [`GetHashCode`](#api-a5ce8590204bb6fe) | Method |
| [`op_Equality`](#api-a59a4638781888e4) | Method |
| [`op_Inequality`](#api-24433264624ae6b5) | Method |
| [`ToString`](#api-e1516b8426d68e44) | Method |
| [`isValid`](#api-315fad1ade7a051b) | Property |

## Type declaration

<a id="api-c2334adaa5f43966"></a>
<!-- api: T:Inno.Rendering.RenderSurfaceHandle a2eb77ccda7d2f1a4cf7f6fbac1f2cfc41f7856e7606ca866da7bbaff228bedc -->

```csharp
public readonly record struct Inno.Rendering.RenderSurfaceHandle : System.IEquatable<Inno.Rendering.RenderSurfaceHandle>
```

Identifies a persistent presentation surface without exposing a backend framebuffer or swapchain handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `Equals`

<a id="api-bb44d575d42be074"></a>
<!-- api: M:Inno.Rendering.RenderSurfaceHandle.Equals(Inno.Rendering.RenderSurfaceHandle) 0573fcfad5c437db6a590fc6f1a58306c516667e5e7f7fa4c40051f61dd03fa6 -->

```csharp
public bool Inno.Rendering.RenderSurfaceHandle.Equals(Inno.Rendering.RenderSurfaceHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `Equals`

<a id="api-07b3669d17d6ec55"></a>
<!-- api: M:Inno.Rendering.RenderSurfaceHandle.Equals(System.Object) c13f44d48067e823bf17f15ae70bdc584608e356251814056ce08608036022ca -->

```csharp
public override bool Inno.Rendering.RenderSurfaceHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `GetHashCode`

<a id="api-a5ce8590204bb6fe"></a>
<!-- api: M:Inno.Rendering.RenderSurfaceHandle.GetHashCode 9d1e4df69d29cf782595cb757516f9974c5536901eb429c62c14e48a61744618 -->

```csharp
public override int Inno.Rendering.RenderSurfaceHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `op_Equality`

<a id="api-a59a4638781888e4"></a>
<!-- api: M:Inno.Rendering.RenderSurfaceHandle.op_Equality(Inno.Rendering.RenderSurfaceHandle,Inno.Rendering.RenderSurfaceHandle) b9fc1bd2f146b1a6386cc431ffec4dc3a4278a4627f024b4252d264a70184a06 -->

```csharp
public static bool Inno.Rendering.RenderSurfaceHandle.operator ==(Inno.Rendering.RenderSurfaceHandle left, Inno.Rendering.RenderSurfaceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `op_Inequality`

<a id="api-24433264624ae6b5"></a>
<!-- api: M:Inno.Rendering.RenderSurfaceHandle.op_Inequality(Inno.Rendering.RenderSurfaceHandle,Inno.Rendering.RenderSurfaceHandle) b806dc08b01d58ff59ec2eaab3980e1d4b5bd3f934601b529e7334aaa4b679c8 -->

```csharp
public static bool Inno.Rendering.RenderSurfaceHandle.operator !=(Inno.Rendering.RenderSurfaceHandle left, Inno.Rendering.RenderSurfaceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `ToString`

<a id="api-e1516b8426d68e44"></a>
<!-- api: M:Inno.Rendering.RenderSurfaceHandle.ToString 9cbd6d5ab00350d679cd7a5d2ab5e3b217d527cd5390a850faf395395b7b27e2 -->

```csharp
public override string Inno.Rendering.RenderSurfaceHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L537).

## `isValid`

<a id="api-315fad1ade7a051b"></a>
<!-- api: P:Inno.Rendering.RenderSurfaceHandle.isValid 8e5b06c19bc8dce8b224164ca3d4b951552d152206b61927bf62502059e38002 -->

```csharp
public bool Inno.Rendering.RenderSurfaceHandle.isValid { get; }
```

Gets whether the handle identifies a presentation surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L553).
