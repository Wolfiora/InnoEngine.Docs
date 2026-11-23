---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5801b5d45795a86e5c7437f8c414b0298734b41a918efa256f76cf332b1b6099
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Stop(InnoEditor.Core.EditorContext)
title: EditorModule.Stop
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: c0afe1a0b28935a85e306b27a289913ea6f8d1b4d3994ae46e12820d67ee2c6e
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.

## Remarks

Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.
