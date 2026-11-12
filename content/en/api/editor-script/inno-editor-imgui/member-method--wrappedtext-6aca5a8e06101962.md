---
title: "ImGuiWidget — Method: WrappedText"
description: "Exact Method: WrappedText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.6aca5a8e06101962
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: WrappedText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `WrappedText`

<a id="api-746eaa64cfd88f9f"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String,System.Single) 45b4436cfa50b70bdff1166c78f1a8d457942f4d5fc1fc3db9d769c3d3c99555 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.WrappedText(string text, float wrapWidth)
```

Draws literal text at an explicitly measured wrap width, independent of a scrolling window's virtual content extent.

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

**Throws `System.ArgumentNullException`:** The text is null.

**Throws `System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Throws `System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L494).

## `WrappedText`

<a id="api-d093d7abf93622ba"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String) 4da6068e15f56335c19bc665d96958c50ef50e4a0137eda526a69d16d06dcfe8 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.WrappedText(string text)
```

Draws literal text wrapped to the remaining content width without using a native
variadic formatting entry point.

**Parameter `text`:** The literal text to draw.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L466).
