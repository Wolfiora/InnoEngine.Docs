---
title: "IInspectionIconProvider`1"
description: "Reference for IInspectionIconProvider`1 in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.e69e4fb66b79497e
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# ``IInspectionIconProvider`1``

This reference describes ``IInspectionIconProvider`1`` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`GetIcon`](#api-614243b827c99a87) | Method |

## Type declaration

<a id="api-e69e4fb66b79497e"></a>
<!-- api: T:InnoEditor.Inspection.IInspectionIconProvider`1 e03a7868510fc5f1e70925a7d8465ab70ad0560ab2aa6f236d10fef6089a65be -->

```csharp
public interface InnoEditor.Inspection.IInspectionIconProvider<TTarget>
```

Resolves a presentation icon for inspected targets owned by another editor feature.

**Type parameter `TTarget`:** The target type whose icon can be resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/IInspectionIconProvider.cs#L9).

## `GetIcon`

<a id="api-614243b827c99a87"></a>
<!-- api: M:InnoEditor.Inspection.IInspectionIconProvider`1.GetIcon(`0) 740a4e0331a406e02597d7b53c0e9f82ce0151be311ec87c347a33f352a633ef -->

```csharp
string InnoEditor.Inspection.IInspectionIconProvider<TTarget>.GetIcon(TTarget target)
```

Resolves the presentation icon for one inspected target.

**Parameter `target`:** The target whose icon should be resolved.

**Returns:** The icon glyph registered by the owning feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/IInspectionIconProvider.cs#L20).
