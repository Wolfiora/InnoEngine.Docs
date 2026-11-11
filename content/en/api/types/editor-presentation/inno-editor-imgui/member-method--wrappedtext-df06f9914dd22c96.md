---
title: "ImGuiWidget.ImGuiWidget — Method: WrappedText"
description: "Exact Method: WrappedText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.df06f9914dd22c96
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: WrappedText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WrappedText`

<a id="api-bec947b7c81f3c6b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(System.String,System.Single) c802460d41acc61b3eebd9df688f246337d1855bff6480b4bb817050c6dde3a3 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(string text, float wrapWidth)
```

Draws literal text at an explicitly measured wrap width, independent of a scrolling window's virtual content extent.

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

**Throws `System.ArgumentNullException`:** The text is null.

**Throws `System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Throws `System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L494).

## `WrappedText`

<a id="api-a06925318f7bc8b7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(System.String) de4487790f79336cda5b57d713eb9ce7383734483671f18409d97da220afda40 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(string text)
```

Draws literal text wrapped to the remaining content width without using a native
variadic formatting entry point.

**Parameter `text`:** The literal text to draw.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L466).
