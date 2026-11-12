---
title: "PropertyDrawContext"
description: "Reference for PropertyDrawContext in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.c81a931ce1de54ea
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `PropertyDrawContext`

This reference describes `PropertyDrawContext` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c3ca8853f2daa898) | Method |
| [`ClearTextState`](#api-a5bc0fa95d24ef78) | Method |
| [`DrawChild`](#api-9fd25879c40ab053) | Method |
| [`DrawChild`](#api-fe25f85929aa374f) | Method |
| [`DrawChild`](#api-064b9c1e6fce5fcd) | Method |
| [`DrawInlineChild`](#api-489ef0bdb2649ac6) | Method |
| [`GetValue`](#api-2d1cca910ac61c66) | Method |
| [`SetTextState`](#api-bebeda56e6340b8b) | Method |
| [`SetValue`](#api-08e792c65d8e448e) | Method |
| [`TryGetTextState`](#api-c5773cfec84e0302) | Method |
| [`editorContext`](#api-e8fad715d36967c3) | Property |
| [`hdrColor`](#api-6720a3d6d874db2c) | Property |
| [`interactions`](#api-28a1d277ee88a344) | Property |
| [`isReadOnly`](#api-1c6838dc675a01d2) | Property |
| [`label`](#api-4c895cf766c1135b) | Property |
| [`maximum`](#api-a0831465e5818143) | Property |
| [`minimum`](#api-91fee260aade27a9) | Property |
| [`path`](#api-f0248057b1689855) | Property |
| [`propertyType`](#api-f49408215e881bc3) | Property |
| [`tooltip`](#api-1b14e9ffd91fb0ca) | Property |
| [`visibility`](#api-afa6711858ed3bcb) | Property |

## Type declaration

<a id="api-c81a931ce1de54ea"></a>
<!-- api: T:InnoEditor.Inspection.PropertyDrawContext ece6dd801b7c6be5d3d7be3826e93a6cc0209072ce4c0a8a9fb6d234fac35cf3 -->

```csharp
public sealed class InnoEditor.Inspection.PropertyDrawContext
```

Encapsulates one editable property path and its drawing services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L12).

## `#ctor`

<a id="api-c3ca8853f2daa898"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.#ctor 0e7cde042ba3fc75703872f6f023aa7232f4b6a108dc2beea4850d6d1e384d11 -->

```csharp
public InnoEditor.Inspection.PropertyDrawContext.PropertyDrawContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L12).

## `ClearTextState`

<a id="api-a5bc0fa95d24ef78"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.ClearTextState(System.String) abf7ac73bffc1b6dad6c6137750dfae7b1782cce2620fb5bb0eefc98a34a90df -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.ClearTextState(string key)
```

Removes text-edit state for this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L150).

## `DrawChild`

<a id="api-9fd25879c40ab053"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.DrawChild(InnoEngine.Serialization.SerializedProperty) cd9d1c121c964e3b5bad71a4d22d03685c3cb7fabccdbc4decbfc2d039cdfa16 -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.DrawChild(InnoEngine.Serialization.SerializedProperty property)
```

Draws a nested serialized property.

**Parameter `property`:** Nested property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L216).

## `DrawChild`

<a id="api-fe25f85929aa374f"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.DrawChild(System.Object,InnoEngine.Serialization.SerializedProperty) e2c07329ff37a48c26ee17d87c7d80907c5478f7129b5b743992f9c9f1774d71 -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.DrawChild(object metadataOwner, InnoEngine.Serialization.SerializedProperty property)
```

Draws a nested serialized property with presentation metadata resolved from its immediate owner.

**Parameter `metadataOwner`:** Object that declares the nested serialized member.

**Parameter `property`:** Nested property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L226).

## `DrawChild`

<a id="api-064b9c1e6fce5fcd"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.DrawChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean) 108fedc811167603d9107679a2346ea1b5ebfa5740af7e2a0501522751688dca -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.DrawChild(string childName, System.Type childType, System.Func<object?> getter, System.Action<object?> setter, bool readOnly = false)
```

Draws a nested value whose setter writes through this property path.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L199).

## `DrawInlineChild`

<a id="api-489ef0bdb2649ac6"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.DrawInlineChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean) 6a06461c158335533daefc4ffcfb1e03f8675daf57df2f2d62bb4fb79627cfea -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.DrawInlineChild(string childName, System.Type childType, System.Func<object?> getter, System.Action<object?> setter, bool readOnly = false)
```

Draws a nested value inline without adding another label row.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L295).

## `GetValue`

<a id="api-2d1cca910ac61c66"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.GetValue ba8906e11d87f8ae9dad9c35933a36b1ab42d57942f8f1a779d0dcca3f3d463d -->

```csharp
public object? InnoEditor.Inspection.PropertyDrawContext.GetValue()
```

Gets the latest value.

**Returns:** The latest value returned by the serialized property's getter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L114).

## `SetTextState`

<a id="api-bebeda56e6340b8b"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.SetTextState(System.String,System.String) 0a58ff1ee08aef902feaf30dfb6961eec874e35c50f16926a00ed9be06d3e079 -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.SetTextState(string key, string value)
```

Stores text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Current neutral text state to retain between frames.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L140).

## `SetValue`

<a id="api-08e792c65d8e448e"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.SetValue(System.Object,System.String) 649f5c7f26ab4f81a3925467ba4a6adc93389770dbeafa49c8104d8821bc2c01 -->

```csharp
public void InnoEditor.Inspection.PropertyDrawContext.SetValue(object? value, string? componentName = null)
```

Assigns a value when the property is writable.

**Parameter `value`:** New value.

**Parameter `componentName`:** An optional public scalar component, or an Euler axis such as euler.x, for precise batch value edits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L160).

## `TryGetTextState`

<a id="api-c5773cfec84e0302"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@) 2dbd913db8fa34343bf6824ed2bf58e6cb4e8cd89a9e6cddf294fbe6b95c9a6d -->

```csharp
public bool InnoEditor.Inspection.PropertyDrawContext.TryGetTextState(string key, out string? value)
```

Tries to read text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

**Returns:** `true` when text state exists for the exact owner and property path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L127).

## `editorContext`

<a id="api-e8fad715d36967c3"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.editorContext b00a3975fabfcea68a8bb5fc9a579e4b5413bd3b8869bca788dfa05841ce924e -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Inspection.PropertyDrawContext.editorContext { get; }
```

Gets the shared editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L24).

## `hdrColor`

<a id="api-6720a3d6d874db2c"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.hdrColor 032ac24f2a6b4a96ddd941ab5aa1365507ff2430ba1996fdf977586b215dcb93 -->

```csharp
public bool InnoEditor.Inspection.PropertyDrawContext.hdrColor { get; }
```

Gets whether Color values are unclamped linear floating-point channels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L64).

## `interactions`

<a id="api-28a1d277ee88a344"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.interactions 0d853d8ae11b1abc594b0014eeeb61601fb41a16d93fefa376391ae6fe27032f -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Inspection.PropertyDrawContext.interactions { get; }
```

Gets the active editor interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L28).

## `isReadOnly`

<a id="api-1c6838dc675a01d2"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.isReadOnly 8e2e390ffd35e1c4a976f13582ab55493f24f3b7478de02360c0973768c2653e -->

```csharp
public bool InnoEditor.Inspection.PropertyDrawContext.isReadOnly { get; }
```

Gets whether assignments are disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L48).

## `label`

<a id="api-4c895cf766c1135b"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.label d7887e5ea455ff5dac48d134db93b10cd1570543e360c8fb9228e1d1c93cd037 -->

```csharp
public string InnoEditor.Inspection.PropertyDrawContext.label { get; }
```

Gets the display label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L36).

## `maximum`

<a id="api-a0831465e5818143"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.maximum 43831d3dc6d0b78b21920acf9d4bf5f4eb0c6fceaaf9bc063b9a4c221541710a -->

```csharp
public double? InnoEditor.Inspection.PropertyDrawContext.maximum { get; }
```

Gets the optional inclusive numeric upper bound supplied by Inspector metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L56).

## `minimum`

<a id="api-91fee260aade27a9"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.minimum 93dc8fac2ef73f482cdff1b20e2b9cdca576420f6766fc95bafddfc3c7b189b9 -->

```csharp
public double? InnoEditor.Inspection.PropertyDrawContext.minimum { get; }
```

Gets the optional inclusive numeric lower bound supplied by Inspector metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L52).

## `path`

<a id="api-f0248057b1689855"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.path febb38bde5983148300e491e2d4da2ca961ffee8482a58e4b0e8dfab73a90855 -->

```csharp
public string InnoEditor.Inspection.PropertyDrawContext.path { get; }
```

Gets the stable control path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L32).

## `propertyType`

<a id="api-f49408215e881bc3"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.propertyType ed007ef447562510bc75921f182931ad6b8d70410c3102b3ce35f2b4f84530a4 -->

```csharp
public System.Type InnoEditor.Inspection.PropertyDrawContext.propertyType { get; }
```

Gets the declared property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L40).

## `tooltip`

<a id="api-1b14e9ffd91fb0ca"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.tooltip 3e6fde65d7e509969381738a92939bf10d7b38cf8d9fc47e67cbffe284c62b14 -->

```csharp
public string? InnoEditor.Inspection.PropertyDrawContext.tooltip { get; }
```

Gets optional hover help supplied by Inspector metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L60).

## `visibility`

<a id="api-afa6711858ed3bcb"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawContext.visibility c4d562aa278b8eae516181a9db227c5488a0f3ff5fadecf2f8ffea952861285e -->

```csharp
public InnoEngine.Serialization.PropertyVisibility InnoEditor.Inspection.PropertyDrawContext.visibility { get; }
```

Gets the serialization visibility flags.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L44).
