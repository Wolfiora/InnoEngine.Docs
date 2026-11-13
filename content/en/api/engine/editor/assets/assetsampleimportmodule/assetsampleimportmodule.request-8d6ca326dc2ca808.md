---
uid: api.8d6ca326dc2ca8087b0ed1b8021825f1c65c97a45f43abda150bc1c0cee35465
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetSampleImportModule.Request(Inno.Assets.AssetPath)"
source: xml
reviewed: 63fd6cb31294a2b6e0fea82872226152aa6142a41e829c626a82407bea4457b4
title: "AssetSampleImportModule.Request"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Begins validating an installed sample before its source copy can be committed.

**Parameter `source`:** The installed sample root to validate and import.

**Exception `T:System.InvalidOperationException`:** The authoring generation is busy or faulted.
