---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.08977a52a6850824c35e2c199ee481ce3399964bf69d6823861116e52585b685
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32)
title: DiagnosticLocation.Constructor
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 3ac81880f4c0806e06c59eac33508e163626bd27bb179a4af60dcc963b42da59
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
