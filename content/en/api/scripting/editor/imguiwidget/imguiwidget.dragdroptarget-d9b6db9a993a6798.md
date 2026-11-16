---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d9b6db9a993a6798d3f636ed2c182d621554abda57bb34f0c8ba900bd8143ab4
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget``1(System.String,``0@,System.Boolean@,System.Boolean)
title: ImGuiWidget.DragDropTarget
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: cedb6ebcf3110b61e003505c2b91ceb7183c7be5b1469d146201a343e577e817
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

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Parameter `drawDefaultHighlight`:** Whether ImGui draws its default target rectangle.

## Returns

`true` only when a compatible payload is delivered.
