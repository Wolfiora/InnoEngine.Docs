---
uid: api.e279fd98085f3ac3186c28dd80b2586bc56d507d2d2f6a0cafa785a38820c3ea
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable@)"
source: xml
reviewed: 5497babf58e8ca71d79546e08755270e16f44938494d1d96cc718b69b4fc2f8f
title: "TryCloneComposedDefault"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates an isolated setting value without the project-authored override.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives the composed host and Plugin default value.

**Returns:** `true` when the setting is defined.
