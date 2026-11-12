---
title: "ImGuiChildFlags"
description: "Reference for ImGuiChildFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.1694d95b349fae53
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiChildFlags`

This reference describes `ImGuiChildFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlwaysAutoResize`](#api-466624ebed156ee3) | Field |
| [`AlwaysUseWindowPadding`](#api-0f8b365477276558) | Field |
| [`AutoResizeX`](#api-bafed6e763de7d12) | Field |
| [`AutoResizeY`](#api-dd8076415c3214de) | Field |
| [`Borders`](#api-d145283fc8ea63ec) | Field |
| [`FrameStyle`](#api-82cc272d432ec10a) | Field |
| [`NavFlattened`](#api-fda35610390e96e3) | Field |
| [`None`](#api-0575995497cc088e) | Field |
| [`ResizeX`](#api-fdfd01962dc53303) | Field |
| [`ResizeY`](#api-fd3a6ed6c93e2f56) | Field |

## Type declaration

<a id="api-1694d95b349fae53"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiChildFlags 0d0768e8bc9f011ae084e1a515fe7c62fd13c75c0386f21ae6373efca921e4b5 -->

```csharp
public enum InnoEditor.ImGui.ImGuiChildFlags : int
```

Defines the supported child flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L8).

## `AlwaysAutoResize`

<a id="api-466624ebed156ee3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.AlwaysAutoResize bd8cdc41ca003bfee9167e97be27dbe97f2221ba723adf080022aac751ea0d9b -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.AlwaysAutoResize = 64
```

Combined with AutoResizeX/AutoResizeY. Always measure size even when child is hidden, always return true, always disable clipping optimization! NOT RECOMMENDED.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L41).

## `AlwaysUseWindowPadding`

<a id="api-0f8b365477276558"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.AlwaysUseWindowPadding 24e1e64aea2724987394c7ba465433b93091295f009c6aa4d3b7714d2f056a09 -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.AlwaysUseWindowPadding = 2
```

Pad with style.WindowPadding even if no border are drawn (no padding by default for non-bordered child windows because it makes more sense)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L21).

## `AutoResizeX`

<a id="api-bafed6e763de7d12"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.AutoResizeX 577e7845aebf0f99c814bc6a8ef6a926c6370248de2708d15d1517e72b748cca -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.AutoResizeX = 16
```

Enable auto-resizing width. Read "IMPORTANT: Size measurement" details above.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L33).

## `AutoResizeY`

<a id="api-dd8076415c3214de"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.AutoResizeY 193b52eb35749c774751d77faf459269eceb75174509a2673a7606b18c7f490c -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.AutoResizeY = 32
```

Enable auto-resizing height. Read "IMPORTANT: Size measurement" details above.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L37).

## `Borders`

<a id="api-d145283fc8ea63ec"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.Borders 3e8d41b0b1c528c501fc1cf9ba241b5e49df7df6d51b0c7bf367a1723c5d52e1 -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.Borders = 1
```

Show an outer border and enable WindowPadding. (IMPORTANT: this is always == 1 == true for legacy reason)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L17).

## `FrameStyle`

<a id="api-82cc272d432ec10a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.FrameStyle 8ed08b9d5f35463625f5770392637a7dbc96ac65827b84eec1b1a3b61be0a256 -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.FrameStyle = 128
```

Style the child window like a framed item: use FrameBg, FrameRounding, FrameBorderSize, FramePadding instead of ChildBg, ChildRounding, ChildBorderSize, WindowPadding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L45).

## `NavFlattened`

<a id="api-fda35610390e96e3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.NavFlattened 87052e02d7f1a73cef0bb2f26cf50943fce31ddfd6da71fdea9bd5f43799e5e3 -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.NavFlattened = 256
```

Share focus scope, allow keyboard/gamepad navigation to cross over parent border to this child or between sibling child windows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L49).

## `None`

<a id="api-0575995497cc088e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.None 092f0e567f549c061f14fe9d01a5c4a7f2ebde0ca7c308c75189b4f4f1fe5e10 -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L13).

## `ResizeX`

<a id="api-fdfd01962dc53303"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.ResizeX 172b49ec0f0f4316f83386326d21d0ad8e10b3d1b1ab81519aee2ce2077deab9 -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.ResizeX = 4
```

Allow resize from right border (layout direction). Enable .ini saving (unless ImGuiWindowFlags_NoSavedSettings passed to window flags)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L25).

## `ResizeY`

<a id="api-fd3a6ed6c93e2f56"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiChildFlags.ResizeY 918249d8d764399f40908c5b70a9a20991f7a185a0308a4e812d92bdb0b41e2a -->

```csharp
InnoEditor.ImGui.ImGuiChildFlags.ResizeY = 8
```

Allow resize from bottom border (layout direction). "


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiChildFlags.cs#L29).
