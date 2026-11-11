---
title: "PropertyDrawContext"
description: "Reference for PropertyDrawContext in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.d936c80bac14ed55
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `PropertyDrawContext`

This reference describes `PropertyDrawContext` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ClearTextState`](#api-1deb3e52efbe69ee) | Method |
| [`DrawChild`](#api-91f1252ee3ca138b) | Method |
| [`DrawChild`](#api-2908f3db2eeb8df7) | Method |
| [`DrawChild`](#api-ac30372944accab6) | Method |
| [`DrawInlineChild`](#api-2e3ea53d14d77236) | Method |
| [`GetValue`](#api-6d49f7e7afaab6e9) | Method |
| [`SetTextState`](#api-43417ada2757d973) | Method |
| [`SetValue`](#api-60f984021553711f) | Method |
| [`TryGetTextState`](#api-5cdca52431c760bc) | Method |
| [`editorContext`](#api-5fb7e544dc75167c) | Property |
| [`hdrColor`](#api-5d8a0e3dd4680f30) | Property |
| [`interactions`](#api-fb3129e8bc2d2795) | Property |
| [`isReadOnly`](#api-6d8a3a5d19577874) | Property |
| [`label`](#api-d6cfd4639c5dd55d) | Property |
| [`maximum`](#api-eec3c694ee0959aa) | Property |
| [`minimum`](#api-7ae2e01180d74825) | Property |
| [`path`](#api-42c0328fc9af7f41) | Property |
| [`propertyType`](#api-db33e683322b5ca9) | Property |
| [`tooltip`](#api-e4a68169520ed7a5) | Property |
| [`visibility`](#api-07832da0fee5f727) | Property |

## Type declaration

<a id="api-d936c80bac14ed55"></a>
<!-- api: T:Inno.Editor.Inspection.PropertyDrawContext cf4186b369c8a8a5d910430ac6dd56ba28fd5a810285fbce258cea9ab14ee801 -->

```csharp
public sealed class Inno.Editor.Inspection.PropertyDrawContext
```

Encapsulates one editable property path and its drawing services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L12).

## `ClearTextState`

<a id="api-1deb3e52efbe69ee"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.ClearTextState(System.String) 1b97a0edb5709e0699f94c9f80eee87be16884afed9f7ae73b91452bf98dd696 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.ClearTextState(string key)
```

Removes text-edit state for this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L150).

## `DrawChild`

<a id="api-91f1252ee3ca138b"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.DrawChild(Inno.Core.Serialization.SerializedProperty) cfb0c784be1f6d46576e751104f9e363ea263db96ab1e0bfaef2d294d9c1666d -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.DrawChild(Inno.Core.Serialization.SerializedProperty property)
```

Draws a nested serialized property.

**Parameter `property`:** Nested property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L216).

## `DrawChild`

<a id="api-2908f3db2eeb8df7"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.DrawChild(System.Object,Inno.Core.Serialization.SerializedProperty) dbe1636cfd11a252494d78b748b382a62ae80ab233141a9dfa6508b761718407 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.DrawChild(object metadataOwner, Inno.Core.Serialization.SerializedProperty property)
```

Draws a nested serialized property with presentation metadata resolved from its immediate owner.

**Parameter `metadataOwner`:** Object that declares the nested serialized member.

**Parameter `property`:** Nested property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L226).

## `DrawChild`

<a id="api-ac30372944accab6"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.DrawChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean) 2b7fc8a26ca0d67f2ceed34b1bda91332e3dd1951dbc6fe2fa3ba33acda7b561 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.DrawChild(string childName, System.Type childType, System.Func<object?> getter, System.Action<object?> setter, bool readOnly = false)
```

Draws a nested value whose setter writes through this property path.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L199).

## `DrawInlineChild`

<a id="api-2e3ea53d14d77236"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.DrawInlineChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean) f0569fdc3f6e1ee724415ba5d9dd049915cd03be459a2aa07e31b18618cd5548 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.DrawInlineChild(string childName, System.Type childType, System.Func<object?> getter, System.Action<object?> setter, bool readOnly = false)
```

Draws a nested value inline without adding another label row.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L295).

## `GetValue`

<a id="api-6d49f7e7afaab6e9"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.GetValue dc2e1642ef50ceef19fb0499f9458a72a116df5f0ec50acf4a269aaba8675e87 -->

```csharp
public object? Inno.Editor.Inspection.PropertyDrawContext.GetValue()
```

Gets the latest value.

**Returns:** The latest value returned by the serialized property's getter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L114).

## `SetTextState`

