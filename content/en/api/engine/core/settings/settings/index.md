---
uid: api.inno.core.settings.0b7550a8dccf3dfd
symbol: "engine:Inno.Core.Settings:T:Inno.Core.Settings.Settings"
source: xml
reviewed: f5445fab8dff6d2624cf4fee721e730f9166bfcf1847496aef5741f02553d306
title: "Settings"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
contracts:
- project.inno-core-settings#settings-ownership-contract
aliases: []
---

Provides script-facing project settings queries through the current runtime execution context.

## Remarks

This façade owns no settings state. Engine and Editor infrastructure should depend on an explicit `T:Inno.Core.Settings.IProjectSettingsLookup` instance.
