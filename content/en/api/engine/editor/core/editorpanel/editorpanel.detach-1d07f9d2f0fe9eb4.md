---
uid: api.1d07f9d2f0fe9eb45c89b0fbe7bd09adc4409a77c9a33e80827200d9fdff6955
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Detach(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: 24ecf03491cdd93174d203b94b56348a7d11c831b82887e3ab4fa0878139572f
title: "EditorPanel.Detach"
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
