---
title: "SerializedPropertyRenderer"
description: "Reference for SerializedPropertyRenderer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.c662ee939dfb8ba5
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `SerializedPropertyRenderer`

This reference describes `SerializedPropertyRenderer` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ded750e0985e38ff) | Method |
| [`Draw`](#api-4cab78320c06ead0) | Method |
| [`DrawDraftProperty`](#api-133afe933690234e) | Method |
| [`DrawValue`](#api-8123137305545789) | Method |
| [`GetPropertyAvailability`](#api-130a784161c4a481) | Method |

## Type declaration

<a id="api-c662ee939dfb8ba5"></a>
<!-- api: T:Inno.Editor.Inspection.SerializedPropertyRenderer 331e09afc807a4db40f41d3e997e471e11bbf217097d77669d639a4a359f5468 -->

```csharp
public sealed class Inno.Editor.Inspection.SerializedPropertyRenderer
```

Resolves drawers and renders serialized property paths with isolated error handling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L19).

## `#ctor`

<a id="api-ded750e0985e38ff"></a>
<!-- api: M:Inno.Editor.Inspection.SerializedPropertyRenderer.#ctor(Inno.Editor.Inspection.PropertyDrawerRegistry,Inno.Editor.Inspection.InspectorAttributeDrawerRegistry,Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.IInspectionPropertyEditService,Inno.Core.Logging.LogRouter) d725a7903ae6563e12178df7aa2961da10e7716e16fd57d452ac2822ba7880d3 -->

```csharp
public Inno.Editor.Inspection.SerializedPropertyRenderer.SerializedPropertyRenderer(Inno.Editor.Inspection.PropertyDrawerRegistry drawers, Inno.Editor.Inspection.InspectorAttributeDrawerRegistry attributes, Inno.Editor.Interactions.EditorInteractions interactions, Inno.Editor.Inspection.IInspectionPropertyEditService edits, Inno.Core.Logging.LogRouter logs)
```

Creates a serialized property renderer over one drawer registry and feature-owned edit service.

**Parameter `drawers`:** The property drawer registry used for runtime type resolution.

**Parameter `attributes`:** The generation-aware registry that interprets Inspector presentation attributes.

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `edits`:** The feature-owned service used to apply and record property changes.

**Parameter `logs`:** The host-owned log router used to report isolated drawer failures.

**Throws `System.ArgumentNullException`:** Thrown when `drawers`, `interactions`, or
`edits` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L51).

## `Draw`

<a id="api-4cab78320c06ead0"></a>
<!-- api: M:Inno.Editor.Inspection.SerializedPropertyRenderer.Draw(Inno.Editor.Core.EditorContext,System.Object,System.String,Inno.Core.Serialization.SerializedProperty) 3c960965fe1961e376dcf6cf6423fca50a7b15a7b78ddba5c40e25f8bceb31ce -->

```csharp
public void Inno.Editor.Inspection.SerializedPropertyRenderer.Draw(Inno.Editor.Core.EditorContext editorContext, object owner, string ownerPath, Inno.Core.Serialization.SerializedProperty property)
```

Draws a root serialized property.

**Parameter `editorContext`:** Shared editor context.

**Parameter `owner`:** The live domain object that owns the root property.

**Parameter `ownerPath`:** Stable owner path.

**Parameter `property`:** Serialized property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L81).

## `DrawDraftProperty`

<a id="api-133afe933690234e"></a>
<!-- api: M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(Inno.Editor.Core.EditorContext,System.Object,System.Object,System.String,Inno.Core.Serialization.SerializedProperty,Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean) 5aee98252a4d10566fb2dfd8f18286a7d0d114cef453db8e0a1013e2dfca6b61 -->

```csharp
public void Inno.Editor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(Inno.Editor.Core.EditorContext editorContext, object stateOwner, object valueOwner, string ownerPath, Inno.Core.Serialization.SerializedProperty property, Inno.Editor.Inspection.IInspectionPropertyEditService edits, bool readOnly = false)
```

Draws a detached serialized property with its attributes and a feature-owned draft transaction.

**Parameter `editorContext`:** Current Editor frame.

**Parameter `stateOwner`:** Stable host-owned presentation state, containing no collectible objects.

**Parameter `valueOwner`:** Invocation-local detached value declaring the property and attributes.

**Parameter `ownerPath`:** Stable document or settings path.

**Parameter `property`:** Detached native serialized property.

**Parameter `edits`:** Draft mutation and shared History boundary.

**Parameter `readOnly`:** Whether source ownership prohibits edits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L210).

## `DrawValue`

<a id="api-8123137305545789"></a>
<!-- api: M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawValue(Inno.Editor.Core.EditorContext,System.Object,System.String,System.String,System.Type,System.Func{System.Object},System.Action{System.Object},Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean,System.Boolean,System.String,System.Nullable{System.Double},System.Nullable{System.Double}) 873f37309dc9414303dcb9fa6134048a1033a08f1cb63526ea02f0bba1651b7c -->

```csharp
public void Inno.Editor.Inspection.SerializedPropertyRenderer.DrawValue(Inno.Editor.Core.EditorContext editorContext, object owner, string path, string label, System.Type propertyType, System.Func<object?> getter, System.Action<object?> setter, Inno.Editor.Inspection.IInspectionPropertyEditService edits, bool readOnly = false, bool hdrColor = false, string? tooltip = null, double? minimum = null, double? maximum = null)
```

Draws a declared authoring value with existing property drawers and a feature-owned draft edit service.

**Parameter `editorContext`:** Current Editor frame.

**Parameter `owner`:** Stable owner for text state and edit routing; not necessarily a canonical serialized object.

**Parameter `path`:** Stable unique property path.

**Parameter `label`:** User-facing label.

**Parameter `propertyType`:** Declared value type used to select its registered drawer.

**Parameter `getter`:** Reads the detached value.

**Parameter `setter`:** Changes the detached value within the supplied edit service.

**Parameter `edits`:** Feature-owned transaction boundary, propagated to nested properties.

**Parameter `readOnly`:** Whether assignment is disabled.

**Parameter `hdrColor`:** Whether Color values use unclamped linear floating-point channels.

**Parameter `tooltip`:** Optional authoring description rendered by the shared property tooltip.

**Parameter `minimum`:** Optional inclusive numeric editing bound.

**Parameter `maximum`:** Optional inclusive numeric editing bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L148).

## `GetPropertyAvailability`

<a id="api-130a784161c4a481"></a>
<!-- api: M:Inno.Editor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,Inno.Core.Serialization.SerializedProperty) e5e8fde85f3f048ba42d28faf067d835ce165a28444f1c57241bc8139a658bfe -->

```csharp
public (bool isVisible, bool isReadOnly) Inno.Editor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(object owner, Inno.Core.Serialization.SerializedProperty property)
```

Evaluates the same current-generation presentation attributes used by drawing without creating any UI state.

**Parameter `owner`:** The current object declaring the property's conditional metadata.

**Parameter `property`:** The root serialized property to inspect.

**Returns:** Visibility and editability for this exact owner; callers must combine all selected owners before a batch edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L253).
