---
title: "HeaderAttribute"
description: "Reference for HeaderAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.b3f6323c5079f412
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `HeaderAttribute`

This reference describes `HeaderAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f57d396f6f6e4ab4) | Method |
| [`description`](#api-cdc115747c958fc6) | Property |
| [`title`](#api-f2fa07f078c08dde) | Property |

## Type declaration

<a id="api-b3f6323c5079f412"></a>
<!-- api: T:InnoEditor.Annotations.HeaderAttribute 8ce3fc22f081727f63082f509ebdc867625d42f26c848c43a4e2243b1bb58257 -->

```csharp
public sealed class InnoEditor.Annotations.HeaderAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Starts a visually separated Inspector section before the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L27).

## `#ctor`

<a id="api-f57d396f6f6e4ab4"></a>
<!-- api: M:InnoEditor.Annotations.HeaderAttribute.#ctor(System.String,System.String) 7df717cb80594a00f5e7f3618f3da6be170c6240d65f5aa8632bc8b04cd66b7a -->

```csharp
public InnoEditor.Annotations.HeaderAttribute.HeaderAttribute(string title, string description = "")
```

Creates a section header with optional explanatory text.

**Parameter `title`:** Visible section title.

**Parameter `description`:** Optional explanatory text displayed when the title is hovered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L38).

## `description`

<a id="api-cdc115747c958fc6"></a>
<!-- api: P:InnoEditor.Annotations.HeaderAttribute.description 6a6b1a36de21edd67a14537eaa0a6bf4f42b2f52f7174d77de0fb53da5c8246a -->

```csharp
public string InnoEditor.Annotations.HeaderAttribute.description { get; }
```

Gets the optional explanatory text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L55).

## `title`

<a id="api-f2fa07f078c08dde"></a>
<!-- api: P:InnoEditor.Annotations.HeaderAttribute.title 94e6d41ffe35afae5984268d18fb031c08ef2978d5e819a4f9733ecb5dd4daad -->

```csharp
public string InnoEditor.Annotations.HeaderAttribute.title { get; }
```

Gets the visible section title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L50).
