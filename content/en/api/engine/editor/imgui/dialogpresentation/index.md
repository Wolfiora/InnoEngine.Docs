---
uid: api.inno.editor.imgui.594b9d75739062de
symbol: "engine:Inno.Editor.ImGui:T:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation"
source: xml
reviewed: a59bb77d525587c8caadeb1529596edbecbf783e94eba96587df52925d5e1a15
title: "DialogPresentation"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
contracts:
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
