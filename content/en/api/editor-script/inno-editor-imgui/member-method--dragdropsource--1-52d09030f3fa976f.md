---
title: "ImGuiWidget — Method: DragDropSource``1"
description: "Exact Method: DragDropSource``1 contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.52d09030f3fa976f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DragDropSource``1

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## ```DragDropSource``1```

<a id="api-21fbe3d6e24e54ec"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DragDropSource``1(System.String,``0@,System.Action,System.Boolean) 525dc4657b3519f0feebc6e5574745d063c65f59ff1222ea6842e9c8676bd4f3 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DragDropSource<TPayload>(string payloadType, in TPayload payload, System.Action? drawPreview = null, bool allowHoldToOpenOthers = true) where TPayload : struct
```

Publishes an unmanaged drag payload for the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Payload value.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

**Returns:** `true` while the item is an active drag source.

**Throws `System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L37).

## ```DragDropSource``1```

<a id="api-f653e95acbd435b9"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DragDropSource``1(System.String,System.Func{``0},System.Action,System.Boolean) 022182596eb7377e67caf6733b6f922e49b84818835406e3976cd1a86e258e44 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DragDropSource<TPayload>(string payloadType, System.Func<TPayload> payloadFactory, System.Action? drawPreview = null, bool allowHoldToOpenOthers = true) where TPayload : struct
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L85).
