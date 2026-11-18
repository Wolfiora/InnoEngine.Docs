---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.settings.runtime-script.03801f8d3af31d98
symbol: scripting:Inno.Core.Settings:T:InnoEngine.Settings.Settings
title: Settings
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: c0d28330060b5ce584c9c254c3cc7ea0dc48188a856b2b0f9ecf89209b1886e0
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
