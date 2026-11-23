---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.52f68c28450ceaeaeeafef728046dfda4b55fbf6af255d6094a4e4aa353201f1
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.Get``1(Inno.Core.Settings.ProjectSettingID)
title: ProjectSettings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: bbbfbc5ddb0cda92970f196248084eb5a12fb0f2616e83d2d6808ca6b6950613
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TSetting`:** Expected settings contract.

## Parameters

**Parameter `id`:** Stable setting identifier.

## Returns

An independently owned snapshot of the effective current-generation value.

## Exceptions

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown when no definition exists.

**Exception `T:System.InvalidCastException`:** Thrown when the definition does not implement the requested contract.
