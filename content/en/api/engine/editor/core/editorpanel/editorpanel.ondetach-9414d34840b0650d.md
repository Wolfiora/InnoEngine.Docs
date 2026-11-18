---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9414d34840b0650d16963c9fce714d7f6813beda03b3597301f88574912e9258
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext)
title: EditorPanel.OnDetach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 1ee5944dad915724a083936e3ea6efa87510fe712e724ac1f9520b6effb229f7
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
