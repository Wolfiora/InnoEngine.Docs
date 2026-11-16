---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6bd224de1cc4b378c6212eed05dc0fc00a6eeab2b6b21e6f404f964022124a11
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.DialogPresentation.#ctor(System.String,System.Nullable{System.Single},System.Boolean,System.String,System.Boolean,System.String,System.Boolean)
title: DialogPresentation.Constructor
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 4ccb75c513b9d2c517e1e2657816c69404ec22248437beedb1a9ce8e0176bfcf
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `message`:** The current status or error text.

**Parameter `progress`:** A completed fraction, or null when no progress bar is needed.

**Parameter `indeterminate`:** Whether to show activity without inventing a completed fraction.

**Parameter `actionLabel`:** The optional centered action label.

**Parameter `actionEnabled`:** Whether the current operation admits the action.

**Parameter `details`:** Optional expanded diagnostic text sharing the message scroll owner.

**Parameter `cancelOnEscape`:** Whether Escape activates this action; opt in only for cancellation or dismissal.
