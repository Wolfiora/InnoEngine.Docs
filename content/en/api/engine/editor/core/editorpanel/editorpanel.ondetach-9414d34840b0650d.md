---
uid: api.9414d34840b0650d16963c9fce714d7f6813beda03b3597301f88574912e9258
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.OnDetach(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: 0658fa0e844c142de8b66b83c5be483e79aba07073087c5c2f4877aa480c1a04
title: "EditorPanel.OnDetach"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Runs before the panel is detached from its active extension generation.

## Remarks

This includes failed attachment compensation. Retain unfinished resources when throwing RetirementPendingException and avoid repeating completed cleanup steps on the next attempt.

**Parameter `context`:** The shared editor context for the runtime being detached.
