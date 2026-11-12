---
title: "EditorGizmoProvider"
description: "Reference for EditorGizmoProvider in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.740d8e610b2a56ce
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorGizmoProvider`

This reference describes `EditorGizmoProvider` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8c6419ef4b6bef9a) | Method |
| [`Collect`](#api-4957316b429a607e) | Method |

## Type declaration

<a id="api-740d8e610b2a56ce"></a>
<!-- api: T:InnoEditor.Rendering.EditorGizmoProvider e57b986580fb8c5193fac01f2d749c3ae7a9ba1f6e174aed718d882ea52f4702 -->

```csharp
public abstract class InnoEditor.Rendering.EditorGizmoProvider
```

Contributes Editor-only icons and bounds without modifying a rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L100).

## `#ctor`

<a id="api-8c6419ef4b6bef9a"></a>
<!-- api: M:InnoEditor.Rendering.EditorGizmoProvider.#ctor bc1ecf49c3117655db67738ee4da62aacdce79a838d52d8e1dce05d827122298 -->

```csharp
protected InnoEditor.Rendering.EditorGizmoProvider.EditorGizmoProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L100).

## `Collect`

<a id="api-4957316b429a607e"></a>
<!-- api: M:InnoEditor.Rendering.EditorGizmoProvider.Collect(InnoEditor.Rendering.EditorGizmoContext,InnoEditor.Rendering.IEditorGizmoSink) 82263b8a1e624cdacc5eaf6378b306626585d0b5c4f583e0e4c5141a795e5f63 -->

```csharp
public abstract void InnoEditor.Rendering.EditorGizmoProvider.Collect(InnoEditor.Rendering.EditorGizmoContext context, InnoEditor.Rendering.IEditorGizmoSink sink)
```

Submits transient icons and lines for the presented scenes.

**Parameter `context`:** The current Scene viewport request.

**Parameter `sink`:** The collector that owns submitted primitives for this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L111).
