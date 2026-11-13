---
uid: api.c85078c5038b10b2cc0c1e172854bf69198b9366817b7812d2e65be4f483bf29
symbol: "engine:Inno.Editor.Scripting:M:Inno.Editor.Scripting.EditorScriptCompilationProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean)"
source: xml
reviewed: 3b07e5d19bcc9c7d16aa9fd71b67a31fe449d96484a8714f954c397d27d08bcc
title: "Constructor"
kind: api
owners: [Inno.Editor.Scripting]
apiSurface: source-clr
---

Captures the progress and cancellation policy of one editor script request.

**Parameter `operationId`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
