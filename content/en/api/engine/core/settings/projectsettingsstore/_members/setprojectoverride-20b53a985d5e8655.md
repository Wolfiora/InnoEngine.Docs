---
uid: api.20b53a985d5e8655d8a6d5a0da1341547f6d5b630950c54c20364543dd894295
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.SetProjectOverride(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: 996dc2a637406b25d23f82e1f041573bf3b85e9eeb0ef2b18f8e6e55d83e9aa6
title: "SetProjectOverride"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Persists one project-authored override through the native settings document.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `value`:** Current generation setting value.

**Parameter `contributors`:** Current dependency-ordered default contributions.
