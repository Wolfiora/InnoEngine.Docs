---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.94ec87f55cbc9caef497f12d9677def1263de76eb4d25072114b40a5534a5df0
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.ProjectSettingContributionContext.CanOverride(System.String)
title: ProjectSettingContributionContext.CanOverride
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: 99fe2f4bfac517d78c8957daab01d2ab05f7be55a2c7832266fff86d2c1cb37e
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `ownerId`:** The stable owner whose data would be replaced.

## Returns

`true` for project data, or when the Plugin both depends on and explicitly overrides `ownerId`.
