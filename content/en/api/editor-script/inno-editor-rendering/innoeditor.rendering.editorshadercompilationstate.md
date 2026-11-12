---
title: "EditorShaderCompilationState"
description: "Reference for EditorShaderCompilationState in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.b8f9a3a5b5186737
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorShaderCompilationState`

This reference describes `EditorShaderCompilationState` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compiling`](#api-bcf1cd85093f7a92) | Field |
| [`Failed`](#api-da26ca470b995c4e) | Field |
| [`Succeeded`](#api-c56eac71b37611b0) | Field |

## Type declaration

<a id="api-b8f9a3a5b5186737"></a>
<!-- api: T:InnoEditor.Rendering.EditorShaderCompilationState 77250efdc1b8129262b32030cc4a8ee20ebf4eb477ffac6d5696e46032f933f7 -->

```csharp
public enum InnoEditor.Rendering.EditorShaderCompilationState : int
```

Identifies native compilation state independently of document persistence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L13).

## `Compiling`

<a id="api-bcf1cd85093f7a92"></a>
<!-- api: F:InnoEditor.Rendering.EditorShaderCompilationState.Compiling 4573d5e1b26562aec6d45948453da24a4ae89ea3875da0194aca985977cefd8a -->

```csharp
InnoEditor.Rendering.EditorShaderCompilationState.Compiling = 0
```

The latest semantic candidate is being compiled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L18).

## `Failed`

<a id="api-da26ca470b995c4e"></a>
<!-- api: F:InnoEditor.Rendering.EditorShaderCompilationState.Failed 4772a6b841aea9477d2143c16296454bdbfbd88183006ac65058176e2fa70c02 -->

```csharp
InnoEditor.Rendering.EditorShaderCompilationState.Failed = 2
```

The latest semantic candidate failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L26).

## `Succeeded`

<a id="api-c56eac71b37611b0"></a>
<!-- api: F:InnoEditor.Rendering.EditorShaderCompilationState.Succeeded c842b2147b287620d4d5fffc804f784282e2136fd83f9e5b207d0b0016fac38f -->

```csharp
InnoEditor.Rendering.EditorShaderCompilationState.Succeeded = 1
```

The latest semantic candidate compiled successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L22).
