---
uid: api.inno.editor.imgui.594b9d75739062de
symbol: "engine:Inno.Editor.ImGui:T:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation"
source: xml
reviewed: dde50fab3329d6f6fa95d5e10f8223c916707f8028d5a875e5cef84c9ccc5437
title: "DialogPresentation"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
contracts:
- project.inno-editor-imgui
aliases: []
---

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.
