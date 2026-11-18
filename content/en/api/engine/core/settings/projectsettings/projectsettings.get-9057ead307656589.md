---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9057ead3076565893875601adf57fe761c5df909102c011a689584bc8850cb2b
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.Get``1(Inno.Core.Settings.ProjectSettingId)
title: ProjectSettings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 260852824e9379b3b3cfeb2ea76025035e8f275a0bfed5bb5ce8c1280710d4a6
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
