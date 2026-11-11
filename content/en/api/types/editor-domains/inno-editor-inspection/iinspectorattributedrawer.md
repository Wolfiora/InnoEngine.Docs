---
title: "IInspectorAttributeDrawer"
description: "Reference for IInspectorAttributeDrawer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.9250e0ed5043e709
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `IInspectorAttributeDrawer`

This reference describes `IInspectorAttributeDrawer` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`DrawAfter`](#api-53080d5ed05c6cbf) | Method |
| [`DrawBefore`](#api-7fdad10f777bfb7c) | Method |
| [`Update`](#api-c40fc8f72779cd64) | Method |

## Type declaration

<a id="api-9250e0ed5043e709"></a>
<!-- api: T:Inno.Editor.Inspection.IInspectorAttributeDrawer 18644eb38577f1b6e96cf1574c157d2846a5be2aabc23cd4b230d6827f6af42f -->

```csharp
public interface Inno.Editor.Inspection.IInspectorAttributeDrawer
```

Extends serialized-property presentation with reusable attribute-driven behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L6).

## `DrawAfter`

<a id="api-53080d5ed05c6cbf"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectorAttributeDrawer.DrawAfter(Inno.Editor.Inspection.InspectorAttributeDrawContext) 2eef14833aeaed6845a55a4c16c31650022393744eb49ee163c62a52ee0f5d60 -->

```csharp
void Inno.Editor.Inspection.IInspectorAttributeDrawer.DrawAfter(Inno.Editor.Inspection.InspectorAttributeDrawContext context)
```

Draws a decorator immediately after the property row.

**Parameter `context`:** Current presentation state for the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L34).

## `DrawBefore`

<a id="api-7fdad10f777bfb7c"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectorAttributeDrawer.DrawBefore(Inno.Editor.Inspection.InspectorAttributeDrawContext) e66003ec24b3738ee7b55f861bd4c72a0056cc4ab277f427d698e2523f3a7aee -->

```csharp
void Inno.Editor.Inspection.IInspectorAttributeDrawer.DrawBefore(Inno.Editor.Inspection.InspectorAttributeDrawContext context)
```

Draws a decorator immediately before the property row.

**Parameter `context`:** Current presentation state for the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L24).

## `Update`

<a id="api-c40fc8f72779cd64"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectorAttributeDrawer.Update(Inno.Editor.Inspection.InspectorAttributeDrawContext) e93e658937bc57ade26263ce2f0a1a308013fd73297d0f3220cd8d4b864be04c -->

```csharp
void Inno.Editor.Inspection.IInspectorAttributeDrawer.Update(Inno.Editor.Inspection.InspectorAttributeDrawContext context)
```

Updates visibility, interactivity, labeling, help, or numeric constraints before layout.

**Parameter `context`:** Mutable presentation state for the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L14).
