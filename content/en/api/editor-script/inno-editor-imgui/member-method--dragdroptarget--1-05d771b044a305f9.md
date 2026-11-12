---
title: "ImGuiWidget — Method: DragDropTarget``1"
description: "Exact Method: DragDropTarget``1 contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.05d771b044a305f9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DragDropTarget``1

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## ```DragDropTarget``1```

<a id="api-dcbca2a5ae780cd9"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget``1(System.String,``0@,System.Boolean@,System.Boolean) d6bab08ccdbd368d13b701d384ffddc4d2a747049ed39fc00993a6290f2eb365 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, out TPayload payload, out bool isPreviewing, bool drawDefaultHighlight) where TPayload : struct
```

Accepts an unmanaged payload and controls whether ImGui draws its default target rectangle.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

**Returns:** `true` only when a compatible payload is delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L181).

## ```DragDropTarget``1```

<a id="api-8f9f0435d53c4066"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget``1(System.String,``0@,System.Boolean@) da806acc71a567c73644d10126baed142cb681e72057562bdfb61abb469cbdfc -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, out TPayload payload, out bool isPreviewing) where TPayload : struct
```

Accepts an unmanaged payload and reports its preview state on the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Returns:** `true` only when a compatible payload is delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L150).

## ```DragDropTarget``1```

<a id="api-6cd43b1da7ec697d"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget``1(System.String,``0@) f49625a99cead5e07afe2a561b2286d2c47e8fc3212bd46f8ff1aad3402bdfc5 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, out TPayload payload) where TPayload : struct
```

Accepts an unmanaged payload on the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Delivered payload value.

**Returns:** `true` only when a compatible payload is delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L123).

## ```DragDropTarget``1```

<a id="api-b78d3405d6bc4420"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget``1(System.String,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,``0@,System.Boolean@,System.Boolean) 9cf1b45def69085e46b7cf4b16cfd3227ec96b8908f589a45129f725039965b1 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint targetId, out TPayload payload, out bool isPreviewing, bool drawDefaultHighlight = true) where TPayload : struct
```

Accepts an unmanaged payload on an explicit screen-space rectangle.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `minimum`:** Minimum screen coordinate of the complete target.

**Parameter `maximum`:** Maximum screen coordinate of the complete target.

**Parameter `targetId`:** ImGui identifier unique within the current window.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

**Returns:** `true` only when a compatible payload is delivered.

**Throws `System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L243).
