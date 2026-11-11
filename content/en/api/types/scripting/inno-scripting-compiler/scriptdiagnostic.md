---
title: "ScriptDiagnostic"
description: "Reference for ScriptDiagnostic in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.15ef34a77546d5bf
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptDiagnostic`

This reference describes `ScriptDiagnostic` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Scripting.Compiler.ScriptDiagnostic>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eacff6b7102629d7) | Method |
| [`Deconstruct`](#api-4ed9f348c1f8bb03) | Method |
| [`Equals`](#api-6e18ea3432addcf8) | Method |
| [`Equals`](#api-c64061944438ff80) | Method |
| [`GetHashCode`](#api-00bfbc4d57a1ce56) | Method |
| [`op_Equality`](#api-6eb71e4dd0d47621) | Method |
| [`op_Inequality`](#api-257cbaa796ad4625) | Method |
| [`ToString`](#api-17d3fd9555bb5e7b) | Method |
| [`column`](#api-87fbc59e7a15b3d4) | Property |
| [`filePath`](#api-174032a308de3968) | Property |
| [`id`](#api-1618dc6e4168ae7b) | Property |
| [`line`](#api-e35ead435ebaefb7) | Property |
| [`message`](#api-73509cbf49834390) | Property |
| [`severity`](#api-05897a610543d92c) | Property |

## Type declaration

<a id="api-15ef34a77546d5bf"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptDiagnostic a79953be6af696862091eb88787ff319ff4ebd1adaf145e24fadda3f660eb7f4 -->

```csharp
public sealed record Inno.Scripting.Compiler.ScriptDiagnostic : System.IEquatable<Inno.Scripting.Compiler.ScriptDiagnostic>
```

Represents one source-oriented script compilation diagnostic.

**Parameter `id`:** The stable compiler, analyzer, or reload diagnostic identifier.

**Parameter `severity`:** The presentation severity of the diagnostic.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `filePath`:** The source path associated with the diagnostic, or `null` for a project-level diagnostic.

**Parameter `line`:** The one-based source line, or zero when no source location is available.

**Parameter `column`:** The one-based source column, or zero when no source location is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `#ctor`

<a id="api-eacff6b7102629d7"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.String,System.Int32,System.Int32) 2fc8f2832db7290830557893883d87a1f622b75c197eae812b47ee24c77dfd3a -->

```csharp
public Inno.Scripting.Compiler.ScriptDiagnostic.ScriptDiagnostic(string id, Inno.Core.Diagnostics.DiagnosticSeverity severity, string message, string? filePath, int line, int column)
```

Represents one source-oriented script compilation diagnostic.

**Parameter `id`:** The stable compiler, analyzer, or reload diagnostic identifier.

**Parameter `severity`:** The presentation severity of the diagnostic.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `filePath`:** The source path associated with the diagnostic, or `null` for a project-level diagnostic.

**Parameter `line`:** The one-based source line, or zero when no source location is available.

**Parameter `column`:** The one-based source column, or zero when no source location is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `Deconstruct`

<a id="api-4ed9f348c1f8bb03"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.Deconstruct(System.String@,Inno.Core.Diagnostics.DiagnosticSeverity@,System.String@,System.String@,System.Int32@,System.Int32@) c7c14465ff62b6705d5d572565774140eca3693353ab22748e599768d2bb7e9b -->

