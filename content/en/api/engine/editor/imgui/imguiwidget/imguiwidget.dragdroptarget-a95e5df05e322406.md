---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a95e5df05e32240629a4f643a35974d4dfccc64c0fd8f12085b600544bb60180
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DragDropTarget``1(System.String,``0@,System.Boolean@,System.Boolean)
title: ImGuiWidget.DragDropTarget
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 63179eaa28c09491ab1a16913ef4cf795578240128f378beb22208147cac737d

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Accepts an unmanaged payload and controls whether ImGui draws its default target rectangle.

## Type parameters

**Type parameter `TPayload`:** Unmanaged payload type.

## Parameters

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

## Returns

`true` only when a compatible payload is delivered.
