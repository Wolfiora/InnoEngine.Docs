---
title: "InspectorCondition"
description: "Reference for InspectorCondition in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.069fda85c5928e67
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `InspectorCondition`

This reference describes `InspectorCondition` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Assigned`](#api-e2c9dd0ccf5dddce) | Field |
| [`Equal`](#api-cb61260927d48807) | Field |
| [`Falsy`](#api-9a42ebc1ea7c1300) | Field |
| [`NotAssigned`](#api-d18a1ec0bbdb7ee8) | Field |
| [`NotEqual`](#api-aaed0cb9f42b96c1) | Field |
| [`NotNull`](#api-985e8e67636c2509) | Field |
| [`Null`](#api-ab596b8de0abf293) | Field |
| [`Truthy`](#api-aef06bae2fd89a2f) | Field |

## Type declaration

<a id="api-069fda85c5928e67"></a>
<!-- api: T:Inno.Editor.Annotations.InspectorCondition 75dd3a58b5f98b9fb6fb3f45c3ea4d59bffcc6057ed37344a3c54eee9f721c36 -->

```csharp
public enum Inno.Editor.Annotations.InspectorCondition : int
```

Defines the comparison used by conditional Inspector presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L203).

## `Assigned`

<a id="api-e2c9dd0ccf5dddce"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.Assigned 129b2cca0c6bddbdf67056c94600b1d6db019b6a096ef8de041c6aac956377c5 -->

```csharp
Inno.Editor.Annotations.InspectorCondition.Assigned = 6
```

Requires a reference-like value to expose an assigned resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L238).

## `Equal`

<a id="api-cb61260927d48807"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.Equal 080bb1e3bb1aa22cc1e7f7c72b05fb6a6af526f063ce0c11531e3477ccdb308f -->

```csharp
Inno.Editor.Annotations.InspectorCondition.Equal = 2
```

Compares the value with the supplied expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L218).

## `Falsy`

<a id="api-9a42ebc1ea7c1300"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.Falsy e3f3afe5ddd2fdd14c0325cf4eb066586399f41648dfb7d63e2f38640319fb2f -->

```csharp
Inno.Editor.Annotations.InspectorCondition.Falsy = 1
```

Shows a value when it evaluates as false, null, or empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L213).

## `NotAssigned`

<a id="api-d18a1ec0bbdb7ee8"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.NotAssigned 4bbb342f88b0b0f33a2e541509b1008b1386057d8d316992daca7970b8cae064 -->

```csharp
Inno.Editor.Annotations.InspectorCondition.NotAssigned = 7
```

Requires a reference-like value not to expose an assigned resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L243).

## `NotEqual`

<a id="api-aaed0cb9f42b96c1"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.NotEqual 7c456ae26a56f53626d26a31fa9bcd7c283d1d424cbd480c0ec01415efd45703 -->

```csharp
Inno.Editor.Annotations.InspectorCondition.NotEqual = 3
```

Requires the value to differ from the supplied expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L223).

## `NotNull`

<a id="api-985e8e67636c2509"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.NotNull 8f9a1e293b34aeb6ee81e243de2b31553c7d67b4b5e7af01af0b775ccdd8351a -->

```csharp
Inno.Editor.Annotations.InspectorCondition.NotNull = 5
```

Requires a non-null value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L233).

## `Null`

<a id="api-ab596b8de0abf293"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.Null e071ccff757abc86a6094c82748a79fb20145a443fed515fe588a0abf5dc3f0d -->

```csharp
Inno.Editor.Annotations.InspectorCondition.Null = 4
```

Requires a null value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L228).

## `Truthy`

<a id="api-aef06bae2fd89a2f"></a>
<!-- api: F:Inno.Editor.Annotations.InspectorCondition.Truthy 42e4ea10df82e26eec7b4cbe4dcc62758ed091edba5f0fbc35d221568e661c3b -->

```csharp
Inno.Editor.Annotations.InspectorCondition.Truthy = 0
```

Shows a value when it evaluates as true or non-empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L208).
