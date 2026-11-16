---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c85078c5038b10b2cc0c1e172854bf69198b9366817b7812d2e65be4f483bf29
symbol: engine:Inno.Editor.Scripting:M:Inno.Editor.Scripting.EditorScriptCompilationProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean)
title: EditorScriptCompilationProgress.Constructor
kind: api
owners:
- Inno.Editor.Scripting
apiSurface: source-clr
reviewed: 810f4d8a295f0dcffa8573b2aa7c9a86f527c9dde258b2e756c6da46be6cdd17
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operationId`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
