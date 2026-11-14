---
uid: api.69a60a74d020100786842c93e4a8c5b58bfeb6fb847044819c7f6b8df68e5247
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettings.CreateGameProfile(Inno.Core.Settings.ProjectId)"
source: xml
reviewed: 6b85964dbf6b237822b56692561ef3a1132711602f5164457c9e285d656edb72
title: "BuildSettings.CreateGameProfile"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates an isolated game profile from the current defaults.

## Parameters

**Parameter `projectId`:** The authoritative project identity copied into the game profile.

## Returns

A newly owned profile that may be changed for one build without mutating these settings.
