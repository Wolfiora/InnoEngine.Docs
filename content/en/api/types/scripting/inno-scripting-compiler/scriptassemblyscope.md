---
title: "ScriptAssemblyScope"
description: "Reference for ScriptAssemblyScope in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.1044e5f0b1f28b08
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptAssemblyScope`

This reference describes `ScriptAssemblyScope` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Editor`](#api-108a849413d89584) | Field |
| [`Runtime`](#api-70f379ec67a9e3f1) | Field |

## Type declaration

<a id="api-1044e5f0b1f28b08"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptAssemblyScope a011596928e34fd35c6a89566e349598d5d4cb463cc1594f433968534ae3f8a5 -->

```csharp
public enum Inno.Scripting.Compiler.ScriptAssemblyScope : int
```

Identifies whether a project script assembly can use editor-only APIs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyScope.cs#L6).

## `Editor`

<a id="api-108a849413d89584"></a>
<!-- api: F:Inno.Scripting.Compiler.ScriptAssemblyScope.Editor 78b766161fdf2029566aa34afa8a6f06049e870466c3cb5080f7a016e358d36d -->

```csharp
Inno.Scripting.Compiler.ScriptAssemblyScope.Editor = 1
```

The assembly can use runtime and editor scripting APIs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyScope.cs#L16).

## `Runtime`

<a id="api-70f379ec67a9e3f1"></a>
<!-- api: F:Inno.Scripting.Compiler.ScriptAssemblyScope.Runtime 813caad331415f7505fa10db01a004fa767576299672064aa613654a926fb77e -->

```csharp
Inno.Scripting.Compiler.ScriptAssemblyScope.Runtime = 0
```

The assembly can use runtime scripting APIs only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyScope.cs#L11).
