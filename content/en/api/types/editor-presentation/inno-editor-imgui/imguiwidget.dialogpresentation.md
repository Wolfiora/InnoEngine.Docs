---
title: "ImGuiWidget.DialogPresentation"
description: "Reference for ImGuiWidget.DialogPresentation in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.594b9d75739062de
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.DialogPresentation`

This reference describes `ImGuiWidget.DialogPresentation` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.ImGui.ImGuiWidget.DialogPresentation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f3407ad801507c31) | Method |
| [`Deconstruct`](#api-3ea501cc15a6d4d3) | Method |
| [`Equals`](#api-89089a29e152e990) | Method |
| [`Equals`](#api-1591485ac96c9207) | Method |
| [`GetHashCode`](#api-7425923a45688feb) | Method |
| [`op_Equality`](#api-ed205c700b723b36) | Method |
| [`op_Inequality`](#api-dbe3876a722a0a3e) | Method |
| [`ToString`](#api-b217f1ff7b3e4517) | Method |
| [`actionEnabled`](#api-31c8608ce214618b) | Property |
| [`actionLabel`](#api-73cdc4395dfb5163) | Property |
| [`cancelOnEscape`](#api-5970e8e1ac8ec71d) | Property |
| [`details`](#api-bbefc12a6b3f807e) | Property |
| [`indeterminate`](#api-7b14d5d93f63ffed) | Property |
| [`message`](#api-1ae896dcc2818b2f) | Property |
| [`progress`](#api-dd8786f0f9dec060) | Property |

## Type declaration

<a id="api-594b9d75739062de"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation 9c4c99474481c88fd6dd705a7527c5472f6c9b17405900ddd3cb8ef47885b5d9 -->

```csharp
public readonly record struct Inno.Editor.ImGui.ImGuiWidget.DialogPresentation : System.IEquatable<Inno.Editor.ImGui.ImGuiWidget.DialogPresentation>
```

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `#ctor`

<a id="api-f3407ad801507c31"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.#ctor(System.String,System.Nullable{System.Single},System.Boolean,System.String,System.Boolean,System.String,System.Boolean) 897f2b9be4da28c12c5e944bdd79ac0c8f8376c2aca62d3a16851d03360d7b04 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.DialogPresentation(string message, float? progress = null, bool indeterminate = false, string? actionLabel = null, bool actionEnabled = true, string? details = null, bool cancelOnEscape = false)
```

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `Deconstruct`

<a id="api-3ea501cc15a6d4d3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.Deconstruct(System.String@,System.Nullable{System.Single}@,System.Boolean@,System.String@,System.Boolean@,System.String@,System.Boolean@) 9a9875e0f2ea2bb0c340374088b841028d8f4eb450943bb5e60a8a0544a2d7d9 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.Deconstruct(out string message, out float? progress, out bool indeterminate, out string? actionLabel, out bool actionEnabled, out string? details, out bool cancelOnEscape)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `Equals`

<a id="api-89089a29e152e990"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.Equals(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation) eaac9f2a75a874db01bb3f448dc5e2490dcc05c4a89959ad1221536be40053a8 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.Equals(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `Equals`

<a id="api-1591485ac96c9207"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.Equals(System.Object) 40a1e453a5540470b8326ba387ba1f812eb14c161e9e9044b8bce89ea610695d -->

```csharp
public override bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `GetHashCode`

<a id="api-7425923a45688feb"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.GetHashCode 45737e545ccaeb46c698282dea393d35ff499f24b14e8a9ccc6014d06f13efee -->

```csharp
public override int Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `op_Equality`

<a id="api-ed205c700b723b36"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.op_Equality(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,Inno.Editor.ImGui.ImGuiWidget.DialogPresentation) 572291aa8a6ea11ceed7fdc3b530b9e6f63f7f96da1530e209eed30c39cf7efb -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.operator ==(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation left, Inno.Editor.ImGui.ImGuiWidget.DialogPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `op_Inequality`

<a id="api-dbe3876a722a0a3e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.op_Inequality(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,Inno.Editor.ImGui.ImGuiWidget.DialogPresentation) 810ae6ca99833388c29db69627ee5758d6ae52d0bf96c3a307ae9c517b15117f -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.operator !=(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation left, Inno.Editor.ImGui.ImGuiWidget.DialogPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `ToString`

<a id="api-b217f1ff7b3e4517"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.ToString 1abf055e3cd5bb294e87844b1e201cae72683dc2c33bf176433b8b3ad5b7cf12 -->

```csharp
public override string Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `actionEnabled`

<a id="api-31c8608ce214618b"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.actionEnabled 929b91968c37f69b68034963bc9a0e1c54cacb5b88dc8fa85dcf4005a67f616c -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.actionEnabled { get; init; }
```

Whether the current operation admits the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L38).

## `actionLabel`

<a id="api-73cdc4395dfb5163"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.actionLabel c249a3b075a6bde8db6a21bf949fed16e45fd4f5442b482a2c6595137cff20c0 -->

```csharp
public string? Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.actionLabel { get; init; }
```

The optional centered action label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L37).

## `cancelOnEscape`

<a id="api-5970e8e1ac8ec71d"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.cancelOnEscape 81b89b9741ffdff7f1f387fc5bfb444bcef2ba6a3a8b686eca7d7750d5c00875 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.cancelOnEscape { get; init; }
```

Whether Escape activates this action; opt in only for cancellation or dismissal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L40).

## `details`

<a id="api-bbefc12a6b3f807e"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.details 342aeecd8a288b9cb166551c66518a388deeb98a95156649b5a423381c05d8c8 -->

```csharp
public string? Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.details { get; init; }
```

Optional expanded diagnostic text sharing the message scroll owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L39).

## `indeterminate`

<a id="api-7b14d5d93f63ffed"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.indeterminate 87ed0f083c6c2b74c0eadc467a6ce903521e290b0c96c0db1320bb66a02d2c35 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.indeterminate { get; init; }
```

Whether to show activity without inventing a completed fraction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L36).

## `message`

<a id="api-1ae896dcc2818b2f"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.message d065f0eb583f00b1cc98e75c56d8a7ed313807523b807cf5f3177b3e7c31a3b8 -->

```csharp
public string Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.message { get; init; }
```

The current status or error text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L34).

## `progress`

<a id="api-dd8786f0f9dec060"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.progress 4ac1978e6e9dfe5c2cac79387a6f2e08655c6e1fd6ade66ebc86cc12621d6626 -->

```csharp
public float? Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.progress { get; init; }
```

A completed fraction, or null when no progress bar is needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L35).
