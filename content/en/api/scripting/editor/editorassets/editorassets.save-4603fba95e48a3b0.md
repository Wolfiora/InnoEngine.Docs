---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4603fba95e48a3b0bad7063bd2e538ee914f5901f1dae4f9199d4a61fbe0573c
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.EditorAssets.Save(InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetObject)
title: EditorAssets.Save
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: f4aadd8c3e72b84c15fdbd253b02f2cdf12f47c6aa4750de995a0439744cf621
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
