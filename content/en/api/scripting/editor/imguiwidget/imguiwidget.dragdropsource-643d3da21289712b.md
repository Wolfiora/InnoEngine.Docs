---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.643d3da21289712bf3b1f506684d939adcf872d7234d0425bb6e6fbe444157c6
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropSource``1(System.String,System.Func{``0},System.Action,System.Boolean)
title: ImGuiWidget.DragDropSource
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: aa5de225d7b5129f994d14b4df0b44df0b4254d75bee2115b3132368a570306a
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Publishes a lazily created unmanaged drag payload for the most recently submitted item.

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
