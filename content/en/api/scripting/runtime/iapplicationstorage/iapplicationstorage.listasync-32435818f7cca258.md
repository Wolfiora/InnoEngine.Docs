---
uid: api.32435818f7cca2580260f90301b2ef3f9417f5f5e33fd989a83a8b49018ac95d
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.ListAsync(System.Nullable{InnoEngine.Storage.StorageKey},System.Threading.CancellationToken)"
source: xml
reviewed: 1788352a0eb3d9f3c2f071bfff552cfaf0c1de83ecbb0206e31064df98c7abea
title: "IApplicationStorage.ListAsync"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Lists immutable keys below an optional logical prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.
