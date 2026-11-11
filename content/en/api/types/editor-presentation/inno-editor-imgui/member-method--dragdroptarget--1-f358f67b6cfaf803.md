---
title: "ImGuiWidget.ImGuiWidget — Method: DragDropTarget``1"
description: "Exact Method: DragDropTarget``1 contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.f358f67b6cfaf803
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: DragDropTarget``1

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## ```DragDropTarget``1```

<a id="api-0a6a23423c85a88e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget``1(System.String,``0@,System.Boolean@,System.Boolean) f0ab1527629d7c7e8cbc5364d19c69e5cd1cf1ebb44af4779acc58632b8fdd33 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, out TPayload payload, out bool isPreviewing, bool drawDefaultHighlight) where TPayload : unmanaged
```

Accepts an unmanaged payload and controls whether ImGui draws its default target rectangle.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

**Returns:** `true` only when a compatible payload is delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L181).

## ```DragDropTarget``1```

<a id="api-f487a08097bdbf43"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget``1(System.String,``0@,System.Boolean@) a1fbe5ab250f73f41b4d1b2de32754204aeac11a84c47de0b6118c1021a5d043 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, out TPayload payload, out bool isPreviewing) where TPayload : unmanaged
```

Accepts an unmanaged payload and reports its preview state on the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Returns:** `true` only when a compatible payload is delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L150).

## ```DragDropTarget``1```

<a id="api-a47b0d84f3af5d03"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget``1(System.String,``0@) acf06c0cf8da9ca25bea81e6e70668460c9e2b4e00e2b9b9662715edd7854c48 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, out TPayload payload) where TPayload : unmanaged
```

Accepts an unmanaged payload on the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Delivered payload value.

**Returns:** `true` only when a compatible payload is delivered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L123).

## ```DragDropTarget``1```

<a id="api-f8a93f6de9ae49c9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget``1(System.String,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,``0@,System.Boolean@,System.Boolean) ecf4e2ade1ab04bb7511f38a3c8011856c3eb37031abc66320e5877b40f6eac7 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget<TPayload>(string payloadType, System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint targetId, out TPayload payload, out bool isPreviewing, bool drawDefaultHighlight = true) where TPayload : unmanaged
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.DragDrop.cs#L243).
