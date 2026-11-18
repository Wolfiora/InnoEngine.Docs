---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7e668344c3405954c8c850c93ae8a196f68ba3a8ddfe41a199b8c52795387f24
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsExecutionContext.EnterScope(Inno.Core.Settings.IProjectSettingsLookup)
title: ProjectSettingsExecutionContext.EnterScope
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 16f33045cf12458c68da596a422adb3c1c23b6812c8c68af9e9807801e9e92af
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
