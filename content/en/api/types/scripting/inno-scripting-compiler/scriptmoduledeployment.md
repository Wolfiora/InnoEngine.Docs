---
title: "ScriptModuleDeployment"
description: "Reference for ScriptModuleDeployment in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.30f0357e0014dd52
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptModuleDeployment`

This reference describes `ScriptModuleDeployment` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`assemblyScopes`](#api-35733fd687079254) | Property |
| [`domain`](#api-1af7a6b360d108dd) | Property |
| [`mainAssemblyPath`](#api-a6d3dea512c3cf61) | Property |
| [`moduleName`](#api-810476c68e010df5) | Property |
| [`preloadAssemblyPaths`](#api-77cc1a64788af9f6) | Property |
| [`scope`](#api-95c4cd7cf6b154fe) | Property |
| [`upstreamModuleNames`](#api-b785e889d07278d1) | Property |

## Type declaration

<a id="api-30f0357e0014dd52"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptModuleDeployment bb136cf45c5b752abb846a5d3d1d9641343f8cd241d3c35d46aba90e41c31d73 -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptModuleDeployment
```

Describes the immutable assembly artifacts and dependency topology of one compiled script module.
The receiving host chooses how these artifacts enter its module catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L14).

## `assemblyScopes`

<a id="api-35733fd687079254"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.assemblyScopes cd1126ce46565a2dd868a48e00ec2f7b69317deaea1dcd96e5b4fc8c2b7ca949 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Extensibility.Modules.AssemblyScope> Inno.Scripting.Compiler.ScriptModuleDeployment.assemblyScopes { get; }
```

Gets explicit scopes keyed by assembly simple name, with case-insensitive lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L70).

## `domain`

<a id="api-1af7a6b360d108dd"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.domain 5e81888edf6a7926ce812b0ac682f31f7511c4ef275506b5519c8241319c6f70 -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Scripting.Compiler.ScriptModuleDeployment.domain { get; }
```

Gets the ownership domain of this module's assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L50).

## `mainAssemblyPath`

<a id="api-a6d3dea512c3cf61"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.mainAssemblyPath 99038c794c38da2e23d913b81c9ce45edb605ff629c4b677d7dd99779dc96829 -->

```csharp
public string Inno.Scripting.Compiler.ScriptModuleDeployment.mainAssemblyPath { get; }
```

Gets the absolute path of the module's primary assembly artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L45).

## `moduleName`

<a id="api-810476c68e010df5"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.moduleName 71780ed9c8d5f5221f88442b1777d6edc287ce6893275a272192c72c3f7cf054 -->

```csharp
public string Inno.Scripting.Compiler.ScriptModuleDeployment.moduleName { get; }
```

Gets the logical module name used to resolve dependencies within this compiled generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L40).

## `preloadAssemblyPaths`

<a id="api-77cc1a64788af9f6"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.preloadAssemblyPaths 6f8c693ae7026f2b6ecfa98cfd5f38658a2fbee9d403e7f2c73694376cab0a0e -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptModuleDeployment.preloadAssemblyPaths { get; }
```

Gets the additional assembly artifacts that belong to this same module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L60).

## `scope`

<a id="api-95c4cd7cf6b154fe"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.scope e5748e97e74f5eed04c7b5425542775b672c6af95abafb2e0f075a3c2e6821c5 -->

```csharp
public Inno.Extensibility.Modules.AssemblyScope Inno.Scripting.Compiler.ScriptModuleDeployment.scope { get; }
```

Gets the dependency scope used for assemblies without an explicit scope override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L55).

## `upstreamModuleNames`

<a id="api-b785e889d07278d1"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptModuleDeployment.upstreamModuleNames 1a113ac04c239af959dae94cc1ecc2c0e9415ae28b8ae06a32a890665cb9c91d -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptModuleDeployment.upstreamModuleNames { get; }
```

Gets the logical names of modules that supply managed dependencies to this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/ScriptModuleDeployment.cs#L65).
