---
uid: api.2951c38cff61c49e760d68aecb49e1c12af654e611bf3e5f62236f7d5497ee1b
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImporter.CreateImportSettings"
source: xml
reviewed: 910925848e09cc64e16310e855f003c36382916ff12f923f59b21635703c1d6e
title: "CreateImportSettings"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Creates a detached settings value for this importer in the current extension generation.

**Returns:** A fresh serializable value with a registered stable type identity, or null when this importer has no settings. Defaults must be deterministic; implementations must not retain the returned instance.
