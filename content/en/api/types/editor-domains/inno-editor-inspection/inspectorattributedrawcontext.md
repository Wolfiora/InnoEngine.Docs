---
title: "InspectorAttributeDrawContext"
description: "Reference for InspectorAttributeDrawContext in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.cd6df616944d84ca
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectorAttributeDrawContext`

This reference describes `InspectorAttributeDrawContext` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetSiblingValue`](#api-c6e0f7ba40ba4809) | Method |
| [`attribute`](#api-6e4a11a92672ddb7) | Property |
| [`isReadOnly`](#api-4a1dba40f97242cd) | Property |
| [`isVisible`](#api-c4a8b1c46ecb94d9) | Property |
| [`label`](#api-29fe396cff026488) | Property |
| [`maximum`](#api-a40a7e7ceb07728b) | Property |
| [`member`](#api-4d1f1cfe0da61865) | Property |
| [`minimum`](#api-ef064efacf915d8e) | Property |
| [`owner`](#api-100db3211f759f70) | Property |
| [`path`](#api-0160bdc8aa5ee7a8) | Property |
| [`property`](#api-5112bb562ced2542) | Property |
| [`tooltip`](#api-983e467096232c6e) | Property |

## Type declaration

<a id="api-cd6df616944d84ca"></a>
<!-- api: T:Inno.Editor.Inspection.InspectorAttributeDrawContext ef5afeabb0c7f89de3412a33d1a8ce707158e0e133d120744cec873c0c571692 -->

```csharp
public sealed class Inno.Editor.Inspection.InspectorAttributeDrawContext
```

Carries the mutable presentation state of one attribute-annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L10).

## `GetSiblingValue`

<a id="api-c6e0f7ba40ba4809"></a>
<!-- api: M:Inno.Editor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(System.String) 42c775c2a4402341300c36d5d3883e6d5bfc56633e0ea2135c43d9cb76bb5df1 -->

```csharp
public object? Inno.Editor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(string memberName)
```

Reads a sibling field or property from the current owner, including non-public base members.

**Parameter `memberName`:** Exact CLR member name.

**Returns:** The current sibling value.

**Throws `System.InvalidOperationException`:** Thrown when the sibling is absent, ambiguous, indexed, or unreadable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L99).

## `attribute`

<a id="api-6e4a11a92672ddb7"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.attribute bde489f50a3507aa616c048377637cce937e7023d15e83e4a89ba1027b857ca7 -->

```csharp
public System.Attribute Inno.Editor.Inspection.InspectorAttributeDrawContext.attribute { get; }
```

Gets the attribute currently invoking a drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L55).

## `isReadOnly`

<a id="api-4a1dba40f97242cd"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.isReadOnly be7f60ba3ad12d73e9ae1881a50681a258d0c93544a6cb18c9eb4b0fe4978413 -->

```csharp
public bool Inno.Editor.Inspection.InspectorAttributeDrawContext.isReadOnly { get; set; }
```

Gets or sets whether the property control is read-only in the Inspector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L65).

## `isVisible`

<a id="api-c4a8b1c46ecb94d9"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.isVisible 817fc1b0bc24dccec70fa07b6cf226ba7bb52cf46a70ba477bc9371d3441ac4e -->

```csharp
public bool Inno.Editor.Inspection.InspectorAttributeDrawContext.isVisible { get; set; }
```

Gets or sets whether the complete property row is visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L60).

## `label`

<a id="api-29fe396cff026488"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.label 25c677d4e53e196d83f39420689ba79edc8e5f21a62a8eae2ff221cb52be6635 -->

```csharp
public string Inno.Editor.Inspection.InspectorAttributeDrawContext.label { get; set; }
```

Gets or sets the visible property label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L70).

## `maximum`

<a id="api-a40a7e7ceb07728b"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.maximum 084ac41f988078f15028f7282377540043b5045a24cce8288a3028887fab8a64 -->

```csharp
public double? Inno.Editor.Inspection.InspectorAttributeDrawContext.maximum { get; set; }
```

Gets or sets an optional inclusive numeric upper bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L85).

## `member`

<a id="api-4d1f1cfe0da61865"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.member 2a25c3215e481a57a41d0c52f82e82f7c364ee79917dc04eab9bac30c3950234 -->

```csharp
public System.Reflection.MemberInfo Inno.Editor.Inspection.InspectorAttributeDrawContext.member { get; }
```

Gets the reflected field or property carrying the current attribute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L40).

## `minimum`

<a id="api-ef064efacf915d8e"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.minimum b70ac149122bb62e82a5de31f747472cd0f257fea3d8fdf2b34f3ad23a5bcffd -->

```csharp
public double? Inno.Editor.Inspection.InspectorAttributeDrawContext.minimum { get; set; }
```

Gets or sets an optional inclusive numeric lower bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L80).

## `owner`

<a id="api-100db3211f759f70"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.owner 33bde627abf779ee9dbdbf9747ea9205b01e443cc28cb83dc8fc8f67aa7588c1 -->

```csharp
public object Inno.Editor.Inspection.InspectorAttributeDrawContext.owner { get; }
```

Gets the object that owns the annotated member.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L35).

## `path`

<a id="api-0160bdc8aa5ee7a8"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.path 94c997fd6d632d82e3466d626ac4d68e78f10f501e3978374a9f5e732bac43a1 -->

```csharp
public string Inno.Editor.Inspection.InspectorAttributeDrawContext.path { get; }
```

Gets the stable Inspector control path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L50).

## `property`

<a id="api-5112bb562ced2542"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.property 32bbe473b7c4d6278a1a9d0037f7aff8715bea2fb17a5bc7f9d909c6ba03a9b4 -->

```csharp
public Inno.Core.Serialization.SerializedProperty? Inno.Editor.Inspection.InspectorAttributeDrawContext.property { get; }
```

Gets the root serialized property when one is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L45).

## `tooltip`

<a id="api-983e467096232c6e"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawContext.tooltip dbf860298667006ab03a515228e56aab2123bad7c639a4ba63b75a4f9cfcbccc -->

```csharp
public string Inno.Editor.Inspection.InspectorAttributeDrawContext.tooltip { get; set; }
```

Gets or sets optional hover help for the property label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L75).
