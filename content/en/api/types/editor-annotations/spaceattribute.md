---
title: "SpaceAttribute"
description: "Reference for SpaceAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.fb128dbc166fbcaa
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `SpaceAttribute`

This reference describes `SpaceAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dbb776ba2d4bf563) | Method |
| [`height`](#api-bff9fd2adf2d80ac) | Property |

## Type declaration

<a id="api-fb128dbc166fbcaa"></a>
<!-- api: T:Inno.Editor.Annotations.SpaceAttribute 34c5b712da42b892440f8929a2c3600811987711916905f3c46e5c609eaa8531 -->

```csharp
public sealed class Inno.Editor.Annotations.SpaceAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Inserts vertical spacing before the annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L86).

## `#ctor`

<a id="api-dbb776ba2d4bf563"></a>
<!-- api: M:Inno.Editor.Annotations.SpaceAttribute.#ctor(System.Single) 8f2d6432752fe2c6088669f171cae03f4709af8c3ae85e9a15451289c7a71f48 -->

```csharp
public Inno.Editor.Annotations.SpaceAttribute.SpaceAttribute(float height = 8)
```

Creates a spacing decorator.

**Parameter `height`:** Non-negative logical pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L94).

## `height`

<a id="api-bff9fd2adf2d80ac"></a>
<!-- api: P:Inno.Editor.Annotations.SpaceAttribute.height 2ba9b05990479667fd663d66d694ba01ce3aba9772e28ae17a80fda5cd340ccd -->

```csharp
public float Inno.Editor.Annotations.SpaceAttribute.height { get; }
```

Gets the logical pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L103).
