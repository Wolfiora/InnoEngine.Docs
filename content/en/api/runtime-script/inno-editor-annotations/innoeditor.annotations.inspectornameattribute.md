---
title: "InspectorNameAttribute"
description: "Reference for InspectorNameAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.f1415e8cc7b3c8db
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `InspectorNameAttribute`

This reference describes `InspectorNameAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fbeb20b5abc9a26c) | Method |
| [`name`](#api-671b0bd52635c042) | Property |

## Type declaration

<a id="api-f1415e8cc7b3c8db"></a>
<!-- api: T:InnoEditor.Annotations.InspectorNameAttribute f07673d217dd63956b0cb4f91dab24f30f2179ac636f5c522bae6ca22745894c -->

```csharp
public sealed class InnoEditor.Annotations.InspectorNameAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Replaces the generated Inspector label for one property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L134).

## `#ctor`

<a id="api-fbeb20b5abc9a26c"></a>
<!-- api: M:InnoEditor.Annotations.InspectorNameAttribute.#ctor(System.String) 06c4c74c9c1d8b24ff33b6f2c568536fde5163ad4ad472caaf132bd8e30679a0 -->

```csharp
public InnoEditor.Annotations.InspectorNameAttribute.InspectorNameAttribute(string name)
```

Creates a label override.

**Parameter `name`:** Non-empty visible label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L142).

## `name`

<a id="api-671b0bd52635c042"></a>
<!-- api: P:InnoEditor.Annotations.InspectorNameAttribute.name a36eacf83ececb7c06af08a5e48794a05621c3b4091a8807a851345d90e79d80 -->

```csharp
public string InnoEditor.Annotations.InspectorNameAttribute.name { get; }
```

Gets the visible label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L151).
