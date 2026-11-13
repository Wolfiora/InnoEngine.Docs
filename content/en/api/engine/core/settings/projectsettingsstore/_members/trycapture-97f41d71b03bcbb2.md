---
uid: api.97f41d71b03bcbb2aad584d0f97182a34c323e0500888257c5a2f94ebd715105
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryCapture(Inno.Core.Settings.ProjectSettingId,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},Inno.Core.Settings.ProjectSettingRecord@)"
source: xml
reviewed: 1f94d260f59b98065bb13f6d9ba4769826dfdad92ab0e24ea47e1d4d608f7f8c
title: "TryCapture"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Captures one normalized Plugin setting contribution from the project-authored delta.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `contributorId`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `record`:** Receives the normalized semantic contribution payload.

**Returns:** `true` when the project document contains an effective semantic delta.
