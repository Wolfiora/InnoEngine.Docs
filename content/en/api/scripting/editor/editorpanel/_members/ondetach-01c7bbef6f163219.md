---
uid: api.01c7bbef6f163219c32f5663d866f478e6e93bd4b221e66f863cd662cea0aeac
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.OnDetach(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 0a6077c7d80c31d3ace185dca009dbabdfaff7b9fa4dfdc09794266c93eb84be
title: "OnDetach"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Runs before the panel is detached from its active extension generation.

## Remarks

This includes failed attachment compensation. Retain unfinished resources when throwing RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.

**Parameter `context`:** The shared editor context for the runtime being detached.
