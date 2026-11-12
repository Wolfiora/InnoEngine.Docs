---
title: "HideIfAttribute"
description: "Reference for HideIfAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.36f1baa96c8dd772
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `HideIfAttribute`

This reference describes `HideIfAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f7bc0f12dcc21a19) | Method |
| [`#ctor`](#api-8ba5ee971295e149) | Method |
| [`#ctor`](#api-6fe6206c1c1d5abb) | Method |
| [`condition`](#api-9bce0a8edb573fba) | Property |
| [`expectedValue`](#api-90585be3fab80ba0) | Property |
| [`memberName`](#api-86ed3662e5abc572) | Property |

## Type declaration

<a id="api-36f1baa96c8dd772"></a>
<!-- api: T:InnoEditor.Annotations.HideIfAttribute 4e42a941ea854fa3a103734a8c6ff352bec633c13748d6e8c2ec39cd4027e47b -->

```csharp
public sealed class InnoEditor.Annotations.HideIfAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Hides the annotated Inspector property when a sibling member satisfies a condition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L328).

## `#ctor`

<a id="api-f7bc0f12dcc21a19"></a>
<!-- api: M:InnoEditor.Annotations.HideIfAttribute.#ctor(System.String,InnoEditor.Annotations.InspectorCondition) 83a698ca67b6ae8260c105e69821c741bfc88ac08d3a5326da8c817520800311 -->

```csharp
public InnoEditor.Annotations.HideIfAttribute.HideIfAttribute(string memberName, InnoEditor.Annotations.InspectorCondition condition)
```

Creates a named condition that does not require an expected value.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `condition`:** Comparison applied to the sibling value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L367).

## `#ctor`

<a id="api-8ba5ee971295e149"></a>
<!-- api: M:InnoEditor.Annotations.HideIfAttribute.#ctor(System.String,System.Object) 1e187974cbf9c8907791db2faab09ebd383e79ad6480cfcd133879ad6ff32f90 -->

```csharp
public InnoEditor.Annotations.HideIfAttribute.HideIfAttribute(string memberName, object? expectedValue)
```

Creates an equality condition.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `expectedValue`:** Compile-time value that hides the property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L350).

## `#ctor`

<a id="api-6fe6206c1c1d5abb"></a>
<!-- api: M:InnoEditor.Annotations.HideIfAttribute.#ctor(System.String) f4ee4e3e816ad691d83fdc8397a35c1a2cd1e3888e1c1a7af9843457986156f1 -->

```csharp
public InnoEditor.Annotations.HideIfAttribute.HideIfAttribute(string memberName)
```

Creates a truthiness condition.

**Parameter `memberName`:** Sibling field or property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L336).

## `condition`

<a id="api-9bce0a8edb573fba"></a>
<!-- api: P:InnoEditor.Annotations.HideIfAttribute.condition ad8853eda0593600b4c252a71d5578e64e89f7b9828a1d4b172909cfbd67c93f -->

```csharp
public InnoEditor.Annotations.InspectorCondition InnoEditor.Annotations.HideIfAttribute.condition { get; }
```

Gets the comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L394).

## `expectedValue`

<a id="api-90585be3fab80ba0"></a>
<!-- api: P:InnoEditor.Annotations.HideIfAttribute.expectedValue 7439f6be9388195645911110aa8a2a4961adf49eaa4b359ffcd860a053dd7587 -->

```csharp
public object? InnoEditor.Annotations.HideIfAttribute.expectedValue { get; }
```

Gets the optional expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L399).

## `memberName`

<a id="api-86ed3662e5abc572"></a>
<!-- api: P:InnoEditor.Annotations.HideIfAttribute.memberName 80eb3fd4e1d387b0aca590adcd18a83da9cdc25a3b2d871f6d16e9e09b585ace -->

```csharp
public string InnoEditor.Annotations.HideIfAttribute.memberName { get; }
```

Gets the sibling member name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L389).
