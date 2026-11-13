---
uid: api.080a1373190d8c9545b4c32e19a3bc8819739a91db14a9810ba3c7bcdf655ded
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.SetProjectOverride(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: f1ff093df9a7189c97fb0b8a133e3802194fb562055fea763c487670c630d5cb
title: "SetProjectOverride"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Persists one project-authored semantic contribution and rebuilds the effective value.

**Parameter `id`:** Stable setting identifier.

**Parameter `value`:** Current generation setting value.

**Parameter `contributors`:** Dependency-ordered defaults used to rebuild.
