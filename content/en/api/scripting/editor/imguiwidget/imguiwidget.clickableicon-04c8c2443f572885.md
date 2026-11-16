---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.04c8c2443f572885c21b705df2977f04e058604717d663906fb13d38f79885b6
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ClickableIcon(System.String,System.String,System.String)
title: ImGuiWidget.ClickableIcon
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 461ee91fc6de48350e87e586e82d9fc8c6a7f93015af4868fb4ce9833b33db57
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `icon`:** The visible icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the icon is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `icon` is `null`.
