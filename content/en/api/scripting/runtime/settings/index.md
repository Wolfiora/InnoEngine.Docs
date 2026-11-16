---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.settings.runtime-script.03801f8d3af31d98
symbol: scripting:Inno.Core.Settings:T:InnoEngine.Settings.Settings
title: Settings
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
reviewed: aee1e57f27fba5a8fb81a61e88ba1588c248b85be5d161005cb97f34a78290cf
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-settings#settings-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

This façade owns no settings state. Engine and Editor infrastructure should depend on an explicit `T:InnoEngine.Settings.IProjectSettingsLookup` instance.
