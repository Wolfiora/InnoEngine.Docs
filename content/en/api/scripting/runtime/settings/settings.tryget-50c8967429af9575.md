---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.50c8967429af95757f3bad45137c798a01e522aef2fb2dabdc054b5037f011f3
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.Settings.TryGet``1(InnoEngine.Settings.ProjectSettingId,``0@)
title: Settings.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
reviewed: 8d6dbbb04375d43f789af13befd865ff6569f914aff5cadf0c6ab2012ecef4a8
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Tries to get an isolated effective setting from the current extension generation.

## Type parameters

**Type parameter `TSetting`:** The required setting contract.

## Parameters

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

## Returns

`true` when a compatible setting exists; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no project settings lookup is active for the caller.
