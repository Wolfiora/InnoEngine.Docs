---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd8e63cfa6b7f02912931a58265af4fd320f2fc03a1285676816cce7e31f65c0
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.Settings.TryGet``1(Inno.Core.Settings.ProjectSettingID,``0@)
title: Settings.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 1fdded428673e40e48310a66215f5882ae58ad094935dca06cc7ed314dfd5a4c
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
