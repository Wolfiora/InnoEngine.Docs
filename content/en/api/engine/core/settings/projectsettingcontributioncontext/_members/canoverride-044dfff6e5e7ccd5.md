---
uid: api.044dfff6e5e7ccd5fdfaf2023a311862cdeffacb939b8aef27310dfc8050b4fd
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingContributionContext.CanOverride(System.String)"
source: xml
reviewed: 325ab5a7780d8cca905f96b4f0ee76cfae9d87675cf08d5e5ad6b76defe84f1e
title: "CanOverride"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Gets whether this contribution may explicitly replace data owned by another contributor.

**Parameter `ownerId`:** The stable owner whose data would be replaced.

**Returns:** `true` for project data, or when the Plugin both depends on and explicitly overrides `ownerId`.
