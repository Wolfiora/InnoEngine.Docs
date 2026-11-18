---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.interactions.52ffc819216973e2
symbol: engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorInteraction
title: EditorInteraction
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 8578a436ff66f7721e334baf9a4a60c9a44fe74aaa6195c93d9c01c19943db6e
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
