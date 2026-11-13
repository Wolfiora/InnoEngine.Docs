---
uid: api.8d6ca326dc2ca8087b0ed1b8021825f1c65c97a45f43abda150bc1c0cee35465
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetSampleImportModule.Request(Inno.Assets.AssetPath)"
source: xml
reviewed: c1d5c01e417dbceaa5e6047754c3c884c188482bd9cbe6478853e95411d6bdb0
title: "Request"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Begins validating an installed sample before its source copy can be committed.

**Parameter `source`:** The installed sample root to validate and import.

**Exception `T:System.InvalidOperationException`:** The authoring generation is busy or faulted.
