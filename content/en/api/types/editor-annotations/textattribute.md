---
title: "TextAttribute"
description: "Reference for TextAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.551ca5f0e0aae7e7
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `TextAttribute`

This reference describes `TextAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-77a31fa540b4e72a) | Method |
| [`text`](#api-d8254cfb20d53085) | Property |

## Type declaration

<a id="api-551ca5f0e0aae7e7"></a>
<!-- api: T:Inno.Editor.Annotations.TextAttribute 0cfbf0900b069bb4cd4d2475568481ce67ca2e97fa9e34c49bb5b6183c9f5eb6 -->

```csharp
public sealed class Inno.Editor.Annotations.TextAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Draws persistent wrapped explanatory text before the annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L62).

## `#ctor`

<a id="api-77a31fa540b4e72a"></a>
<!-- api: M:Inno.Editor.Annotations.TextAttribute.#ctor(System.String) bfe0e4cbd638a9dd461249fa42d3c8461137f2e0deed9a3d5fdde327d073f875 -->

```csharp
public Inno.Editor.Annotations.TextAttribute.TextAttribute(string text)
```

Creates persistent Inspector text.

**Parameter `text`:** Non-empty text displayed in the Inspector layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L70).

## `text`

<a id="api-d8254cfb20d53085"></a>
<!-- api: P:Inno.Editor.Annotations.TextAttribute.text bd2195dd732ca79fbd07b0a1091dc33282296e383daec5c353d27089ecd3b5db -->

```csharp
public string Inno.Editor.Annotations.TextAttribute.text { get; }
```

Gets the persistent Inspector text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L79).
