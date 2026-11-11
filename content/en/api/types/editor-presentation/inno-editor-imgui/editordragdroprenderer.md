---
title: "EditorDragDropRenderer"
description: "Reference for EditorDragDropRenderer in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.8589ced528e84419
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorDragDropRenderer`

This reference describes `EditorDragDropRenderer` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Source`](#api-75929ae5c1d2c204) | Method |
| [`Target`](#api-869e48aa13c10793) | Method |

## Type declaration

<a id="api-8589ced528e84419"></a>
<!-- api: T:Inno.Editor.ImGui.EditorDragDropRenderer e0812801bfa03fd2acd7e2b6318401c1687a4f9f9c209bad4db0d4ec2a7f69fe -->

```csharp
public static class Inno.Editor.ImGui.EditorDragDropRenderer
```

Bridges managed editor drag sessions to the native ImGui payload API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L12).

## `Source`

<a id="api-75929ae5c1d2c204"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDragDropRenderer.Source(Inno.Editor.Interactions.EditorInteraction,Inno.Editor.Interactions.EditorDragData,System.Action) fc7259e71b13d242b2e54630598ceaffff318003902a8c12961a57326c45b369 -->

```csharp
public static bool Inno.Editor.ImGui.EditorDragDropRenderer.Source(Inno.Editor.Interactions.EditorInteraction interaction, Inno.Editor.Interactions.EditorDragData data, System.Action? drawPreview = null)
```

Publishes managed drag data for the most recently submitted ImGui item.

**Parameter `interaction`:** The interaction area and target that produced the drag source.

**Parameter `data`:** The managed drag data published by the source.

**Parameter `drawPreview`:** An optional callback that draws the native drag preview.

**Returns:** `true` while the item is an active drag source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L30).

## `Target`

<a id="api-869e48aa13c10793"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDragDropRenderer.Target(Inno.Editor.Interactions.EditorInteraction,Inno.Editor.Interactions.EditorDropPlacement) 84ebce89ddb7ab8c584b66cad78d53386fdc3c08843f9e956289bf8e7a2c8010 -->

```csharp
public static Inno.Editor.ImGui.EditorDropWidgetResult Inno.Editor.ImGui.EditorDragDropRenderer.Target(Inno.Editor.Interactions.EditorInteraction interaction, Inno.Editor.Interactions.EditorDropPlacement placement = Inno.Editor.Interactions.EditorDropPlacement.None)
```

Evaluates and, on delivery, accepts a managed drag on the most recently submitted ImGui item.

**Parameter `interaction`:** The interaction area and managed drop target.

**Parameter `placement`:** The requested position relative to the target.

**Returns:** The native preview state together with the managed compatibility and delivery results.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorDragDropRenderer.cs#L51).
