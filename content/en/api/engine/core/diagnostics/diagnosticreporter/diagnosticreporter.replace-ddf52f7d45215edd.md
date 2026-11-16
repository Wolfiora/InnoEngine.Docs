---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ddf52f7d45215eddaac4d975ba99bd9897e5c9ba644d5f39780c5dd666ab4f11
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticReporter.Replace(System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic})
title: DiagnosticReporter.Replace
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 525b191eeec19a82da7da041009ccc032c92768683907c29b0a05efb1e54800a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `diagnostics`:** The full immutable issue set; empty clears the report.

## Exceptions

**Exception `T:System.ArgumentException`:** The supplied issue set contains a duplicate identity.

**Exception `T:System.ObjectDisposedException`:** This producer has retired or been replaced.
