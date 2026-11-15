---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.settings.02177eda4a3a4117
symbol: engine:Inno.Core.Settings:T:Inno.Core.Settings.ProjectSettingComposer`2
title: ProjectSettingComposer<TSetting, TContribution>
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: b2400dcb80aca665b0466a9866705efa5a2fe13a133c3067c93511c5a902c2c2

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-core-settings#settings-ownership-contract
aliases: []
---

Lets one setting protocol define deterministic delta capture and multi-contributor composition.

## Type parameters

**Type parameter `TSetting`:** The exact effective setting type.

**Type parameter `TContribution`:** The exact serializable delta type stored in Plugin and project records.
