---
uid: api.inno.scripting.compiler.15ef34a77546d5bf
symbol: "engine:Inno.Scripting.Compiler:T:Inno.Scripting.Compiler.ScriptDiagnostic"
source: xml
reviewed: 470318c78818083e4016b59fa7fd83235a525f74d049cfa8a03d83c1e7d9098f
title: "ScriptDiagnostic"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
contracts:
- project.inno-scripting-compiler
aliases: []
---

Represents one source-oriented script compilation diagnostic.

**Parameter `id`:** The stable compiler, analyzer, or reload diagnostic identifier.

**Parameter `severity`:** The presentation severity of the diagnostic.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `filePath`:** The source path associated with the diagnostic, or `null` for a project-level diagnostic.

**Parameter `line`:** The one-based source line, or zero when no source location is available.

**Parameter `column`:** The one-based source column, or zero when no source location is available.
