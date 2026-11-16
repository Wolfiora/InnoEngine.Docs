---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.interactions.52ffc819216973e2
symbol: engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorInteraction
title: EditorInteraction
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 3b223f20a1a4028747011310feeb2587e9ccfaac0a55ca7a2b9ed2f58795df73
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

A target-bearing handle retains that target while it is in use. Do not cache it across frames, asynchronous work, or extension generations. Resolve live identity objects through Core Identity before creating a fresh handle. Focus and deferred routing capture their own identity or weak reference. Target-free handles can be reused within their owning interaction runtime.
