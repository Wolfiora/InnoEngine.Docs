---
title: "ImGuiTableRowFlags"
description: "Reference for ImGuiTableRowFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.e0b972a759464d06
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTableRowFlags`

This reference describes `ImGuiTableRowFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Headers`](#api-7a88b857247248aa) | Field |
| [`None`](#api-9bf87fd81ef3b220) | Field |

## Type declaration

<a id="api-e0b972a759464d06"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTableRowFlags cbe71936a9ad84d1b90cf62c61750520381e743d8f723095323ba160fda68a02 -->

```csharp
public enum InnoEditor.ImGui.ImGuiTableRowFlags : int
```

Defines the supported table row flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableRowFlags.cs#L8).

## `Headers`

<a id="api-7a88b857247248aa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableRowFlags.Headers 3eb9708d6b31d7ed2edb94475d565d3562fbb8f344657a6a95f0396ad9a47bb5 -->

```csharp
InnoEditor.ImGui.ImGuiTableRowFlags.Headers = 1
```

Identify header row (set default background color + width of its contents accounted differently for auto column width)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableRowFlags.cs#L17).

## `None`

<a id="api-9bf87fd81ef3b220"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableRowFlags.None 162e91383b262dd66286451d161ac05354c6517051afc444789e68b63d0daac0 -->

```csharp
InnoEditor.ImGui.ImGuiTableRowFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableRowFlags.cs#L13).
