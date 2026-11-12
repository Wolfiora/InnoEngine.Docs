---
title: "IInspectorAttributeDrawer"
description: "Reference for IInspectorAttributeDrawer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.091df4793d106c1b
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `IInspectorAttributeDrawer`

This reference describes `IInspectorAttributeDrawer` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`DrawAfter`](#api-10b3992307b530f5) | Method |
| [`DrawBefore`](#api-efbde84ef2ea7037) | Method |
| [`Update`](#api-d9dedf87ec4abdf6) | Method |

## Type declaration

<a id="api-091df4793d106c1b"></a>
<!-- api: T:InnoEditor.Inspection.IInspectorAttributeDrawer ae2df4204a194189f33814f8e697d135dbf6f88d9387548f17690c2c40047d62 -->

```csharp
public interface InnoEditor.Inspection.IInspectorAttributeDrawer
```

Extends serialized-property presentation with reusable attribute-driven behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L6).

## `DrawAfter`

<a id="api-10b3992307b530f5"></a>
<!-- api: M:InnoEditor.Inspection.IInspectorAttributeDrawer.DrawAfter(InnoEditor.Inspection.InspectorAttributeDrawContext) c556379ed923e87854873d57806c131e9abef139a3a5d73ecfa6ad7d53a4e7fe -->

```csharp
void InnoEditor.Inspection.IInspectorAttributeDrawer.DrawAfter(InnoEditor.Inspection.InspectorAttributeDrawContext context)
```

Draws a decorator immediately after the property row.

**Parameter `context`:** Current presentation state for the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L34).

## `DrawBefore`

<a id="api-efbde84ef2ea7037"></a>
<!-- api: M:InnoEditor.Inspection.IInspectorAttributeDrawer.DrawBefore(InnoEditor.Inspection.InspectorAttributeDrawContext) 717a5fecb5174a4a578daa71169d619a1b2224053162a3c5fad86bdced5815b9 -->

```csharp
void InnoEditor.Inspection.IInspectorAttributeDrawer.DrawBefore(InnoEditor.Inspection.InspectorAttributeDrawContext context)
```

Draws a decorator immediately before the property row.

**Parameter `context`:** Current presentation state for the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L24).

## `Update`

<a id="api-d9dedf87ec4abdf6"></a>
<!-- api: M:InnoEditor.Inspection.IInspectorAttributeDrawer.Update(InnoEditor.Inspection.InspectorAttributeDrawContext) 6b56a984ab824149c5c8c096befb48942ba316234a3ebf43ee7f675c5dba83c5 -->

```csharp
void InnoEditor.Inspection.IInspectorAttributeDrawer.Update(InnoEditor.Inspection.InspectorAttributeDrawContext context)
```

Updates visibility, interactivity, labeling, help, or numeric constraints before layout.

**Parameter `context`:** Mutable presentation state for the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/IInspectorAttributeDrawer.cs#L14).
