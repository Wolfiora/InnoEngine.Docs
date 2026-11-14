---
uid: api.d289be39ce94e20859e9365ba28acf3b219f002675e6c7c59062b42f37a18cad
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.Set(Inno.Core.Diagnostics.DiagnosticSource,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic})"
source: xml
reviewed: 8e822bb1e01aeaa47576fa93c4ef185c1e23f0a58c5adf2aa521a998fb118351
title: "DiagnosticHub.Set"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Atomically replaces the complete diagnostic state published by one producer.

**Parameter `source`:** The stable producer identity whose previous report is replaced.

**Parameter `diagnostics`:** The complete current report, or an empty collection to clear it.

**Exception `T:System.ArgumentException`:** Thrown when the source is invalid or the collection contains a null entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.
