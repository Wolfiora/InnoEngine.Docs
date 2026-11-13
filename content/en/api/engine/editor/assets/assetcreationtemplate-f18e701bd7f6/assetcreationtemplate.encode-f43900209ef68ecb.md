---
uid: api.f43900209ef68ecbcb552aebe1e299f130ea44faaec0d19359f953dd59077cf9
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetCreationTemplate.Encode(Inno.Editor.Assets.AssetCreationContext,Inno.Assets.AssetObject)"
source: xml
reviewed: f23df3b9db6db0a8efe43daca5446d5ee7412d821c18ab268f1f27f124ef066b
title: "AssetCreationTemplate.Encode"
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
