---
title: "ImGuiChildFlags"
description: "Reference for ImGuiChildFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.c51488c5379b6bc9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiChildFlags`

This reference describes `ImGuiChildFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlwaysAutoResize`](#api-c5d8266f6987c118) | Field |
| [`AlwaysUseWindowPadding`](#api-a8b18ee9af2d0c70) | Field |
| [`AutoResizeX`](#api-7902a2413afc0a36) | Field |
| [`AutoResizeY`](#api-6036dbf167474ff4) | Field |
| [`Borders`](#api-773ac015253daa2c) | Field |
| [`FrameStyle`](#api-ea2389a6a60eb2a5) | Field |
| [`NavFlattened`](#api-5c5d685fc5c5f7a5) | Field |
| [`None`](#api-1d9620180bb6686a) | Field |
| [`ResizeX`](#api-249ae9cd929b410c) | Field |
| [`ResizeY`](#api-da056b6955b24d13) | Field |

## Type declaration

<a id="api-c51488c5379b6bc9"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiChildFlags 0388f9b341630f1ad0ed065e2765ec9835a7fed9ededcf9be826e752478070ad -->

```csharp
public enum Inno.Editor.ImGui.ImGuiChildFlags : int
```

Defines the supported child flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L8).

## `AlwaysAutoResize`

<a id="api-c5d8266f6987c118"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.AlwaysAutoResize a15502bb435909a8a3c709da8dedffa4e0ae4414e22681fbda6643281a627404 -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.AlwaysAutoResize = 64
```

Combined with AutoResizeX/AutoResizeY. Always measure size even when child is hidden, always return true, always disable clipping optimization! NOT RECOMMENDED.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L41).

## `AlwaysUseWindowPadding`

<a id="api-a8b18ee9af2d0c70"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.AlwaysUseWindowPadding c4b33752755a2d74f31f5430cb91b0a17a8cae15b69739e3762d97279e90e469 -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.AlwaysUseWindowPadding = 2
```

Pad with style.WindowPadding even if no border are drawn (no padding by default for non-bordered child windows because it makes more sense)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L21).

## `AutoResizeX`

<a id="api-7902a2413afc0a36"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.AutoResizeX 8fa968e22ae5a549f689341ca6c11393a4a1484b8bab78c7615e0d6917d3e813 -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.AutoResizeX = 16
```

Enable auto-resizing width. Read "IMPORTANT: Size measurement" details above.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L33).

## `AutoResizeY`

<a id="api-6036dbf167474ff4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.AutoResizeY 507015dc816109c87c9310babf5c852a8c82129ee3d16de2e47550a5bb0f005d -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.AutoResizeY = 32
```

Enable auto-resizing height. Read "IMPORTANT: Size measurement" details above.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L37).

## `Borders`

<a id="api-773ac015253daa2c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.Borders bbcdc680162247374c72e6711ef494f52eddbf28bbac7d23a08fcefa85dcb8eb -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.Borders = 1
```

Show an outer border and enable WindowPadding. (IMPORTANT: this is always == 1 == true for legacy reason)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L17).

## `FrameStyle`

<a id="api-ea2389a6a60eb2a5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.FrameStyle 8aaf7e3d33560cec1a514e167e7bef5f9c86e43b009469607861fc43be659056 -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.FrameStyle = 128
```

Style the child window like a framed item: use FrameBg, FrameRounding, FrameBorderSize, FramePadding instead of ChildBg, ChildRounding, ChildBorderSize, WindowPadding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L45).

## `NavFlattened`

<a id="api-5c5d685fc5c5f7a5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.NavFlattened b78ec3b14c2b96aeeb7370da82e870ab94314936745c5c2ebc5896c46de2cec9 -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.NavFlattened = 256
```

Share focus scope, allow keyboard/gamepad navigation to cross over parent border to this child or between sibling child windows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L49).

## `None`

<a id="api-1d9620180bb6686a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.None 9abec1e4c9ea9eff009c2d35f6c63e8e58ba8352036ae349d62ccdb57cfc891f -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L13).

## `ResizeX`

<a id="api-249ae9cd929b410c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.ResizeX fd58ead508269d14e64d02ae54a0dfedbbf0bbfcd0ab4c751278367fbf2831d7 -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.ResizeX = 4
```

Allow resize from right border (layout direction). Enable .ini saving (unless ImGuiWindowFlags_NoSavedSettings passed to window flags)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L25).

## `ResizeY`

<a id="api-da056b6955b24d13"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiChildFlags.ResizeY cc0354540015f763463596146d4c79a7faab2184470bf2ef54d2a875c991ddfa -->

```csharp
Inno.Editor.ImGui.ImGuiChildFlags.ResizeY = 8
```

Allow resize from bottom border (layout direction). "


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L29).
