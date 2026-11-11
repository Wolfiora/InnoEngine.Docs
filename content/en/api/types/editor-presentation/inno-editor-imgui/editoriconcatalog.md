---
title: "EditorIconCatalog"
description: "Reference for EditorIconCatalog in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.552d2807f340a1bc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorIconCatalog`

This reference describes `EditorIconCatalog` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`standard`](#api-86b8b7bb5f869218) | Property |

## Type declaration

<a id="api-552d2807f340a1bc"></a>
<!-- api: T:Inno.Editor.ImGui.EditorIconCatalog e449fc5a5ca58bfb82918c4dad96b24ea57125ccd985c22a1d4d6c5deb916c6d -->

```csharp
public static class Inno.Editor.ImGui.EditorIconCatalog
```

Describes the host's complete standard glyph vocabulary as immutable presentation values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/EditorIconCatalog.cs#L9).

## `standard`

<a id="api-86b8b7bb5f869218"></a>
<!-- api: P:Inno.Editor.ImGui.EditorIconCatalog.standard a4429d1f8662282ce2525abb5cf63a47656abe732564ac7d683a6c5983286361 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<(string Name, string Glyph)> Inno.Editor.ImGui.EditorIconCatalog.standard { get; }
```

Gets all named glyphs supplied by the installed UI font, in deterministic name order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/EditorIconCatalog.cs#L14).
