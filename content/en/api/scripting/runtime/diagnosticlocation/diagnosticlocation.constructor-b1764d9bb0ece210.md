---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b1764d9bb0ece210c15e86ebe4a794d02920232f45dc53869f85db1332362e36
symbol: scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32)
title: DiagnosticLocation.Constructor
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: editor-script
reviewed: 48260d6d7db5e23c2713f3cab5b51a4219f869a0b89713bc05929a2145bcc648
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sourcePath`:** The source path associated with the diagnostic.

**Parameter `line`:** The one-based line number, or zero when it is unavailable.

**Parameter `column`:** The one-based column number, or zero when it is unavailable.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sourcePath` is empty or contains only whitespace.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `line` or `column` is negative.
