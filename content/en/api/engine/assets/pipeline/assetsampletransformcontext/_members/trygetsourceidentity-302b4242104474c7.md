---
uid: api.302b4242104474c78f3216db1b94af1f0dd9055fc59bb864fd578ac8199ace56
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleTransformContext.TryGetSourceIdentity(System.String,System.Guid@,System.Guid@)"
source: xml
reviewed: b5b736924a6d223b4d6e9053260a593a8cea598e4c61540a233b10b434fe6297
title: "TryGetSourceIdentity"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Resolves the source and clone identity of one file relative to the sample directory.

**Parameter `relativePath`:** Slash-separated source-local file path below the sample directory.

**Parameter `oldId`:** Receives the installed source identity.

**Parameter `newId`:** Receives the writable clone identity.

**Returns:** Whether both identities were recorded from sample metadata.
