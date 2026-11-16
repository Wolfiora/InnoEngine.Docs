---
uid: api.directory.scripting.runtime._projects.core.settings
title: "Settings"
kind: landing
owners: []
---

# Settings

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ProjectId](../../../projectid/index.md) | Identifies one project namespace used to qualify project-authored logical names. |
| [ProjectIdentitySettings](../../../projectidentitysettings/index.md) | Stores the editable identity namespace of the current project. |
| [ProjectLocalId](../../../projectlocalid/index.md) | Stores the project-independent portion of one project-scoped identity. |
| [ProjectScopedId](../../../projectscopedid/index.md) | Combines a mutable project namespace with a stable project-independent local identity. |
| [ProjectSettingComposer](../../../projectsettingcomposer-368d84c21c64/index.md) | Defines the non-generic base for a protocol-owned project setting composer. |
| [ProjectSettingComposer&lt;TSetting, TContribution&gt;](../../../projectsettingcomposer-39afdabb8106/index.md) | Lets one setting protocol define deterministic delta capture and multi-contributor composition. |
| [ProjectSettingComposerAttribute](../../../projectsettingcomposerattribute/index.md) | Declares the protocol-owned composer used to combine contributions for one project setting. Settings without a composer retain the default whole-value replacement behavior. |
| [ProjectSettingContribution&lt;TContribution&gt;](../../../projectsettingcontribution/index.md) | Provides one decoded contribution and its immutable composition context. |
| [ProjectSettingContributionContext](../../../projectsettingcontributioncontext/index.md) | Exposes ownership and dependency information while a protocol-owned composer combines one contribution. |
| [ProjectSettingContributionSource](../../../projectsettingcontributionsource/index.md) | Identifies where one setting contribution originated. |
| [ProjectSettingDefinitionAttribute](../../../projectsettingdefinitionattribute/index.md) | Declares a reloadable settings type under one stable protocol identity. |
| [ProjectSettingId](../../../projectsettingid/index.md) | Identifies one host-neutral project setting protocol. |
| [Settings](../../../settings/index.md) | Provides script-facing project settings queries through the current runtime execution context. |

