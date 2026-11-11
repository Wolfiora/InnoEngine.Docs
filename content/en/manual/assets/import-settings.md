---
title: Edit asset import settings
description: Modify a detached settings value with source conflict detection and explicit import status.
uid: manual.assets.import-settings
kind: how-to
owners: [Inno.Assets.Pipeline]
contracts: [project.inno-assets-pipeline#authoring-ownership-contract]
exampleMode: host
exampleProjects: [Inno.Assets, Inno.Assets.Pipeline]
---
# Edit asset import settings

Importer settings describe how a source becomes an asset. They live in the source's `.imeta` metadata and are separate from runtime asset properties. The current pipeline supports programmatic editing; a dedicated import-settings Inspector UI is not implied.

## Read, edit and save

Run this helper on the initialized pipeline's owner thread. The callback edits a detached value for the actual importer settings type:

```csharp
using System;
using Inno.Assets;
using Inno.Assets.Pipeline;

static bool EditSettings(
    AssetPipeline assets,
    AssetPath path,
    Action<AssetImportSettingsSnapshot> edit
) {
    AssetImportSettingsSnapshot snapshot = assets.GetImportSettings(path);
    edit(snapshot);
    return assets.SaveImportSettings(path, snapshot.value, snapshot.fingerprint);
}
```

`GetImportSettings` does not write the source. Keep its fingerprint with the detached edit. `SaveImportSettings` rejects mismatched settings types and external source conflicts, writes the sidecar atomically, then attempts import. Passing null resets to importer defaults.

**A false result means the settings were saved but the import failed.** It does not mean the write was rolled back. Inspect the current diagnostic; last-good artifacts and successful current import are separate states. An inability to save throws rather than overwriting another editor's settings silently.

## Reload and dependencies

Do not retain the detached settings object across reload. Long-lived editors and history store stable identity and neutral property bytes. Settings types use the common stable-type and serializable-property protocol; changing the settings object inside an importer does not write it back to the source.

Asset references in settings are source/artifact import dependencies, not automatic runtime dependencies. Cross-mount permissions still apply. A temporarily Missing reference preserves its identity.

Settings bytes participate in the output fingerprint. If a sidecar changes while import is executing, the former settings cannot certify the result as current. Watcher notifications include metadata changes; a notification with unchanged semantics does not require duplicate import. Read-only mounts and isolated source candidates permit inspection but reject authoring writes.
