---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.settings.runtime-script.03801f8d3af31d98
symbol: scripting:Inno.Core.Settings:T:InnoEngine.Settings.Settings
title: Settings
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
reviewed: 0658d8ff160bcad86e7fefc5bf1f4b36f249b70346fe6e78b389e78991c60d73
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
