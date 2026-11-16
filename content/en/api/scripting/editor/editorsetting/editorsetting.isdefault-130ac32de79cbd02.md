---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.130ac32de79cbd0245202f8c2c331716245c57d4c181be18309c38a46ecfa9f3
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSetting.IsDefault(InnoEditor.Settings.EditorSettingObject)
title: EditorSetting.IsDefault
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: 17a214afb29fb247f4027e3f1efa834010742179515f798550eda095d7b26b3c
apiScope: Editor
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
