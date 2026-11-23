---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4d07d1b4d69bc6583638898d129cdb3d9ebdb3dda78679526851b2bd86ff388e
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Detach(InnoEditor.Core.EditorContext)
title: EditorPanel.Detach
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 197247d660ee225121ff2f9eb14422b570ecf5e789b7f8e053d5dbc12a1d5948
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the runtime being detached.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Panel work is still active. The owner must retain the panel and its dependencies and retry detachment.

## Remarks

Also compensates partial attachment. Completed detachment is idempotent; a pending panel cannot draw.
