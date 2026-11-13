---
uid: api.69a60a74d020100786842c93e4a8c5b58bfeb6fb847044819c7f6b8df68e5247
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettings.CreateGameProfile(Inno.Core.Settings.ProjectId)"
source: xml
reviewed: b67305047af01956d9b79bfdcf43f2360cd65ddef0ef88140b9e62652bb90968
title: "CreateGameProfile"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates an isolated game profile from the current defaults.

**Parameter `projectId`:** The authoritative project identity copied into the game profile.

**Returns:** A newly owned profile that may be changed for one build without mutating these settings.
