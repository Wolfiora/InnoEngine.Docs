---
title: "ImGuiTabItemFlags"
description: "Reference for ImGuiTabItemFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.c06cdb8ba479b2ec
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTabItemFlags`

This reference describes `ImGuiTabItemFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Leading`](#api-5b77bc13b328890a) | Field |
| [`NoAssumedClosure`](#api-2cbf0ca6d030871e) | Field |
| [`NoCloseWithMiddleMouseButton`](#api-7e041893b5ebe92d) | Field |
| [`None`](#api-c12360988c3da8b4) | Field |
| [`NoPushId`](#api-404a8facc847c0b6) | Field |
| [`NoReorder`](#api-45e68092d6dfe594) | Field |
| [`NoTooltip`](#api-3e22708c9e25ee55) | Field |
| [`SetSelected`](#api-20a7b559e0da3bdc) | Field |
| [`Trailing`](#api-37ae3cb75ac432f5) | Field |
| [`UnsavedDocument`](#api-97899020faff01fb) | Field |

## Type declaration

<a id="api-c06cdb8ba479b2ec"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTabItemFlags ec321f1cdb30c7e1c8270f23595514729c346a556eca72411434a7558c5c5ba3 -->

```csharp
public enum InnoEditor.ImGui.ImGuiTabItemFlags : int
```

Defines the supported tab item flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L8).

## `Leading`

<a id="api-5b77bc13b328890a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.Leading 24e73f1129569dd039a03594113ef8090826a07c702c376d50a29a2da94f0859 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.Leading = 64
```

Enforce the tab position to the left of the tab bar (after the tab list popup button)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L41).

## `NoAssumedClosure`

<a id="api-2cbf0ca6d030871e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.NoAssumedClosure 0f65e0154afe4e25cc06a92177747423939ebd3f42ecabb14c7d5ffb49902144 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.NoAssumedClosure = 256
```

Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L49).

## `NoCloseWithMiddleMouseButton`

<a id="api-7e041893b5ebe92d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton 61b45c19a4fcecd0316f36d2c40fab056522fbd5e61bb9b30f3fbec43fcd16f3 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton = 4
```

Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) *p_open = false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L25).

## `None`

<a id="api-c12360988c3da8b4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.None 6707662dc07609019deac342b15e7d53df80d9785f81b58e9f2a3dc59a329be1 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L13).

## `NoPushId`

<a id="api-404a8facc847c0b6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.NoPushId 4f703dd9a3b844f3de36202b7ef3ca6250472c60b0105d3befc68c6bc32e51c3 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.NoPushId = 8
```

Don't call PushID()/PopID() on BeginTabItem()/EndTabItem()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L29).

## `NoReorder`

<a id="api-45e68092d6dfe594"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.NoReorder 42e8a60249f90d4b535b0297c5d310d0d71db91b087b5369df9b7bae23b865e6 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.NoReorder = 32
```

Disable reordering this tab or having another tab cross over this tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L37).

## `NoTooltip`

<a id="api-3e22708c9e25ee55"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.NoTooltip 4868147516243d8a73b0f20e8247ff43def2f96b44d0647a25e9b3eb2f342e1b -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.NoTooltip = 16
```

Disable tooltip for the given tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L33).

## `SetSelected`

<a id="api-20a7b559e0da3bdc"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.SetSelected aaea871028d2ae4aaf7ad16784e29f4bdf45c9aa7c543d748500b95fb2e21767 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.SetSelected = 2
```

Trigger flag to programmatically make the tab selected when calling BeginTabItem()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L21).

## `Trailing`

<a id="api-37ae3cb75ac432f5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.Trailing 0d21a8d16830634a7adba3364a1074cb8a805d26e8e0d5db70b0392be76b7520 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.Trailing = 128
```

Enforce the tab position to the right of the tab bar (before the scrolling buttons)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L45).

## `UnsavedDocument`

<a id="api-97899020faff01fb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabItemFlags.UnsavedDocument 1d82c1d212eeb4a7d127f4aed1c9f434c7fb2f1cfb73cb7a1c1a25362028dc46 -->

```csharp
InnoEditor.ImGui.ImGuiTabItemFlags.UnsavedDocument = 1
```

Display a dot next to the title + set ImGuiTabItemFlags_NoAssumedClosure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L17).
