---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d289be39ce94e20859e9365ba28acf3b219f002675e6c7c59062b42f37a18cad
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.Set(Inno.Core.Diagnostics.DiagnosticSource,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic})
title: DiagnosticHub.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 807bfa9678a68da0f3e3b5289181c3fc2212d65bdbec9673ef82b9231e2e1012
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The stable producer identity whose previous report is replaced.

**Parameter `diagnostics`:** The complete current report, or an empty collection to clear it.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the source is invalid or the collection contains a null entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.
