---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7e668344c3405954c8c850c93ae8a196f68ba3a8ddfe41a199b8c52795387f24
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsExecutionContext.EnterScope(Inno.Core.Settings.IProjectSettingsLookup)
title: ProjectSettingsExecutionContext.EnterScope
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: ef940b7fae5eabe290bb3f355b5da962fb3bfb04702b70b4d71e14c01164ae85
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `settings`:** The host-owned settings lookup to expose to script-facing operations.

## Returns

A strict last-in-first-out execution scope owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `settings` is `null`.
