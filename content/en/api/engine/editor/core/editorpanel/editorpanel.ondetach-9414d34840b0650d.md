---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9414d34840b0650d16963c9fce714d7f6813beda03b3597301f88574912e9258
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext)
title: EditorPanel.OnDetach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 0658fa0e844c142de8b66b83c5be483e79aba07073087c5c2f4877aa480c1a04
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
