---
uid: api.inno.core.settings.runtime-script.03801f8d3af31d98
symbol: "scripting:Inno.Core.Settings:T:InnoEngine.Settings.Settings"
source: xml
reviewed: 0658d8ff160bcad86e7fefc5bf1f4b36f249b70346fe6e78b389e78991c60d73
title: "Settings"
kind: api
owners: [Inno.Core.Settings]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-settings#settings-ownership-contract
aliases: []
---

Provides script-facing project settings queries through the current runtime execution context.

## Remarks

This façade owns no settings state. Engine and Editor infrastructure should depend on an explicit `T:InnoEngine.Settings.IProjectSettingsLookup` instance.
