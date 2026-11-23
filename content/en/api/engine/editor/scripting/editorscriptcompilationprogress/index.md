---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.scripting.1f76146da52f7886
symbol: engine:Inno.Editor.Scripting:T:Inno.Editor.Scripting.EditorScriptCompilationProgress
title: EditorScriptCompilationProgress
kind: api
owners:
- Inno.Editor.Scripting
apiSurface: source-clr
sourceFingerprint: 75fd3c66c45674d4a8aeba91212e0bf58ab15086639f8fe60b3bd9faf50eb56b
contracts:
- project.inno-editor-scripting

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `operationID`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
