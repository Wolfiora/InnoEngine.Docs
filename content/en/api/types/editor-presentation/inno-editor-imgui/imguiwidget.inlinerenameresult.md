---
title: "ImGuiWidget.InlineRenameResult"
description: "Reference for ImGuiWidget.InlineRenameResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.31178d279328b53b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.InlineRenameResult`

This reference describes `ImGuiWidget.InlineRenameResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-28e68b662a0cdbd9) | Field |
| [`Commit`](#api-0b0eed46a3f34dba) | Field |
| [`FocusLost`](#api-4306e7990040ead8) | Field |
| [`None`](#api-d82bf0927098fc74) | Field |

## Type declaration

<a id="api-31178d279328b53b"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult acf2b70a2bd5cf4fb2f8ba02d3386d1cdbe0a6359015a334b75ddc1a2b933169 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult : int
```

Describes the outcome of an inline rename control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L215).

## `Cancel`

<a id="api-28e68b662a0cdbd9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.Cancel 7565f6e562ce35c8ed74758a087154c71bf35aed20b3213c9fdd3892f000ea9a -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.Cancel = 3
```

Indicates that the edited text should be discarded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L232).

## `Commit`

<a id="api-0b0eed46a3f34dba"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.Commit 77c35dc6c0b19cda19c2812311191aa0ba59bb77de5115da7eb1db077985b905 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.Commit = 1
```

Indicates that the edited text should be committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L224).

## `FocusLost`

<a id="api-4306e7990040ead8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.FocusLost 316d8eecccfbd180e29b42bb02e62a1f35b273f3f8ced6e61537f292cb349b17 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.FocusLost = 2
```

Indicates that the input lost focus and its valid value should be committed before closing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L228).

## `None`

<a id="api-d82bf0927098fc74"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.None 499d1af04c849b4cca9c04d7759896ea119d305b35a136f9cbcc6dd09bb0f63f -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult.None = 0
```

Indicates that the interaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L220).
