---
uid: api.inno.core.settings.e01d080313ab9e06
symbol: "engine:Inno.Core.Settings:T:Inno.Core.Settings.ProjectSettingsExecutionContext"
source: xml
reviewed: 6ddd86941b1f86e40e3748de966e137580b0440d65b7dc9ca8d8b061c05818f4
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
