---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.884d51542672284f8fd0d2e287151972ba5653a91921099dc874095ba293a1cf
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.Settings.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@)
title: Settings.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: ba13af23575caa0cfdffbb5586395834b9da48397b916e049ad08188997392bd
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