<a id="api-43417ada2757d973"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.SetTextState(System.String,System.String) 6938c87ae4ccc340b58101e1747ae052bff64979681b4a97e2a9a0d5b6fcc6e7 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.SetTextState(string key, string value)
```

Stores text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Current neutral text state to retain between frames.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L140).

## `SetValue`

<a id="api-60f984021553711f"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.SetValue(System.Object,System.String) 74c599f85dd35f7511cd5643df95bbf79a441d8f27df6883f783a19d8a3565c3 -->

```csharp
public void Inno.Editor.Inspection.PropertyDrawContext.SetValue(object? value, string? componentName = null)
```

Assigns a value when the property is writable.

**Parameter `value`:** New value.

**Parameter `componentName`:** An optional public scalar component, or an Euler axis such as euler.x, for precise batch value edits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L160).

## `TryGetTextState`

<a id="api-5cdca52431c760bc"></a>
<!-- api: M:Inno.Editor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@) 8fe0f6d8962fb106d04c0204395447ef744915d11f632eb988dd407b89bc51b5 -->

```csharp
public bool Inno.Editor.Inspection.PropertyDrawContext.TryGetTextState(string key, out string? value)
```

Tries to read text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

**Returns:** `true` when text state exists for the exact owner and property path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L127).

## `editorContext`

<a id="api-5fb7e544dc75167c"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.editorContext 542ff8f08346ff62124498f4bea0f0398acbb2b4bad8600d9a4d95673d3db28e -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Inspection.PropertyDrawContext.editorContext { get; }
```

Gets the shared editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L24).

## `hdrColor`

<a id="api-5d8a0e3dd4680f30"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.hdrColor a39274d009d37343a477c17cc05029f0ab9be4f183ab4e70bfd56abcbf48c066 -->

```csharp
public bool Inno.Editor.Inspection.PropertyDrawContext.hdrColor { get; }
```

Gets whether Color values are unclamped linear floating-point channels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L64).

## `interactions`

<a id="api-fb3129e8bc2d2795"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.interactions 166e298112fd4f8f6fae874a19306d3dc371c209174222229c527cd88410f65e -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Inspection.PropertyDrawContext.interactions { get; }
```

Gets the active editor interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L28).

## `isReadOnly`

<a id="api-6d8a3a5d19577874"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.isReadOnly e6c6bdf52b43eba2541aa3681520e9906cea50bce406df85d72292b4f287cd61 -->

```csharp
public bool Inno.Editor.Inspection.PropertyDrawContext.isReadOnly { get; }
```

Gets whether assignments are disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L48).

## `label`

<a id="api-d6cfd4639c5dd55d"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.label b3a301f4c22a89fb5b34f992127158a3c9e029b86727534f9c0f5ff7728b197e -->

```csharp
public string Inno.Editor.Inspection.PropertyDrawContext.label { get; }
```

Gets the display label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L36).

## `maximum`

<a id="api-eec3c694ee0959aa"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.maximum b49c51a44b54207a3c399acfd7e7bfa91ff286a3dffc297f2b87a439c1eb6e4e -->

```csharp
public double? Inno.Editor.Inspection.PropertyDrawContext.maximum { get; }
```

Gets the optional inclusive numeric upper bound supplied by Inspector metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L56).

## `minimum`

<a id="api-7ae2e01180d74825"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.minimum f64b7760a6c0939dab8c3577fbaef0c042142a010769800b788ef75e4134aeac -->

```csharp
public double? Inno.Editor.Inspection.PropertyDrawContext.minimum { get; }
```

Gets the optional inclusive numeric lower bound supplied by Inspector metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L52).

## `path`

<a id="api-42c0328fc9af7f41"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.path 82e8b0d625b397a265a8d72691048a8cd50870f5c18651e1b7a4525a398f355a -->

```csharp
public string Inno.Editor.Inspection.PropertyDrawContext.path { get; }
```

Gets the stable control path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L32).

## `propertyType`

<a id="api-db33e683322b5ca9"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.propertyType e558a1310010d81eb22388cd6b493ca0d0e71966e426164e2bda7c538357859e -->

```csharp
public System.Type Inno.Editor.Inspection.PropertyDrawContext.propertyType { get; }
```

Gets the declared property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L40).

## `tooltip`

<a id="api-e4a68169520ed7a5"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.tooltip e9ec5739e80c55dd6543e849b2a4533f874cd4416e55fa71aa7cc639f652bc61 -->

```csharp
public string? Inno.Editor.Inspection.PropertyDrawContext.tooltip { get; }
```

Gets optional hover help supplied by Inspector metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L60).

## `visibility`

<a id="api-07832da0fee5f727"></a>
<!-- api: P:Inno.Editor.Inspection.PropertyDrawContext.visibility f07a0dbb1e91f5571da1fe9b303186fa7d27314e734f817370a6821421248b70 -->

```csharp
public Inno.Core.Serialization.PropertyVisibility Inno.Editor.Inspection.PropertyDrawContext.visibility { get; }
```

Gets the serialization visibility flags.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawContext.cs#L44).
