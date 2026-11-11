---
title: "InspectorAttributeDrawerAttribute"
description: "Reference for InspectorAttributeDrawerAttribute in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.c7b3c1c27c9208db
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectorAttributeDrawerAttribute`

This reference describes `InspectorAttributeDrawerAttribute` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b1a7358a971b1060) | Method |
| [`priority`](#api-191636c909d9ccf5) | Property |
| [`targetType`](#api-055c85dfa6e6a7ec) | Property |
| [`useForChildren`](#api-e25ef8917ffe4e04) | Property |

## Type declaration

<a id="api-c7b3c1c27c9208db"></a>
<!-- api: T:Inno.Editor.Inspection.InspectorAttributeDrawerAttribute 4ca42ec066c8940d14ff54ec2b0b68e8c0f7bbba38c5cce5eeb4ce4b5e1672bf -->

```csharp
public sealed class Inno.Editor.Inspection.InspectorAttributeDrawerAttribute : System.Attribute
```

Associates an Inspector attribute drawer with an attribute type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L9).

## `#ctor`

<a id="api-b1a7358a971b1060"></a>
<!-- api: M:Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32) 61d3f71254d953901ed71e3804bfb443ff1c3c154e49bb0b25b203e97c7f5d43 -->

```csharp
public Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.InspectorAttributeDrawerAttribute(System.Type targetType, bool useForChildren = false, int priority = 0)
```

Creates an Inspector attribute drawer registration.

**Parameter `targetType`:** Attribute type handled by the drawer.

**Parameter `useForChildren`:** Whether derived attribute types are accepted.

**Parameter `priority`:** Tie-breaking priority after inheritance distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L23).

## `priority`

<a id="api-191636c909d9ccf5"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.priority f74f154e380d819a089cdd0f3f7d33badc9e0263a5f8032c46009b0d9cd967c2 -->

```csharp
public int Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.priority { get; }
```

Gets the registration priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L49).

## `targetType`

<a id="api-055c85dfa6e6a7ec"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.targetType 8ea6fc5436d21415cab20ee7ed317ad204b2fa7fedc7665e30dd46a67b8270a7 -->

```csharp
public System.Type Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.targetType { get; }
```

Gets the handled attribute type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L39).

## `useForChildren`

<a id="api-e25ef8917ffe4e04"></a>
<!-- api: P:Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.useForChildren daaede29bf6114d4015afc43cc5cdf3921498c33ef0b86276e0a1281a77f9de5 -->

```csharp
public bool Inno.Editor.Inspection.InspectorAttributeDrawerAttribute.useForChildren { get; }
```

Gets whether derived attribute types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L44).
