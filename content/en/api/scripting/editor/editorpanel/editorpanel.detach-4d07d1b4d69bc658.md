---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4d07d1b4d69bc6583638898d129cdb3d9ebdb3dda78679526851b2bd86ff388e
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Detach(InnoEditor.Core.EditorContext)
title: EditorPanel.Detach
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 99c509583cda59f84a31c9d8a96b1330745b5ab778b0a146ae1a920718175dce
apiScope: Editor
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
