---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1691a4c8cfecd4bbdf2d3500272bff75227a6862addde3fbad1da0d3bd2d00ad
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.GetComposedDefault(Inno.Editor.Settings.ProjectSettingEditor)
title: ProjectSettingsEditor.GetComposedDefault
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: 357811ba30f4bb5525e0f536e292ad76bbc099453aded32a4c3a4439bd899bdc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** The active presentation whose default is requested.

## Returns

An isolated composed default value.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `definition` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the runtime setting definition is unavailable.
