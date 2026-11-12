---
title: "EditorViewportComposition"
description: "Reference for EditorViewportComposition in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.edebfd2d83725f37
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportComposition`

This reference describes `EditorViewportComposition` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ee91f03b7a7a2f50) | Method |
| [`layers`](#api-9ed8c86cc564d981) | Property |
| [`pixelHeight`](#api-d4fbcfcb60ac70d0) | Property |
| [`pixelWidth`](#api-0d3f9ea926a8d79e) | Property |
| [`targetFormat`](#api-4f069eef32bd7b0c) | Property |
| [`viewportId`](#api-ab19e3938262be0c) | Property |

## Type declaration

<a id="api-edebfd2d83725f37"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportComposition e189c32c71d35c64bf09b6bf6ff24cb91ea9c50a492847ff8ebe0a0f5ad6f2f9 -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportComposition
```

Describes a complete ordered set of rendering-model layers targeting one Editor viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L185).

## `#ctor`

<a id="api-ee91f03b7a7a2f50"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportComposition.#ctor(System.String,System.Int32,System.Int32,InnoEngine.Rendering.RenderTextureFormat,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.EditorViewportLayer}) 213e26c4464df1d733c080dca03c98a8c99ba5e65b792f953ed8724d777b3c67 -->

```csharp
public InnoEditor.Rendering.EditorViewportComposition.EditorViewportComposition(string viewportId, int pixelWidth, int pixelHeight, InnoEngine.Rendering.RenderTextureFormat targetFormat, System.Collections.Generic.IEnumerable<InnoEditor.Rendering.EditorViewportLayer> layers)
```

Creates an immutable viewport composition.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `targetFormat`:** Shared presentation target format required by every layer.

**Parameter `layers`:** Ordered non-empty rendering-model layer collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L207).

## `layers`

<a id="api-9ed8c86cc564d981"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportComposition.layers edc531a2dd712bd86bb955f18d746dbf95794784ce49e88d75037c4a87456b37 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.EditorViewportLayer> InnoEditor.Rendering.EditorViewportComposition.layers { get; }
```

Gets the ordered rendering-model layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L261).

## `pixelHeight`

<a id="api-d4fbcfcb60ac70d0"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportComposition.pixelHeight f0b709793b5e74a1778a2e7aaf5e91cbc0e91a7e28f459b23f67d068f57524b5 -->

```csharp
public int InnoEditor.Rendering.EditorViewportComposition.pixelHeight { get; }
```

Gets the target height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L251).

## `pixelWidth`

<a id="api-0d3f9ea926a8d79e"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportComposition.pixelWidth 800b348d4300734d768f2853ecac7ed85a61e3184b384072b830d40695ea0acc -->

```csharp
public int InnoEditor.Rendering.EditorViewportComposition.pixelWidth { get; }
```

Gets the target width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L246).

## `targetFormat`

<a id="api-4f069eef32bd7b0c"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportComposition.targetFormat 73b121b10fd0b2aef23332e8c61fe72773e2d3215374d9420a2d8120e2150d63 -->

```csharp
public InnoEngine.Rendering.RenderTextureFormat InnoEditor.Rendering.EditorViewportComposition.targetFormat { get; }
```

Gets the shared presentation target format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L256).

## `viewportId`

<a id="api-ab19e3938262be0c"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportComposition.viewportId 3784bca866f282828279634841b6d96ecd37a0a29943b046ab7ae52b5549bc03 -->

```csharp
public string InnoEditor.Rendering.EditorViewportComposition.viewportId { get; }
```

Gets the stable viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportOutput.cs#L241).
