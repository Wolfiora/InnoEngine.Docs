---
title: "InspectorAttributeDrawContext"
description: "Reference for InspectorAttributeDrawContext in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.ebba3f88a4eaf582
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `InspectorAttributeDrawContext`

This reference describes `InspectorAttributeDrawContext` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4ecd9572c7ce7d49) | Method |
| [`GetSiblingValue`](#api-a37a688351aa677f) | Method |
| [`attribute`](#api-a39dfd79ef076fa1) | Property |
| [`isReadOnly`](#api-0b6cc4ae7b23af88) | Property |
| [`isVisible`](#api-563739ae6d301c80) | Property |
| [`label`](#api-0f88787639e6db8c) | Property |
| [`maximum`](#api-4a6539ab3ce0046d) | Property |
| [`member`](#api-2b12fff339f8020d) | Property |
| [`minimum`](#api-82e5efbc2675ce23) | Property |
| [`owner`](#api-5a02e118e57e3f05) | Property |
| [`path`](#api-834f147c54677763) | Property |
| [`property`](#api-04db3952453c6e44) | Property |
| [`tooltip`](#api-e35a65d75e9e1a01) | Property |

## Type declaration

<a id="api-ebba3f88a4eaf582"></a>
<!-- api: T:InnoEditor.Inspection.InspectorAttributeDrawContext 38d77779588bbcbf172af1ce5e90a6660c8e28795945d10e7f400bc8d9d18c35 -->

```csharp
public sealed class InnoEditor.Inspection.InspectorAttributeDrawContext
```

Carries the mutable presentation state of one attribute-annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L10).

## `#ctor`

<a id="api-4ecd9572c7ce7d49"></a>
<!-- api: M:InnoEditor.Inspection.InspectorAttributeDrawContext.#ctor 8ab2b92b253d0261ab68e5b8f96612b919cf0aa1cd4c5c2297959d7d9d710913 -->

```csharp
public InnoEditor.Inspection.InspectorAttributeDrawContext.InspectorAttributeDrawContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L10).

## `GetSiblingValue`

<a id="api-a37a688351aa677f"></a>
<!-- api: M:InnoEditor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(System.String) bb7d960164b56bd77372d62e6a06e5f837ea53a3f1cd81e3d0bbf734bb75339b -->

```csharp
public object? InnoEditor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(string memberName)
```

Reads a sibling field or property from the current owner, including non-public base members.

**Parameter `memberName`:** Exact CLR member name.

**Returns:** The current sibling value.

**Throws `System.InvalidOperationException`:** Thrown when the sibling is absent, ambiguous, indexed, or unreadable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L99).

## `attribute`

<a id="api-a39dfd79ef076fa1"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.attribute b1170d207c18b2f44ed74d10084013dadf8fd4bf82e8ab6eb7a87fd69c2161fa -->

```csharp
public System.Attribute InnoEditor.Inspection.InspectorAttributeDrawContext.attribute { get; }
```

Gets the attribute currently invoking a drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L55).

## `isReadOnly`

<a id="api-0b6cc4ae7b23af88"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.isReadOnly e087f0b53b7c42cddfb876cf72b070d61b0fbda8312ccdfef0600530a546282f -->

```csharp
public bool InnoEditor.Inspection.InspectorAttributeDrawContext.isReadOnly { get; set; }
```

Gets or sets whether the property control is read-only in the Inspector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L65).

## `isVisible`

<a id="api-563739ae6d301c80"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.isVisible 33f743e2b74c16f3a5244ce15d6114045f1f3b8edde274aa196dfb0d559e3737 -->

```csharp
public bool InnoEditor.Inspection.InspectorAttributeDrawContext.isVisible { get; set; }
```

Gets or sets whether the complete property row is visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L60).

## `label`

<a id="api-0f88787639e6db8c"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.label 049fc323bd6ac771b93616614449babf86760cafce3f6deb3f1d0829c08e42cd -->

```csharp
public string InnoEditor.Inspection.InspectorAttributeDrawContext.label { get; set; }
```

Gets or sets the visible property label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L70).

## `maximum`

<a id="api-4a6539ab3ce0046d"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.maximum 6b6a9140619347b5943135bfa3589b34e962315f97bba8831ec2e5c2ed45c794 -->

```csharp
public double? InnoEditor.Inspection.InspectorAttributeDrawContext.maximum { get; set; }
```

Gets or sets an optional inclusive numeric upper bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L85).

## `member`

<a id="api-2b12fff339f8020d"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.member 2058ed112ad99e6da303dcee0fc30d798adfba18cd6ff6aa386709d174577608 -->

```csharp
public System.Reflection.MemberInfo InnoEditor.Inspection.InspectorAttributeDrawContext.member { get; }
```

Gets the reflected field or property carrying the current attribute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L40).

## `minimum`

<a id="api-82e5efbc2675ce23"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.minimum 4e091f6d85dd5f1d1e08ccc33125932534d4e82b98cf2f9124d70a58aae7550b -->

```csharp
public double? InnoEditor.Inspection.InspectorAttributeDrawContext.minimum { get; set; }
```

Gets or sets an optional inclusive numeric lower bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L80).

## `owner`

<a id="api-5a02e118e57e3f05"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.owner 9db0c6ccf30b3879cf6efbb36b05fa829bf69b0a68550fabe1664a7146c2dba5 -->

```csharp
public object InnoEditor.Inspection.InspectorAttributeDrawContext.owner { get; }
```

Gets the object that owns the annotated member.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L35).

## `path`

<a id="api-834f147c54677763"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.path 372d6e320c2468ca6fc402dab2361c0ca53e474ca4eb1946048f799ea0337ee4 -->

```csharp
public string InnoEditor.Inspection.InspectorAttributeDrawContext.path { get; }
```

Gets the stable Inspector control path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L50).

## `property`

<a id="api-04db3952453c6e44"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.property d5c5e682911c720a50a52f846cb961b53a36ae272d3792143d6d08381b4006bd -->

```csharp
public InnoEngine.Serialization.SerializedProperty? InnoEditor.Inspection.InspectorAttributeDrawContext.property { get; }
```

Gets the root serialized property when one is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L45).

## `tooltip`

<a id="api-e35a65d75e9e1a01"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawContext.tooltip bcca7c92fc0ad510cb3b0e39dec0574c4f1067771978ba5faa247c4d1c4b9e7e -->

```csharp
public string InnoEditor.Inspection.InspectorAttributeDrawContext.tooltip { get; set; }
```

Gets or sets optional hover help for the property label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawContext.cs#L75).
