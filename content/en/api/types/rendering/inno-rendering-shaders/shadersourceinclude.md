---
title: "ShaderSourceInclude"
description: "Reference for ShaderSourceInclude in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.645b08a55926df12
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceInclude`

This reference describes `ShaderSourceInclude` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderSourceInclude>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a8371db80d8addd9) | Method |
| [`Deconstruct`](#api-a1dd79eb86873caf) | Method |
| [`Equals`](#api-c43bdfbd40325290) | Method |
| [`Equals`](#api-16461c7a99a4cc03) | Method |
| [`GetHashCode`](#api-02e19ead386c5451) | Method |
| [`op_Equality`](#api-a6830ef313179912) | Method |
| [`op_Inequality`](#api-4af3d8ad367fb558) | Method |
| [`ToString`](#api-255aa17e1a36c123) | Method |
| [`include`](#api-6083820b43001bf1) | Property |
| [`includingFile`](#api-64fb8642c2276512) | Property |
| [`resolvedPath`](#api-63c0955194993dc3) | Property |

## Type declaration

<a id="api-645b08a55926df12"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceInclude 096e3ed3c904ce66a6702ff74fbd994033c66dbc188a27406304f561786813a1 -->

```csharp
public sealed record Inno.Rendering.Shaders.ShaderSourceInclude : System.IEquatable<Inno.Rendering.Shaders.ShaderSourceInclude>
```

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `#ctor`

<a id="api-a8371db80d8addd9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.#ctor(System.String,System.String,System.String) 7e03cebf45736210c47c8879f575dde3b82efee27c8fed5c05b24bc633dbd23d -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceInclude.ShaderSourceInclude(string includingFile, string include, string resolvedPath)
```

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `Deconstruct`

<a id="api-a1dd79eb86873caf"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.Deconstruct(System.String@,System.String@,System.String@) f4189cb1a7a1a999c37f2f5325298e10e275b1bcd8b16a029128b32f4def0c87 -->

```csharp
public void Inno.Rendering.Shaders.ShaderSourceInclude.Deconstruct(out string includingFile, out string include, out string resolvedPath)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `Equals`

<a id="api-c43bdfbd40325290"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.Equals(Inno.Rendering.Shaders.ShaderSourceInclude) 2d2f9405e2675b4fd7e58e9368e54939a278ee01e17c65e3aa10d5dc5b385d71 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceInclude.Equals(Inno.Rendering.Shaders.ShaderSourceInclude? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `Equals`

<a id="api-16461c7a99a4cc03"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.Equals(System.Object) d0a80ba3174d541c34f75c49756b2cf5b54a01f697017fdea7de499da146be3f -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderSourceInclude.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `GetHashCode`

<a id="api-02e19ead386c5451"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.GetHashCode 92400e87fb7075563d08acfc0e27e20cd559af7aac30ef85cf2c09af2b10362e -->

```csharp
public override int Inno.Rendering.Shaders.ShaderSourceInclude.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `op_Equality`

<a id="api-a6830ef313179912"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.op_Equality(Inno.Rendering.Shaders.ShaderSourceInclude,Inno.Rendering.Shaders.ShaderSourceInclude) b972b2af53d33f8b3e57bc109403a949d3b2b4bd5dab4e9e3d0b87920c7b58e5 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourceInclude.operator ==(Inno.Rendering.Shaders.ShaderSourceInclude? left, Inno.Rendering.Shaders.ShaderSourceInclude? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `op_Inequality`

<a id="api-4af3d8ad367fb558"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.op_Inequality(Inno.Rendering.Shaders.ShaderSourceInclude,Inno.Rendering.Shaders.ShaderSourceInclude) 3bca0f44732562bc0516872f63eadcfe37c7d3c176553705628bbec12f9a00fc -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourceInclude.operator !=(Inno.Rendering.Shaders.ShaderSourceInclude? left, Inno.Rendering.Shaders.ShaderSourceInclude? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `ToString`

<a id="api-255aa17e1a36c123"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceInclude.ToString 917bf3d1e9c16b54700ff6b5d256a7020b3bc5545e7050883837039a6ba77a17 -->

```csharp
public override string Inno.Rendering.Shaders.ShaderSourceInclude.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `include`

<a id="api-6083820b43001bf1"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceInclude.include af5a3c4681b202b384a8e8a41f2bdd2498f167f326431a3efced6f68bf4f7724 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceInclude.include { get; init; }
```

Original include spelling passed to the source resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L25).

## `includingFile`

<a id="api-64fb8642c2276512"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceInclude.includingFile 5d6d6ed4c6d8ff48e2647283e4584506797a80993820d26044bf4ee8f69c3989 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceInclude.includingFile { get; init; }
```

Source that requested the include.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L24).

## `resolvedPath`

<a id="api-63c0955194993dc3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceInclude.resolvedPath 1b60f460c78d3aa32afdad56525965bc8a28461e707d594e67f4a449237ef51a -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceInclude.resolvedPath { get; init; }
```

Exact source identity within the frozen file set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L26).
