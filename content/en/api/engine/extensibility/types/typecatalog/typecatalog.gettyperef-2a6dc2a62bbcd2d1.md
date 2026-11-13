---
uid: api.2a6dc2a62bbcd2d1decaed4a25cbc06c5b52295af60d5b3f5495501cae6620dd
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.GetTypeRef(System.Type)"
source: xml
reviewed: b81b008dc2570ad8a817c1746a414d6945e74a57dc3203733704a337d191f0fb
title: "TypeCatalog.GetTypeRef"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Gets the reference for an active CLR type.

**Returns:** Its logical and generation-local identity.

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the type does not belong to the active catalog.

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.
