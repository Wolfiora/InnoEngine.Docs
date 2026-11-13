---
uid: api.a6e52a8e9a87708c183dd297117c2849c810bdc36158dac4493264ae22f7917a
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.Rebuild(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},System.Boolean)"
source: xml
reviewed: 9983951695a5f41f8f676a25b58bd00ce38242e95f4647f6e0e2201beb5d69e4
title: "Rebuild"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Atomically rebuilds effective settings for a new extension generation.

**Parameter `contributors`:** Dependency-ordered default contributors.

**Parameter `allowUnresolvedContributions`:** Whether contributions awaiting Plugin type activation are retained but skipped.
