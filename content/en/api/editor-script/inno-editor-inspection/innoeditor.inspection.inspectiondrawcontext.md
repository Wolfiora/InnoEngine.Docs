---
title: "InspectionDrawContext"
description: "Reference for InspectionDrawContext in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.5ba42a3ec145607e
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `InspectionDrawContext`

This reference describes `InspectionDrawContext` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b2fe02d296ff3bd) | Method |
| [`DrawProperties`](#api-f7fd7194adadcdba) | Method |
| [`DrawProperty`](#api-736e13ccf29d41eb) | Method |
| [```GetProperty``1```](#api-45e9a9eeaf93dc48) | Method |
| [`HasProperty`](#api-bff7304681b24462) | Method |
| [`TryDrawInline`](#api-97964b298f0a9441) | Method |
| [`editorContext`](#api-2a88c1e27a66e1ab) | Property |
| [`interactions`](#api-7f1c367f3397fe39) | Property |
| [`properties`](#api-c682f05914690ef0) | Property |
| [`target`](#api-869d466128571e77) | Property |

## Type declaration

<a id="api-5ba42a3ec145607e"></a>
<!-- api: T:InnoEditor.Inspection.InspectionDrawContext cdccd3730dd28ae66e5ca4993d7b85f24300ef8036c4d897c53b23df713d3ff7 -->

```csharp
public sealed class InnoEditor.Inspection.InspectionDrawContext
```

Provides services and state to an inspector drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L15).

## `#ctor`

<a id="api-2b2fe02d296ff3bd"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawContext.#ctor ab05e0474d252703c063eb316f40145cd09da5bd204033e2e13fd85bf4bf6ec4 -->

```csharp
public InnoEditor.Inspection.InspectionDrawContext.InspectionDrawContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L15).

## `DrawProperties`

<a id="api-f7fd7194adadcdba"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawContext.DrawProperties 1c4e6f47c027301c59008b37adce3975fffd9b6c45a9ee6e5691326e8288b4e5 -->

```csharp
public void InnoEditor.Inspection.InspectionDrawContext.DrawProperties()
```

Draws every runtime-visible serialized property through the shared attribute and property
drawer pipeline.

**Constraints:** Properties without an explicit `Header` attribute are placed in the shared implicit
Properties section. Custom drawers may call this method before or after their own sections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L128).

## `DrawProperty`

<a id="api-736e13ccf29d41eb"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawContext.DrawProperty(System.String) 36c09488be1ec4d2596f85d29ce03a31b81952aa3cf6bc571bdc8a78bfbe0427 -->

```csharp
public void InnoEditor.Inspection.InspectionDrawContext.DrawProperty(string propertyName)
```

Draws one named property with its ordinary editor, history, and validation behavior.

**Parameter `propertyName`:** Exact serialized property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L110).

## ```GetProperty``1```

<a id="api-45e9a9eeaf93dc48"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawContext.GetProperty``1(System.String) a1a8b79610efa199e094154be1e4885a873231470fcfe5febbd9a7dc2e0d2c57 -->

```csharp
public T InnoEditor.Inspection.InspectionDrawContext.GetProperty<T>(string propertyName)
```

Reads one runtime-visible serialized property from the target.

**Type parameter `T`:** Expected property value type.

**Parameter `propertyName`:** Exact serialized property name.

**Returns:** The current strongly typed property value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L94).

## `HasProperty`

<a id="api-bff7304681b24462"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawContext.HasProperty(System.String) 2fa41c2ba7ece221aecd78abc90d8958162c19c1ca0ad32eaa48923d8953d212 -->

```csharp
public bool InnoEditor.Inspection.InspectionDrawContext.HasProperty(string propertyName)
```

Gets whether the target exposes one runtime-visible serialized property.

**Parameter `propertyName`:** Exact serialized property name.

**Returns:** `true` when the property is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L75).

## `TryDrawInline`

<a id="api-97964b298f0a9441"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawContext.TryDrawInline(System.Object) 13e5ffc8b09a62f214e75ea4a893e4e4950e401277753481000f46cf15a03195 -->

```csharp
public bool InnoEditor.Inspection.InspectionDrawContext.TryDrawInline(object target)
```

Draws an exact target-specific body inside the caller's existing Inspector card.

**Parameter `target`:** Nested target whose exact registered drawer should render.

**Returns:** `true` when an exact drawer rendered the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L48).

## `editorContext`

<a id="api-2a88c1e27a66e1ab"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawContext.editorContext 8d9e865e501f6909f0a47a945176f58bab8e2f300e2fc8cbd986a28ca578041a -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Inspection.InspectionDrawContext.editorContext { get; }
```

Gets the shared editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L22).

## `interactions`

<a id="api-7f1c367f3397fe39"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawContext.interactions 029dd8bb3d2ec7b237ec026f8e9755b83cd20c06480eaab68c2c749e6e9988f2 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Inspection.InspectionDrawContext.interactions { get; }
```

Gets the active editor interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L27).

## `properties`

<a id="api-c682f05914690ef0"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawContext.properties 6a5bc19a1ba80ca082ab2bad35efae7247b0ae6da7eacf693180e00aea0573d1 -->

```csharp
public InnoEditor.Inspection.SerializedPropertyRenderer InnoEditor.Inspection.InspectionDrawContext.properties { get; }
```

Gets the serialized property renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L37).

## `target`

<a id="api-869d466128571e77"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawContext.target 3997c4a0cfb6009da7deeacd0ad4150ca4772eabb1f1552510a2c694d49b5aea -->

```csharp
public object InnoEditor.Inspection.InspectionDrawContext.target { get; }
```

Gets the selected target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L32).
