---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4603fba95e48a3b0bad7063bd2e538ee914f5901f1dae4f9199d4a61fbe0573c
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.Save(InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetObject)
title: EditorAssets.Save
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: 907e0f1f60b162ac03cc8b1a065da79d4477e80e6acd30348c454d2cdd8e279e
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The writable project asset path.

**Parameter `asset`:** The complete source value to persist. Saving over an existing source retains that source's persistent identity.

## Returns

`true` when the source was committed and imported successfully.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `asset` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the current execution context is not bound to an authoring asset pipeline.
