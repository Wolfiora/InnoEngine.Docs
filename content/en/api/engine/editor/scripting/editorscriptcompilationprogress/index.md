---
uid: api.inno.editor.scripting.1f76146da52f7886
symbol: "engine:Inno.Editor.Scripting:T:Inno.Editor.Scripting.EditorScriptCompilationProgress"
source: xml
reviewed: ffb4b30b3ede09d6da664a49c4d3990f16f53bd4483edefcc0deee575ec037d7
title: "EditorScriptCompilationProgress"
kind: api
owners: [Inno.Editor.Scripting]
apiSurface: source-clr
contracts:
- project.inno-editor-scripting
aliases: []
---

Captures the progress and cancellation policy of one editor script request.

**Parameter `operationId`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
