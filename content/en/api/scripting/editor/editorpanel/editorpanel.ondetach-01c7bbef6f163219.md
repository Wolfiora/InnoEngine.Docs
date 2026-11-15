---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.01c7bbef6f163219c32f5663d866f478e6e93bd4b221e66f863cd662cea0aeac
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.OnDetach(InnoEditor.Core.EditorContext)
title: EditorPanel.OnDetach
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 104976f27e27a11be2dfe0b8dd34a047ac785a037b3fcab3af23e7713a7f1460
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

This includes failed attachment compensation. Retain unfinished resources when throwing RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being detached.
