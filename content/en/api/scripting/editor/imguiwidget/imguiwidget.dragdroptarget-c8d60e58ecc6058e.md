---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c8d60e58ecc6058e87c377718032804bd2e3a1cd66d5d4a3d1b3588badd7e691
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget``1(System.String,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,``0@,System.Boolean@,System.Boolean)
title: ImGuiWidget.DragDropTarget
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 073f35de550023249ea46caa59c28af392af7da60e5d0cedce01204d2e1f3390
apiScope: Editor
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
