---
title: "RangeAttribute"
description: "Reference for RangeAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.1c8d63cdf2f480c0
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `RangeAttribute`

This reference describes `RangeAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2d989dfc709353fd) | Method |
| [`maximum`](#api-4b9616ed079c6eae) | Property |
| [`minimum`](#api-9913359a05b39f76) | Property |

## Type declaration

<a id="api-1c8d63cdf2f480c0"></a>
<!-- api: T:InnoEditor.Annotations.RangeAttribute 6561364105d0d9725944b9e37f585a43c1e48ccc1cc8dc1c04312be50f0a3e08 -->

```csharp
public sealed class InnoEditor.Annotations.RangeAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Constrains a numeric Inspector control to an inclusive range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L158).

## `#ctor`

<a id="api-2d989dfc709353fd"></a>
<!-- api: M:InnoEditor.Annotations.RangeAttribute.#ctor(System.Double,System.Double) 51a5ccbae9e3c945f616d0032d5e6b9896d375c8afa0db8e76d786ce0e5321d1 -->

```csharp
public InnoEditor.Annotations.RangeAttribute.RangeAttribute(double minimum, double maximum)
```

Creates an inclusive numeric range.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L169).

## `maximum`

<a id="api-4b9616ed079c6eae"></a>
<!-- api: P:InnoEditor.Annotations.RangeAttribute.maximum 933ea38dbb15c5b0e836661991341f72f1d5b2a8182daf0076f882f4d177bae8 -->

```csharp
public double InnoEditor.Annotations.RangeAttribute.maximum { get; }
```

Gets the inclusive upper bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L189).

## `minimum`

<a id="api-9913359a05b39f76"></a>
<!-- api: P:InnoEditor.Annotations.RangeAttribute.minimum 98e3468f96c3c1860adaa56403317c626286efaf59a8185bbf4a38ef8c32a67d -->

```csharp
public double InnoEditor.Annotations.RangeAttribute.minimum { get; }
```

Gets the inclusive lower bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L184).