```csharp
public void Inno.Scripting.Compiler.ScriptDiagnostic.Deconstruct(out string id, out Inno.Core.Diagnostics.DiagnosticSeverity severity, out string message, out string? filePath, out int line, out int column)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `Equals`

<a id="api-6e18ea3432addcf8"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.Equals(Inno.Scripting.Compiler.ScriptDiagnostic) 30716c9e833e5d135fb11026da5ec500069ee60360f9f279d04972034c04f596 -->

```csharp
public bool Inno.Scripting.Compiler.ScriptDiagnostic.Equals(Inno.Scripting.Compiler.ScriptDiagnostic? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `Equals`

<a id="api-c64061944438ff80"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.Equals(System.Object) 6e66143f6b89bd7cba055eac7f557aee6152503c3e24cbc9cab412e35bbe047c -->

```csharp
public override bool Inno.Scripting.Compiler.ScriptDiagnostic.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `GetHashCode`

<a id="api-00bfbc4d57a1ce56"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.GetHashCode fe739cc33decd413773fb3c86f02ef1d0a6349d8bd6c1c3b13690f3af8bb45a6 -->

```csharp
public override int Inno.Scripting.Compiler.ScriptDiagnostic.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `op_Equality`

<a id="api-6eb71e4dd0d47621"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.op_Equality(Inno.Scripting.Compiler.ScriptDiagnostic,Inno.Scripting.Compiler.ScriptDiagnostic) f7941b5b068c6af9f6d2c1bbe4cec5e089b3148da13df0ca659c38e9740bae1a -->

```csharp
public static bool Inno.Scripting.Compiler.ScriptDiagnostic.operator ==(Inno.Scripting.Compiler.ScriptDiagnostic? left, Inno.Scripting.Compiler.ScriptDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `op_Inequality`

<a id="api-257cbaa796ad4625"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.op_Inequality(Inno.Scripting.Compiler.ScriptDiagnostic,Inno.Scripting.Compiler.ScriptDiagnostic) 0a449822ecedcb813afff1d99d9b6ef8d1d5dc606b4f329c37da31bddb317d23 -->

```csharp
public static bool Inno.Scripting.Compiler.ScriptDiagnostic.operator !=(Inno.Scripting.Compiler.ScriptDiagnostic? left, Inno.Scripting.Compiler.ScriptDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `ToString`

<a id="api-17d3fd9555bb5e7b"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptDiagnostic.ToString 3e7444b8ad287f709ee8309a2ab6c48b8870135af9b42610553e656b3f55c0a2 -->

```csharp
public override string Inno.Scripting.Compiler.ScriptDiagnostic.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L25).

## `column`

<a id="api-87fbc59e7a15b3d4"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptDiagnostic.column 38befff7533ac9ca98273e6be8e227a200a8ff61aec80ed7376db6a7ca0261c9 -->

```csharp
public int Inno.Scripting.Compiler.ScriptDiagnostic.column { get; init; }
```

The one-based source column, or zero when no source location is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L31).

## `filePath`

<a id="api-174032a308de3968"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptDiagnostic.filePath 5a013c5a516854a1043fa7d54d1c04a3d8fc922f02c74f1334915ccae67d38e0 -->

```csharp
public string? Inno.Scripting.Compiler.ScriptDiagnostic.filePath { get; init; }
```

The source path associated with the diagnostic, or `null` for a project-level diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L29).

## `id`

<a id="api-1618dc6e4168ae7b"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptDiagnostic.id a53893d17f0beef956da3f4c32710794f2f18b293d139a5a3fed43c51adfdd38 -->

```csharp
public string Inno.Scripting.Compiler.ScriptDiagnostic.id { get; init; }
```

The stable compiler, analyzer, or reload diagnostic identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L26).

## `line`

<a id="api-e35ead435ebaefb7"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptDiagnostic.line be1e797b924a9d6a9c1f6b42e57803cb4460e93e9e76e415602f6df35df34586 -->

```csharp
public int Inno.Scripting.Compiler.ScriptDiagnostic.line { get; init; }
```

The one-based source line, or zero when no source location is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L30).

## `message`

<a id="api-73509cbf49834390"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptDiagnostic.message bf4a3c132fec2f4e45c53f72628fe09796a433e349810f05323166089bc5f87e -->

```csharp
public string Inno.Scripting.Compiler.ScriptDiagnostic.message { get; init; }
```

The human-readable diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L28).

## `severity`

<a id="api-05897a610543d92c"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptDiagnostic.severity 4cab89c1c73f7718c9f374cc53e00eceed82a3c14b1973343425904754d54286 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Scripting.Compiler.ScriptDiagnostic.severity { get; init; }
```

The presentation severity of the diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptDiagnostic.cs#L27).
