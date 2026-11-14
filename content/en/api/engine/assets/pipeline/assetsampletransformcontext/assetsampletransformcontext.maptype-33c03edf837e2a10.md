---
uid: api.33c03edf837e2a109588303d2ddaf016009275383d4c598218a54a41aa0ee535
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleTransformContext.MapType(System.Guid,System.Guid)"
source: xml
reviewed: 9e6c2d90b94d166b1f5cfa96e214b0766bd2a2efe0e5773d65c41c217a5323b7
title: "AssetSampleTransformContext.MapType"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Registers one source-language type replacement for subsequent structured asset rewriting.

## Parameters

**Parameter `oldId`:** The type identity stored in installed sample assets.

**Parameter `newId`:** The type identity declared by the cloned source.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A source identity is reused inconsistently.
