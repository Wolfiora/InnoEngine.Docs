---
uid: api.28e543a79acfbf55323cb4662af0d5f615b7b675f5f0c4c3aa47da327f09d97b
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.CreateReporter(Inno.Core.Diagnostics.DiagnosticSource)"
source: xml
reviewed: e3f8a7215d6b6eee8e4b223546304e5a0a6c115c3b9d27df2f1bd8014abb18d5
title: "CreateReporter"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Activates a producer at an owner safe point, revoking any previous registration with the same ID.

**Parameter `source`:** The stable owner-qualified producer identity.

**Returns:** A producer whose disposal clears only its own active registration.

**Exception `T:System.ArgumentException`:** The source is not initialized.
