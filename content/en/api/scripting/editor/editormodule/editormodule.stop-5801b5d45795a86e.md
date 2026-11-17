---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5801b5d45795a86e5c7437f8c414b0298734b41a918efa256f76cf332b1b6099
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Stop(InnoEditor.Core.EditorContext)
title: EditorModule.Stop
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 655d3c5bdb660606e4f7ca71b020c618f18a7df6cd92c3a8cc3140f7c5ab80da
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.
