---
uid: api.inno.core.settings.e01d080313ab9e06
symbol: "engine:Inno.Core.Settings:T:Inno.Core.Settings.ProjectSettingsExecutionContext"
source: xml
reviewed: 6d005fc5b374ed03fd71c55bddfc00f9da6aa166253d9928cedf91437aac609a
title: "ProjectSettingsExecutionContext"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
contracts:
- project.inno-core-settings#settings-ownership-contract
aliases: []
---

Binds one host-owned settings lookup to the current asynchronous script execution context.

## Remarks

This type is a composition boundary for Editor and Player hosts. Game code should use `T:Inno.Core.Settings.Settings` instead of managing execution scopes directly.
