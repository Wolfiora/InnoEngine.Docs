---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1121ab5f78e88cd5aa448888df2e499cc4564f3ba52dd0a98cf4d8322476714a
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.String,System.Int32,System.Int32)
title: ScriptDiagnostic.Constructor
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
sourceFingerprint: 73f44c503e6269efc2c0d2206c6adcd9afc5ba95663ea444c8aaa4bcc75aa5cc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable compiler, analyzer, or reload diagnostic identifier.

**Parameter `severity`:** The presentation severity of the diagnostic.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `filePath`:** The source path associated with the diagnostic, or `null` for a project-level diagnostic.

**Parameter `line`:** The one-based source line, or zero when no source location is available.

**Parameter `column`:** The one-based source column, or zero when no source location is available.
