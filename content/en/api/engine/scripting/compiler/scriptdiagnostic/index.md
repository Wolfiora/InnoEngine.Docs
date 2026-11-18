---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scripting.compiler.15ef34a77546d5bf
symbol: engine:Inno.Scripting.Compiler:T:Inno.Scripting.Compiler.ScriptDiagnostic
title: ScriptDiagnostic
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
sourceFingerprint: d92c058fac9233f65e7cc3245ab24fb6c29eacf2e2523020a884478903b8aec6
contracts:
- project.inno-scripting-compiler

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `id`:** The stable compiler, analyzer, or reload diagnostic identifier.

**Parameter `severity`:** The presentation severity of the diagnostic.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `filePath`:** The source path associated with the diagnostic, or `null` for a project-level diagnostic.

**Parameter `line`:** The one-based source line, or zero when no source location is available.

**Parameter `column`:** The one-based source column, or zero when no source location is available.
