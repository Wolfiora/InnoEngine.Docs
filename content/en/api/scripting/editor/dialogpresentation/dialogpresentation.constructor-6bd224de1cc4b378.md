---
uid: api.6bd224de1cc4b378c6212eed05dc0fc00a6eeab2b6b21e6f404f964022124a11
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.DialogPresentation.#ctor(System.String,System.Nullable{System.Single},System.Boolean,System.String,System.Boolean,System.String,System.Boolean)"
source: xml
reviewed: 91f2408f28e9595b854819c5ffb08524371aa73d3f145be8fa79bdc3145f379b
title: "DialogPresentation.Constructor"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.
