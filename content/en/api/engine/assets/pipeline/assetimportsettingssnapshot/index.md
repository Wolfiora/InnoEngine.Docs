---
uid: api.inno.assets.pipeline.27e09848d9f10ff4
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetImportSettingsSnapshot"
source: xml
reviewed: 8e30a079ee5121cc4cf4d880e075c6561ccb8b3b2dc29d7fe8799c499dc6e479
title: "AssetImportSettingsSnapshot"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
contracts:
- project.inno-assets-pipeline
aliases: []
---

Provides a detached settings value and an optimistic concurrency token for its source sidecar.

## Remarks

The value belongs to the current importer generation. Editors must retain neutral serialized state, not this instance, across extension reloads. Reading this snapshot never edits source metadata.
