---
title: "RangeAttribute"
description: "Reference for RangeAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.c356abaced7b2e55
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `RangeAttribute`

This reference describes `RangeAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-573167e80a1e3e1a) | Method |
| [`maximum`](#api-47c922fa4cd3454e) | Property |
| [`minimum`](#api-c4af0478173dea83) | Property |

## Type declaration

<a id="api-c356abaced7b2e55"></a>
<!-- api: T:Inno.Editor.Annotations.RangeAttribute d44f111da092ba1302018b6083197d393b96d292ae771266822337444261ec91 -->

```csharp
public sealed class Inno.Editor.Annotations.RangeAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Constrains a numeric Inspector control to an inclusive range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L158).

## `#ctor`

<a id="api-573167e80a1e3e1a"></a>
<!-- api: M:Inno.Editor.Annotations.RangeAttribute.#ctor(System.Double,System.Double) 7205d4b1e834c59865cf055738b99dba9bd4d41d4b1150606e8fb9bf3e8592ca -->

```csharp
public Inno.Editor.Annotations.RangeAttribute.RangeAttribute(double minimum, double maximum)
```

Creates an inclusive numeric range.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L169).

## `maximum`

<a id="api-47c922fa4cd3454e"></a>
<!-- api: P:Inno.Editor.Annotations.RangeAttribute.maximum 0c570b2f3457a228ebfe958009d12713f556bd97c2bdea9e299cf4debeb3ab6d -->

```csharp
public double Inno.Editor.Annotations.RangeAttribute.maximum { get; }
```

Gets the inclusive upper bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L189).

## `minimum`

<a id="api-c4af0478173dea83"></a>
<!-- api: P:Inno.Editor.Annotations.RangeAttribute.minimum 099507951bf9705a9bc6fd29347d8f54a411059d5cb311d2f6e0b06a903bd897 -->

```csharp
public double Inno.Editor.Annotations.RangeAttribute.minimum { get; }
```

Gets the inclusive lower bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L184).
