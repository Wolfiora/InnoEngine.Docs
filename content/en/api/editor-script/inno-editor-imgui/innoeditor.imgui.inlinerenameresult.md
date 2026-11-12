---
title: "InlineRenameResult"
description: "Reference for InlineRenameResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.dceffbd49b0708a4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `InlineRenameResult`

This reference describes `InlineRenameResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-979378afc07ab5bb) | Field |
| [`Commit`](#api-66c4b4303868bc2c) | Field |
| [`FocusLost`](#api-0bdbe3098a87cec7) | Field |
| [`None`](#api-f2de2983f6380c57) | Field |

## Type declaration

<a id="api-dceffbd49b0708a4"></a>
<!-- api: T:InnoEditor.ImGui.InlineRenameResult 2f324c59e189c16caf4ae548479e0f07db7ab82cceb83dc13faabe00e292bb61 -->

```csharp
public enum InnoEditor.ImGui.InlineRenameResult : int
```

Describes the outcome of an inline rename control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L215).

## `Cancel`

<a id="api-979378afc07ab5bb"></a>
<!-- api: F:InnoEditor.ImGui.InlineRenameResult.Cancel 5ecc213af7e979c7d5d101d3d58e28433b9c6041ec1539bb12d0b4eb58e93ef2 -->

```csharp
InnoEditor.ImGui.InlineRenameResult.Cancel = 3
```

Indicates that the edited text should be discarded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L232).

## `Commit`

<a id="api-66c4b4303868bc2c"></a>
<!-- api: F:InnoEditor.ImGui.InlineRenameResult.Commit 202b85416576dab1f97ab70aeffbffc71a237e5cec7ba8808403e51552fb2e16 -->

```csharp
InnoEditor.ImGui.InlineRenameResult.Commit = 1
```

Indicates that the edited text should be committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L224).

## `FocusLost`

<a id="api-0bdbe3098a87cec7"></a>
<!-- api: F:InnoEditor.ImGui.InlineRenameResult.FocusLost 92892118ebb64f3271858e26129bf3b6b66f9d51352cf3166f9ade124d9c8c2f -->

```csharp
InnoEditor.ImGui.InlineRenameResult.FocusLost = 2
```

Indicates that the input lost focus and its valid value should be committed before closing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L228).

## `None`

<a id="api-f2de2983f6380c57"></a>
<!-- api: F:InnoEditor.ImGui.InlineRenameResult.None 95f3fcb5c8e3cf03ccbe6876b24dfdce02f578945d7337df129387c068141408 -->

```csharp
InnoEditor.ImGui.InlineRenameResult.None = 0
```

Indicates that the interaction remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L220).
