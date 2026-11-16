---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.044dfff6e5e7ccd5fdfaf2023a311862cdeffacb939b8aef27310dfc8050b4fd
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingContributionContext.CanOverride(System.String)
title: ProjectSettingContributionContext.CanOverride
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: b5df9f66738fd4dc84d66ca0349fcc62a37477ca5e2f67e1f2722f3cbc850f99
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
