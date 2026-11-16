---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9414d34840b0650d16963c9fce714d7f6813beda03b3597301f88574912e9258
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext)
title: EditorPanel.OnDetach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 56920c8fed5eddd8a6eff79a785c558ebc9aba59c405710565051dfb34f5aa37
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This includes failed attachment compensation. Retain unfinished resources when throwing RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being detached.
