---
title: "InspectorAttributeDrawerAttribute"
description: "Reference for InspectorAttributeDrawerAttribute in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.471ed45fcb2349df
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `InspectorAttributeDrawerAttribute`

This reference describes `InspectorAttributeDrawerAttribute` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fcfb3d23d8263faa) | Method |
| [`priority`](#api-581bc9c711dd2813) | Property |
| [`targetType`](#api-fc422136396e26b6) | Property |
| [`useForChildren`](#api-215a20e2b00daf79) | Property |

## Type declaration

<a id="api-471ed45fcb2349df"></a>
<!-- api: T:InnoEditor.Inspection.InspectorAttributeDrawerAttribute 5e2b93e2b3b96f6cd3cf3bf55c57ea7a54fb96a3e2420f6e2e79cdd9596494b1 -->

```csharp
public sealed class InnoEditor.Inspection.InspectorAttributeDrawerAttribute : System.Attribute
```

Associates an Inspector attribute drawer with an attribute type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L9).

## `#ctor`

<a id="api-fcfb3d23d8263faa"></a>
<!-- api: M:InnoEditor.Inspection.InspectorAttributeDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32) 86e5f44738c56fa8396bdd5ab897e9d65cd2d7992391624eba3ee6a780815305 -->

```csharp
public InnoEditor.Inspection.InspectorAttributeDrawerAttribute.InspectorAttributeDrawerAttribute(System.Type targetType, bool useForChildren = false, int priority = 0)
```

Creates an Inspector attribute drawer registration.

**Parameter `targetType`:** Attribute type handled by the drawer.

**Parameter `useForChildren`:** Whether derived attribute types are accepted.

**Parameter `priority`:** Tie-breaking priority after inheritance distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L23).

## `priority`

<a id="api-581bc9c711dd2813"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawerAttribute.priority 511d8e00474b16d814fcd2e7bb15be6472fc210b67140a6b87d77e04c29fd849 -->

```csharp
public int InnoEditor.Inspection.InspectorAttributeDrawerAttribute.priority { get; }
```

Gets the registration priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L49).

## `targetType`

<a id="api-fc422136396e26b6"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawerAttribute.targetType 89e6e9c44458148e1afbbd2d8de4c447eff37148ded70339ffb3d86772c059d2 -->

```csharp
public System.Type InnoEditor.Inspection.InspectorAttributeDrawerAttribute.targetType { get; }
```

Gets the handled attribute type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L39).

## `useForChildren`

<a id="api-215a20e2b00daf79"></a>
<!-- api: P:InnoEditor.Inspection.InspectorAttributeDrawerAttribute.useForChildren 735ed6e6f0682e1f36e4294c0ae20716ba5fb8293d6cf70ad5998f20b5e81c1f -->

```csharp
public bool InnoEditor.Inspection.InspectorAttributeDrawerAttribute.useForChildren { get; }
```

Gets whether derived attribute types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/AttributeDrawing/InspectorAttributeDrawerAttribute.cs#L44).
