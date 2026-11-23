---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.94ec87f55cbc9caef497f12d9677def1263de76eb4d25072114b40a5534a5df0
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.ProjectSettingContributionContext.CanOverride(System.String)
title: ProjectSettingContributionContext.CanOverride
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: 6851d2c31c2327c1d742c7a3f4472075344bfb3093ee03e1f6ecd02da70042c2
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `ownerID`:** The stable owner whose data would be replaced.

## Returns

`true` for project data, or when the Plugin both depends on and explicitly overrides `ownerID`.
