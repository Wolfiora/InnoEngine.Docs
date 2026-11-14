---
uid: api.4d07d1b4d69bc6583638898d129cdb3d9ebdb3dda78679526851b2bd86ff388e
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Detach(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 0804400a071036ce7f430b75b6622832b9641750945dfa858d77e4c5a430797b
title: "EditorPanel.Detach"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Detaches the panel before its extension generation is released.

## Remarks

Also compensates partial attachment. Completed detachment is idempotent; a pending panel cannot draw.

**Parameter `context`:** The shared editor context for the runtime being detached.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Panel work is still active. The owner must retain the panel and its dependencies and retry detachment.
