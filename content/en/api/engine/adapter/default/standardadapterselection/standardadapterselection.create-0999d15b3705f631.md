---
uid: api.0999d15b3705f631a227528465a096df47c3f97af0210cecd78e773d95969c34
symbol: "engine:Inno.Adapter.Default:M:Inno.Adapter.Default.StandardAdapterSelection.Create(Inno.Adapter.Storage.StorageBackendId)"
source: xml
reviewed: 337ddd7313dbca4b082b37275a3db7918b207b4da129742a6601c733017c0c6f
title: "StandardAdapterSelection.Create"
kind: api
owners: [Inno.Adapter.Default]
apiSurface: source-clr
---

Creates a complete selection while leaving the location-dependent storage choice to the product.

## Parameters

**Parameter `storage`:** The storage implementation explicitly registered by the product.

## Returns

A fully assigned standard selection; its catalog must still be validated before creating resources.
