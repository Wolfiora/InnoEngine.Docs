---
title: "ShowIfAttribute"
description: "Reference for ShowIfAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.09f10095a7f506b3
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `ShowIfAttribute`

This reference describes `ShowIfAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7144a0f705ddd9f8) | Method |
| [`#ctor`](#api-5f2c4628811f11b1) | Method |
| [`#ctor`](#api-c5c75382824d2db6) | Method |
| [`condition`](#api-b14dad49d402ede5) | Property |
| [`expectedValue`](#api-6063c83034b9393c) | Property |
| [`memberName`](#api-6f0fea0e46045a8b) | Property |

## Type declaration

<a id="api-09f10095a7f506b3"></a>
<!-- api: T:Inno.Editor.Annotations.ShowIfAttribute 81f361e8b1dd3d8dda567678d75a9cc96bc0485ecda269cf9b3aece345d71ae4 -->

```csharp
public sealed class Inno.Editor.Annotations.ShowIfAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Shows the annotated Inspector property only when a sibling member satisfies a condition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L250).

## `#ctor`

<a id="api-7144a0f705ddd9f8"></a>
<!-- api: M:Inno.Editor.Annotations.ShowIfAttribute.#ctor(System.String,Inno.Editor.Annotations.InspectorCondition) deb0a2be6e974427c69fa2fd624f0232da96ec52b8bfa3a44470597614dc2c82 -->

```csharp
public Inno.Editor.Annotations.ShowIfAttribute.ShowIfAttribute(string memberName, Inno.Editor.Annotations.InspectorCondition condition)
```

Creates a named condition that does not require an expected value.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `condition`:** Comparison applied to the sibling value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L289).

## `#ctor`

<a id="api-5f2c4628811f11b1"></a>
<!-- api: M:Inno.Editor.Annotations.ShowIfAttribute.#ctor(System.String,System.Object) 9f43bf58ca5e0e95f736eb89754321a9e059ea170c0ff03957bf130ac2fef994 -->

```csharp
public Inno.Editor.Annotations.ShowIfAttribute.ShowIfAttribute(string memberName, object? expectedValue)
```

Creates an equality condition.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `expectedValue`:** Compile-time value required for visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L272).

## `#ctor`

<a id="api-c5c75382824d2db6"></a>
<!-- api: M:Inno.Editor.Annotations.ShowIfAttribute.#ctor(System.String) 82ad59c1f2e3dcb62e2d088d4c163f2563d007c066d7c475e7f2aae850346a4b -->

```csharp
public Inno.Editor.Annotations.ShowIfAttribute.ShowIfAttribute(string memberName)
```

Creates a truthiness condition.

**Parameter `memberName`:** Sibling field or property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L258).

## `condition`

<a id="api-b14dad49d402ede5"></a>
<!-- api: P:Inno.Editor.Annotations.ShowIfAttribute.condition d01fea4029b7dbe87fe315b675fd8796729aee0c92110357dc022002d49f2af1 -->

```csharp
public Inno.Editor.Annotations.InspectorCondition Inno.Editor.Annotations.ShowIfAttribute.condition { get; }
```

Gets the comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L316).

## `expectedValue`

<a id="api-6063c83034b9393c"></a>
<!-- api: P:Inno.Editor.Annotations.ShowIfAttribute.expectedValue 78dd3a652b81abb99497f8737c9eacdbceaaaef7466e73991c3dcf186eb863b5 -->

```csharp
public object? Inno.Editor.Annotations.ShowIfAttribute.expectedValue { get; }
```

Gets the optional expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L321).

## `memberName`

<a id="api-6f0fea0e46045a8b"></a>
<!-- api: P:Inno.Editor.Annotations.ShowIfAttribute.memberName 8ff9d0d4979663dcf806317c69cf896e63ed473b5a9651cb661889b838d8a06a -->

```csharp
public string Inno.Editor.Annotations.ShowIfAttribute.memberName { get; }
```

Gets the sibling member name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L311).
