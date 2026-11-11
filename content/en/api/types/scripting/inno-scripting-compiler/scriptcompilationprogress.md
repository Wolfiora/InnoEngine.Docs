---
title: "ScriptCompilationProgress"
description: "Reference for ScriptCompilationProgress in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.934f87c1d7658981
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptCompilationProgress`

This reference describes `ScriptCompilationProgress` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Scripting.Compiler.ScriptCompilationProgress>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cac710a0afe66b79) | Method |
| [`Deconstruct`](#api-755c5b365353a10d) | Method |
| [`Equals`](#api-3e7563b4b651d49e) | Method |
| [`Equals`](#api-5983e54e3e920be9) | Method |
| [`GetHashCode`](#api-d7e18b35b7ffcd48) | Method |
| [`op_Equality`](#api-b718b9a882872789) | Method |
| [`op_Inequality`](#api-16f74a8095ad8717) | Method |
| [`ToString`](#api-d0b960aa536e7976) | Method |
| [`fraction`](#api-8b413f6ec8dd9679) | Property |
| [`stage`](#api-218bd414bf3ebc34) | Property |

## Type declaration

<a id="api-934f87c1d7658981"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptCompilationProgress 12522211b4c10f31065fa889c6e70738eb30d8ac5ec276dab55353e15e88033e -->

```csharp
public readonly record struct Inno.Scripting.Compiler.ScriptCompilationProgress : System.IEquatable<Inno.Scripting.Compiler.ScriptCompilationProgress>
```

Describes monotonic progress through one script compilation.

**Parameter `fraction`:** The completed fraction in the inclusive range from zero to one.

**Parameter `stage`:** The current human-readable compiler stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `#ctor`

<a id="api-cac710a0afe66b79"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.#ctor(System.Single,System.String) 936250b5c45b32ffc3598e8b420059d90c0449a9659b6e9937c1538a36bec78b -->

```csharp
public Inno.Scripting.Compiler.ScriptCompilationProgress.ScriptCompilationProgress(float fraction, string stage)
```

Describes monotonic progress through one script compilation.

**Parameter `fraction`:** The completed fraction in the inclusive range from zero to one.

**Parameter `stage`:** The current human-readable compiler stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `Deconstruct`

<a id="api-755c5b365353a10d"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.Deconstruct(System.Single@,System.String@) 38ad1db28bb52d7b21835aa09eee116d541c794c389b007354e9686e8e1f024b -->

```csharp
public void Inno.Scripting.Compiler.ScriptCompilationProgress.Deconstruct(out float fraction, out string stage)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `Equals`

<a id="api-3e7563b4b651d49e"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.Equals(Inno.Scripting.Compiler.ScriptCompilationProgress) 1a7e0470bc80a369b2e9583064cdaee3565ffa4468fb4a3e5a4b4ae79a372ae0 -->

```csharp
public bool Inno.Scripting.Compiler.ScriptCompilationProgress.Equals(Inno.Scripting.Compiler.ScriptCompilationProgress other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `Equals`

<a id="api-5983e54e3e920be9"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.Equals(System.Object) 089b2663810e9ca6da304af60affe91e00dabd6337822afb14b61ba4c12280a3 -->

```csharp
public override bool Inno.Scripting.Compiler.ScriptCompilationProgress.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `GetHashCode`

<a id="api-d7e18b35b7ffcd48"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.GetHashCode 4502c66aad058c7da1555513e75fdedc05f5424fd7d72a26027434a21b05ba3c -->

```csharp
public override int Inno.Scripting.Compiler.ScriptCompilationProgress.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `op_Equality`

<a id="api-b718b9a882872789"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.op_Equality(Inno.Scripting.Compiler.ScriptCompilationProgress,Inno.Scripting.Compiler.ScriptCompilationProgress) 58e167567d14d6d009f0a0aad5d7e9779b95e955d201e1d0b9c0e25f07eea42e -->

```csharp
public static bool Inno.Scripting.Compiler.ScriptCompilationProgress.operator ==(Inno.Scripting.Compiler.ScriptCompilationProgress left, Inno.Scripting.Compiler.ScriptCompilationProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `op_Inequality`

<a id="api-16f74a8095ad8717"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.op_Inequality(Inno.Scripting.Compiler.ScriptCompilationProgress,Inno.Scripting.Compiler.ScriptCompilationProgress) 4bdc24c549d47768609f9aacc7d866a2500b7dc322ad4358ea5914e469c05a00 -->

```csharp
public static bool Inno.Scripting.Compiler.ScriptCompilationProgress.operator !=(Inno.Scripting.Compiler.ScriptCompilationProgress left, Inno.Scripting.Compiler.ScriptCompilationProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `ToString`

<a id="api-d0b960aa536e7976"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationProgress.ToString 7add20dc40ddf83f6e9c590ed2c61052270b3cfeae09160165e0d9afce6dfbc4 -->

```csharp
public override string Inno.Scripting.Compiler.ScriptCompilationProgress.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L12).

## `fraction`

<a id="api-8b413f6ec8dd9679"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationProgress.fraction 3b8541505d70b1d8bc98d9a6f74ea8e6e8a2cfa77051b3d11a605d8f0cd21c69 -->

```csharp
public float Inno.Scripting.Compiler.ScriptCompilationProgress.fraction { get; init; }
```

The completed fraction in the inclusive range from zero to one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L13).

## `stage`

<a id="api-218bd414bf3ebc34"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationProgress.stage 19fec976ff5fcc9c361d730d1187c459f0de6fae8f2e65a5be03b595a460ab27 -->

```csharp
public string Inno.Scripting.Compiler.ScriptCompilationProgress.stage { get; init; }
```

The current human-readable compiler stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationProgress.cs#L14).
