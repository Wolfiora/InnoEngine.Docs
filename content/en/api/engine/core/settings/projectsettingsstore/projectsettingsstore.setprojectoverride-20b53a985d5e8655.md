---
uid: api.20b53a985d5e8655d8a6d5a0da1341547f6d5b630950c54c20364543dd894295
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.SetProjectOverride(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: c16dfefa517fadf4c99a06b5336040e47d1471eb8c6b2ca45a0d43e8ec11f9b9
title: "ProjectSettingsStore.SetProjectOverride"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Persists one project-authored override through the native settings document.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `value`:** Current generation setting value.

**Parameter `contributors`:** Current dependency-ordered default contributions.
