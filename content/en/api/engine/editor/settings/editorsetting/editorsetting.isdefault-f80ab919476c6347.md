---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f80ab919476c6347e73973f4d834d6d74323a78cdefe8e130aadcdd1cde74a6d
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSetting.IsDefault(Inno.Editor.Settings.EditorSettingObject)
title: EditorSetting.IsDefault
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: ebc82b4c5fd1aab962ec4ab84acb54ac32c72e2cde363017d91c032a5e700b31
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `setting`:** The isolated staged object to compare.

## Returns

`true` when every stored property equals the field default.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.
