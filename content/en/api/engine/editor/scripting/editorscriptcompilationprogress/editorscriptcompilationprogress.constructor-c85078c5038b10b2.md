---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c85078c5038b10b2cc0c1e172854bf69198b9366817b7812d2e65be4f483bf29
symbol: engine:Inno.Editor.Scripting:M:Inno.Editor.Scripting.EditorScriptCompilationProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean)
title: EditorScriptCompilationProgress.Constructor
kind: api
owners:
- Inno.Editor.Scripting
apiSurface: source-clr
sourceFingerprint: 1c1b08ab6c9020859df24f7624c984e1afd574013d3ccc4c184f3999cf1d080b
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
