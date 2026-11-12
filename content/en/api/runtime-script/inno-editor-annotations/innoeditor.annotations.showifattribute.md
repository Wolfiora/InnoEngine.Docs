---
title: "ShowIfAttribute"
description: "Reference for ShowIfAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.0a66fdc5c8fd5f7d
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `ShowIfAttribute`

This reference describes `ShowIfAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8734b6b940887670) | Method |
| [`#ctor`](#api-056ea7792e16c5f3) | Method |
| [`#ctor`](#api-34c14475b03a9f0f) | Method |
| [`condition`](#api-d087908c20443ea0) | Property |
| [`expectedValue`](#api-b1e76286f8ef79f7) | Property |
| [`memberName`](#api-df30f7c2256ceffd) | Property |

## Type declaration

<a id="api-0a66fdc5c8fd5f7d"></a>
<!-- api: T:InnoEditor.Annotations.ShowIfAttribute 27fb9e57cb1d41064acc8d41429ec62c775019db4917a353e70ec239a2b6ed7e -->

```csharp
public sealed class InnoEditor.Annotations.ShowIfAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Shows the annotated Inspector property only when a sibling member satisfies a condition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L250).

## `#ctor`

<a id="api-8734b6b940887670"></a>
<!-- api: M:InnoEditor.Annotations.ShowIfAttribute.#ctor(System.String,InnoEditor.Annotations.InspectorCondition) cefce749dbd451124840ab3cf8da56796ef13295583e77119480c1b5aba54a08 -->

```csharp
public InnoEditor.Annotations.ShowIfAttribute.ShowIfAttribute(string memberName, InnoEditor.Annotations.InspectorCondition condition)
```

Creates a named condition that does not require an expected value.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `condition`:** Comparison applied to the sibling value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L289).

## `#ctor`

<a id="api-056ea7792e16c5f3"></a>
<!-- api: M:InnoEditor.Annotations.ShowIfAttribute.#ctor(System.String,System.Object) 6e43bbb1b88f96527a730655509c77ba75c589a4edb05e4fe06529dcef129483 -->

```csharp
public InnoEditor.Annotations.ShowIfAttribute.ShowIfAttribute(string memberName, object? expectedValue)
```

Creates an equality condition.

**Parameter `memberName`:** Sibling field or property name.

**Parameter `expectedValue`:** Compile-time value required for visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L272).

## `#ctor`

<a id="api-34c14475b03a9f0f"></a>
<!-- api: M:InnoEditor.Annotations.ShowIfAttribute.#ctor(System.String) 399cf0c84c8d49d39ea72f2b80adfb132c127794caab06a438d118687c1abb75 -->

```csharp
public InnoEditor.Annotations.ShowIfAttribute.ShowIfAttribute(string memberName)
```

Creates a truthiness condition.

**Parameter `memberName`:** Sibling field or property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L258).

## `condition`

<a id="api-d087908c20443ea0"></a>
<!-- api: P:InnoEditor.Annotations.ShowIfAttribute.condition 91fd4144b7abc4a35094ccf2c7cbdeae6ea7134f35c045ec9370290b1d27d67c -->

```csharp
public InnoEditor.Annotations.InspectorCondition InnoEditor.Annotations.ShowIfAttribute.condition { get; }
```

Gets the comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L316).

## `expectedValue`

<a id="api-b1e76286f8ef79f7"></a>
<!-- api: P:InnoEditor.Annotations.ShowIfAttribute.expectedValue 0bc615315d54ca04e4aa194d51d7c9b9d1b6a4040f275535e019f0d151cf5c80 -->

```csharp
public object? InnoEditor.Annotations.ShowIfAttribute.expectedValue { get; }
```

Gets the optional expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L321).

## `memberName`

<a id="api-df30f7c2256ceffd"></a>
<!-- api: P:InnoEditor.Annotations.ShowIfAttribute.memberName 2c81e4a7417ebe28b77f52f5c1207bc14d9d18c8c006ecd297f77e56955defc3 -->

```csharp
public string InnoEditor.Annotations.ShowIfAttribute.memberName { get; }
```

Gets the sibling member name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L311).
