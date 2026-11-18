---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.settings.0b7550a8dccf3dfd
symbol: engine:Inno.Core.Settings:T:Inno.Core.Settings.Settings
title: Settings
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 67fbf36510eb3d09c8bae1786dee59bd89c6c4c99d58015cad276d5b7220577b
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
