---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7fa916c95c949985e85ffacd341aa9b7a499376572e49897e58bfff582a1b2f0
symbol: engine:Inno.Build:M:Inno.Build.BuildSettingsStore.Save(Inno.Build.BuildSettings)
title: BuildSettingsStore.Save
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 92ee6caeeec4228de26d27fc3d4d56c6d4f1ba5464db8c53bc1b4ad69fb81e78
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
