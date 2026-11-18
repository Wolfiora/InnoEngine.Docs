---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.interactions.editor-script.98eecbe96dc18ee4
symbol: scripting:Inno.Editor.Interactions:T:InnoEditor.Interactions.EditorInteraction
title: EditorInteraction
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: df12585530c542cd58d46b8d6c25c5294acc5feb0815adbcaec9a8875f13e4b1
apiScope: Editor
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts
- manual.scripting.use-script-api

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

A target-bearing handle retains that target while it is in use. Do not cache it across frames, asynchronous work, or extension generations. Resolve live identity objects through Core Identity before creating a fresh handle. Focus and deferred routing capture their own identity or weak reference. Target-free handles can be reused within their owning interaction runtime.
