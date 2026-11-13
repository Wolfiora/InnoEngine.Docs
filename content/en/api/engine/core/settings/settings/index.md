---
uid: api.inno.core.settings.0b7550a8dccf3dfd
symbol: "engine:Inno.Core.Settings:T:Inno.Core.Settings.Settings"
source: xml
reviewed: 668ba9271738f004048c0de8ce293b5ea6fd60fb76eb87d13ff3ebdf8937237c
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
