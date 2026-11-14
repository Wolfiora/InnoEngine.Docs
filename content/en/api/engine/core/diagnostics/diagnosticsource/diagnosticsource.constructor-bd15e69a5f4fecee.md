---
uid: api.bd15e69a5f4feceee3fb06c88a8b789ffdb2544990eb4ce8b998a2dbe8ccc260
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticSource.#ctor(System.String,System.String)"
source: xml
reviewed: cf5d4d78cbdbdf721094474f1b4110e600c03b3f98c84c69bb75a6bd1cf7bba1
title: "DiagnosticSource.Constructor"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Creates an immutable identity for one independently replaceable diagnostic producer.

**Parameter `id`:** The globally stable machine-readable producer identifier.

**Parameter `displayName`:** The non-empty producer name presented by diagnostic consumers.

**Exception `T:System.ArgumentException`:** Thrown when either value is empty.
