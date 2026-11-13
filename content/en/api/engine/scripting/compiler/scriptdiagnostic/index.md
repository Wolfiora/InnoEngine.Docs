---
uid: api.inno.scripting.compiler.15ef34a77546d5bf
symbol: "engine:Inno.Scripting.Compiler:T:Inno.Scripting.Compiler.ScriptDiagnostic"
source: xml
reviewed: 8aa69909d7dd6d5a3fa95f934a8e50867e97a05c8048eccd718ba0f48f232f32
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
