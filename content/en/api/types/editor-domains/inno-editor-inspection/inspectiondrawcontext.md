---
title: "InspectionDrawContext"
description: "Reference for InspectionDrawContext in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.03c64b5591aa5f92
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectionDrawContext`

This reference describes `InspectionDrawContext` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`DrawProperties`](#api-88f1d869e25a209d) | Method |
| [`DrawProperty`](#api-e85f1abb8e0c05c0) | Method |
| [```GetProperty``1```](#api-7c7a19d83652ff11) | Method |
| [`HasProperty`](#api-fd90c47a4171c194) | Method |
| [`TryDrawInline`](#api-b7060aed018bd937) | Method |
| [`editorContext`](#api-9b4e610802256428) | Property |
| [`interactions`](#api-624e86869a649aae) | Property |
| [`properties`](#api-6860d9be176cc5a3) | Property |
| [`target`](#api-8030c3472b70997c) | Property |

## Type declaration

<a id="api-03c64b5591aa5f92"></a>
<!-- api: T:Inno.Editor.Inspection.InspectionDrawContext 3351d5a657b34a4c4adfe4e98b32f2a1086b0b18aa8531a2517380ae98d39df3 -->

```csharp
public sealed class Inno.Editor.Inspection.InspectionDrawContext
```

Provides services and state to an inspector drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L15).

## `DrawProperties`

<a id="api-88f1d869e25a209d"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawContext.DrawProperties 7d35416211bad59beb37a6ab04ea3d86226d2aa5d2679947fcd9f91203c16a11 -->

```csharp
public void Inno.Editor.Inspection.InspectionDrawContext.DrawProperties()
```

Draws every runtime-visible serialized property through the shared attribute and property
drawer pipeline.

**Constraints:** Properties without an explicit `Header` attribute are placed in the shared implicit
Properties section. Custom drawers may call this method before or after their own sections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L128).

## `DrawProperty`

<a id="api-e85f1abb8e0c05c0"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawContext.DrawProperty(System.String) 269e8d791af0952974cdd843308b066d0c32e38915c9aecc8b79473d1ad0e4fb -->

```csharp
public void Inno.Editor.Inspection.InspectionDrawContext.DrawProperty(string propertyName)
```

Draws one named property with its ordinary editor, history, and validation behavior.

**Parameter `propertyName`:** Exact serialized property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L110).

## ```GetProperty``1```

<a id="api-7c7a19d83652ff11"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawContext.GetProperty``1(System.String) c6119d8b900d09ff2cf9ffae24a728dcc8f4b50b6e44cc7d49bc9556c584e733 -->

```csharp
public T Inno.Editor.Inspection.InspectionDrawContext.GetProperty<T>(string propertyName)
```

Reads one runtime-visible serialized property from the target.

**Type parameter `T`:** Expected property value type.

**Parameter `propertyName`:** Exact serialized property name.

**Returns:** The current strongly typed property value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L94).

## `HasProperty`

<a id="api-fd90c47a4171c194"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawContext.HasProperty(System.String) b1167e9f171d548561467aae727bd358a0acd7ba15efc15d5204e56ecf465a70 -->

```csharp
public bool Inno.Editor.Inspection.InspectionDrawContext.HasProperty(string propertyName)
```

Gets whether the target exposes one runtime-visible serialized property.

**Parameter `propertyName`:** Exact serialized property name.

**Returns:** `true` when the property is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L75).

## `TryDrawInline`

<a id="api-b7060aed018bd937"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawContext.TryDrawInline(System.Object) 14fde7e67b68158d3802ac25095c5133463249ef99ac5c886230fec305680626 -->

```csharp
public bool Inno.Editor.Inspection.InspectionDrawContext.TryDrawInline(object target)
```

Draws an exact target-specific body inside the caller's existing Inspector card.

**Parameter `target`:** Nested target whose exact registered drawer should render.

**Returns:** `true` when an exact drawer rendered the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L48).

## `editorContext`

<a id="api-9b4e610802256428"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawContext.editorContext cd113e1468e2c950fcfd3aeac829f0829a97289145906cbc60a66b3c0acbf590 -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Inspection.InspectionDrawContext.editorContext { get; }
```

Gets the shared editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L22).

## `interactions`

<a id="api-624e86869a649aae"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawContext.interactions abbceb44b7af736d29a49f612ada01570b7ec2b73c6fc1b3ab28ade7c6a94d2f -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Inspection.InspectionDrawContext.interactions { get; }
```

Gets the active editor interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L27).

## `properties`

<a id="api-6860d9be176cc5a3"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawContext.properties dd8ff7308719f6951051e2f7e86a180c43223d54e93f8e61a656fc05542d333d -->

```csharp
public Inno.Editor.Inspection.SerializedPropertyRenderer Inno.Editor.Inspection.InspectionDrawContext.properties { get; }
```

Gets the serialized property renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L37).

## `target`

<a id="api-8030c3472b70997c"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawContext.target c29de2b4588e0253cce06859ba4b5b7766e2d020f6dd1924fdb0e041d4223955 -->

```csharp
public object Inno.Editor.Inspection.InspectionDrawContext.target { get; }
```

Gets the selected target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawContext.cs#L32).
