---
uid: api.1d07f9d2f0fe9eb45c89b0fbe7bd09adc4409a77c9a33e80827200d9fdff6955
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Detach(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: 3b07dcb14436c3eb3866345be166a5d8be0a89485e834eb12be9cd7330792df7
title: "Detach"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Detaches the panel before its extension generation is released.

## Remarks

Also compensates partial attachment. Completed detachment is idempotent; a pending panel cannot draw.

**Parameter `context`:** The shared editor context for the runtime being detached.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Panel work is still active. The owner must retain the panel and its dependencies and retry detachment.
