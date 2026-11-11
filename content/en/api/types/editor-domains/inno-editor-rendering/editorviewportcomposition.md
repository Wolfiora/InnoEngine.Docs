---
title: "EditorViewportComposition"
description: "Reference for EditorViewportComposition in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.4ea2f9d08e6687dc
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportComposition`

This reference describes `EditorViewportComposition` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d70def1691d9b9a9) | Method |
| [`layers`](#api-a0458bda3fa786fd) | Property |
| [`pixelHeight`](#api-0c02ed8f5d7ddc82) | Property |
| [`pixelWidth`](#api-4163c062f6a487a5) | Property |
| [`targetFormat`](#api-b04bb74c2c51946d) | Property |
| [`viewportId`](#api-b68e8ccab8cb85fc) | Property |

## Type declaration

<a id="api-4ea2f9d08e6687dc"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportComposition f0d6397443874862c37030b98a7ab66ad048ba54b5ca9a658d687e4474144a01 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportComposition
```

Describes a complete ordered set of rendering-model layers targeting one Editor viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L185).

## `#ctor`

<a id="api-d70def1691d9b9a9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportComposition.#ctor(System.String,System.Int32,System.Int32,Inno.Rendering.RenderTextureFormat,System.Collections.Generic.IEnumerable{Inno.Editor.Rendering.EditorViewportLayer}) 1b6eb430a372e2f125f12946a225f61e4355a41b6b4efc763c8907b9f90db9e9 -->

```csharp
public Inno.Editor.Rendering.EditorViewportComposition.EditorViewportComposition(string viewportId, int pixelWidth, int pixelHeight, Inno.Rendering.RenderTextureFormat targetFormat, System.Collections.Generic.IEnumerable<Inno.Editor.Rendering.EditorViewportLayer> layers)
```

Creates an immutable viewport composition.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `targetFormat`:** Shared presentation target format required by every layer.

**Parameter `layers`:** Ordered non-empty rendering-model layer collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L207).

## `layers`

<a id="api-a0458bda3fa786fd"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportComposition.layers 0bd38405d96f1d63936271070cc0955cf35e8ae5027d13041d4033ccc095bc3f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Rendering.EditorViewportLayer> Inno.Editor.Rendering.EditorViewportComposition.layers { get; }
```

Gets the ordered rendering-model layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L261).

## `pixelHeight`

<a id="api-0c02ed8f5d7ddc82"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportComposition.pixelHeight 874f0070e34452561acc8da2770c8a84b3544c02702628e74fb41a2cbcd4e06e -->

```csharp
public int Inno.Editor.Rendering.EditorViewportComposition.pixelHeight { get; }
```

Gets the target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L251).

## `pixelWidth`

<a id="api-4163c062f6a487a5"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportComposition.pixelWidth c8e0150bce798b63bed665ff5cf46e1e79b5c4c349e9b7403c605ff45006dde1 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportComposition.pixelWidth { get; }
```

Gets the target width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L246).

## `targetFormat`

<a id="api-b04bb74c2c51946d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportComposition.targetFormat e67f2feb24fc7d125db1e06daab4963289d535cbc29cc4e7e122df91dfe38b31 -->

```csharp
public Inno.Rendering.RenderTextureFormat Inno.Editor.Rendering.EditorViewportComposition.targetFormat { get; }
```

Gets the shared presentation target format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L256).

## `viewportId`

<a id="api-b68e8ccab8cb85fc"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportComposition.viewportId daf54fa1c842bb164ff094ece50560df2140c1122bd19586b0bbd92cf2e1e2df -->

```csharp
public string Inno.Editor.Rendering.EditorViewportComposition.viewportId { get; }
```

Gets the stable viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L241).
