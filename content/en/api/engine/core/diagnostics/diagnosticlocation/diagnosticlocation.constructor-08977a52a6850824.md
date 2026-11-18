---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.08977a52a6850824c35e2c199ee481ce3399964bf69d6823861116e52585b685
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32)
title: DiagnosticLocation.Constructor
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: a6f08c13d66fe00f707b6a78e1863a5017242ddc9335c899afc7d4599df36181
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
