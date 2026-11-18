---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.01c7bbef6f163219c32f5663d866f478e6e93bd4b221e66f863cd662cea0aeac
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.OnDetach(InnoEditor.Core.EditorContext)
title: EditorPanel.OnDetach
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: b010df85ec961f822f801f4fd92b9b26fe5da299d80172f00b390c4c36a66b59
apiScope: Editor
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
