---
title: "HelpBoxAttribute"
description: "Reference for HelpBoxAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.99d8357164447541
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `HelpBoxAttribute`

This reference describes `HelpBoxAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-65f383349442332c) | Method |
| [`#ctor`](#api-83425317a68b3707) | Method |
| [`#ctor`](#api-a2cf868b70fe3b53) | Method |
| [`condition`](#api-5bd9787b9a075234) | Property |
| [`conditionMember`](#api-bda26e6727dd8d3e) | Property |
| [`expectedValue`](#api-8161e49d86f5f0c7) | Property |
| [`messageType`](#api-b720c768fa8a8fe1) | Property |
| [`text`](#api-d2cd553ddc8f3362) | Property |

## Type declaration

<a id="api-99d8357164447541"></a>
<!-- api: T:InnoEditor.Annotations.HelpBoxAttribute 9ad32f06c75fe2223dcb509086104bedd1ea123722909a240639a9e959d51499 -->

```csharp
public sealed class InnoEditor.Annotations.HelpBoxAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Draws a wrapped explanatory message before the annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L427).

## `#ctor`

<a id="api-65f383349442332c"></a>
<!-- api: M:InnoEditor.Annotations.HelpBoxAttribute.#ctor(System.String,InnoEditor.Annotations.InspectorMessageType) 4f79988f65db96ac4ab80dcb7983b8800861f123aba3abc3d4f03ccdbe3d28ec -->

```csharp
public InnoEditor.Annotations.HelpBoxAttribute.HelpBoxAttribute(string text, InnoEditor.Annotations.InspectorMessageType messageType = InnoEditor.Annotations.InspectorMessageType.Info)
```

Creates an Inspector help message.

**Parameter `text`:** Non-empty message text.

**Parameter `messageType`:** Visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L438).

## `#ctor`

<a id="api-83425317a68b3707"></a>
<!-- api: M:InnoEditor.Annotations.HelpBoxAttribute.#ctor(System.String,System.String,InnoEditor.Annotations.InspectorCondition,InnoEditor.Annotations.InspectorMessageType) effe1c7484c700b7f19f46a4e2356efbb85cd619cc2a7c91afa68efdf712c50f -->

```csharp
public InnoEditor.Annotations.HelpBoxAttribute.HelpBoxAttribute(string text, string conditionMember, InnoEditor.Annotations.InspectorCondition condition, InnoEditor.Annotations.InspectorMessageType messageType = InnoEditor.Annotations.InspectorMessageType.Info)
```

Creates an Inspector help message shown when a sibling satisfies a named condition.

**Parameter `text`:** Non-empty message text.

**Parameter `conditionMember`:** Sibling field or property name.

**Parameter `condition`:** Comparison applied to the sibling value.

**Parameter `messageType`:** Visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L461).

## `#ctor`

<a id="api-a2cf868b70fe3b53"></a>
<!-- api: M:InnoEditor.Annotations.HelpBoxAttribute.#ctor(System.String,System.String,System.Object,InnoEditor.Annotations.InspectorMessageType) 971c42aff8a1c35e03d17d3989a624c521200be2055a7044360e5960cea12d45 -->

```csharp
public InnoEditor.Annotations.HelpBoxAttribute.HelpBoxAttribute(string text, string conditionMember, object? expectedValue, InnoEditor.Annotations.InspectorMessageType messageType = InnoEditor.Annotations.InspectorMessageType.Info)
```

Creates an Inspector help message shown when a sibling equals a compile-time value.

**Parameter `text`:** Non-empty message text.

**Parameter `conditionMember`:** Sibling field or property name.

**Parameter `expectedValue`:** The expected value consumed by help box attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `messageType`:** Visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L486).

## `condition`

<a id="api-5bd9787b9a075234"></a>
<!-- api: P:InnoEditor.Annotations.HelpBoxAttribute.condition f1d1b13ac1381c3a726455f1529164700ea1977ad602b3a2770673d391188a3d -->

```csharp
public InnoEditor.Annotations.InspectorCondition InnoEditor.Annotations.HelpBoxAttribute.condition { get; }
```

Gets the optional sibling comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L529).

## `conditionMember`

<a id="api-bda26e6727dd8d3e"></a>
<!-- api: P:InnoEditor.Annotations.HelpBoxAttribute.conditionMember 916d8f211e44433e75423331fbdf2ccaebba4eef1353d23190f3ec2d2e51c649 -->

```csharp
public string InnoEditor.Annotations.HelpBoxAttribute.conditionMember { get; }
```

Gets the optional sibling member controlling message visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L524).

## `expectedValue`

<a id="api-8161e49d86f5f0c7"></a>
<!-- api: P:InnoEditor.Annotations.HelpBoxAttribute.expectedValue b74e87eccd36085893bc67cd8cc8fcdccc5ec48ef27c14d3b7057354c25da04a -->

```csharp
public object? InnoEditor.Annotations.HelpBoxAttribute.expectedValue { get; }
```

Gets the optional expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L534).

## `messageType`

<a id="api-b720c768fa8a8fe1"></a>
<!-- api: P:InnoEditor.Annotations.HelpBoxAttribute.messageType 5e95b02e79b68038fbb5c6fc5cd01de4475e96a57a85f89177ea954fbaedf0d6 -->

```csharp
public InnoEditor.Annotations.InspectorMessageType InnoEditor.Annotations.HelpBoxAttribute.messageType { get; }
```

Gets the visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L519).

## `text`

<a id="api-d2cd553ddc8f3362"></a>
<!-- api: P:InnoEditor.Annotations.HelpBoxAttribute.text 46d9d9ab0b7c1b48d66b737b7205514e72bfc05cce4939f3b886fb464265713b -->

```csharp
public string InnoEditor.Annotations.HelpBoxAttribute.text { get; }
```

Gets the message text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L514).
