---
uid: api.4860cc2f4eadc2312c6728fa020d008793c0425005103c21d02643b0fdf5f213
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.FindIntroducedImportFailures(Inno.Assets.Pipeline.AssetImportHealthSnapshot)"
source: xml
reviewed: 0795f7832ec6423f9a2bfc89c64394378fae1345d5537469f3a8a5a7fdf83814
title: "FindIntroducedImportFailures"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Finds writable-source failures that are new or changed relative to an earlier health snapshot.

**Parameter `baseline`:** The health snapshot captured before the candidate generation was activated.

**Returns:** A deterministic path-ordered collection containing only introduced or changed failures.
