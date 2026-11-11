---
title: "ScriptCompilationStageTiming"
description: "Reference for ScriptCompilationStageTiming in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.d7249863de783d6b
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptCompilationStageTiming`

This reference describes `ScriptCompilationStageTiming` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Scripting.Compiler.ScriptCompilationStageTiming>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6f1602ed8781df3d) | Method |
| [`Equals`](#api-df6556c62b7803a2) | Method |
| [`Equals`](#api-37d30d2c765c6674) | Method |
| [`GetHashCode`](#api-51108aff3e8235a3) | Method |
| [`op_Equality`](#api-0308bc93b1fef6a4) | Method |
| [`op_Inequality`](#api-afdae13afef2bdbc) | Method |
| [`ToString`](#api-059f5b9a3c53a6ca) | Method |
| [`elapsed`](#api-9b337878009a461e) | Property |
| [`stage`](#api-456580e90e8e4fd7) | Property |

## Type declaration

<a id="api-d7249863de783d6b"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptCompilationStageTiming 2ef7c37178f1cb154ded343d287fda46f81bfaf07cadec942e95c05d9c1e9566 -->

```csharp
public readonly record struct Inno.Scripting.Compiler.ScriptCompilationStageTiming : System.IEquatable<Inno.Scripting.Compiler.ScriptCompilationStageTiming>
```

Describes the elapsed wall time of one completed script compilation stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `#ctor`

<a id="api-6f1602ed8781df3d"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.#ctor(System.String,System.TimeSpan) e910d63e001bf4e500dba39ceb70c07e5d024e6034843b71371948ad379243e8 -->

```csharp
public Inno.Scripting.Compiler.ScriptCompilationStageTiming.ScriptCompilationStageTiming(string stage, System.TimeSpan elapsed)
```

Creates one immutable stage timing sample.

**Parameter `stage`:** The human-readable stage description.

**Parameter `elapsed`:** The wall time spent in the stage.

**Throws `System.ArgumentException`:** Thrown when `stage` is empty or contains only whitespace.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `elapsed` is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L25).

## `Equals`

<a id="api-df6556c62b7803a2"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.Equals(Inno.Scripting.Compiler.ScriptCompilationStageTiming) efa68b31362ab885a77c3282a161a66105321b407b37ae54ca90c6425c71c28c -->

```csharp
public bool Inno.Scripting.Compiler.ScriptCompilationStageTiming.Equals(Inno.Scripting.Compiler.ScriptCompilationStageTiming other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `Equals`

<a id="api-37d30d2c765c6674"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.Equals(System.Object) cb95104ea80dc7892b5afe4ba7c57e54ea836f2657ca8f5a7c9c8af70fc050c9 -->

```csharp
public override bool Inno.Scripting.Compiler.ScriptCompilationStageTiming.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `GetHashCode`

<a id="api-51108aff3e8235a3"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.GetHashCode b43160ccccff5ca235733f1453c9000fb11436f1929b9d7eecab72e66ff4a331 -->

```csharp
public override int Inno.Scripting.Compiler.ScriptCompilationStageTiming.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `op_Equality`

<a id="api-0308bc93b1fef6a4"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.op_Equality(Inno.Scripting.Compiler.ScriptCompilationStageTiming,Inno.Scripting.Compiler.ScriptCompilationStageTiming) 0cf308b7bb1036e8701e84c226d31c6560e4e0147a79834cab4765752f0f88e7 -->

```csharp
public static bool Inno.Scripting.Compiler.ScriptCompilationStageTiming.operator ==(Inno.Scripting.Compiler.ScriptCompilationStageTiming left, Inno.Scripting.Compiler.ScriptCompilationStageTiming right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `op_Inequality`

<a id="api-afdae13afef2bdbc"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.op_Inequality(Inno.Scripting.Compiler.ScriptCompilationStageTiming,Inno.Scripting.Compiler.ScriptCompilationStageTiming) b3ed7f415aff3ba045b774694def4b568db76337cfdc15ad28feb3f69bfa8fc0 -->

```csharp
public static bool Inno.Scripting.Compiler.ScriptCompilationStageTiming.operator !=(Inno.Scripting.Compiler.ScriptCompilationStageTiming left, Inno.Scripting.Compiler.ScriptCompilationStageTiming right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `ToString`

<a id="api-059f5b9a3c53a6ca"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationStageTiming.ToString 7a2a0d25849dfb7053b6b1bd122d6a4768491c1ee499db38264cce9f1b51e438 -->

```csharp
public override string Inno.Scripting.Compiler.ScriptCompilationStageTiming.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L8).

## `elapsed`

<a id="api-9b337878009a461e"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationStageTiming.elapsed e5a2968817265e582aa7cb3213b4ca379c95b6ffbe7d25d16da3ebc05923902d -->

```csharp
public System.TimeSpan Inno.Scripting.Compiler.ScriptCompilationStageTiming.elapsed { get; }
```

Gets the wall time spent in the stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L45).

## `stage`

<a id="api-456580e90e8e4fd7"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationStageTiming.stage 2deb2c4266be4ac72dcd09c1267f260628db6b5cf12138cd846b7961c3189cad -->

```csharp
public string Inno.Scripting.Compiler.ScriptCompilationStageTiming.stage { get; }
```

Gets the human-readable stage description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationStageTiming.cs#L40).
