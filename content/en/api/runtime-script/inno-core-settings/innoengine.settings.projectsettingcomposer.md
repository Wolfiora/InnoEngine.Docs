---
title: "ProjectSettingComposer"
description: "Reference for ProjectSettingComposer in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.3d263840ed929bd4
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectSettingComposer`

This reference describes `ProjectSettingComposer` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4c4e4b4b03f6b7cf) | Method |

## Type declaration

<a id="api-3d263840ed929bd4"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingComposer 943e445eebf08c21bd9ca461cd0845145fcf1d4e469c9c6021129101e90bf0ab -->

```csharp
public abstract class InnoEngine.Settings.ProjectSettingComposer
```

Defines the non-generic base for a protocol-owned project setting composer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L134).

## `#ctor`

<a id="api-4c4e4b4b03f6b7cf"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingComposer.#ctor bfdcaeb7de98549c0fbe55725182c05d0f8572854e9718b2b88e42b3c1b03985 -->

```csharp
protected InnoEngine.Settings.ProjectSettingComposer.ProjectSettingComposer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L134).
