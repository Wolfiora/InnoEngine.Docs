---
uid: api.4603fba95e48a3b0bad7063bd2e538ee914f5901f1dae4f9199d4a61fbe0573c
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.Save(InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetObject)"
source: xml
reviewed: d27b48dc41a49614d507e0933de8b45c0da8fba6b0a9b389ec235659c361d6e6
title: "EditorAssets.Save"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Creates or replaces a writable project asset source and imports the committed result.

**Parameter `path`:** The writable project asset path.

**Parameter `asset`:** The complete source value to persist. Saving over an existing source retains that source's persistent identity.

**Returns:** `true` when the source was committed and imported successfully.

**Exception `T:System.ArgumentNullException`:** Thrown when `asset` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the current execution context is not bound to an authoring asset pipeline.
