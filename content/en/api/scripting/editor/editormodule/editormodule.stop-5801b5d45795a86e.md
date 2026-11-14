---
uid: api.5801b5d45795a86e5c7437f8c414b0298734b41a918efa256f76cf332b1b6099
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Stop(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 49298c0f19b2de8b77be26284eb5da1e06b8699f6aa090d9b0d8b49039be3964
title: "EditorModule.Stop"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Stops the module before the containing extension generation is released.

## Remarks

Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.
