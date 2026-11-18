---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.scripting.1f76146da52f7886
symbol: engine:Inno.Editor.Scripting:T:Inno.Editor.Scripting.EditorScriptCompilationProgress
title: EditorScriptCompilationProgress
kind: api
owners:
- Inno.Editor.Scripting
apiSurface: source-clr
sourceFingerprint: 16ef7c85b0542d0b28f199207342b0f30c84b124a217f7afe657921b4bdb4d6e
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
