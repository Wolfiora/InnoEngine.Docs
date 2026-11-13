---
uid: api.inno.core.settings.runtime-script.03801f8d3af31d98
symbol: "scripting:Inno.Core.Settings:T:InnoEngine.Settings.Settings"
source: xml
reviewed: faf3732d56a3854ce4cce3a06670fe754acf7b44758145ee20eae44059f60029
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
