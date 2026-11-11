---
title: "ScriptCompilerOptions"
description: "Reference for ScriptCompilerOptions in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.1a806827f50e4f72
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptCompilerOptions`

This reference describes `ScriptCompilerOptions` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-adfcd154e8e65ade) | Method |
| [`compilationEnvironment`](#api-12f101f05709529b) | Property |
| [`projectRootDirectory`](#api-cf48dc360711e071) | Property |

## Type declaration

<a id="api-1a806827f50e4f72"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptCompilerOptions bfb8dca5b12ed4938c888a651a9fb91dcf4f851fbb5ea27abd57df74e558cebd -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptCompilerOptions
```

Identifies the project and derived-cache locations used by one script compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilerOptions.cs#L8).

## `#ctor`

<a id="api-adfcd154e8e65ade"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilerOptions.#ctor ec4de17d05cb245e285292978f8397f6b892d4a9b8630d03e8c6214419315a94 -->

```csharp
public Inno.Scripting.Compiler.ScriptCompilerOptions.ScriptCompilerOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilerOptions.cs#L8).

## `compilationEnvironment`

<a id="api-12f101f05709529b"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilerOptions.compilationEnvironment 9be2764d21b8fc9b80c8ce778eccdae9a31857db2f826c78b13306fee337a312 -->

```csharp
public required Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider Inno.Scripting.Compiler.ScriptCompilerOptions.compilationEnvironment { get; init; }
```

Gets the host-owned source of SDK framework inputs for each operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilerOptions.cs#L18).

## `projectRootDirectory`

<a id="api-cf48dc360711e071"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilerOptions.projectRootDirectory 28735ace6bd3bd78c1d4374e916b360b15a29e06a8e869bf1ea14ffae49e4246 -->

```csharp
public required string Inno.Scripting.Compiler.ScriptCompilerOptions.projectRootDirectory { get; init; }
```

Gets the project root containing Assets and Library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilerOptions.cs#L13).
