---
uid: api.247b64c840a22c5dc4f2fb41e21b5977c9497c87fdc894ef89c42d8dafdd9ba7
symbol: "engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.ListAsync(System.Nullable{Inno.Storage.StorageKey},System.Threading.CancellationToken)"
source: xml
reviewed: cb6223d455b452b42496a5d18e3e07dfe7300996c37178ad0585e62c2571904f
title: "ListAsync"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Lists immutable keys below an optional logical prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.
