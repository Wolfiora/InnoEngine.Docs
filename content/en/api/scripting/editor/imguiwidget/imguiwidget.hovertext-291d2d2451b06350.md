---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.291d2d2451b06350edba81376313dcfc88904b025472ed5dd21dd8e64e6044c9
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.HoverText(System.String,System.String)
title: ImGuiWidget.HoverText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: f90bdae6ee787e9fe4804c670297c62f2b32f2a2ad614066c7402c87f30c19bc
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Draws a text link with no button background and highlights it only through text presentation.

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible link text.

## Returns

`true` when the link is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
