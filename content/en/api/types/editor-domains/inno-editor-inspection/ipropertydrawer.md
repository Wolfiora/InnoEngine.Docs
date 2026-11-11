---
title: "IPropertyDrawer"
description: "Reference for IPropertyDrawer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.d4b21d69fced31ad
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `IPropertyDrawer`

This reference describes `IPropertyDrawer` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-2cfa3d7a3fe751de) | Method |

## Type declaration

<a id="api-d4b21d69fced31ad"></a>
<!-- api: T:Inno.Editor.Inspection.IPropertyDrawer 919dfdbb1c668b339f2af2cc08e4cf4ae72d0e00a07490bb872272f71e30a886 -->

```csharp
public interface Inno.Editor.Inspection.IPropertyDrawer
```

Draws and optionally edits one serialized property value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IPropertyDrawer.cs#L6).

## `Draw`

<a id="api-2cfa3d7a3fe751de"></a>
<!-- api: M:Inno.Editor.Inspection.IPropertyDrawer.Draw(Inno.Editor.Inspection.PropertyDrawContext) ce95979753e7ca49b9685f3ea27d06dadd0d71f272bfd2ff9375a78eb5f2e5c3 -->

```csharp
void Inno.Editor.Inspection.IPropertyDrawer.Draw(Inno.Editor.Inspection.PropertyDrawContext context)
```

Draws a property through its encapsulated value accessors.

**Parameter `context`:** Property drawing context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/IPropertyDrawer.cs#L14).
