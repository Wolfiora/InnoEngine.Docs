---
uid: api.48428350d87cb0297678f8e96af22cbfea2cd07ae3d732195a67e846403ebe74
symbol: "engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendProvider.CreateStorage(Inno.Storage.StorageScope)"
source: xml
reviewed: c2b30a685512b68fd97e32b8fcba2f600bb020957df61fb8edd9d266b93c8850
title: "StorageBackendProvider.CreateStorage"
kind: api
owners: [Inno.Adapter.Storage]
apiSurface: source-clr
---

Creates a caller-owned storage service using this implementation.

## Parameters

**Parameter `scope`:** The application namespace to isolate within this provider's host configuration.

## Returns

A new service owned by the caller; providers must not return null.
