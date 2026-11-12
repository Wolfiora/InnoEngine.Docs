---
title: "ShaderSourceInclude"
description: "Reference for ShaderSourceInclude in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.035063f419fee495
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceInclude`

This reference describes `ShaderSourceInclude` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourceInclude>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e51bff026ac1cfa1) | Method |
| [`Deconstruct`](#api-b64f60f654909f2b) | Method |
| [`Equals`](#api-8999d33b10907475) | Method |
| [`Equals`](#api-a5d26ec42022d993) | Method |
| [`GetHashCode`](#api-46abc9552e53df52) | Method |
| [`op_Equality`](#api-938f2285dbbe0136) | Method |
| [`op_Inequality`](#api-dfbb17cc520a28e6) | Method |
| [`ToString`](#api-2b19c115d0382382) | Method |
| [`include`](#api-1f75ce78f6865aa5) | Property |
| [`includingFile`](#api-74d8254040feaf63) | Property |
| [`resolvedPath`](#api-a4d55027df9e2d75) | Property |

## Type declaration

<a id="api-035063f419fee495"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceInclude 79bf261632ba4b32a0a0add202d26023d0c6e20fec46cb5de8752432614c9d76 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceInclude : System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourceInclude>
```

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `#ctor`

<a id="api-e51bff026ac1cfa1"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.#ctor(System.String,System.String,System.String) 8e750ef660411c605b91fb1b642e3045dea6cebb3dab0554edaa95e53791e232 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceInclude.ShaderSourceInclude(string includingFile, string include, string resolvedPath)
```

Records an include resolution edge so compilation never reinterprets authoring paths against live files.

**Parameter `includingFile`:** Source that requested the include.

**Parameter `include`:** Original include spelling passed to the source resolver.

**Parameter `resolvedPath`:** Exact source identity within the frozen file set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `Deconstruct`

<a id="api-b64f60f654909f2b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.Deconstruct(System.String@,System.String@,System.String@) 9309e2cc332598353023709d2dd8aaab090ba321283417f4248f7a9f40d5f523 -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderSourceInclude.Deconstruct(out string includingFile, out string include, out string resolvedPath)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `Equals`

<a id="api-8999d33b10907475"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.Equals(InnoEditor.Rendering.Shaders.ShaderSourceInclude) 79d6a81c11bd7d8acdf1896b7489561f004bc5a706b642565fbef10d4204080e -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceInclude.Equals(InnoEditor.Rendering.Shaders.ShaderSourceInclude? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `Equals`

<a id="api-a5d26ec42022d993"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.Equals(System.Object) 7b5c67ae97048a81c52816169fd704f46bd3499432666772fb3bbff21b3b4412 -->

```csharp
public override bool InnoEditor.Rendering.Shaders.ShaderSourceInclude.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `GetHashCode`

<a id="api-46abc9552e53df52"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.GetHashCode 613937094f07674d020e25e26adeb5a595c87e15cba0bda50ea34bcb846ef37b -->

```csharp
public override int InnoEditor.Rendering.Shaders.ShaderSourceInclude.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `op_Equality`

<a id="api-938f2285dbbe0136"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.op_Equality(InnoEditor.Rendering.Shaders.ShaderSourceInclude,InnoEditor.Rendering.Shaders.ShaderSourceInclude) 701abcd277dcbe68196f72ad9d07c6fb6cae14dd4ae2d83c7c46ba563a552c82 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourceInclude.operator ==(InnoEditor.Rendering.Shaders.ShaderSourceInclude? left, InnoEditor.Rendering.Shaders.ShaderSourceInclude? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `op_Inequality`

<a id="api-dfbb17cc520a28e6"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.op_Inequality(InnoEditor.Rendering.Shaders.ShaderSourceInclude,InnoEditor.Rendering.Shaders.ShaderSourceInclude) 445b99fa6bdfb93cee4093519a72abcb7326bb7df27abfed5574dce197875e27 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourceInclude.operator !=(InnoEditor.Rendering.Shaders.ShaderSourceInclude? left, InnoEditor.Rendering.Shaders.ShaderSourceInclude? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `ToString`

<a id="api-2b19c115d0382382"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceInclude.ToString 7639bf98d53a6fb7646fa3242f40e8efcca624ea3ee65f47e40551d188b5b6d8 -->

```csharp
public override string InnoEditor.Rendering.Shaders.ShaderSourceInclude.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L23).

## `include`

<a id="api-1f75ce78f6865aa5"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceInclude.include f5ff33126e06c5b8540a86fee3ca454da4d6f403f387a9a7b84f2b9afe50fcd4 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceInclude.include { get; set; }
```

Original include spelling passed to the source resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L25).

## `includingFile`

<a id="api-74d8254040feaf63"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceInclude.includingFile c713f4e940cf0b37e2d5e42bda9f55e66cede5decb1ca59e3bf35624b6ab6bc2 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceInclude.includingFile { get; set; }
```

Source that requested the include.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L24).

## `resolvedPath`

<a id="api-a4d55027df9e2d75"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceInclude.resolvedPath ae44c9a0fcb7cac38792df77a613b44e9fe396d07c477ce8bc282d15a0b8a0db -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceInclude.resolvedPath { get; set; }
```

Exact source identity within the frozen file set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L26).
