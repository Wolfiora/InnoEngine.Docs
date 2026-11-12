---
title: "HotKeyGesture"
description: "Reference for HotKeyGesture in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.720fa9c767e0a440
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `HotKeyGesture`

This reference describes `HotKeyGesture` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.HotKeyGesture>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7440ee3f645000a1) | Method |
| [`Equals`](#api-8faa58ba17e09ce4) | Method |
| [`Equals`](#api-148f23cfb8c061c0) | Method |
| [`GetHashCode`](#api-d49d61a9f24b7725) | Method |
| [`op_Equality`](#api-738d2193b5049d48) | Method |
| [`op_Inequality`](#api-804b94c5d5416349) | Method |
| [`Primary`](#api-d9398e3ba880d508) | Method |
| [`ToString`](#api-aa71189fce5c15e4) | Method |
| [`key`](#api-93be1388674d462c) | Property |
| [`modifiers`](#api-626350bd74cff0de) | Property |

## Type declaration

<a id="api-720fa9c767e0a440"></a>
<!-- api: T:InnoEditor.Interactions.HotKeyGesture 28421cf62c89b9fb54f98a40640d62cef78e98683a16f3646dc4d7720ef7df04 -->

```csharp
public readonly struct InnoEditor.Interactions.HotKeyGesture : System.IEquatable<InnoEditor.Interactions.HotKeyGesture>
```

Describes one keyboard gesture used to invoke an editor command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `#ctor`

<a id="api-7440ee3f645000a1"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.#ctor(InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.String) 0ac037d1de74130fc813a02a1b2cc18daa222028abdcb9168b0643df5b69edc2 -->

```csharp
public InnoEditor.Interactions.HotKeyGesture.HotKeyGesture(InnoEngine.Input.KeyCode key, InnoEngine.Input.KeyModifier modifiers = InnoEngine.Input.KeyModifier.None, string superModifierLabel = "Super")
```

Creates a keyboard gesture with an exact set of modifier keys after symbolic-key normalization.

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `modifiers`:** The modifier keys required by the gesture.

**Parameter `superModifierLabel`:** The display name of the Super modifier; the neutral name is used for explicitly constructed gestures.

**Throws `System.ArgumentException`:** The modifier label is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L31).

## `Equals`

<a id="api-8faa58ba17e09ce4"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.Equals(InnoEditor.Interactions.HotKeyGesture) d260fd1bac0b33e043c61ff88b778314186f5e083ee1dce2f337b0e02f51ad46 -->

```csharp
public bool InnoEditor.Interactions.HotKeyGesture.Equals(InnoEditor.Interactions.HotKeyGesture other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `Equals`

<a id="api-148f23cfb8c061c0"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.Equals(System.Object) 110bc715db03f0ffebc1b7c3086b18f799b2c5d5a29b54af2987605a7a49a3f6 -->

```csharp
public override bool InnoEditor.Interactions.HotKeyGesture.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `GetHashCode`

<a id="api-d49d61a9f24b7725"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.GetHashCode 55ba3be1a56b828866ffd747e48ae8c4d505a76f3a4111b68dcb3137303ac68a -->

```csharp
public override int InnoEditor.Interactions.HotKeyGesture.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `op_Equality`

<a id="api-738d2193b5049d48"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.op_Equality(InnoEditor.Interactions.HotKeyGesture,InnoEditor.Interactions.HotKeyGesture) ace76a1441f74e7c1b3c340c105915b2b4bb90b21d40a1ba3173df66b2999d44 -->

```csharp
public static bool InnoEditor.Interactions.HotKeyGesture.operator ==(InnoEditor.Interactions.HotKeyGesture left, InnoEditor.Interactions.HotKeyGesture right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `op_Inequality`

<a id="api-804b94c5d5416349"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.op_Inequality(InnoEditor.Interactions.HotKeyGesture,InnoEditor.Interactions.HotKeyGesture) 4a06bac596bedf48aaee1163ee33573f7178e037638c3c0ea0f5e9f0840e926f -->

```csharp
public static bool InnoEditor.Interactions.HotKeyGesture.operator !=(InnoEditor.Interactions.HotKeyGesture left, InnoEditor.Interactions.HotKeyGesture right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `Primary`

<a id="api-d9398e3ba880d508"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.Primary(InnoEngine.Input.KeyCode,InnoEditor.Core.EditorKeyboardPolicy,InnoEngine.Input.KeyModifier) f8ce8aa7159d4b943bf695ffa39ed346e47301d2256681e6c760ab2d83c1474e -->

```csharp
public static InnoEditor.Interactions.HotKeyGesture InnoEditor.Interactions.HotKeyGesture.Primary(InnoEngine.Input.KeyCode key, InnoEditor.Core.EditorKeyboardPolicy keyboard, InnoEngine.Input.KeyModifier additionalModifiers = InnoEngine.Input.KeyModifier.None)
```

Creates a gesture that includes the product-selected primary modifier.

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `keyboard`:** The product-selected immutable keyboard policy.

**Parameter `additionalModifiers`:** Additional modifiers combined with the product-selected primary modifier.

**Returns:** A product-resolved keyboard gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L67).

## `ToString`

<a id="api-aa71189fce5c15e4"></a>
<!-- api: M:InnoEditor.Interactions.HotKeyGesture.ToString de4093ad439b6e08536b5afc48adeb5fc09ad808f20cd6711cfa7aff571efd2a -->

```csharp
public override string InnoEditor.Interactions.HotKeyGesture.ToString()
```

Formats the gesture as a human-readable editor menu shortcut label.

**Returns:** A product-resolved textual representation of the gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L82).

## `key`

<a id="api-93be1388674d462c"></a>
<!-- api: P:InnoEditor.Interactions.HotKeyGesture.key 911a9bf23a1e4ff825b901d9f440ef84ba17788625d538c2ab373637248b352b -->

```csharp
public InnoEngine.Input.KeyCode InnoEditor.Interactions.HotKeyGesture.key { get; }
```

Gets the main key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L45).

## `modifiers`

<a id="api-626350bd74cff0de"></a>
<!-- api: P:InnoEditor.Interactions.HotKeyGesture.modifiers 52e0bc175e5304971ab52f4d6d9a5efb0c24d4b7386a0826c97616b6c358194f -->

```csharp
public InnoEngine.Input.KeyModifier InnoEditor.Interactions.HotKeyGesture.modifiers { get; }
```

Gets the required modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L50).
