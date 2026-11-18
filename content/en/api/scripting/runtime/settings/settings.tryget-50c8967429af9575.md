---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.50c8967429af95757f3bad45137c798a01e522aef2fb2dabdc054b5037f011f3
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.Settings.TryGet``1(InnoEngine.Settings.ProjectSettingId,``0@)
title: Settings.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: 6dd55ec8ec5f86f27ed78a912768a8698f181f6b30af97d6a05eaa013d34e753
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
