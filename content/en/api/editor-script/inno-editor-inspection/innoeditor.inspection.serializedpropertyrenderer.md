---
title: "SerializedPropertyRenderer"
description: "Reference for SerializedPropertyRenderer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.c2cc3b4f190e9835
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `SerializedPropertyRenderer`

This reference describes `SerializedPropertyRenderer` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-657afa6f9305aa2f) | Method |
| [`Draw`](#api-efac627cb332cdd1) | Method |
| [`DrawDraftProperty`](#api-7f14f42605da9933) | Method |
| [`DrawValue`](#api-f718ff457890932a) | Method |
| [`GetPropertyAvailability`](#api-3df5ea1a837ecf9d) | Method |

## Type declaration

<a id="api-c2cc3b4f190e9835"></a>
<!-- api: T:InnoEditor.Inspection.SerializedPropertyRenderer 029314b8bbc3d38d42bb3db345228c4a066968933569c8a2c87f861e329dbb5a -->

```csharp
public sealed class InnoEditor.Inspection.SerializedPropertyRenderer
```

Resolves drawers and renders serialized property paths with isolated error handling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L19).

## `#ctor`

<a id="api-657afa6f9305aa2f"></a>
<!-- api: M:InnoEditor.Inspection.SerializedPropertyRenderer.#ctor 9916ddfd6ed6722198eaa83c278d28935a097ce1b4aeefc277ccdd5b50861c7c -->

```csharp
public InnoEditor.Inspection.SerializedPropertyRenderer.SerializedPropertyRenderer()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L19).

## `Draw`

<a id="api-efac627cb332cdd1"></a>
<!-- api: M:InnoEditor.Inspection.SerializedPropertyRenderer.Draw(InnoEditor.Core.EditorContext,System.Object,System.String,InnoEngine.Serialization.SerializedProperty) 43faf5b90d938fb1e2979dd4eee2ed22a0e3d62ad58a8e30af33c97b7b134eb0 -->

```csharp
public void InnoEditor.Inspection.SerializedPropertyRenderer.Draw(InnoEditor.Core.EditorContext editorContext, object owner, string ownerPath, InnoEngine.Serialization.SerializedProperty property)
```

Draws a root serialized property.

**Parameter `editorContext`:** Shared editor context.

**Parameter `owner`:** The live domain object that owns the root property.

**Parameter `ownerPath`:** Stable owner path.

**Parameter `property`:** Serialized property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L81).

## `DrawDraftProperty`

<a id="api-7f14f42605da9933"></a>
<!-- api: M:InnoEditor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(InnoEditor.Core.EditorContext,System.Object,System.Object,System.String,InnoEngine.Serialization.SerializedProperty,InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean) bcc43d4833ee1a3e6e70c8a9f80cbc2702ec74e26b09fe2209882387a8364e36 -->

```csharp
public void InnoEditor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(InnoEditor.Core.EditorContext editorContext, object stateOwner, object valueOwner, string ownerPath, InnoEngine.Serialization.SerializedProperty property, InnoEditor.Inspection.IInspectionPropertyEditService edits, bool readOnly = false)
```

Draws a detached serialized property with its attributes and a feature-owned draft transaction.

**Parameter `editorContext`:** Current Editor frame.

**Parameter `stateOwner`:** Stable host-owned presentation state, containing no collectible objects.

**Parameter `valueOwner`:** Invocation-local detached value declaring the property and attributes.

**Parameter `ownerPath`:** Stable document or settings path.

**Parameter `property`:** Detached native serialized property.

**Parameter `edits`:** Draft mutation and shared History boundary.

**Parameter `readOnly`:** Whether source ownership prohibits edits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L210).

## `DrawValue`

<a id="api-f718ff457890932a"></a>
<!-- api: M:InnoEditor.Inspection.SerializedPropertyRenderer.DrawValue(InnoEditor.Core.EditorContext,System.Object,System.String,System.String,System.Type,System.Func{System.Object},System.Action{System.Object},InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean,System.Boolean,System.String,System.Nullable{System.Double},System.Nullable{System.Double}) b561175b6cb2d8bb12e389cf30f797688ca532bd7195e77c0bd9b310071d698f -->

```csharp
public void InnoEditor.Inspection.SerializedPropertyRenderer.DrawValue(InnoEditor.Core.EditorContext editorContext, object owner, string path, string label, System.Type propertyType, System.Func<object?> getter, System.Action<object?> setter, InnoEditor.Inspection.IInspectionPropertyEditService edits, bool readOnly = false, bool hdrColor = false, string? tooltip = null, double? minimum = null, double? maximum = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L148).

## `GetPropertyAvailability`

<a id="api-3df5ea1a837ecf9d"></a>
<!-- api: M:InnoEditor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,InnoEngine.Serialization.SerializedProperty) 300aaddc304d7b1df26bd032d0573d80266328ca25699d3383dfc46fabfc45db -->

```csharp
public (bool, bool) InnoEditor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(object owner, InnoEngine.Serialization.SerializedProperty property)
```

Evaluates the same current-generation presentation attributes used by drawing without creating any UI state.

**Parameter `owner`:** The current object declaring the property's conditional metadata.

**Parameter `property`:** The root serialized property to inspect.

**Returns:** Visibility and editability for this exact owner; callers must combine all selected owners before a batch edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/SerializedPropertyRenderer.cs#L253).
