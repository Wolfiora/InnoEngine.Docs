---
uid: api.94ec87f55cbc9caef497f12d9677def1263de76eb4d25072114b40a5534a5df0
symbol: "scripting:Inno.Core.Settings:M:InnoEngine.Settings.ProjectSettingContributionContext.CanOverride(System.String)"
source: xml
reviewed: dbcb1d4b4f790ab246a5a63a0bbf35150b52853ddf7c02e8fd77db1481a16d96
title: "CanOverride"
kind: api
owners: [Inno.Core.Settings]
apiSurface: editor-script
apiScope: Runtime
---

Gets whether this contribution may explicitly replace data owned by another contributor.

**Parameter `ownerId`:** The stable owner whose data would be replaced.

**Returns:** `true` for project data, or when the Plugin both depends on and explicitly overrides `ownerId`.
