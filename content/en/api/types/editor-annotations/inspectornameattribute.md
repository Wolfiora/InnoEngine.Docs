---
title: "InspectorNameAttribute"
description: "Reference for InspectorNameAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.787ddfcf9a178fc6
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `InspectorNameAttribute`

This reference describes `InspectorNameAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-335743f93387e718) | Method |
| [`name`](#api-4fcabed3fb39d7cc) | Property |

## Type declaration

<a id="api-787ddfcf9a178fc6"></a>
<!-- api: T:Inno.Editor.Annotations.InspectorNameAttribute d8a32b97bc0f8337533c21e6ebbb7f6da52b21c286fc14156c37b00eb877f79a -->

```csharp
public sealed class Inno.Editor.Annotations.InspectorNameAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Replaces the generated Inspector label for one property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L134).

## `#ctor`

<a id="api-335743f93387e718"></a>
<!-- api: M:Inno.Editor.Annotations.InspectorNameAttribute.#ctor(System.String) eefc6e9f3e1642348f4f05f95880bef2dd770416d8fd578974aca1d37595f45b -->

```csharp
public Inno.Editor.Annotations.InspectorNameAttribute.InspectorNameAttribute(string name)
```

Creates a label override.

**Parameter `name`:** Non-empty visible label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L142).

## `name`

<a id="api-4fcabed3fb39d7cc"></a>
<!-- api: P:Inno.Editor.Annotations.InspectorNameAttribute.name bc040dc8cb41ae13f2f0b551e028b8639efba17bb5ffe8c3e2731fca3880728c -->

```csharp
public string Inno.Editor.Annotations.InspectorNameAttribute.name { get; }
```

Gets the visible label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L151).
