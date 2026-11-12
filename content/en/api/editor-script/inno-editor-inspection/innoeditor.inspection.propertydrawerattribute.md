---
title: "PropertyDrawerAttribute"
description: "Reference for PropertyDrawerAttribute in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.f1ccaed7a1176cd2
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# `PropertyDrawerAttribute`

This reference describes `PropertyDrawerAttribute` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cd788d1b8dd9617d) | Method |
| [`priority`](#api-92f9880903504620) | Property |
| [`targetType`](#api-5421142fbe9b17cb) | Property |
| [`useForChildren`](#api-381fc017abea106f) | Property |

## Type declaration

<a id="api-f1ccaed7a1176cd2"></a>
<!-- api: T:InnoEditor.Inspection.PropertyDrawerAttribute 7e27e9535452c08d6f386aab19d753ec2cc91053385a8d2bd356044ed8502656 -->

```csharp
public sealed class InnoEditor.Inspection.PropertyDrawerAttribute : System.Attribute
```

Associates a property drawer with a declared property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L9).

## `#ctor`

<a id="api-cd788d1b8dd9617d"></a>
<!-- api: M:InnoEditor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32) 417b95e2452a908bb4b8c09f4e591ab9903a6dc8dfdf74e760d81910f2cd6cf2 -->

```csharp
public InnoEditor.Inspection.PropertyDrawerAttribute.PropertyDrawerAttribute(System.Type targetType, bool useForChildren = false, int priority = 0)
```

Creates a property drawer registration.

**Parameter `targetType`:** The declared serialized property type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived property types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Throws `System.ArgumentNullException`:** Thrown when `targetType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L41).

## `priority`

<a id="api-92f9880903504620"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawerAttribute.priority 74738981c3208d80ddd866ef4a641b344f41ed9a52abe23c6f08d59b58b0a7f7 -->

```csharp
public int InnoEditor.Inspection.PropertyDrawerAttribute.priority { get; }
```

Gets the tie-breaking registration priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L24).

## `targetType`

<a id="api-5421142fbe9b17cb"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawerAttribute.targetType e7c876477773e6557048fafe113e8580dbcbb8352aba9bce6dd8f25fa67bca1c -->

```csharp
public System.Type InnoEditor.Inspection.PropertyDrawerAttribute.targetType { get; }
```

Gets the declared property type handled by the drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L14).

## `useForChildren`

<a id="api-381fc017abea106f"></a>
<!-- api: P:InnoEditor.Inspection.PropertyDrawerAttribute.useForChildren ef703e98af9027e29885d9c2b1b90b2c9fad33649d026a7709ad5f3aea0b9221 -->

```csharp
public bool InnoEditor.Inspection.PropertyDrawerAttribute.useForChildren { get; }
```

Gets whether assignable derived types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/PropertyDrawing/PropertyDrawerAttribute.cs#L19).
