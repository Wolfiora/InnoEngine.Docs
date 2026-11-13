---
uid: api.f43900209ef68ecbcb552aebe1e299f130ea44faaec0d19359f953dd59077cf9
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetCreationTemplate.Encode(Inno.Editor.Assets.AssetCreationContext,Inno.Assets.AssetObject)"
source: xml
reviewed: 5a67d21b77a6570e5bbd89503e92d74e9fa365d3c6edac6255447e85d4ba3d0c
title: "Encode"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Encodes the detached initial value into the source representation owned by this template.

**Parameter `context`:** Creation services scoped to the current Asset source pipeline.

**Parameter `asset`:** The exact value returned by `M:Inno.Editor.Assets.AssetCreationTemplate.Create`.

**Returns:** Complete source bytes ready for an atomic File Browser create operation.

## Remarks

The default implementation uses native structured Asset serialization. Templates paired with a textual or custom binary importer can override this method without changing the File Browser or registering a second creation protocol.
