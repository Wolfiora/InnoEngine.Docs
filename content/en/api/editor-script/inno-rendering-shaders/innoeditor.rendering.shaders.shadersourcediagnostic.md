---
title: "ShaderSourceDiagnostic"
description: "Reference for ShaderSourceDiagnostic in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.fecd5b1d4cf2bd44
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceDiagnostic`

This reference describes `ShaderSourceDiagnostic` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f384f2dfd5f90fb0) | Method |
| [`Deconstruct`](#api-fc468d66ae38ddd2) | Method |
| [`Equals`](#api-9debff97afbe2ec8) | Method |
| [`Equals`](#api-14e7f40f067631c8) | Method |
| [`GetHashCode`](#api-90bda1dcd7455943) | Method |
| [`op_Equality`](#api-19c9b4b8c69cafbf) | Method |
| [`op_Inequality`](#api-46c89fbaa98419c4) | Method |
| [`ToString`](#api-4341cb0af07c29b2) | Method |
| [`code`](#api-4c486e91c1824947) | Property |
| [`location`](#api-e6ee505d5268fd0f) | Property |
| [`message`](#api-0d79d3a9053286c3) | Property |
| [`severity`](#api-90328f98c3b49afd) | Property |

## Type declaration

<a id="api-fecd5b1d4cf2bd44"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic 62836e6d76e520da8dc93f76f23d95cd0eb6e10cef1ad53997d3d4ca0a2919ef -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic : System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic>
```

Reports a frontend problem without retaining a language-specific exception or parser.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Actionable diagnostic description.

**Parameter `location`:** Original source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `#ctor`

<a id="api-f384f2dfd5f90fb0"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.#ctor(System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.String,InnoEditor.Rendering.Shaders.ShaderSourcePosition) 037f9f6f5d147cce0581b0f761d562bb3878edc822fbb5f97bd9d776438dee84 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.ShaderSourceDiagnostic(string code, InnoEngine.Diagnostics.DiagnosticSeverity severity, string message, InnoEditor.Rendering.Shaders.ShaderSourcePosition location)
```

Reports a frontend problem without retaining a language-specific exception or parser.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Actionable diagnostic description.

**Parameter `location`:** Original source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `Deconstruct`

<a id="api-fc468d66ae38ddd2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.Deconstruct(System.String@,InnoEngine.Diagnostics.DiagnosticSeverity@,System.String@,InnoEditor.Rendering.Shaders.ShaderSourcePosition@) 05810cfac583a07340799e49754573e4c41ecd8bd8d7949a406f787b8b754c68 -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.Deconstruct(out string code, out InnoEngine.Diagnostics.DiagnosticSeverity severity, out string message, out InnoEditor.Rendering.Shaders.ShaderSourcePosition location)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `Equals`

<a id="api-9debff97afbe2ec8"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.Equals(InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic) 0eec6977706f4b77ab9faff7d050f29f3253747835bf392fdbece7f2f6d50a0b -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.Equals(InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `Equals`

<a id="api-14e7f40f067631c8"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.Equals(System.Object) 943a120990042702f8283b177ace4ed32d8ebb9e36aeeb2d103d2bf46d5d9377 -->

```csharp
public override bool InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `GetHashCode`

<a id="api-90bda1dcd7455943"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.GetHashCode 6b0f47ce25b43809bee96e2da357a27d4845450bc64818c8a3b34bbf5a6bc7cc -->

```csharp
public override int InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `op_Equality`

<a id="api-19c9b4b8c69cafbf"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.op_Equality(InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic,InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic) 2304fb47a80bd61466cdae2cb1a52b3ea4804d6d2fbc425aef98f787e26cf0d0 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.operator ==(InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic? left, InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `op_Inequality`

<a id="api-46c89fbaa98419c4"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.op_Inequality(InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic,InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic) 0c4c231b68c0baf753ee2680fdb737d5ba7013d06c1ed4f66c9d7d89ab6aab52 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.operator !=(InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic? left, InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `ToString`

<a id="api-4341cb0af07c29b2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.ToString c340a53e7e3f8293f109f2e02f933fd902c4e8493455a6f9f2abb219719e753c -->

```csharp
public override string InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `code`

<a id="api-4c486e91c1824947"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.code b5e5223d9189f988c5a7b4c1476f8d72397323b783602b3f024d5ae16bc058a7 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.code { get; set; }
```

Stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L42).

## `location`

<a id="api-e6ee505d5268fd0f"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.location d478148a8f811682064424b696e97799b8e256ba8f306cf8fcbbad6da8d83bef -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourcePosition InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.location { get; set; }
```

Original source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L45).

## `message`

<a id="api-0d79d3a9053286c3"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.message 0504aacb74e68b10a9928a8208a905ae4d649503467421c5ae9baf46c3eae57a -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.message { get; set; }
```

Actionable diagnostic description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L44).

## `severity`

<a id="api-90328f98c3b49afd"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.severity 2213d54b1ff7a4cbce90cd6a6bdca038917d5de55eaec7826ca8e53ac670d537 -->

```csharp
public InnoEngine.Diagnostics.DiagnosticSeverity InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic.severity { get; set; }
```

Diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L43).
