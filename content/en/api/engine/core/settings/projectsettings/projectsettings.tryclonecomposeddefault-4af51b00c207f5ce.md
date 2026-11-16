---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4af51b00c207f5ceb47f1014feb662f71f0c862d21727784aaffd9fefe024684
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Serialization.ISerializable@)
title: ProjectSettings.TryCloneComposedDefault
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: c0eb6dace8f0e3a6a6e46751a6fab10e233af739e83be5fb0111e216a18a4f13
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable setting identifier.

**Parameter `contributors`:** Dependency-ordered Plugin default contributors.

**Parameter `setting`:** Receives the composed default value.

## Returns

`true` when the setting is defined.
