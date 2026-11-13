---
uid: api.a6e52a8e9a87708c183dd297117c2849c810bdc36158dac4493264ae22f7917a
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.Rebuild(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},System.Boolean)"
source: xml
reviewed: e6094d04c1a985ec8313d86e81771f5ae8d31b32db6fa561286446109d146eec
title: "Rebuild"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Atomically rebuilds effective settings for a new extension generation.

**Parameter `contributors`:** Dependency-ordered default contributors.

**Parameter `allowUnresolvedContributions`:** Whether contributions awaiting Plugin type activation are retained but skipped.
