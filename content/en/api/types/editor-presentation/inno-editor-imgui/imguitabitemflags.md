---
title: "ImGuiTabItemFlags"
description: "Reference for ImGuiTabItemFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.eb9fcfedc7831bfc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTabItemFlags`

This reference describes `ImGuiTabItemFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Leading`](#api-fb226cc3a11e0d09) | Field |
| [`NoAssumedClosure`](#api-ed553a854876fe69) | Field |
| [`NoCloseWithMiddleMouseButton`](#api-a676caf555a19bf4) | Field |
| [`None`](#api-d48409b492f31991) | Field |
| [`NoPushId`](#api-54b9e4c584738e6d) | Field |
| [`NoReorder`](#api-a45496caad92d304) | Field |
| [`NoTooltip`](#api-7af956fc63b89b20) | Field |
| [`SetSelected`](#api-240110a8ffc77dac) | Field |
| [`Trailing`](#api-69161bc2d3f9a6b0) | Field |
| [`UnsavedDocument`](#api-6c54f374f1eba7d5) | Field |

## Type declaration

<a id="api-eb9fcfedc7831bfc"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTabItemFlags e6c32aba24d38fb4e3fe804df3f22e554a8ad53478572b54c21734100dbadd9e -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTabItemFlags : int
```

Defines the supported tab item flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L8).

## `Leading`

<a id="api-fb226cc3a11e0d09"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.Leading 194f84cbb0808e88a2943c26a1873b056f3b39cff5421a80e4dbfcb1e82cb10c -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.Leading = 64
```

Enforce the tab position to the left of the tab bar (after the tab list popup button)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L41).

## `NoAssumedClosure`

<a id="api-ed553a854876fe69"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoAssumedClosure 4cf9b49cfe52bc94ae76b22fb176e6a6c74282ad85fbb52a342d3e95922012d1 -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.NoAssumedClosure = 256
```

Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L49).

## `NoCloseWithMiddleMouseButton`

<a id="api-a676caf555a19bf4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton 7fc368b49a11d6c7a696f7a2feb07399e0279d064c68b4e2d1a61d6c51d20168 -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton = 4
```

Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) *p_open = false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L25).

## `None`

<a id="api-d48409b492f31991"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.None 9522be9647c1550d08b027e7b4e626ea0f924c696d0b8f6528c767e9f595bdd7 -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L13).

## `NoPushId`

<a id="api-54b9e4c584738e6d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoPushId c298a08cb00f2bea78da368da313739ace2f109f714114fd5ff79ce471f8809f -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.NoPushId = 8
```

Don't call PushID()/PopID() on BeginTabItem()/EndTabItem()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L29).

## `NoReorder`

<a id="api-a45496caad92d304"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoReorder 74359608a1343ebf82be7599e35fdaac453016551a063d5325825feea0e0e8c8 -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.NoReorder = 32
```

Disable reordering this tab or having another tab cross over this tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L37).

## `NoTooltip`

<a id="api-7af956fc63b89b20"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoTooltip e178ea64005854426f3bb91a85384964df93dd4fc5675f67a8d14cc9fd768222 -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.NoTooltip = 16
```

Disable tooltip for the given tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L33).

## `SetSelected`

<a id="api-240110a8ffc77dac"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.SetSelected b1e55fd8228d15454dcfea030abd04a8b19fc04266171def7c1156231cf0ab29 -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.SetSelected = 2
```

Trigger flag to programmatically make the tab selected when calling BeginTabItem()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L21).

## `Trailing`

<a id="api-69161bc2d3f9a6b0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.Trailing 791d3c38d13bc6d4e6cd5c4df19498ae833fe467d195d595f5fe22c01754843a -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.Trailing = 128
```

Enforce the tab position to the right of the tab bar (before the scrolling buttons)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L45).

## `UnsavedDocument`

<a id="api-6c54f374f1eba7d5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabItemFlags.UnsavedDocument 7161424372e3e8516d07e2ff58ae85fb257d98240d9ce78f0af67b4650a16d5e -->

```csharp
Inno.Editor.ImGui.ImGuiTabItemFlags.UnsavedDocument = 1
```

Display a dot next to the title + set ImGuiTabItemFlags_NoAssumedClosure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabItemFlags.cs#L17).
