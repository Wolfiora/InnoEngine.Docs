---
uid: api.directory.engine.core.settings
title: "Settings"
kind: landing
owners: []
---

# Settings

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [IProjectSettingsLookup](iprojectsettingslookup/index.md) | Defines the read-only effective settings boundary shared by Editor and Player hosts. |
| [ProjectId](projectid/index.md) | Identifies one project namespace used to qualify project-authored logical names. |
| [ProjectIdentitySettings](projectidentitysettings/index.md) | Stores the editable identity namespace of the current project. |
| [ProjectLocalId](projectlocalid/index.md) | Stores the project-independent portion of one project-scoped identity. |
| [ProjectScopedId](projectscopedid/index.md) | Combines a mutable project namespace with a stable project-independent local identity. |
| [ProjectSettingComposer](projectsettingcomposer-8c4ac2683bcf/index.md) | Defines the non-generic base for a protocol-owned project setting composer. |
| [ProjectSettingComposer&lt;TSetting, TContribution&gt;](projectsettingcomposer-f08c4ee26fcd/index.md) | Lets one setting protocol define deterministic delta capture and multi-contributor composition. |
| [ProjectSettingComposerAttribute](projectsettingcomposerattribute/index.md) | Declares the protocol-owned composer used to combine contributions for one project setting. Settings without a composer retain the default whole-value replacement behavior. |
| [ProjectSettingContribution&lt;TContribution&gt;](projectsettingcontribution/index.md) | Provides one decoded contribution and its immutable composition context. |
| [ProjectSettingContributionContext](projectsettingcontributioncontext/index.md) | Exposes ownership and dependency information while a protocol-owned composer combines one contribution. |
| [ProjectSettingContributionSource](projectsettingcontributionsource/index.md) | Identifies where one setting contribution originated. |
| [ProjectSettingDefinitionAttribute](projectsettingdefinitionattribute/index.md) | Declares a reloadable settings type under one stable protocol identity. |
| [ProjectSettingId](projectsettingid/index.md) | Identifies one host-neutral project setting protocol. |
| [ProjectSettingRecord](projectsettingrecord/index.md) | Stores one protocol-owned neutral setting contribution for persistence and composition. |
| [ProjectSettings](projectsettings/index.md) | Composes setting defaults, Plugin contributions, and project overrides atomically. |
| [ProjectSettingsContributor](projectsettingscontributor/index.md) | Describes one dependency-ordered provider of default setting values. |
| [ProjectSettingsDocument](projectsettingsdocument/index.md) | Stores project-authored setting contributions in one native document. |
| [ProjectSettingsExecutionContext](projectsettingsexecutioncontext/index.md) | Binds one host-owned settings lookup to the current asynchronous script execution context. |
| [ProjectSettingsStore](projectsettingsstore/index.md) | Owns one project&#39;s effective settings, contributors, persistence, and generation revision. |
| [Settings](settings/index.md) | Provides script-facing project settings queries through the current runtime execution context. |
| [SettingsDocumentStore&lt;TDocument&gt;](settingsdocumentstore/index.md) | Provides validated current-format serialization and atomic persistence for one settings document type. |
| [SettingsFileNames](settingsfilenames/index.md) | Defines the canonical project-root names of the independent settings documents. |

