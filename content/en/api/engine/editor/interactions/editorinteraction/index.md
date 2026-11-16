---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.interactions.52ffc819216973e2
symbol: engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorInteraction
title: EditorInteraction
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: d7580d672c43130d2f8685d1cc4ccd46fa9055df9b8569ff226a0b1026e25a18
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
