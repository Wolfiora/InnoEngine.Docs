---
title: "IScriptCompilationEnvironmentProvider"
description: "Reference for IScriptCompilationEnvironmentProvider in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.11a38431c4b8ef97
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `IScriptCompilationEnvironmentProvider`

This reference describes `IScriptCompilationEnvironmentProvider` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-e52b262f15a59874) | Method |

## Type declaration

<a id="api-11a38431c4b8ef97"></a>
<!-- api: T:Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider 69764acca8db6a107822b886749251c8d7e1c59b54ad7e06e28ee7f2e045c014 -->

```csharp
public interface Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider
```

Supplies the host-selected framework contract for one compilation or IDE projection operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/IScriptCompilationEnvironmentProvider.cs#L8).

## `Capture`

<a id="api-e52b262f15a59874"></a>
<!-- api: M:Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider.Capture(System.Threading.CancellationToken) 04c3b7adb376c916e2d3e8ab29fea1db239b55d41777e5fe9e1dd972c56f3d32 -->

```csharp
Inno.Scripting.Compiler.ScriptCompilationInputs Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider.Capture(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Captures current SDK inputs without choosing a framework inside the scripting compiler.

**Parameter `cancellationToken`:** Cancels input preparation before any script artifact is published.

**Returns:** Complete immutable inputs; missing or inconsistent SDK inputs must fail explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/IScriptCompilationEnvironmentProvider.cs#L19).
