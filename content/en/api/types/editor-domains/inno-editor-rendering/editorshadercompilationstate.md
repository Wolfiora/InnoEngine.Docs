---
title: "EditorShaderCompilationState"
description: "Reference for EditorShaderCompilationState in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.88389fbc01e5388f
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorShaderCompilationState`

This reference describes `EditorShaderCompilationState` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compiling`](#api-b08170cba713a3fb) | Field |
| [`Failed`](#api-9e86e2ca6cd13670) | Field |
| [`Succeeded`](#api-a332b67c7dee5088) | Field |

## Type declaration

<a id="api-88389fbc01e5388f"></a>
<!-- api: T:Inno.Editor.Rendering.EditorShaderCompilationState b7c83a726d94597279f45b8bf9f89d2e70059ce3ebf3c2864295960130571463 -->

```csharp
public enum Inno.Editor.Rendering.EditorShaderCompilationState : int
```

Identifies native compilation state independently of document persistence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L13).

## `Compiling`

<a id="api-b08170cba713a3fb"></a>
<!-- api: F:Inno.Editor.Rendering.EditorShaderCompilationState.Compiling e2a1aa829b3d4445eeef7aa736fe2ae481880d922a17e39ab129d9d88a8e45f1 -->

```csharp
Inno.Editor.Rendering.EditorShaderCompilationState.Compiling = 0
```

The latest semantic candidate is being compiled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L18).

## `Failed`

<a id="api-9e86e2ca6cd13670"></a>
<!-- api: F:Inno.Editor.Rendering.EditorShaderCompilationState.Failed 357c395feeb0300ad717d674bbe7c9bf8f567f221b96b46c95a4530862e63977 -->

```csharp
Inno.Editor.Rendering.EditorShaderCompilationState.Failed = 2
```

The latest semantic candidate failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L26).

## `Succeeded`

<a id="api-a332b67c7dee5088"></a>
<!-- api: F:Inno.Editor.Rendering.EditorShaderCompilationState.Succeeded 9ecaae3a1012e4c37172adf8eb80d1f334e3abac991044b7fcbeb772acb01398 -->

```csharp
Inno.Editor.Rendering.EditorShaderCompilationState.Succeeded = 1
```

The latest semantic candidate compiled successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L22).
