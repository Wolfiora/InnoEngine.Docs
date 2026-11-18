---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1d07f9d2f0fe9eb45c89b0fbe7bd09adc4409a77c9a33e80827200d9fdff6955
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Detach(Inno.Editor.Core.EditorContext)
title: EditorPanel.Detach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: e088186c404d6642f5574dd08dcbbea130b6bad35769201715d8709968e22310
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Also compensates partial attachment. Completed detachment is idempotent; a pending panel cannot draw.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being detached.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Panel work is still active. The owner must retain the panel and its dependencies and retry detachment.
