---
title: "ScriptCompilationInputs"
description: "Reference for ScriptCompilationInputs in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.415ae81aff01c7d0
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptCompilationInputs`

This reference describes `ScriptCompilationInputs` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e052f022f645c568) | Method |
| [`frameworkReferences`](#api-ca03761360166987) | Property |
| [`predefinedSymbols`](#api-9e733e72ca79aea8) | Property |
| [`sdkIdentity`](#api-7c7981d6832710c3) | Property |

## Type declaration

<a id="api-415ae81aff01c7d0"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptCompilationInputs 9ca1a9703505d6f325b2a3a7927756a5f30ec3eb6349764bff5a8b6b25967cab -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptCompilationInputs
```

Describes framework references and predefined symbols selected by the authoring host's SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationInputs.cs#L11).

## `#ctor`

<a id="api-e052f022f645c568"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptCompilationInputs.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String}) ab723d86fc05b258c9f79150edd8125d8172d69b602cf43763bb3cd1bcf3916a -->

```csharp
public Inno.Scripting.Compiler.ScriptCompilationInputs.ScriptCompilationInputs(string sdkIdentity, System.Collections.Generic.IEnumerable<string> frameworkReferences, System.Collections.Generic.IEnumerable<string> predefinedSymbols)
```

Freezes a complete C# 14 and .NET 10 reference contract without retaining SDK objects.

**Parameter `sdkIdentity`:** The exact SDK identity that evaluated this contract.

**Parameter `frameworkReferences`:** Absolute framework assembly paths selected by SDK reference resolution.

**Parameter `predefinedSymbols`:** Framework and configuration symbols produced by SDK target execution.

**Throws `System.ArgumentException`:** The identity, reference set or a reference path is invalid.

**Throws `System.ArgumentNullException`:** A collection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationInputs.cs#L31).

## `frameworkReferences`

<a id="api-ca03761360166987"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationInputs.frameworkReferences 1aaa537db4deb45a8ec690e59056299487986c0c7b86e57266ba05dd0ecf28c2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptCompilationInputs.frameworkReferences { get; }
```

Gets the SDK-selected framework paths, whose content is frozen before Roslyn compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationInputs.cs#L55).

## `predefinedSymbols`

<a id="api-9e733e72ca79aea8"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationInputs.predefinedSymbols df5788119d49c9e5b206ad3a8b717dd3e1362488989940367a1e13a5877b175e -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Scripting.Compiler.ScriptCompilationInputs.predefinedSymbols { get; }
```

Gets SDK-produced symbols shared by runtime compilation and IDE projects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationInputs.cs#L60).

## `sdkIdentity`

<a id="api-7c7981d6832710c3"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptCompilationInputs.sdkIdentity 393115124d75da63822106c3db4b6e1bc848a15f750be556db3867f09862a88d -->

```csharp
public string Inno.Scripting.Compiler.ScriptCompilationInputs.sdkIdentity { get; }
```

Gets the exact SDK identity used for IDE consistency checks and artifact identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/ScriptCompilationInputs.cs#L50).
