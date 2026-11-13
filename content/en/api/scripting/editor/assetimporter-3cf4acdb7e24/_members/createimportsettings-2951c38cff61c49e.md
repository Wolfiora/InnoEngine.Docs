---
uid: api.2951c38cff61c49e760d68aecb49e1c12af654e611bf3e5f62236f7d5497ee1b
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImporter.CreateImportSettings"
source: xml
reviewed: 8e3fa192af8094e7b4a8d19993cd75142a085e911ead77c8938804d51d321326
title: "CreateImportSettings"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Creates a detached settings value for this importer in the current extension generation.

**Returns:** A fresh serializable value with a registered stable type identity, or null when this importer has no settings. Defaults must be deterministic; implementations must not retain the returned instance.
