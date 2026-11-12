---
title: "DialogLayout"
description: "Reference for DialogLayout in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.2e5002d6997bc709
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `DialogLayout`

This reference describes `DialogLayout` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`size`](#api-0e6bdebe1d7bb875) | Property |

## Type declaration

<a id="api-2e5002d6997bc709"></a>
<!-- api: T:InnoEditor.ImGui.DialogLayout a336ae676526fae7d9524cbf7b1501de69eff1c2c8f9575d5c82be38a0ce886c -->

```csharp
public readonly struct InnoEditor.ImGui.DialogLayout
```

Carries a measured dialog layout. Only its required extent is public; drawing mechanics remain owned by the widget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L46).

## `size`

<a id="api-0e6bdebe1d7bb875"></a>
<!-- api: P:InnoEditor.ImGui.DialogLayout.size a9945524019e3e781b1e7893e8d1f584bede1dbc49bd0a8eb5bdf11622e64bc6 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.DialogLayout.size { get; }
```

Gets the content extent, excluding the window title, border and padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L69).
