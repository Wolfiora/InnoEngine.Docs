---
title: "EditorGizmoProvider"
description: "Reference for EditorGizmoProvider in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.a65b8febdc38ae8d
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorGizmoProvider`

This reference describes `EditorGizmoProvider` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8530a7134419b532) | Method |
| [`Collect`](#api-3259fc7c0057cedf) | Method |

## Type declaration

<a id="api-a65b8febdc38ae8d"></a>
<!-- api: T:Inno.Editor.Rendering.EditorGizmoProvider 1c3468e9de6eda6f7305a25d3bef5b18bc64a99d69102629b069724ab12dee62 -->

```csharp
public abstract class Inno.Editor.Rendering.EditorGizmoProvider
```

Contributes Editor-only icons and bounds without modifying a rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L100).

## `#ctor`

<a id="api-8530a7134419b532"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoProvider.#ctor 42b12e05785a0c8b1baa29ef44d582787b2fe9706e1abf6b42640f3d021f4766 -->

```csharp
protected Inno.Editor.Rendering.EditorGizmoProvider.EditorGizmoProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L100).

## `Collect`

<a id="api-3259fc7c0057cedf"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoProvider.Collect(Inno.Editor.Rendering.EditorGizmoContext,Inno.Editor.Rendering.IEditorGizmoSink) 0378b9d3035c6adecea9ee46b6387ff76612e353c4e84c7137640e9694254b02 -->

```csharp
public abstract void Inno.Editor.Rendering.EditorGizmoProvider.Collect(Inno.Editor.Rendering.EditorGizmoContext context, Inno.Editor.Rendering.IEditorGizmoSink sink)
```

Submits transient icons and lines for the presented scenes.

**Parameter `context`:** The current Scene viewport request.

**Parameter `sink`:** The collector that owns submitted primitives for this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L111).
