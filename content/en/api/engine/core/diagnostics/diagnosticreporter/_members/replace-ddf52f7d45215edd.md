---
uid: api.ddf52f7d45215eddaac4d975ba99bd9897e5c9ba644d5f39780c5dd666ab4f11
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticReporter.Replace(System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic})"
source: xml
reviewed: a2acd622f8edb3b27aa2383e8c3881d56e16f63dbdd6592fa6a56051e9e39ebb
title: "Replace"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Atomically replaces this producer's complete current issue set.

**Parameter `diagnostics`:** The full immutable issue set; empty clears the report.

**Exception `T:System.ArgumentException`:** The supplied issue set contains a duplicate identity.

**Exception `T:System.ObjectDisposedException`:** This producer has retired or been replaced.
