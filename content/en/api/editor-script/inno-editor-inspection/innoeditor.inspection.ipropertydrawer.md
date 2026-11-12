---
title: "IPropertyDrawer"
description: "Reference for IPropertyDrawer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.52ab8a229edab447
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `IPropertyDrawer`

This reference describes `IPropertyDrawer` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-d09b187a92d5ecf9) | Method |

## Type declaration

<a id="api-52ab8a229edab447"></a>
<!-- api: T:InnoEditor.Inspection.IPropertyDrawer a72998d83885fa047f59693c03ab1bf0461418d242086dde22b5ea555c3ca3d3 -->

```csharp
public interface InnoEditor.Inspection.IPropertyDrawer
```

Draws and optionally edits one serialized property value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IPropertyDrawer.cs#L6).

## `Draw`

<a id="api-d09b187a92d5ecf9"></a>
<!-- api: M:InnoEditor.Inspection.IPropertyDrawer.Draw(InnoEditor.Inspection.PropertyDrawContext) 0dfae686c10ad8e0dc7c6dbf06beec9161638a031f064749a18acb51e23cd7d4 -->

```csharp
void InnoEditor.Inspection.IPropertyDrawer.Draw(InnoEditor.Inspection.PropertyDrawContext context)
```

Draws a property through its encapsulated value accessors.

**Parameter `context`:** Property drawing context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IPropertyDrawer.cs#L14).
