---
title: "HeaderAttribute"
description: "Reference for HeaderAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.c9953d25080c9cd1
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `HeaderAttribute`

This reference describes `HeaderAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-030405d68c3d2c10) | Method |
| [`description`](#api-66f7aefaf76d92d7) | Property |
| [`title`](#api-15cd1080ccbe6502) | Property |

## Type declaration

<a id="api-c9953d25080c9cd1"></a>
<!-- api: T:Inno.Editor.Annotations.HeaderAttribute fbf95d5aab837f1b5e7a99b6c837eec477e997ccceddb236805d849fa29798d4 -->

```csharp
public sealed class Inno.Editor.Annotations.HeaderAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Starts a visually separated Inspector section before the annotated property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L27).

## `#ctor`

<a id="api-030405d68c3d2c10"></a>
<!-- api: M:Inno.Editor.Annotations.HeaderAttribute.#ctor(System.String,System.String) ef848f9f36b6f40634caa994deb243ee84bb8e0bb6ce04e5382706467252af7a -->

```csharp
public Inno.Editor.Annotations.HeaderAttribute.HeaderAttribute(string title, string description = "")
```

Creates a section header with optional explanatory text.

**Parameter `title`:** Visible section title.

**Parameter `description`:** Optional explanatory text displayed when the title is hovered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L38).

## `description`

<a id="api-66f7aefaf76d92d7"></a>
<!-- api: P:Inno.Editor.Annotations.HeaderAttribute.description 5629fe67b3face4e1863edcf6d4b0934c525bb2dbeb4028df6febc13b65077c1 -->

```csharp
public string Inno.Editor.Annotations.HeaderAttribute.description { get; }
```

Gets the optional explanatory text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L55).

## `title`

<a id="api-15cd1080ccbe6502"></a>
<!-- api: P:Inno.Editor.Annotations.HeaderAttribute.title 08f9b6a789f7607d4e61fd67ae3d218c26f83e63c6ca0ac3b175437d7a9144c9 -->

```csharp
public string Inno.Editor.Annotations.HeaderAttribute.title { get; }
```

Gets the visible section title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L50).
