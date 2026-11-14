---
uid: api.inno.editor.imgui.editor-script.cc761e192ec91fa1
symbol: "scripting:Inno.Editor.ImGui:T:InnoEditor.ImGui.DialogPresentation"
source: xml
reviewed: 2fba570ad6ca1faf83d34fb0aad19455ef783d6bb3116ab0cb2ff194f15078e3
title: "DialogPresentation"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-imgui
aliases: []
---

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

## Parameters

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.
