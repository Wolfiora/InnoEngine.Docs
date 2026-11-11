---
title: "ScriptCompilationResult"
description: "Reference for ScriptCompilationResult in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.a0ec28dacb809935
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptCompilationResult`

This reference describes `ScriptCompilationResult` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Failure`](#api-650cac3fce83c264) | Method |
| [`compiledAssemblyNames`](#api-696c3e062d0c319c) | Property |
| [`diagnostics`](#api-92d264b1545744fa) | Property |
| [`moduleDeployments`](#api-600fe9de8cdfe464) | Property |
| [`outputDirectory`](#api-ac1ea0ed7c4e078d) | Property |
| [`reusedAssemblyNames`](#api-73018b9a1d16c616) | Property |
| [`runtimeAssemblyPaths`](#api-c39e387875388336) | Property |
| [`stageTimings`](#api-062ccd5d52593abd) | Property |
| [`success`](#api-a4dbbaa4c99cc9c1) | Property |

## Type declaration

<a id="api-a0ec28dacb809935"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptCompilationResult 8fc595bf485eefa9ac0a6347e91d5f3cc7a59c256baa9acd67a6758663e95258 -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptCompilationResult
```

Reports the outputs and diagnostics of one authoring-generation or runtime-deployment script compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L13).

## `Failure`

<a id="api-650cac3fce83c264"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationResult.Failure(Inno.Scripting.Compiler.ScriptDiagnostic) 81cb46f48d2f072e622f38901575c2981679e230ca2b91f8f8c134968dca8302 -->

```csharp
public static Inno.Scripting.Compiler.ScriptCompilationResult Inno.Scripting.Compiler.ScriptCompilationResult.Failure(Inno.Scripting.Compiler.ScriptDiagnostic diagnostic)
```

Creates a failed result for an exception intercepted at an orchestration boundary.

**Parameter `diagnostic`:** The diagnostic describing why no candidate generation was produced.

**Returns:** A failed immutable result with no output directory or module deployments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L93).

## `compiledAssemblyNames`

<a id="api-696c3e062d0c319c"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.compiledAssemblyNames b6ccbdcffa7f0b3e3b73b8a3df084a6fea241ff7602873b9afd2a9683673aadc -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptCompilationResult.compiledAssemblyNames { get; }
```

Gets assembly names compiled during this request instead of reused from the artifact cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L77).

## `diagnostics`

<a id="api-92d264b1545744fa"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.diagnostics 8efa3254b59c541932fb3c7a5e8795c474cc767e89bf3f6a218a6f60e07eb065 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scripting.Compiler.ScriptDiagnostic> Inno.Scripting.Compiler.ScriptCompilationResult.diagnostics { get; }
```

Gets all diagnostics produced by the compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L52).

## `moduleDeployments`

<a id="api-600fe9de8cdfe464"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.moduleDeployments d2a825cc8ab4ae19a2a749a3d36e531e5fcbf861b7e9545fbd893618c192786f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scripting.Compiler.ScriptModuleDeployment> Inno.Scripting.Compiler.ScriptCompilationResult.moduleDeployments { get; }
```

Gets the immutable module artifacts and dependency topology produced by this compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L72).

## `outputDirectory`

<a id="api-ac1ea0ed7c4e078d"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.outputDirectory 3e7de2e2d08a0063771d3373e4169fb189cf6af020926789a2a70311d62ed7a2 -->

```csharp
public string? Inno.Scripting.Compiler.ScriptCompilationResult.outputDirectory { get; }
```

Gets the generation output directory when one was created.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L57).

## `reusedAssemblyNames`

<a id="api-73018b9a1d16c616"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.reusedAssemblyNames 15139c5c7ba3128c9bb2c406c0155d65ef93899c71239f77c6e70ffc05de5230 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptCompilationResult.reusedAssemblyNames { get; }
```

Gets assembly names reused from the deterministic artifact cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L82).

## `runtimeAssemblyPaths`

<a id="api-c39e387875388336"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.runtimeAssemblyPaths 6507d816e744ce426affeb276b7a912edd159b24013e69aa896f501cddfc2b87 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptCompilationResult.runtimeAssemblyPaths { get; }
```

Gets exact runtime-scope managed assemblies suitable for a deployed Player.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L67).

## `stageTimings`

<a id="api-062ccd5d52593abd"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.stageTimings e914a5e7bb11610df41703ab573c712e333a03a56a7c3e276407eca64b7e9547 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scripting.Compiler.ScriptCompilationStageTiming> Inno.Scripting.Compiler.ScriptCompilationResult.stageTimings { get; }
```

Gets completed compiler stage timings in execution order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L62).

## `success`

<a id="api-a4dbbaa4c99cc9c1"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationResult.success ff787a337f24110997a708c7c16e1fb59b070476a0a248a9306e83358ef75771 -->

```csharp
public bool Inno.Scripting.Compiler.ScriptCompilationResult.success { get; }
```

Gets whether every discovered script assembly compiled or reused successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptCompilationResult.cs#L47).
