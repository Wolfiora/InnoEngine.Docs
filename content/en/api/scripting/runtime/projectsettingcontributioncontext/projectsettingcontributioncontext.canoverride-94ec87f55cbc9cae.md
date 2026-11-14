---
uid: api.94ec87f55cbc9caef497f12d9677def1263de76eb4d25072114b40a5534a5df0
symbol: "scripting:Inno.Core.Settings:M:InnoEngine.Settings.ProjectSettingContributionContext.CanOverride(System.String)"
source: xml
reviewed: ef3cd27b84beae62f8302826a94c1c61bd74794de57b24d5e9eb875ae5055ce6
title: "ProjectSettingContributionContext.CanOverride"
kind: api
owners: [Inno.Core.Settings]
apiSurface: editor-script
apiScope: Runtime
---

Gets whether this contribution may explicitly replace data owned by another contributor.

## Parameters

**Parameter `ownerId`:** The stable owner whose data would be replaced.

## Returns

`true` for project data, or when the Plugin both depends on and explicitly overrides `ownerId`.
