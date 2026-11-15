---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.20ae3c2018797714ddb36d352ec71e75dc53a1902dbcfd1d9cee05bad8ecd1d0
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropSource``1(System.String,System.Func{``0},System.Action,System.Boolean)
title: ImGuiWidget.DragDropSource
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: b643c307a7545314253f2af7c1bd346855a0913089c3245555ad552ef328c180

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
