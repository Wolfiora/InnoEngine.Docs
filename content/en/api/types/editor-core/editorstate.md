---
title: "EditorState"
description: "Reference for EditorState in Inno.Editor.Core."
uid: api.inno.editor.core.a350a03ecf0d89ea
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorState`

This reference describes `EditorState` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4ef91b29ca324944) | Method |
| [```Get``1```](#api-68ef2546c9a48915) | Method |
| [```Set``1```](#api-93bae0856d430324) | Method |

## Type declaration

<a id="api-a350a03ecf0d89ea"></a>
<!-- api: T:Inno.Editor.Core.EditorState 37ad83ba4b1f2245a76d924dad7d5274be296d54bcb659f3d9988d223fb3c35c -->

```csharp
public abstract class Inno.Editor.Core.EditorState
```

Provides the serialization-neutral parameter used to capture or restore one editor extension's
project state.

**Constraints:** The editor supplies this object to the protected state hooks on `Inno.Editor.Core.EditorModule` and
`Inno.Editor.Core.EditorPanel`. Extensions should write values during capture and read values during
restore; storage format and persistence remain private runtime details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L14).

## `#ctor`

<a id="api-4ef91b29ca324944"></a>
<!-- api: M:Inno.Editor.Core.EditorState.#ctor 63ec8ea90efcca5b92bf2589a6ea32487c19961ad6fe0b2d6bc7c9bf9fbee1c8 -->

```csharp
protected Inno.Editor.Core.EditorState.EditorState()
```

Initializes the base contract for a runtime-owned editor state parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L19).

## ```Get``1```

<a id="api-68ef2546c9a48915"></a>
<!-- api: M:Inno.Editor.Core.EditorState.Get``1(System.String,``0) d39bb9954cafd078cfa3159d85be496aa037c9f43ca83b9fd28ef978b1d2cffb -->

```csharp
public abstract T Inno.Editor.Core.EditorState.Get<T>(string key, T fallback)
```

Reads a compatible value or returns the caller-provided fallback.

**Type parameter `T`:** The neutral value type expected by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `fallback`:** The value returned when the key is absent, malformed, or incompatible with
`T`.

**Returns:** The stored compatible value, or `fallback`.

**Throws `System.ArgumentException`:** Thrown when `key` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L42).

## ```Set``1```

<a id="api-93bae0856d430324"></a>
<!-- api: M:Inno.Editor.Core.EditorState.Set``1(System.String,``0) 7ab54d3447e1ae52fac0db0d4bb32a8254683cc58a70d16353f34c08f28cdf6b -->

```csharp
public abstract void Inno.Editor.Core.EditorState.Set<T>(string key, T value)
```

Writes one neutral value under a stable extension-local key.

**Type parameter `T`:** The neutral value type supplied by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `value`:** The value to persist.

**Throws `System.ArgumentException`:** Thrown when `key` is empty.

**Throws `System.InvalidOperationException`:** Thrown when the state parameter was supplied for restoration and is therefore read-only.

**Throws `System.NotSupportedException`:** Thrown when `value` cannot be represented by the runtime state serializer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorState.cs#L68).
