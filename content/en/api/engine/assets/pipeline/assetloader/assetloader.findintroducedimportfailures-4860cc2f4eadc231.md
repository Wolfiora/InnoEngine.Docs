---
uid: api.4860cc2f4eadc2312c6728fa020d008793c0425005103c21d02643b0fdf5f213
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.FindIntroducedImportFailures(Inno.Assets.Pipeline.AssetImportHealthSnapshot)"
source: xml
reviewed: 5d948435fb654980a442085258127eb12f5b5b6753e9dc64f9058973c6c513f1
title: "AssetLoader.FindIntroducedImportFailures"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Finds writable-source failures that are new or changed relative to an earlier health snapshot.

**Parameter `baseline`:** The health snapshot captured before the candidate generation was activated.

**Returns:** A deterministic path-ordered collection containing only introduced or changed failures.
