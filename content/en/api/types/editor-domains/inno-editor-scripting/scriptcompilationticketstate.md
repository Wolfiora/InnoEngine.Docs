---
title: "ScriptCompilationTicketState"
description: "Reference for ScriptCompilationTicketState in Inno.Editor.Scripting."
uid: api.inno.editor.scripting.e457e1b326a53818
kind: api
owners:
  - Inno.Editor.Scripting
apiSurface: source-clr
contracts:
  - project.inno-editor-scripting
---
# `ScriptCompilationTicketState`

This reference describes `ScriptCompilationTicketState` in `Inno.Editor.Scripting`. Read the [shared contract](../../../projects/inno-editor-scripting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Canceled`](#api-23662c5f8bb587c7) | Field |
| [`Compiling`](#api-e669239421f6f53f) | Field |
| [`Failed`](#api-373348395de43d26) | Field |
| [`Queued`](#api-243f57a0cd9223de) | Field |
| [`Succeeded`](#api-5e6c53a7681ebedb) | Field |
| [`Superseded`](#api-a6d57635bb4929e8) | Field |

## Type declaration

<a id="api-e457e1b326a53818"></a>
<!-- api: T:Inno.Editor.Scripting.ScriptCompilationTicketState 5d506516b116507a41402c5d921316f0540fbe7986052e1de60ad614e5c328c3 -->

```csharp
public enum Inno.Editor.Scripting.ScriptCompilationTicketState : int
```

Identifies the lifecycle state of one exact script compilation request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L6).

## `Canceled`

<a id="api-23662c5f8bb587c7"></a>
<!-- api: F:Inno.Editor.Scripting.ScriptCompilationTicketState.Canceled c1ad2118ef9842d0506f6d11f97e698e06d6601c6c775fd9db42181bdd1696a1 -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState.Canceled = 4
```

The request was explicitly canceled before activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L31).

## `Compiling`

<a id="api-e669239421f6f53f"></a>
<!-- api: F:Inno.Editor.Scripting.ScriptCompilationTicketState.Compiling 896739a9b90d56c6f816d7a0bb8353aac18c1799982dd5b0801fa016b90ec3bc -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState.Compiling = 1
```

The request owns the compiler pipeline or is activating its candidate generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L16).

## `Failed`

<a id="api-373348395de43d26"></a>
<!-- api: F:Inno.Editor.Scripting.ScriptCompilationTicketState.Failed 058f270dd26c819056b5ab09b8c0988a98861dd67179b0405b89d5d7fbfc722a -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState.Failed = 3
```

Compilation or candidate activation failed without replacing the active generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L26).

## `Queued`

<a id="api-243f57a0cd9223de"></a>
<!-- api: F:Inno.Editor.Scripting.ScriptCompilationTicketState.Queued ad9899dc3069abb0a933f10666796ad74d38b7703f8eee3738067b8a617e6074 -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState.Queued = 0
```

The request is queued behind the active compiler operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L11).

## `Succeeded`

<a id="api-5e6c53a7681ebedb"></a>
<!-- api: F:Inno.Editor.Scripting.ScriptCompilationTicketState.Succeeded 88b0bc4daa3296076d7d31a02432c64d14a9b353a46b1c5e2f239b0e530f2483 -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState.Succeeded = 2
```

The request compiled and atomically activated its candidate generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L21).

## `Superseded`

<a id="api-a6d57635bb4929e8"></a>
<!-- api: F:Inno.Editor.Scripting.ScriptCompilationTicketState.Superseded 33deb502edd819a9101faed03bc9f500bdec85ae53158568b07eb962114bd67f -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState.Superseded = 5
```

A newer request replaced this request before its candidate could activate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/ScriptCompilationTicketState.cs#L36).
