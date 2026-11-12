---
title: "ImGuiTableBgTarget"
description: "Reference for ImGuiTableBgTarget in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.a7a5bc60b6cc0bfd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTableBgTarget`

This reference describes `ImGuiTableBgTarget` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`CellBg`](#api-ec9273eaf7c0d6e4) | Field |
| [`None`](#api-27f9bc1247ee4e21) | Field |
| [`RowBg0`](#api-d49ca76741d4529c) | Field |
| [`RowBg1`](#api-e8046c092213c54c) | Field |

## Type declaration

<a id="api-a7a5bc60b6cc0bfd"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTableBgTarget 3be8c17655fe4f8741dea2f67e2086f00bfa16e78a84537a20521d66edfaa7b3 -->

```csharp
public enum InnoEditor.ImGui.ImGuiTableBgTarget : int
```

Defines the supported table bg target choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L7).

## `CellBg`

<a id="api-ec9273eaf7c0d6e4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableBgTarget.CellBg c240f1e1a9f97771029c53025e2d58a115e0501aff799b5e1766f479a877d990 -->

```csharp
InnoEditor.ImGui.ImGuiTableBgTarget.CellBg = 3
```

Set cell background color (top-most color)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L24).

## `None`

<a id="api-27f9bc1247ee4e21"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableBgTarget.None 434952fa850dd6d87fc31b7cb39c3c6dc2dc70f56abe87f7e73c6d4bd051819e -->

```csharp
InnoEditor.ImGui.ImGuiTableBgTarget.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L12).

## `RowBg0`

<a id="api-d49ca76741d4529c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableBgTarget.RowBg0 9a6e2797a5477933d14015f35c205823732579ce80fd72ef92330e86bacd3c41 -->

```csharp
InnoEditor.ImGui.ImGuiTableBgTarget.RowBg0 = 1
```

Set row background color 0 (generally used for background, automatically set when ImGuiTableFlags_RowBg is used)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L16).

## `RowBg1`

<a id="api-e8046c092213c54c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableBgTarget.RowBg1 ff6746a6b550d8b1a34019994cfb1a9900bcd8e8189e0d8f12343b4b82d37e94 -->

```csharp
InnoEditor.ImGui.ImGuiTableBgTarget.RowBg1 = 2
```

Set row background color 1 (generally used for selection marking)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L20).
