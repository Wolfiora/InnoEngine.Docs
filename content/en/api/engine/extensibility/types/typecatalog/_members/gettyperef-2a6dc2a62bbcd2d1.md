---
uid: api.2a6dc2a62bbcd2d1decaed4a25cbc06c5b52295af60d5b3f5495501cae6620dd
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.GetTypeRef(System.Type)"
source: xml
reviewed: 7a777381b14b3d41f21d7abb697cb8a95527e90832a348c01ab7614cdd50a0ed
title: "GetTypeRef"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Gets the reference for an active CLR type.

**Returns:** Its logical and generation-local identity.

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the type does not belong to the active catalog.

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.
