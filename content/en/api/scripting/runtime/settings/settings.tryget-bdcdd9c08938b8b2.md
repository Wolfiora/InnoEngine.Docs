---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bdcdd9c08938b8b2a381d58c4790d633ffb882a06fafb1f400c1fea04328afa8
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.Settings.TryGet``1(InnoEngine.Settings.ProjectSettingID,``0@)
title: Settings.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: 754e622fee3b42d568a58c7cf94500442b82e52770115ecbff857f146477f8d4
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TSetting`:** The required setting contract.

## Parameters

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

## Returns

`true` when a compatible setting exists; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no project settings lookup is active for the caller.
