---
uid: api.9cab3896647ea3e977121aded72bb712f067414c5dbad7b3b13ddc75dcba4326
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.DialogPresentation.#ctor(System.String,System.Nullable{System.Single},System.Boolean,System.String,System.Boolean,System.String,System.Boolean)"
source: xml
reviewed: bcc850392a1820f2d80de31980f3aa515d48857fdd0bf4ef82a47acdf854c65c
title: "Constructor"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks.

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.
