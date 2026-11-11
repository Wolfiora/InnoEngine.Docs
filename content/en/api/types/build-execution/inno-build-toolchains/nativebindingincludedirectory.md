---
title: "NativeBindingIncludeDirectory"
description: "Reference for NativeBindingIncludeDirectory in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.099e8a63467d45c9
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingIncludeDirectory`

This reference describes `NativeBindingIncludeDirectory` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeBindingIncludeDirectory>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d7a6e9ac360dd2a3) | Method |
| [`Deconstruct`](#api-f5745c51eecca75b) | Method |
| [`Equals`](#api-d124d46d202d1a21) | Method |
| [`Equals`](#api-f0a45790a3b1c018) | Method |
| [`GetHashCode`](#api-da2128e4f3caf216) | Method |
| [`op_Equality`](#api-8a2ff2d1bdc22a99) | Method |
| [`op_Inequality`](#api-0e465c2bb0f9f603) | Method |
| [`ToString`](#api-dc5cf783617c972e) | Method |
| [`framework`](#api-471d9c82c74f0b38) | Property |
| [`relativePath`](#api-c876b3dde9ca8814) | Property |
| [`rootId`](#api-26b917b6aba18a1c) | Property |
| [`system`](#api-21f55f330cb19fee) | Property |

## Type declaration

<a id="api-099e8a63467d45c9"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingIncludeDirectory 1a72d09557dce75624f018f269dfd5da88d8fffb3ce77cbff8f5f2be3c0fef52 -->

```csharp
public sealed record Inno.Build.Toolchains.NativeBindingIncludeDirectory : System.IEquatable<Inno.Build.Toolchains.NativeBindingIncludeDirectory>
```

Preserves the order and search semantics of one native include requirement.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The root-relative directory, or empty for the root itself.

**Parameter `system`:** Whether this directory contains system headers.

**Parameter `framework`:** Whether the compiler must use framework search semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `#ctor`

<a id="api-d7a6e9ac360dd2a3"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.#ctor(System.String,System.String,System.Boolean,System.Boolean) d08afa54a5e67676e2338d30cac64c903cd45b3dbd8f0dae3ded5802bdf42750 -->

```csharp
public Inno.Build.Toolchains.NativeBindingIncludeDirectory.NativeBindingIncludeDirectory(string rootId, string relativePath, bool system, bool framework)
```

Preserves the order and search semantics of one native include requirement.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The root-relative directory, or empty for the root itself.

**Parameter `system`:** Whether this directory contains system headers.

**Parameter `framework`:** Whether the compiler must use framework search semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `Deconstruct`

<a id="api-f5745c51eecca75b"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.Deconstruct(System.String@,System.String@,System.Boolean@,System.Boolean@) 1f1ab7b41b2450c297a1a31952793eed3e27a68fcec0a9d834e38745dae2b5b1 -->

```csharp
public void Inno.Build.Toolchains.NativeBindingIncludeDirectory.Deconstruct(out string rootId, out string relativePath, out bool system, out bool framework)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `Equals`

<a id="api-d124d46d202d1a21"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.Equals(Inno.Build.Toolchains.NativeBindingIncludeDirectory) 24c8a36d28bacd354aeb43ea5971142b74f37ce69fa4913f4c6e14b19fb426ad -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingIncludeDirectory.Equals(Inno.Build.Toolchains.NativeBindingIncludeDirectory? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `Equals`

<a id="api-f0a45790a3b1c018"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.Equals(System.Object) d46933f10dcb62d0e757c7d50bf5d2280c118389a32c41839334d954b81bab7a -->

```csharp
public override bool Inno.Build.Toolchains.NativeBindingIncludeDirectory.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `GetHashCode`

<a id="api-da2128e4f3caf216"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.GetHashCode d85359342b378c8d6e0bbe18bed61f0e653ecace7d38d18a6761f2c150bc703f -->

```csharp
public override int Inno.Build.Toolchains.NativeBindingIncludeDirectory.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `op_Equality`

<a id="api-8a2ff2d1bdc22a99"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.op_Equality(Inno.Build.Toolchains.NativeBindingIncludeDirectory,Inno.Build.Toolchains.NativeBindingIncludeDirectory) 5453401503d418e5261af446112186f960b738d704384b9e70fc1418a121164e -->

```csharp
public static bool Inno.Build.Toolchains.NativeBindingIncludeDirectory.operator ==(Inno.Build.Toolchains.NativeBindingIncludeDirectory? left, Inno.Build.Toolchains.NativeBindingIncludeDirectory? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `op_Inequality`

<a id="api-0e465c2bb0f9f603"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.op_Inequality(Inno.Build.Toolchains.NativeBindingIncludeDirectory,Inno.Build.Toolchains.NativeBindingIncludeDirectory) 1fa86ff74cc6f3a529b763a6647f89572ccd506926776a67d5560ac1ccd9cbf7 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBindingIncludeDirectory.operator !=(Inno.Build.Toolchains.NativeBindingIncludeDirectory? left, Inno.Build.Toolchains.NativeBindingIncludeDirectory? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `ToString`

<a id="api-dc5cf783617c972e"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingIncludeDirectory.ToString f77a056371bf95d1ac95232203d33f019f172d1f332964185c0df7a48f735db6 -->

```csharp
public override string Inno.Build.Toolchains.NativeBindingIncludeDirectory.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L18).

## `framework`

<a id="api-471d9c82c74f0b38"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingIncludeDirectory.framework 6d8fb8f23fd093a59c9a717cef12977502c28ce483e08baccd57c3d1bf535361 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingIncludeDirectory.framework { get; init; }
```

Whether the compiler must use framework search semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L22).

## `relativePath`

<a id="api-c876b3dde9ca8814"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingIncludeDirectory.relativePath dd31a936343e9e473a4d869474a89d09ca1b6d631521e709850ad02f689b8d80 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingIncludeDirectory.relativePath { get; init; }
```

The root-relative directory, or empty for the root itself.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L20).

## `rootId`

<a id="api-26b917b6aba18a1c"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingIncludeDirectory.rootId 073be2a8896e71c7cd550dda9153f12cb22496be82eca953969e872dee49da68 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingIncludeDirectory.rootId { get; init; }
```

The component-local input root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L19).

## `system`

<a id="api-21f55f330cb19fee"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingIncludeDirectory.system 9703b908c76a5f61ade9ca96c912c5b45a669bea24b8c0c118fb3ff727f7a73c -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingIncludeDirectory.system { get; init; }
```

Whether this directory contains system headers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingIncludeDirectory.cs#L21).
