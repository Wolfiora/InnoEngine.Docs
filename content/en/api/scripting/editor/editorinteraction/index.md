---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.interactions.editor-script.98eecbe96dc18ee4
symbol: scripting:Inno.Editor.Interactions:T:InnoEditor.Interactions.EditorInteraction
title: EditorInteraction
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 6b883565cb5269d1c09fed59c72bfcf5c791dde1f052dfb4329c978c7aedf043
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts
- manual.scripting.use-script-api
aliases: []
---

Provides a fluent handle that borrows an optional target for a synchronous interaction request.

## Remarks

A target-bearing handle retains that target while it is in use. Do not cache it across frames, asynchronous work, or extension generations. Resolve live identity objects through Core Identity before creating a fresh handle. Focus and deferred routing capture their own identity or weak reference. Target-free handles can be reused within their owning interaction runtime.
