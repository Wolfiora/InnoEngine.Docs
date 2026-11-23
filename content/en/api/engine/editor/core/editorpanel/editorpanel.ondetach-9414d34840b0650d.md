---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9414d34840b0650d16963c9fce714d7f6813beda03b3597301f88574912e9258
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext)
title: EditorPanel.OnDetach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: de6c0dae12cafe4957573b53af8b615ea0709fbb9435b533ac6cf0c16960f4b5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the runtime being detached.

## Remarks

This includes failed attachment compensation. Retain unfinished resources when throwing RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.
