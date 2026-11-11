---
title: "ImGuiWidget.ImGuiWidget — Method: DragDropSource``1"
description: "Exact Method: DragDropSource``1 contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.6c788b8da2f4bfc7
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: DragDropSource``1

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## ```DragDropSource``1```

<a id="api-4727a12bea1d8c29"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource``1(System.String,``0@,System.Action,System.Boolean) f1b26b3ea94ebe332103ac161cd39c034e31c2f185cc3fd5b996495550f4ef6d -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource<TPayload>(string payloadType, in TPayload payload, System.Action? drawPreview = null, bool allowHoldToOpenOthers = true) where TPayload : unmanaged
```

Publishes an unmanaged drag payload for the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Payload value.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

**Returns:** `true` while the item is an active drag source.

**Throws `System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L37).

## ```DragDropSource``1```

<a id="api-94359300369f803f"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource``1(System.String,System.Func{``0},System.Action,System.Boolean) 5ae196d259093657914e1106b0d39b13764736b1dca922d9e33458dcb9f3e940 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource<TPayload>(string payloadType, System.Func<TPayload> payloadFactory, System.Action? drawPreview = null, bool allowHoldToOpenOthers = true) where TPayload : unmanaged
```

Publishes a lazily created unmanaged drag payload for the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payloadFactory`:** Creates the payload only after dragging starts.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

**Returns:** `true` while the item is an active drag source.

**Throws `System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.

**Throws `System.ArgumentNullException`:** Thrown when `payloadFactory` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L85).
