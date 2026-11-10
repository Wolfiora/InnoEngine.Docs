---
title: "HotKeyGesture"
description: "Reference for HotKeyGesture in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.ca6a7c5f44cdf142
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `HotKeyGesture`

This reference describes `HotKeyGesture` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.HotKeyGesture>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2a00fd914c892e16) | Method |
| [`Equals`](#api-c19c869760e1def4) | Method |
| [`Equals`](#api-0fa3285647d65753) | Method |
| [`GetHashCode`](#api-8a83c4298f271c7a) | Method |
| [`op_Equality`](#api-f20f498c010f8af9) | Method |
| [`op_Inequality`](#api-b9c0bf6690adbdec) | Method |
| [`Primary`](#api-3fe29ed133613e95) | Method |
| [`ToString`](#api-1f4f6e5d4a614538) | Method |
| [`key`](#api-14f626c90d0242b6) | Property |
| [`modifiers`](#api-7e5d4a59f8ce6185) | Property |

## Type declaration

<a id="api-ca6a7c5f44cdf142"></a>
<!-- api: T:Inno.Editor.Interactions.HotKeyGesture a086c1c8e56e1a0d9f0c62808719e0b3a015091ba4bf4ad00b4e7f42ab63f046 -->

```csharp
public readonly record struct Inno.Editor.Interactions.HotKeyGesture : System.IEquatable<Inno.Editor.Interactions.HotKeyGesture>
```

Describes one keyboard gesture used to invoke an editor command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `#ctor`

<a id="api-2a00fd914c892e16"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.#ctor(Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.String) 30863aac2deaba4729c89d1e6dccafe5ca261894b751e6c679d62544fa5b12e4 -->

```csharp
public Inno.Editor.Interactions.HotKeyGesture.HotKeyGesture(Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None, string superModifierLabel = "Super")
```

Creates a keyboard gesture with an exact set of modifier keys after symbolic-key normalization.

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `modifiers`:** The modifier keys required by the gesture.

**Parameter `superModifierLabel`:** The display name of the Super modifier; the neutral name is used for explicitly constructed gestures.

**Throws `System.ArgumentException`:** The modifier label is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L31).

## `Equals`

<a id="api-c19c869760e1def4"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.Equals(Inno.Editor.Interactions.HotKeyGesture) 3154bd5f2529b83c341f3eb98ea8bcd2658a16debb43c1aeb70cb302d73be1ac -->

```csharp
public bool Inno.Editor.Interactions.HotKeyGesture.Equals(Inno.Editor.Interactions.HotKeyGesture other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `Equals`

<a id="api-0fa3285647d65753"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.Equals(System.Object) 31972807fac7bedea53f0e4c67d82cf773cba0fde0a2a39c078602257cce2250 -->

```csharp
public override bool Inno.Editor.Interactions.HotKeyGesture.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `GetHashCode`

<a id="api-8a83c4298f271c7a"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.GetHashCode cb2ea29f568bcb10269b409cce1d3d201d8c0ef531ed692fc708dbf219b90d51 -->

```csharp
public override int Inno.Editor.Interactions.HotKeyGesture.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `op_Equality`

<a id="api-f20f498c010f8af9"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.op_Equality(Inno.Editor.Interactions.HotKeyGesture,Inno.Editor.Interactions.HotKeyGesture) 5c5bc228f8d784e746286bf7f2c45e2b1faf5f523abbf4dbdf3db99be88ecb0e -->

```csharp
public static bool Inno.Editor.Interactions.HotKeyGesture.operator ==(Inno.Editor.Interactions.HotKeyGesture left, Inno.Editor.Interactions.HotKeyGesture right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `op_Inequality`

<a id="api-b9c0bf6690adbdec"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.op_Inequality(Inno.Editor.Interactions.HotKeyGesture,Inno.Editor.Interactions.HotKeyGesture) 20d5388003f9bad52afb6e86be4436725773c4c5959f8b0ba6cacc9b269bbedf -->

```csharp
public static bool Inno.Editor.Interactions.HotKeyGesture.operator !=(Inno.Editor.Interactions.HotKeyGesture left, Inno.Editor.Interactions.HotKeyGesture right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L12).

## `Primary`

<a id="api-3fe29ed133613e95"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.Primary(Inno.Core.Input.KeyCode,Inno.Editor.Core.EditorKeyboardPolicy,Inno.Core.Input.KeyModifier) 31e8b996547869a2cff1ba9abdfa310e40bce7bcd919143bba02b08bfcda904d -->

```csharp
public static Inno.Editor.Interactions.HotKeyGesture Inno.Editor.Interactions.HotKeyGesture.Primary(Inno.Core.Input.KeyCode key, Inno.Editor.Core.EditorKeyboardPolicy keyboard, Inno.Core.Input.KeyModifier additionalModifiers = Inno.Core.Input.KeyModifier.None)
```

Creates a gesture that includes the product-selected primary modifier.

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `keyboard`:** The product-selected immutable keyboard policy.

**Parameter `additionalModifiers`:** Additional modifiers combined with the product-selected primary modifier.

**Returns:** A product-resolved keyboard gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L67).

## `ToString`

<a id="api-1f4f6e5d4a614538"></a>
<!-- api: M:Inno.Editor.Interactions.HotKeyGesture.ToString 53614740622066b35d4bfbebd459e7c578980dbda3e1a53ab57a2ee0688047b9 -->

```csharp
public override string Inno.Editor.Interactions.HotKeyGesture.ToString()
```

Formats the gesture as a human-readable editor menu shortcut label.

**Returns:** A product-resolved textual representation of the gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L82).

## `key`

<a id="api-14f626c90d0242b6"></a>
<!-- api: P:Inno.Editor.Interactions.HotKeyGesture.key 19d90ebdbbca1ade58a1b7ebd6b30dc87700f71d7b258eb626f754c2d96d2dce -->

```csharp
public Inno.Core.Input.KeyCode Inno.Editor.Interactions.HotKeyGesture.key { get; }
```

Gets the main key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L45).

## `modifiers`

<a id="api-7e5d4a59f8ce6185"></a>
<!-- api: P:Inno.Editor.Interactions.HotKeyGesture.modifiers 7a589f33f9066aef05be0da56d73f89cccd7b2132df8ff19b6e37d410d341ce2 -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Editor.Interactions.HotKeyGesture.modifiers { get; }
```

Gets the required modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/HotKeyGesture.cs#L50).
