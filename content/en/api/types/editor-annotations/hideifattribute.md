---
title: "HideIfAttribute"
description: "Reference for HideIfAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.0043bd3df1594a32
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `HideIfAttribute`

This reference describes `HideIfAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ed64a9030e2dab3b) | Method |
| [`#ctor`](#api-33b9be8adaca3905) | Method |
| [`#ctor`](#api-82c9dd0764fe5881) | Method |
| [`condition`](#api-df4143be36524361) | Property |
| [`expectedValue`](#api-3fcdfe0145c9358b) | Property |
| [`memberName`](#api-483062ff5f410ada) | Property |

## Type declaration

<a id="api-0043bd3df1594a32"></a>
<!-- api: T:Inno.Editor.Annotations.HideIfAttribute c58eb5e62bf519a6d2f2aa2ecd64ad9ab1fd3b385f3aaac39971c3bdd7b7ff8d -->

```csharp
public sealed class Inno.Editor.Annotations.HideIfAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Hides the annotated Inspector property when a sibling member satisfies a condition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L328).

## `#ctor`

<a id="api-ed64a9030e2dab3b"></a>
<!-- api: M:Inno.Editor.Annotations.HideIfAttribute.#ctor(System.String,Inno.Editor.Annotations.InspectorCondition) c0c43a68e05a57a62b07dbd1c13eeeb5c98ca0a46fa3d5e98b1938bed992e053 -->

```csharp
public Inno.Editor.Annotations.HideIfAttribute.HideIfAttribute(string memberName, Inno.Editor.Annotations.InspectorCondition condition)
```

Creates a named condition that does not require an expected value.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `condition`:** Comparison applied to the sibling value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L367).

## `#ctor`

<a id="api-33b9be8adaca3905"></a>
<!-- api: M:Inno.Editor.Annotations.HideIfAttribute.#ctor(System.String,System.Object) 2fdcb49cf4e0cbbc25d24fc0cb8f09f71c21961d8466695ad87d2bf18267f131 -->

```csharp
public Inno.Editor.Annotations.HideIfAttribute.HideIfAttribute(string memberName, object? expectedValue)
```

Creates an equality condition.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `expectedValue`:** Compile-time value that hides the property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L350).

## `#ctor`

<a id="api-82c9dd0764fe5881"></a>
<!-- api: M:Inno.Editor.Annotations.HideIfAttribute.#ctor(System.String) faa5b79c5ce0133199b40359cf05e155b7e8866fe546cf2db3b285c3ec65b1fa -->

```csharp
public Inno.Editor.Annotations.HideIfAttribute.HideIfAttribute(string memberName)
```

Creates a truthiness condition.

**Parameter `memberName`:** Sibling field or property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L336).

## `condition`

<a id="api-df4143be36524361"></a>
<!-- api: P:Inno.Editor.Annotations.HideIfAttribute.condition 61434ff3abb37581df7319492cc07ef86486a473c67c06b4982966e9ac2b5683 -->

```csharp
public Inno.Editor.Annotations.InspectorCondition Inno.Editor.Annotations.HideIfAttribute.condition { get; }
```

Gets the comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L394).

## `expectedValue`

<a id="api-3fcdfe0145c9358b"></a>
<!-- api: P:Inno.Editor.Annotations.HideIfAttribute.expectedValue 56c8be9f16ce27b5b1123ef12644751f2af0e034b3d22805e137d5cad6024196 -->

```csharp
public object? Inno.Editor.Annotations.HideIfAttribute.expectedValue { get; }
```

Gets the optional expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L399).

## `memberName`

<a id="api-483062ff5f410ada"></a>
<!-- api: P:Inno.Editor.Annotations.HideIfAttribute.memberName 1909cf024d89542636c0827d2cb9fa0a475f4169aef27ab59198caae73c9a950 -->

```csharp
public string Inno.Editor.Annotations.HideIfAttribute.memberName { get; }
```

Gets the sibling member name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L389).
