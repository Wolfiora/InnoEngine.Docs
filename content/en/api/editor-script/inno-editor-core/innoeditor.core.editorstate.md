---
title: "EditorState"
description: "Reference for EditorState in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.e38bde66627dc4bb
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorState`

This reference describes `EditorState` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-294eeb0c853332a9) | Method |
| [```Get``1```](#api-806f0878914aa424) | Method |
| [```Set``1```](#api-cf51a9c11edec54c) | Method |

## Type declaration

<a id="api-e38bde66627dc4bb"></a>
<!-- api: T:InnoEditor.Core.EditorState 615316c894dac12846f0fbbfef51b7ed6795ce4842ceea745fecece7692dbd96 -->

```csharp
public abstract class InnoEditor.Core.EditorState
```

Provides the serialization-neutral parameter used to capture or restore one editor extension's
project state.

**Constraints:** The editor supplies this object to the protected state hooks on `InnoEditor.Core.EditorModule` and
`InnoEditor.Core.EditorPanel`. Extensions should write values during capture and read values during
restore; storage format and persistence remain private runtime details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L14).

## `#ctor`

<a id="api-294eeb0c853332a9"></a>
<!-- api: M:InnoEditor.Core.EditorState.#ctor 733a9ba7d07b515c539b00c80ce78c4937ff8e62095950eb1f79c6e27a064e09 -->

```csharp
protected InnoEditor.Core.EditorState.EditorState()
```

Initializes the base contract for a runtime-owned editor state parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L19).

## ```Get``1```

<a id="api-806f0878914aa424"></a>
<!-- api: M:InnoEditor.Core.EditorState.Get``1(System.String,``0) 6cb1a66286e19ceb90efb02ba153173e3194b86b6c205d238995227213d97930 -->

```csharp
public abstract T InnoEditor.Core.EditorState.Get<T>(string key, T fallback)
```

Reads a compatible value or returns the caller-provided fallback.

**Type parameter `T`:** The neutral value type expected by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `fallback`:** The value returned when the key is absent, malformed, or incompatible with
`T`.

**Returns:** The stored compatible value, or `fallback`.

**Throws `System.ArgumentException`:** Thrown when `key` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L42).

## ```Set``1```

<a id="api-cf51a9c11edec54c"></a>
<!-- api: M:InnoEditor.Core.EditorState.Set``1(System.String,``0) bbbf44d17c10a4dc7fa02db8f42385d326bef5f9d5862e3f3a2285a5d74c2003 -->

```csharp
public abstract void InnoEditor.Core.EditorState.Set<T>(string key, T value)
```

Writes one neutral value under a stable extension-local key.

**Type parameter `T`:** The neutral value type supplied by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `value`:** The value to persist.

**Throws `System.ArgumentException`:** Thrown when `key` is empty.

**Throws `System.InvalidOperationException`:** Thrown when the state parameter was supplied for restoration and is therefore read-only.

**Throws `System.NotSupportedException`:** Thrown when `value` cannot be represented by the runtime state serializer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L68).
