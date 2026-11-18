---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7fa916c95c949985e85ffacd341aa9b7a499376572e49897e58bfff582a1b2f0
symbol: engine:Inno.Build:M:Inno.Build.BuildSettingsStore.Save(Inno.Build.BuildSettings)
title: BuildSettingsStore.Save
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 3bb08d0b7ff0cd9db49fdc8fec455fe27faac71de5878691524b37eff2a2a419
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `settings`:** The complete defaults to persist.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `settings` is null.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the settings document is malformed.

**Exception `T:System.IO.IOException`:** Thrown when the candidate cannot be committed.
