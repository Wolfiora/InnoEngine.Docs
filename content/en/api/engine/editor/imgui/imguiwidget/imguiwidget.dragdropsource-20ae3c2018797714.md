---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.20ae3c2018797714ddb36d352ec71e75dc53a1902dbcfd1d9cee05bad8ecd1d0
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource``1(System.String,System.Func{``0},System.Action,System.Boolean)
title: ImGuiWidget.DragDropSource
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 7ad6a86b3fcd74082855e673a73f163e962300322d3516f251f6688d8e0d7bf0
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

**Parameter `payloadFactory`:** Creates the payload only after dragging starts.

**Parameter `drawPreview`:** Optional preview drawing callback.

**Parameter `allowHoldToOpenOthers`:** Whether hovering over another openable control may open it after the native drag-hold delay.

## Returns

`true` while the item is an active drag source.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `payloadType` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `payloadFactory` is `null`.
