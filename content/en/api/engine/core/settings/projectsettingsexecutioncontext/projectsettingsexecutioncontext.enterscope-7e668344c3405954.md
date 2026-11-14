---
uid: api.7e668344c3405954c8c850c93ae8a196f68ba3a8ddfe41a199b8c52795387f24
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsExecutionContext.EnterScope(Inno.Core.Settings.IProjectSettingsLookup)"
source: xml
reviewed: ff9e19bac336789e7f4b475eb1390bbd05ffaabe178ae105d527da5142d68f9f
title: "ProjectSettingsExecutionContext.EnterScope"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Binds a settings lookup until the returned strict last-in-first-out scope is disposed.

**Parameter `settings`:** The host-owned settings lookup to expose to script-facing operations.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `settings` is `null`.
