---
title: "IInspectionIconProvider`1"
description: "Reference for IInspectionIconProvider`1 in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.5cd4c955d9919aa1
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# ``IInspectionIconProvider`1``

This reference describes ``IInspectionIconProvider`1`` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`GetIcon`](#api-6407cab121c7ef14) | Method |

## Type declaration

<a id="api-5cd4c955d9919aa1"></a>
<!-- api: T:Inno.Editor.Inspection.IInspectionIconProvider`1 414ee9b41893705002f4736ac76b1e236eca4163eb8fb9e6b4f51ee3d645c0cb -->

```csharp
public interface Inno.Editor.Inspection.IInspectionIconProvider<TTarget>
```

Resolves a presentation icon for inspected targets owned by another editor feature.

**Type parameter `TTarget`:** The target type whose icon can be resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/IInspectionIconProvider.cs#L9).

## `GetIcon`

<a id="api-6407cab121c7ef14"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionIconProvider`1.GetIcon(`0) 51a64cd8b8def812bb789f56c432beec9a15d848064c55b661a88a2ac91092a5 -->

```csharp
string Inno.Editor.Inspection.IInspectionIconProvider<TTarget>.GetIcon(TTarget target)
```

Resolves the presentation icon for one inspected target.

**Parameter `target`:** The target whose icon should be resolved.

**Returns:** The icon glyph registered by the owning feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/IInspectionIconProvider.cs#L20).
