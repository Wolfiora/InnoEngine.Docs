---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.settings.runtime-script.e31c97eddecda6a4
symbol: scripting:Inno.Core.Settings:T:InnoEngine.Settings.ProjectSettingComposer`2
title: ProjectSettingComposer<TSetting, TContribution>
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
reviewed: 0f1552eea9337705c9be1a9112a6a39b6dbc95b965a1640bffb93e99fe541072
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- manual.scripting.use-script-api
- project.inno-core-settings#settings-ownership-contract
aliases: []
---

Lets one setting protocol define deterministic delta capture and multi-contributor composition.

## Type parameters

**Type parameter `TSetting`:** The exact effective setting type.

**Type parameter `TContribution`:** The exact serializable delta type stored in Plugin and project records.
