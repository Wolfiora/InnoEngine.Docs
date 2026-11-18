---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.imgui.editor-script.cc761e192ec91fa1
symbol: scripting:Inno.Editor.ImGui:T:InnoEditor.ImGui.DialogPresentation
title: DialogPresentation
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: d9e89cc48667cf05709f08c8fa9369c3d129c351c7b4d16d3863ef50f4ee17ef
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-imgui

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.
