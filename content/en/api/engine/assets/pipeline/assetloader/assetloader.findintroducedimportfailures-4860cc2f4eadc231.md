---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4860cc2f4eadc2312c6728fa020d008793c0425005103c21d02643b0fdf5f213
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.FindIntroducedImportFailures(Inno.Assets.Pipeline.AssetImportHealthSnapshot)
title: AssetLoader.FindIntroducedImportFailures
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 5d948435fb654980a442085258127eb12f5b5b6753e9dc64f9058973c6c513f1

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Finds writable-source failures that are new or changed relative to an earlier health snapshot.

## Parameters

**Parameter `baseline`:** The health snapshot captured before the candidate generation was activated.

## Returns

A deterministic path-ordered collection containing only introduced or changed failures.
