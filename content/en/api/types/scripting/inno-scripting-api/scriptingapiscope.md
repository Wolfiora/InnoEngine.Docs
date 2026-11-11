---
title: "ScriptingApiScope"
description: "Reference for ScriptingApiScope in Inno.Scripting.Api."
uid: api.inno.scripting.api.b0f62bcb7c3ca29f
kind: api
owners:
  - Inno.Scripting.Api
apiSurface: source-clr
contracts:
  - project.inno-scripting-api
---
# `ScriptingApiScope`

This reference describes `ScriptingApiScope` in `Inno.Scripting.Api`. Read the [shared contract](../../../projects/inno-scripting-api.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Authoring`](#api-a88e01f56fe52046) | Field |
| [`Editor`](#api-89f8b189626eaec4) | Field |
| [`Runtime`](#api-c04a3d0c8ebc80da) | Field |

## Type declaration

<a id="api-b0f62bcb7c3ca29f"></a>
<!-- api: T:Inno.Scripting.Api.ScriptingApiScope 8199396d53f328feedbb3ac580996aa9be17b96c9060fc9ce8abc784fa1a58fd -->

```csharp
public enum Inno.Scripting.Api.ScriptingApiScope : int
```

Identifies the script compilation profile that receives an exported API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiScope.cs#L6).

## `Authoring`

<a id="api-a88e01f56fe52046"></a>
<!-- api: F:Inno.Scripting.Api.ScriptingApiScope.Authoring d027accd7ed7773673c3a19381e9e6b2063ac8d54fe67fc7cec24ba11cf97b9f -->

```csharp
Inno.Scripting.Api.ScriptingApiScope.Authoring = 2
```

Exposes compile-time annotations to game and editor scripts. Player compilation erases
their applications and derived annotation declarations before binding to target assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiScope.cs#L22).

## `Editor`

<a id="api-89f8b189626eaec4"></a>
<!-- api: F:Inno.Scripting.Api.ScriptingApiScope.Editor b0a63aff9c71ae73afa3ecc6bf826db78d6dea077bb7f2609decf06dfec8237f -->

```csharp
Inno.Scripting.Api.ScriptingApiScope.Editor = 1
```

Exposes the API only to editor scripts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiScope.cs#L16).

## `Runtime`

<a id="api-c04a3d0c8ebc80da"></a>
<!-- api: F:Inno.Scripting.Api.ScriptingApiScope.Runtime 60ec3401a1ce917774b8959523142524ab19d587ddfa2f0151ddc6d40176ba09 -->

```csharp
Inno.Scripting.Api.ScriptingApiScope.Runtime = 0
```

Exposes the API to both game and editor scripts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiScope.cs#L11).
