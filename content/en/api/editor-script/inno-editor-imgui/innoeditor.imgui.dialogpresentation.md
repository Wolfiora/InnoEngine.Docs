---
title: "DialogPresentation"
description: "Reference for DialogPresentation in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.cc761e192ec91fa1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `DialogPresentation`

This reference describes `DialogPresentation` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.ImGui.DialogPresentation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c35d01d4a7120981) | Method |
| [`Deconstruct`](#api-97e6a0e94cf8607a) | Method |
| [`Equals`](#api-6847d05679debbf5) | Method |
| [`Equals`](#api-ad772287519e7223) | Method |
| [`GetHashCode`](#api-18ff4c089b84f34f) | Method |
| [`op_Equality`](#api-147dbf638fc101e2) | Method |
| [`op_Inequality`](#api-dac7db012bac0d77) | Method |
| [`ToString`](#api-bfaa56936737ecc8) | Method |
| [`actionEnabled`](#api-a14815e9c7c84b94) | Property |
| [`actionLabel`](#api-c197ecbe45a43915) | Property |
| [`cancelOnEscape`](#api-1d3ad9c103a97b75) | Property |
| [`details`](#api-8af5c54593f91b69) | Property |
| [`indeterminate`](#api-2396a6b4d39a36e7) | Property |
| [`message`](#api-258166286107e898) | Property |
| [`progress`](#api-3a22385d2b0f8427) | Property |

## Type declaration

<a id="api-cc761e192ec91fa1"></a>
<!-- api: T:InnoEditor.ImGui.DialogPresentation 5fac48009298efb0b3d695eae816dfe30854215b9b9b290dc09e73d9c7060390 -->

```csharp
public readonly struct InnoEditor.ImGui.DialogPresentation : System.IEquatable<InnoEditor.ImGui.DialogPresentation>
```

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `#ctor`

<a id="api-c35d01d4a7120981"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.#ctor(System.String,System.Nullable{System.Single},System.Boolean,System.String,System.Boolean,System.String,System.Boolean) 25d494035a20f0f523eaf567e5bcfceecc13f78b6c72c9433c4da2756a8b813c -->

```csharp
public InnoEditor.ImGui.DialogPresentation.DialogPresentation(string message, float? progress = null, bool indeterminate = false, string? actionLabel = null, bool actionEnabled = true, string? details = null, bool cancelOnEscape = false)
```

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `Deconstruct`

<a id="api-97e6a0e94cf8607a"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.Deconstruct(System.String@,System.Nullable{System.Single}@,System.Boolean@,System.String@,System.Boolean@,System.String@,System.Boolean@) 22773e295ba3343b19cfc2fe90748ea2f94bc48bfe51ecd6be89884d6f764db6 -->

```csharp
public void InnoEditor.ImGui.DialogPresentation.Deconstruct(out string message, out float? progress, out bool indeterminate, out string? actionLabel, out bool actionEnabled, out string? details, out bool cancelOnEscape)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `Equals`

<a id="api-6847d05679debbf5"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.Equals(InnoEditor.ImGui.DialogPresentation) 23f695076b0d06f4945df8e1ed6f283dfe1754cecd67adf200bb8c85a4e33c5e -->

```csharp
public bool InnoEditor.ImGui.DialogPresentation.Equals(InnoEditor.ImGui.DialogPresentation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `Equals`

<a id="api-ad772287519e7223"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.Equals(System.Object) 7f5f7afbdfdeba7cee29ba07889e091057d49c629808a6d67b5ef40e7a824445 -->

```csharp
public override bool InnoEditor.ImGui.DialogPresentation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `GetHashCode`

<a id="api-18ff4c089b84f34f"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.GetHashCode f09abc5bad63d545bc760dcf0f426676f4e9fb80477a9a2c6bc4006c357a6276 -->

```csharp
public override int InnoEditor.ImGui.DialogPresentation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `op_Equality`

<a id="api-147dbf638fc101e2"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.op_Equality(InnoEditor.ImGui.DialogPresentation,InnoEditor.ImGui.DialogPresentation) 79a2c88cfc46a1edeca474eb2df7638154a5a3fae6aa3f0d0c8cbd6be36916a6 -->

```csharp
public static bool InnoEditor.ImGui.DialogPresentation.operator ==(InnoEditor.ImGui.DialogPresentation left, InnoEditor.ImGui.DialogPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `op_Inequality`

<a id="api-dac7db012bac0d77"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.op_Inequality(InnoEditor.ImGui.DialogPresentation,InnoEditor.ImGui.DialogPresentation) db2d93a87d41d64cdcd8014da1b891e75d9cf02c0097ada8dd623df5282f8a8f -->

```csharp
public static bool InnoEditor.ImGui.DialogPresentation.operator !=(InnoEditor.ImGui.DialogPresentation left, InnoEditor.ImGui.DialogPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `ToString`

<a id="api-bfaa56936737ecc8"></a>
<!-- api: M:InnoEditor.ImGui.DialogPresentation.ToString d0f776650f688fce61ea9dda12c6e0075723cff3762ac6bb7faa541c306cace6 -->

```csharp
public override string InnoEditor.ImGui.DialogPresentation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L33).

## `actionEnabled`

<a id="api-a14815e9c7c84b94"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.actionEnabled 69e3a69446089fa39fdd5a181363c6cbb081f09ad9a8e79a4b953549e68bbbfd -->

```csharp
public bool InnoEditor.ImGui.DialogPresentation.actionEnabled { get; set; }
```

Whether the current operation admits the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L38).

## `actionLabel`

<a id="api-c197ecbe45a43915"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.actionLabel 26bd8e0ca8cdbe51426659a078c51e340e18be557d07ef805ea3a589c6ce33cb -->

```csharp
public string? InnoEditor.ImGui.DialogPresentation.actionLabel { get; set; }
```

The optional centered action label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L37).

## `cancelOnEscape`

<a id="api-1d3ad9c103a97b75"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.cancelOnEscape 7676d0eb2fd97a3911c5473cf3b708d78c3e8a51171ed385cc11f32fdde3e9ed -->

```csharp
public bool InnoEditor.ImGui.DialogPresentation.cancelOnEscape { get; set; }
```

Whether Escape activates this action; opt in only for cancellation or dismissal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L40).

## `details`

<a id="api-8af5c54593f91b69"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.details c6164e67987bde893351ab978496e47bd6f05bc730e76e78707e56d30389cd48 -->

```csharp
public string? InnoEditor.ImGui.DialogPresentation.details { get; set; }
```

Optional expanded diagnostic text sharing the message scroll owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L39).

## `indeterminate`

<a id="api-2396a6b4d39a36e7"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.indeterminate 73f6b7ac025836f37dcb448968ba0afaaf8c77f2487d4658b3a1b0bf2813d7ad -->

```csharp
public bool InnoEditor.ImGui.DialogPresentation.indeterminate { get; set; }
```

Whether to show activity without inventing a completed fraction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L36).

## `message`

<a id="api-258166286107e898"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.message e28bfb61b5ea59c4089867e931fb0d1ef6c4430402c7378afa538406fc5a262b -->

```csharp
public string InnoEditor.ImGui.DialogPresentation.message { get; set; }
```

The current status or error text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L34).

## `progress`

<a id="api-3a22385d2b0f8427"></a>
<!-- api: P:InnoEditor.ImGui.DialogPresentation.progress 057f2d722479aee9fcf921910738e43d3c4579e3a1ec9c5ffe017462730bab49 -->

```csharp
public float? InnoEditor.ImGui.DialogPresentation.progress { get; set; }
```

A completed fraction, or null when no progress bar is needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L35).
