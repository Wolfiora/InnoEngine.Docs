---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1121ab5f78e88cd5aa448888df2e499cc4564f3ba52dd0a98cf4d8322476714a
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.String,System.Int32,System.Int32)
title: ScriptDiagnostic.Constructor
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
reviewed: 51e9c896f57e2de964e32c9e1284963568b2fa90f0140d4056ad8e655e17df78

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `id`:** The stable compiler, analyzer, or reload diagnostic identifier.

**Parameter `severity`:** The presentation severity of the diagnostic.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `filePath`:** The source path associated with the diagnostic, or `null` for a project-level diagnostic.

**Parameter `line`:** The one-based source line, or zero when no source location is available.

**Parameter `column`:** The one-based source column, or zero when no source location is available.
