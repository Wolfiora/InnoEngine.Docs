---
uid: api.bd15e69a5f4feceee3fb06c88a8b789ffdb2544990eb4ce8b998a2dbe8ccc260
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticSource.#ctor(System.String,System.String)"
source: xml
reviewed: 6a47ba4d04ccda8e21bfb92e302f3b54c5a879d6e6efa9ab89eb9ae8c9844dd4
title: "Constructor"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Creates an immutable identity for one independently replaceable diagnostic producer.

**Parameter `id`:** The globally stable machine-readable producer identifier.

**Parameter `displayName`:** The non-empty producer name presented by diagnostic consumers.

**Exception `T:System.ArgumentException`:** Thrown when either value is empty.
