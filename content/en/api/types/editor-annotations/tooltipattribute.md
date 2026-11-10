---
title: "TooltipAttribute"
description: "Reference for TooltipAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.08195c185416d2cf
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `TooltipAttribute`

This reference describes `TooltipAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-673f4f588d166bb3) | Method |
| [`text`](#api-be294098562ada9e) | Property |

## Type declaration

<a id="api-08195c185416d2cf"></a>
<!-- api: T:Inno.Editor.Annotations.TooltipAttribute 9c7c6e594c0486f28654f4e8c0b25a35681cecfc3ba8790a7151f38efee5244c -->

```csharp
public sealed class Inno.Editor.Annotations.TooltipAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Provides hover help for one Inspector property label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L110).

## `#ctor`

<a id="api-673f4f588d166bb3"></a>
<!-- api: M:Inno.Editor.Annotations.TooltipAttribute.#ctor(System.String) 34e5846b8ad9f2bc0593675a7397a6c0d3894d105385519bff498f4e40f0209d -->

```csharp
public Inno.Editor.Annotations.TooltipAttribute.TooltipAttribute(string text)
```

Creates property hover help.

**Parameter `text`:** Non-empty tooltip text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L118).

## `text`

<a id="api-be294098562ada9e"></a>
<!-- api: P:Inno.Editor.Annotations.TooltipAttribute.text 760ffd8dfb8b393deb2cb3bfcfd31076e13abbfaa4c8eb012220cd5b865ee9ec -->

```csharp
public string Inno.Editor.Annotations.TooltipAttribute.text { get; }
```

Gets the tooltip text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L127).
