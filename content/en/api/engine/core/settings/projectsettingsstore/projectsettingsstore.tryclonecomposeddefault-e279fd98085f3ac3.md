---
uid: api.e279fd98085f3ac3186c28dd80b2586bc56d507d2d2f6a0cafa785a38820c3ea
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable@)"
source: xml
reviewed: cc298fdbb25a119ae946c652c2b1bc32899b67698c1d2510f50978de5f900ddb
title: "ProjectSettingsStore.TryCloneComposedDefault"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates an isolated setting value without the project-authored override.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives the composed host and Plugin default value.

**Returns:** `true` when the setting is defined.
