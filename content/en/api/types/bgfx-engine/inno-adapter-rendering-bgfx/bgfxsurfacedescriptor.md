---
title: "BgfxSurfaceDescriptor"
description: "Reference for BgfxSurfaceDescriptor in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.5562af1015afb894
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `BgfxSurfaceDescriptor`

This reference describes `BgfxSurfaceDescriptor` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-96e05e0a2ae8bdcb) | Method |
| [`Equals`](#api-003e8d6d376ac300) | Method |
| [`Equals`](#api-52513a806f55f8c6) | Method |
| [`GetHashCode`](#api-72cee18f163ff406) | Method |
| [`op_Equality`](#api-dcd2b059ce758bce) | Method |
| [`op_Inequality`](#api-25c192dfa243b7d7) | Method |
| [`ToString`](#api-10b3a944fa0177bd) | Method |
| [`displayHandle`](#api-9fed1236eaffcf2b) | Property |
| [`supportsSrgbReset`](#api-ae660a8832c68e3b) | Property |
| [`windowHandle`](#api-8cffe725e6a7dbc0) | Property |

## Type declaration

<a id="api-5562af1015afb894"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor 1252350e85add49de0953bbd5e271805bc50d579e6be6a98f8a39009547be46e -->

```csharp
public readonly record struct Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor : System.IEquatable<Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor>
```

Freezes borrowed window and display values without exposing BGFX native structures.

**Constraints:** The original window owner must keep these values valid until rendering retirement completes.
The default value is invalid and is rejected before native initialization or framebuffer creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `#ctor`

<a id="api-96e05e0a2ae8bdcb"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.#ctor(System.IntPtr,System.IntPtr,System.Boolean) b3be3f67788064627bf8d4387b8d37b7508bdd5c4758236d2d602bed48e65889 -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.BgfxSurfaceDescriptor(nint windowHandle, nint displayHandle, bool supportsSrgbReset)
```

Creates a validated borrowing description for a selected host integration.

**Parameter `windowHandle`:** The nonzero opaque native window value or stable canvas selector.

**Parameter `displayHandle`:** The optional display value required by the selected ABI.

**Parameter `supportsSrgbReset`:** Whether this primary surface permits BGFX's sRGB reset option.

**Throws `System.ArgumentException`:** The window value is zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L29).

## `Equals`

<a id="api-003e8d6d376ac300"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.Equals(Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor) b0f1431011b2abf89fb342797bcc2259ac0eff16def3b81d31b20182545a6af5 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.Equals(Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `Equals`

<a id="api-52513a806f55f8c6"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.Equals(System.Object) 5c18129bc23bbde1e43637c71014669e422c426cf0e95942e6b386454afb8192 -->

```csharp
public override bool Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `GetHashCode`

<a id="api-72cee18f163ff406"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.GetHashCode aea8e55f618893b7e03d911a695622c4a3bce58a48a50ded525e509552a30b7a -->

```csharp
public override int Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `op_Equality`

<a id="api-dcd2b059ce758bce"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.op_Equality(Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor) 3d0923a54aa9c46137e7901d883df395d26362526aa935de92670a377ce053bf -->

```csharp
public static bool Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.operator ==(Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor left, Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `op_Inequality`

<a id="api-25c192dfa243b7d7"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.op_Inequality(Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor) a643ef9199db17ef6d6d82268e0d3aabf328ee6a25e53f44dceb89e792c87c48 -->

```csharp
public static bool Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.operator !=(Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor left, Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `ToString`

<a id="api-10b3a944fa0177bd"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.ToString 9b18f05722a18aef128522ae766a2d1e9f0ca395054d9e150570a1477c739a04 -->

```csharp
public override string Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L12).

## `displayHandle`

<a id="api-9fed1236eaffcf2b"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.displayHandle bd0f88610ac327577cafc830d4a33501254bf313a5cf1ed8eb75e9d135cb038f -->

```csharp
public nint Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.displayHandle { get; }
```

Gets the borrowed display value, or zero when this ABI does not require one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L49).

## `supportsSrgbReset`

<a id="api-ae660a8832c68e3b"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.supportsSrgbReset 28e4a159fc116d85c2bc27eb106f7bfe23e2f2fb2b3dc6910f60398f5de904df -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.supportsSrgbReset { get; }
```

Gets whether this primary surface permits sRGB reset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L54).

## `windowHandle`

<a id="api-8cffe725e6a7dbc0"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.windowHandle 8c0a6605f81fb5fbea62d70ee892cfe1536cd21036e4b8f72b6b2b6a40f8377c -->

```csharp
public nint Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor.windowHandle { get; }
```

Gets the borrowed window value; the default descriptor has no valid window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/BgfxSurfaceDescriptor.cs#L44).
