---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.291d2d2451b06350edba81376313dcfc88904b025472ed5dd21dd8e64e6044c9
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.HoverText(System.String,System.String)
title: ImGuiWidget.HoverText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 46a7b0a428e7367a8e1b6c8c69351e3aa6d4b93a05b93f7886d28ce019be5b7b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible link text.

## Returns

`true` when the link is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
