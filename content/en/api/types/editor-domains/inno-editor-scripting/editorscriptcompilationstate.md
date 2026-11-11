---
title: "EditorScriptCompilationState"
description: "Reference for EditorScriptCompilationState in Inno.Editor.Scripting."
uid: api.inno.editor.scripting.f2c7e3b6b3a0b643
kind: api
owners:
  - Inno.Editor.Scripting
apiSurface: source-clr
contracts:
  - project.inno-editor-scripting
---
# `EditorScriptCompilationState`

This reference describes `EditorScriptCompilationState` in `Inno.Editor.Scripting`. Read the [shared contract](../../../projects/inno-editor-scripting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compiling`](#api-5d2daed1bd593977) | Field |
| [`Failed`](#api-a257dd0ce2c960c1) | Field |
| [`Initializing`](#api-056ac92f3525aeda) | Field |
| [`Ready`](#api-e49210b63225555c) | Field |

## Type declaration

<a id="api-f2c7e3b6b3a0b643"></a>
<!-- api: T:Inno.Editor.Scripting.EditorScriptCompilationState 44361a7f85a4918a8d7e4bbed353a55b966c0d0fcb92f6b362793bb33b882378 -->

```csharp
public enum Inno.Editor.Scripting.EditorScriptCompilationState : int
```

Identifies whether the active project script generation can safely start game simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L7).

## `Compiling`

<a id="api-5d2daed1bd593977"></a>
<!-- api: F:Inno.Editor.Scripting.EditorScriptCompilationState.Compiling 0b0c8c8946a1535b4dc7d1b5d49636be972abdcf9e2915cf9a1581411c2db5ba -->

```csharp
Inno.Editor.Scripting.EditorScriptCompilationState.Compiling = 1
```

A requested script generation is compiling, activating, or completing unload verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L16).

## `Failed`

<a id="api-a257dd0ce2c960c1"></a>
<!-- api: F:Inno.Editor.Scripting.EditorScriptCompilationState.Failed 743fce31ecb80b65c373f9ce4af2110584ffee80202b3ce9969e5c797903f379 -->

```csharp
Inno.Editor.Scripting.EditorScriptCompilationState.Failed = 3
```

Compilation, activation, or generation retirement failed, so game simulation must not start.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L24).

## `Initializing`

<a id="api-056ac92f3525aeda"></a>
<!-- api: F:Inno.Editor.Scripting.EditorScriptCompilationState.Initializing 82439dbf7d096856fb84955a9095b751ce885c57ea159f4f1be1f226b55362ac -->

```csharp
Inno.Editor.Scripting.EditorScriptCompilationState.Initializing = 0
```

The script service has not produced its initial active generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L12).

## `Ready`

<a id="api-e49210b63225555c"></a>
<!-- api: F:Inno.Editor.Scripting.EditorScriptCompilationState.Ready fd31501237b10282d5e16ad4c449838e3117c865b3e5635cbb7d747ada9e6450 -->

```csharp
Inno.Editor.Scripting.EditorScriptCompilationState.Ready = 2
```

The most recent compilation succeeded, its generation is active, and retired generations passed GC verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L20).
