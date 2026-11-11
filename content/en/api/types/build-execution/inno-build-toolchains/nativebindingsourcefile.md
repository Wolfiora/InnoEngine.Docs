---
title: "NativeBindingSourceFile"
description: "Reference for NativeBindingSourceFile in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.0f63dd30a8a0b52d
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingSourceFile`

This reference describes `NativeBindingSourceFile` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeBindingSourceFile>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-85e6b7f430a46e9b) | Method |
| [`Deconstruct`](#api-780563be33fc773a) | Method |
| [`Equals`](#api-974725dd81ada0a8) | Method |
| [`Equals`](#api-a5a2a38a560fe3dd) | Method |
| [`GetHashCode`](#api-7b4c5918cfe1a608) | Method |
| [`op_Equality`](#api-256b739b54595931) | Method |
| [`op_Inequality`](#api-2898eb4b1b3aac57) | Method |
| [`ToString`](#api-b742c0c88621970e) | Method |
| [`compile`](#api-e80e2f5759d1730c) | Property |
| [`length`](#api-b5f37b0359b0d95b) | Property |
| [`relativePath`](#api-ed4feb6627135663) | Property |
| [`rootId`](#api-3285bcb9e34a4410) | Property |
| [`sha256`](#api-382e68a67cc50902) | Property |

## Type declaration

<a id="api-0f63dd30a8a0b52d"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingSourceFile 914a67960cbcfd94e8b7bcbe8566538f457e428e88482df246bbb213a557b143 -->

```csharp
public sealed record Inno.Build.Toolchains.NativeBindingSourceFile : System.IEquatable<Inno.Build.Toolchains.NativeBindingSourceFile>
```

Identifies exact generated or external bytes needed by a native compilation.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The portable root-relative filename.

**Parameter `length`:** The expected byte length.

**Parameter `sha256`:** The lowercase SHA-256 content identity.

**Parameter `compile`:** Whether this file is a translation unit rather than an include dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `#ctor`

<a id="api-85e6b7f430a46e9b"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.#ctor(System.String,System.String,System.Int64,System.String,System.Boolean) fe749dffd12ffd0d25edf076727c2799e7e068468e0624ef5c84042babadb197 -->

```csharp
public Inno.Build.Toolchains.NativeBindingSourceFile.NativeBindingSourceFile(string rootId, string relativePath, long length, string sha256, bool compile)
```

Identifies exact generated or external bytes needed by a native compilation.

**Parameter `rootId`:** The component-local input root.

**Parameter `relativePath`:** The portable root-relative filename.

**Parameter `length`:** The expected byte length.

**Parameter `sha256`:** The lowercase SHA-256 content identity.

**Parameter `compile`:** Whether this file is a translation unit rather than an include dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `Deconstruct`

<a id="api-780563be33fc773a"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.Deconstruct(System.String@,System.String@,System.Int64@,System.String@,System.Boolean@) 747b86baf4c0273f5903f7be4fcc901fcb1e6b87487877e51b2e09cc0e97e836 -->

```csharp
public void Inno.Build.Toolchains.NativeBindingSourceFile.Deconstruct(out string rootId, out string relativePath, out long length, out string sha256, out bool compile)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `Equals`

<a id="api-974725dd81ada0a8"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.Equals(Inno.Build.Toolchains.NativeBindingSourceFile) 627e7d26c377b7568615f78489b34b9793cc3ce7c99887e20a99107600d9c770 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingSourceFile.Equals(Inno.Build.Toolchains.NativeBindingSourceFile? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `Equals`

<a id="api-a5a2a38a560fe3dd"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.Equals(System.Object) 4d6c45ef068efc66dea56b683e8d3418fe3f84bb30dc9a1460e8dd5edb8bf10d -->

```csharp
public override bool Inno.Build.Toolchains.NativeBindingSourceFile.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `GetHashCode`

<a id="api-7b4c5918cfe1a608"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.GetHashCode c0bfcd4facddb82b98735ef447ca2aba3a9966ab6120a6ab507647280c5e6ee7 -->

```csharp
public override int Inno.Build.Toolchains.NativeBindingSourceFile.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `op_Equality`

<a id="api-256b739b54595931"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.op_Equality(Inno.Build.Toolchains.NativeBindingSourceFile,Inno.Build.Toolchains.NativeBindingSourceFile) a19c677a793d722ae623ab255a07892ee53c0afc0433a53f1cc2211fd4c2780a -->

```csharp
public static bool Inno.Build.Toolchains.NativeBindingSourceFile.operator ==(Inno.Build.Toolchains.NativeBindingSourceFile? left, Inno.Build.Toolchains.NativeBindingSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `op_Inequality`

<a id="api-2898eb4b1b3aac57"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.op_Inequality(Inno.Build.Toolchains.NativeBindingSourceFile,Inno.Build.Toolchains.NativeBindingSourceFile) e5c6fb21f74c6eaa8a4375ad1e40e8427dad058436516473e4c413f1ccfeecce -->

```csharp
public static bool Inno.Build.Toolchains.NativeBindingSourceFile.operator !=(Inno.Build.Toolchains.NativeBindingSourceFile? left, Inno.Build.Toolchains.NativeBindingSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `ToString`

<a id="api-b742c0c88621970e"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceFile.ToString 9a778427df2fcb0113dd24c918d33a025118dd735d7af7b61806e195115ffd28 -->

```csharp
public override string Inno.Build.Toolchains.NativeBindingSourceFile.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L21).

## `compile`

<a id="api-e80e2f5759d1730c"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceFile.compile b6de83707955d12c54a2ac183257a1b133b4d9f682b8476e4a364adfebc8fa14 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingSourceFile.compile { get; init; }
```

Whether this file is a translation unit rather than an include dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L26).

## `length`

<a id="api-b5f37b0359b0d95b"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceFile.length 2d3e246fe21fde4e588aaeca9c7efb8d74a32606c692ee5345bb8f0232962608 -->

```csharp
public long Inno.Build.Toolchains.NativeBindingSourceFile.length { get; init; }
```

The expected byte length.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L24).

## `relativePath`

<a id="api-ed4feb6627135663"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceFile.relativePath 886e51cf36fb6f623be0c435d4a75917138c6d5c4bd0e2ee74ccf97f652a0b69 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingSourceFile.relativePath { get; init; }
```

The portable root-relative filename.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L23).

## `rootId`

<a id="api-3285bcb9e34a4410"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceFile.rootId f6111adda7f8f904f7077c4f2c0d0a78de280c39704fb5c34c85069a9d02f522 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingSourceFile.rootId { get; init; }
```

The component-local input root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L22).

## `sha256`

<a id="api-382e68a67cc50902"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceFile.sha256 0e76db777a004dcfe0c1fe19749974348ec60ad1d8227110cec889eef8a4aaf4 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingSourceFile.sha256 { get; init; }
```

The lowercase SHA-256 content identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceFile.cs#L25).
