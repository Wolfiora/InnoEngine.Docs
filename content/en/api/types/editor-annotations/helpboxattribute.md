---
title: "HelpBoxAttribute"
description: "Reference for HelpBoxAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.be9f7d15efafe716
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `HelpBoxAttribute`

This reference describes `HelpBoxAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-960656f2b0d78274) | Method |
| [`#ctor`](#api-bbda1c55f8b0e4bd) | Method |
| [`#ctor`](#api-58a147a30e5dfa32) | Method |
| [`condition`](#api-7e65c229676eb40a) | Property |
| [`conditionMember`](#api-c9c115dcbbfc9486) | Property |
| [`expectedValue`](#api-44994f06b13fa1fe) | Property |
| [`messageType`](#api-be5fbcba38440a65) | Property |
| [`text`](#api-cc3cb23bbac31f3f) | Property |

## Type declaration

<a id="api-be9f7d15efafe716"></a>
<!-- api: T:Inno.Editor.Annotations.HelpBoxAttribute c1af68e0d57908ab21ff5912af4fc9cd085b3d0a33d5ff4b3db85594fffcd089 -->

```csharp
public sealed class Inno.Editor.Annotations.HelpBoxAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Draws a wrapped explanatory message before the annotated Inspector property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L427).

## `#ctor`

<a id="api-960656f2b0d78274"></a>
<!-- api: M:Inno.Editor.Annotations.HelpBoxAttribute.#ctor(System.String,Inno.Editor.Annotations.InspectorMessageType) c7d9ab3b548518be001c0d3a35f2de10224b85fc630dd17f88fc1a91a25ce94a -->

```csharp
public Inno.Editor.Annotations.HelpBoxAttribute.HelpBoxAttribute(string text, Inno.Editor.Annotations.InspectorMessageType messageType = Inno.Editor.Annotations.InspectorMessageType.Info)
```

Creates an Inspector help message.

**Parameter `text`:** Non-empty message text.

**Parameter `messageType`:** Visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L438).

## `#ctor`

<a id="api-bbda1c55f8b0e4bd"></a>
<!-- api: M:Inno.Editor.Annotations.HelpBoxAttribute.#ctor(System.String,System.String,Inno.Editor.Annotations.InspectorCondition,Inno.Editor.Annotations.InspectorMessageType) f6a36d03de1267ae114220c1535ec6dd8a9416e81b92d592af1a96df049b6145 -->

```csharp
public Inno.Editor.Annotations.HelpBoxAttribute.HelpBoxAttribute(string text, string conditionMember, Inno.Editor.Annotations.InspectorCondition condition, Inno.Editor.Annotations.InspectorMessageType messageType = Inno.Editor.Annotations.InspectorMessageType.Info)
```

Creates an Inspector help message shown when a sibling satisfies a named condition.

**Parameter `text`:** Non-empty message text.

**Parameter `conditionMember`:** Sibling field or property name.

**Parameter `condition`:** Comparison applied to the sibling value.

**Parameter `messageType`:** Visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L461).

## `#ctor`

<a id="api-58a147a30e5dfa32"></a>
<!-- api: M:Inno.Editor.Annotations.HelpBoxAttribute.#ctor(System.String,System.String,System.Object,Inno.Editor.Annotations.InspectorMessageType) 9222ec2eed95e56f7d733976b5fa0951acc359f93de79da73d227d10fc8a20ed -->

```csharp
public Inno.Editor.Annotations.HelpBoxAttribute.HelpBoxAttribute(string text, string conditionMember, object? expectedValue, Inno.Editor.Annotations.InspectorMessageType messageType = Inno.Editor.Annotations.InspectorMessageType.Info)
```

Creates an Inspector help message shown when a sibling equals a compile-time value.

**Parameter `text`:** Non-empty message text.

**Parameter `conditionMember`:** Sibling field or property name.

**Parameter `expectedValue`:** The expected value consumed by help box attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `messageType`:** Visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L486).

## `condition`

<a id="api-7e65c229676eb40a"></a>
<!-- api: P:Inno.Editor.Annotations.HelpBoxAttribute.condition 1e1449c4881d5efa860bb638c8ec1a8334219c365ee563b96009704c4af294bf -->

```csharp
public Inno.Editor.Annotations.InspectorCondition Inno.Editor.Annotations.HelpBoxAttribute.condition { get; }
```

Gets the optional sibling comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L529).

## `conditionMember`

<a id="api-c9c115dcbbfc9486"></a>
<!-- api: P:Inno.Editor.Annotations.HelpBoxAttribute.conditionMember 5745c599a1dda8ff06efb342be0f7547bf9236971be777a674261234e39441e2 -->

```csharp
public string Inno.Editor.Annotations.HelpBoxAttribute.conditionMember { get; }
```

Gets the optional sibling member controlling message visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L524).

## `expectedValue`

<a id="api-44994f06b13fa1fe"></a>
<!-- api: P:Inno.Editor.Annotations.HelpBoxAttribute.expectedValue 2e4da25f77d5aa4b4de720727d5471a47937f49235dd4bf539e2e80830f53524 -->

```csharp
public object? Inno.Editor.Annotations.HelpBoxAttribute.expectedValue { get; }
```

Gets the optional expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L534).

## `messageType`

<a id="api-be5fbcba38440a65"></a>
<!-- api: P:Inno.Editor.Annotations.HelpBoxAttribute.messageType 62fe3924e765c3c12264bf9020c4303cecdc17080437ec95d723f78c88e3c108 -->

```csharp
public Inno.Editor.Annotations.InspectorMessageType Inno.Editor.Annotations.HelpBoxAttribute.messageType { get; }
```

Gets the visual severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L519).

## `text`

<a id="api-cc3cb23bbac31f3f"></a>
<!-- api: P:Inno.Editor.Annotations.HelpBoxAttribute.text 628aa84d0d000dd1fe51de56bf737aad320c0cb2bd80b45ba234fb1cb5ca765b -->

```csharp
public string Inno.Editor.Annotations.HelpBoxAttribute.text { get; }
```

Gets the message text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L514).
