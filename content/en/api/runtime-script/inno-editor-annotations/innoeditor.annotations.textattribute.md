---
title: "TextAttribute"
description: "Reference for TextAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.4e915ef438a9cc21
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `TextAttribute`

This reference describes `TextAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2f85474c45deb4e2) | Method |
| [`text`](#api-2cc10f1884dd47b2) | Property |

## Type declaration

<a id="api-4e915ef438a9cc21"></a>
<!-- api: T:InnoEditor.Annotations.TextAttribute 316cdd55264468ed239f31ad0c0948eec416bd96ea56af2622b7158da447de0f -->

```csharp
public sealed class InnoEditor.Annotations.TextAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Draws persistent wrapped explanatory text before the annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L62).

## `#ctor`

<a id="api-2f85474c45deb4e2"></a>
<!-- api: M:InnoEditor.Annotations.TextAttribute.#ctor(System.String) 69052b578faff59d905a82859ab22d85fb80b802305cb18eb45a33cfa2472a81 -->

```csharp
public InnoEditor.Annotations.TextAttribute.TextAttribute(string text)
```

Creates persistent Inspector text.

**Parameter `text`:** Non-empty text displayed in the Inspector layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L70).

## `text`

<a id="api-2cc10f1884dd47b2"></a>
<!-- api: P:InnoEditor.Annotations.TextAttribute.text 190ac0b2921619baa5602dd9a587c7ecf9eed869c328fd170bbc0e1d37d86f97 -->

```csharp
public string InnoEditor.Annotations.TextAttribute.text { get; }
```

Gets the persistent Inspector text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L79).
