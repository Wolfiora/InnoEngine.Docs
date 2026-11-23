---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bad283757d7829b94cc0aaf6ebde5e7bece7bbfcfb75df727da82376f359beba
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.Settings.Get``1(Inno.Core.Settings.ProjectSettingID)
title: Settings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: ad0d39725ec17725c35467e261df4718e9834ecc7aa61d44fe21c14d72ff819e
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

## Returns

An independently owned effective setting snapshot.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no project settings lookup is active or its owner is no longer initialized.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown by the standard project settings store when the setting is unavailable.

**Exception `T:System.InvalidCastException`:** Thrown by the standard project settings store when the setting does not implement the requested contract.
