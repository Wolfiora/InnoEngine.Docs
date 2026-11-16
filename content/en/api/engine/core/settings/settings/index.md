---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.settings.0b7550a8dccf3dfd
symbol: engine:Inno.Core.Settings:T:Inno.Core.Settings.Settings
title: Settings
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 0d82cb6136f69cb7306698d5de704b29562690415cf12e82844eab2d060c7071
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
