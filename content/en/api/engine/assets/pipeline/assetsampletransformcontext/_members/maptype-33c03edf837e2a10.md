---
uid: api.33c03edf837e2a109588303d2ddaf016009275383d4c598218a54a41aa0ee535
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleTransformContext.MapType(System.Guid,System.Guid)"
source: xml
reviewed: 77d6e2c74057dd7c2d7daef859e5ac1c691fb7858564b051cbe37e616c508eaf
title: "MapType"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Registers one source-language type replacement for subsequent structured asset rewriting.

**Parameter `oldId`:** The type identity stored in installed sample assets.

**Parameter `newId`:** The type identity declared by the cloned source.

**Exception `T:System.IO.InvalidDataException`:** A source identity is reused inconsistently.
