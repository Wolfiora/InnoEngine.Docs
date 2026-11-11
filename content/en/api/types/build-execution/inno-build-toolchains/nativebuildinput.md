---
title: "NativeBuildInput"
description: "Reference for NativeBuildInput in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.a3e44b7ecac087a4
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildInput`

This reference describes `NativeBuildInput` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeBuildInput>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-969004c0842615d9) | Method |
| [`Equals`](#api-21076680403fcd0a) | Method |
| [`Equals`](#api-4d29d4aaaca11b44) | Method |
| [`FromPath`](#api-41b7e18461191b17) | Method |
| [`GetHashCode`](#api-60d6f1d5e66fd89e) | Method |
| [`op_Equality`](#api-cac5655925f514b9) | Method |
| [`op_Inequality`](#api-f14018c2c6166411) | Method |
| [`ToString`](#api-36970be3d7085bc5) | Method |
| [`logicalPath`](#api-2caa8ae5157fc9bc) | Property |
| [`physicalPath`](#api-d699dd10fc22b5cc) | Property |

## Type declaration

<a id="api-a3e44b7ecac087a4"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildInput ceb81a6b44b3af85c00bdfd6b8915bef9bf00653ad86b428519289e4981e549b -->

```csharp
public sealed record Inno.Build.Toolchains.NativeBuildInput : System.IEquatable<Inno.Build.Toolchains.NativeBuildInput>
```

Separates the reproducible identity of an input from its physical reading location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `#ctor`

<a id="api-969004c0842615d9"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.#ctor(System.String,System.String) a5547671e5bf0f12e982ce3f48de8b1371062b2c74a561ae2def147b6f184bab -->

```csharp
public Inno.Build.Toolchains.NativeBuildInput.NativeBuildInput(string logicalPath, string physicalPath)
```

Declares one file or directory consumed by a native recipe.

**Parameter `logicalPath`:** A nonempty, slash-separated identity relative to a declared logical root.

**Parameter `physicalPath`:** The absolute file or directory used only for reading and execution.

**Throws `System.ArgumentException`:** An identity is empty, contains a control character or backslash, or the physical path is relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L23).

## `Equals`

<a id="api-21076680403fcd0a"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.Equals(Inno.Build.Toolchains.NativeBuildInput) 0b6cc8ce2c5d162f0f1f9399f4a85d5c8570a2ceff1b009f5919b2e3d49209b1 -->

```csharp
public bool Inno.Build.Toolchains.NativeBuildInput.Equals(Inno.Build.Toolchains.NativeBuildInput? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `Equals`

<a id="api-4d29d4aaaca11b44"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.Equals(System.Object) 806d8074adf5da1f92a9e865029392da2265cf7d08fe15016eb709b651e31025 -->

```csharp
public override bool Inno.Build.Toolchains.NativeBuildInput.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `FromPath`

<a id="api-41b7e18461191b17"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.FromPath(System.String,System.String) bb89f0f8ce65cb950a5a2d6e64a632edb21606225520f8f83282600487ad7950 -->

```csharp
public static Inno.Build.Toolchains.NativeBuildInput Inno.Build.Toolchains.NativeBuildInput.FromPath(string engineRoot, string path)
```

Declares a checkout-relative input, or an external SDK location whose path affects tool selection.

**Parameter `engineRoot`:** The absolute checkout root assigned the logical prefix `engine/`.

**Parameter `path`:** A checkout-relative input or an absolute SDK input.

**Returns:** A normalized declaration preserving external SDK location identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L61).

## `GetHashCode`

<a id="api-60d6f1d5e66fd89e"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.GetHashCode d069506814a20ba3cc3dfa7fd37aced2789f496ce98db8630b002b6c63ad9fb1 -->

```csharp
public override int Inno.Build.Toolchains.NativeBuildInput.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `op_Equality`

<a id="api-cac5655925f514b9"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.op_Equality(Inno.Build.Toolchains.NativeBuildInput,Inno.Build.Toolchains.NativeBuildInput) bd050b7afa3fc369d0c781f29141aebbe004e6adc4fa4d6ee11a763734118ba6 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBuildInput.operator ==(Inno.Build.Toolchains.NativeBuildInput? left, Inno.Build.Toolchains.NativeBuildInput? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `op_Inequality`

<a id="api-f14018c2c6166411"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.op_Inequality(Inno.Build.Toolchains.NativeBuildInput,Inno.Build.Toolchains.NativeBuildInput) d377fb46d3e105698690d7c7651a8d0859c5d38bfb5581b5770400b5577fb6c7 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBuildInput.operator !=(Inno.Build.Toolchains.NativeBuildInput? left, Inno.Build.Toolchains.NativeBuildInput? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `ToString`

<a id="api-36970be3d7085bc5"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildInput.ToString 23135923ef4f88ffa5ea36ec2b3abea2c5e99293e2075d57a10a83a735cdb6f0 -->

```csharp
public override string Inno.Build.Toolchains.NativeBuildInput.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L9).

## `logicalPath`

<a id="api-2caa8ae5157fc9bc"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildInput.logicalPath cf472357b310ddd87b2efdf430e516ac6b7e7fef9f82f6c36c1d210c47fa5d1e -->

```csharp
public string Inno.Build.Toolchains.NativeBuildInput.logicalPath { get; }
```

Gets the identity included in the recipe fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L42).

## `physicalPath`

<a id="api-d699dd10fc22b5cc"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildInput.physicalPath a70abaac09dcf2ec050ee962437cd88027820532c9a3d25f4a9c8c8d91c856a0 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildInput.physicalPath { get; }
```

Gets the reading location, which is not implicitly included in the fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildInput.cs#L47).
