---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.scripting.1f76146da52f7886
symbol: engine:Inno.Editor.Scripting:T:Inno.Editor.Scripting.EditorScriptCompilationProgress
title: EditorScriptCompilationProgress
kind: api
owners:
- Inno.Editor.Scripting
apiSurface: source-clr
reviewed: 6616c824765afebb3f86a071aba386ab6700ad33fb9979aa20dcb8a5f6f68f81
contracts:
- project.inno-editor-scripting

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `operationId`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
