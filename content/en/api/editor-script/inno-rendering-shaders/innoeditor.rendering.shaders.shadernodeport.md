---
title: "ShaderNodePort"
description: "Reference for ShaderNodePort in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.0def49589f32cc91
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderNodePort`

This reference describes `ShaderNodePort` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.Shaders.ShaderNodePort>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e112df86ed390882) | Method |
| [`Deconstruct`](#api-98a0ed345d1a9560) | Method |
| [`Equals`](#api-b55e8b904f10eb68) | Method |
| [`Equals`](#api-0ac4153fafc71a71) | Method |
| [`GetHashCode`](#api-e058fe491e42ad6b) | Method |
| [`op_Equality`](#api-8608e11b4ab862bd) | Method |
| [`op_Inequality`](#api-8df589c8a476746a) | Method |
| [`ToString`](#api-e774c4c0248e2d68) | Method |
| [`direction`](#api-2e18327ce2657d3a) | Property |
| [`id`](#api-f65272ccf54c6b48) | Property |
| [`required`](#api-271eae16a86ed7b4) | Property |
| [`type`](#api-71f5b52bf7d46ec6) | Property |

## Type declaration

<a id="api-0def49589f32cc91"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderNodePort 89eee8f7c78f95f56a1f4989a63b54385f48a0023c284d6dbf34143a51f692ac -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderNodePort : System.IEquatable<InnoEditor.Rendering.Shaders.ShaderNodePort>
```

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `#ctor`

<a id="api-e112df86ed390882"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Graphs.GraphPortDirection,System.Boolean) 968cf726944274ec23a7a9421c0e4fb8cdc66e536a51c4609ad9cd5237d08fc4 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderNodePort.ShaderNodePort(string id, InnoEditor.Rendering.Shaders.ShaderSourceType type, InnoEngine.Graphs.GraphPortDirection direction, bool required = true)
```

Declares a typed shader port independently of editor presentation and backend source syntax.

**Parameter `id`:** Stable node-local port identity.

**Parameter `type`:** Complete value type, including all aggregate fields.

**Parameter `direction`:** Input or output value flow.

**Parameter `required`:** Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `Deconstruct`

<a id="api-98a0ed345d1a9560"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.Deconstruct(System.String@,InnoEditor.Rendering.Shaders.ShaderSourceType@,InnoEngine.Graphs.GraphPortDirection@,System.Boolean@) 392c2cddcd0f30e7873a400432116cefd30ea2d430f6881b013dba57b07e7db7 -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderNodePort.Deconstruct(out string id, out InnoEditor.Rendering.Shaders.ShaderSourceType type, out InnoEngine.Graphs.GraphPortDirection direction, out bool required)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `Equals`

<a id="api-b55e8b904f10eb68"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.Equals(InnoEditor.Rendering.Shaders.ShaderNodePort) 210a9c2cdd5fe35a526b1b7519a06dbd09badde7fa93648295254440b73ec364 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderNodePort.Equals(InnoEditor.Rendering.Shaders.ShaderNodePort? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `Equals`

<a id="api-0ac4153fafc71a71"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.Equals(System.Object) 2a708289fc88205a6630d0f994e03b4f40a3b443eac02ee24148a0e5ab905aa2 -->

```csharp
public override bool InnoEditor.Rendering.Shaders.ShaderNodePort.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `GetHashCode`

<a id="api-e058fe491e42ad6b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.GetHashCode c8fa33df5c82c4c90af14b47d006239279cff88bac85d46e140d2ab555d32871 -->

```csharp
public override int InnoEditor.Rendering.Shaders.ShaderNodePort.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `op_Equality`

<a id="api-8608e11b4ab862bd"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.op_Equality(InnoEditor.Rendering.Shaders.ShaderNodePort,InnoEditor.Rendering.Shaders.ShaderNodePort) dbea6c491685c83ae1830847161189619232150e78e1f0a10314c2fbe3890b11 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderNodePort.operator ==(InnoEditor.Rendering.Shaders.ShaderNodePort? left, InnoEditor.Rendering.Shaders.ShaderNodePort? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `op_Inequality`

<a id="api-8df589c8a476746a"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.op_Inequality(InnoEditor.Rendering.Shaders.ShaderNodePort,InnoEditor.Rendering.Shaders.ShaderNodePort) c10605afe9e1c024ab6c1b178cf62319d2575ac1c01b26b9fb38437367d8094c -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderNodePort.operator !=(InnoEditor.Rendering.Shaders.ShaderNodePort? left, InnoEditor.Rendering.Shaders.ShaderNodePort? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `ToString`

<a id="api-e774c4c0248e2d68"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodePort.ToString 8c8758984cbb849e3043544d00080c941e32e93b4b815358056f4eaa487e8998 -->

```csharp
public override string InnoEditor.Rendering.Shaders.ShaderNodePort.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L25).

## `direction`

<a id="api-2e18327ce2657d3a"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodePort.direction f36c6c675990fd2b373902fe25377b1951ca93e2154fec44b4ac0fef532949bf -->

```csharp
public InnoEngine.Graphs.GraphPortDirection InnoEditor.Rendering.Shaders.ShaderNodePort.direction { get; set; }
```

Input or output value flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L28).

## `id`

<a id="api-f65272ccf54c6b48"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodePort.id 497c8407146f09b7f4e58abb0fb63f70e4e4c8ede5ebce642ce073690cbee196 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderNodePort.id { get; set; }
```

Stable node-local port identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L26).

## `required`

<a id="api-271eae16a86ed7b4"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodePort.required f0646c7a0671bd40905c23c376133816b8d9dfd677e7dff2bda4902a574d7dd8 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderNodePort.required { get; set; }
```

Whether an input must be connected; alternative aggregate/member inputs validate in their compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L29).

## `type`

<a id="api-71f5b52bf7d46ec6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodePort.type 69c53ce82f815d53cff268fb5beb327b0acda2b57b0bb165a65badab17cc442e -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderNodePort.type { get; set; }
```

Complete value type, including all aggregate fields.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L27).
