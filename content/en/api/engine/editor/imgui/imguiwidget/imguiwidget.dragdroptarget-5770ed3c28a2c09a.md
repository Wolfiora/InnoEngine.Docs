---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5770ed3c28a2c09a907cfe4e3da9a8e67b2b90202a85876e2c0710e7dec7b25a
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget``1(System.String,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,``0@,System.Boolean@,System.Boolean)
title: ImGuiWidget.DragDropTarget
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 06dabf564c14a689733c11a0ff125be7cd7fc6ede6f1aace23da13e9c4c66e29
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TPayload`:** Unmanaged payload type.

## Parameters

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `minimum`:** Minimum screen coordinate of the complete target.

**Parameter `maximum`:** Maximum screen coordinate of the complete target.

**Parameter `targetId`:** ImGui identifier unique within the current window.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

## Returns

`true` only when a compatible payload is delivered.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.
