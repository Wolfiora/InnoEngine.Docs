---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.settings.0b7550a8dccf3dfd
symbol: engine:Inno.Core.Settings:T:Inno.Core.Settings.Settings
title: Settings
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 668ba9271738f004048c0de8ce293b5ea6fd60fb76eb87d13ff3ebdf8937237c
contracts:
- project.inno-core-settings#settings-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

This façade owns no settings state. Engine and Editor infrastructure should depend on an explicit `T:Inno.Core.Settings.IProjectSettingsLookup` instance.
