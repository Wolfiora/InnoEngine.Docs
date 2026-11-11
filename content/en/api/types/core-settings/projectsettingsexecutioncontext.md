---
title: "ProjectSettingsExecutionContext"
description: "Reference for ProjectSettingsExecutionContext in Inno.Core.Settings."
uid: api.inno.core.settings.e01d080313ab9e06
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingsExecutionContext`

This reference describes `ProjectSettingsExecutionContext` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-6792bb19c641bbb8) | Method |
| [`current`](#api-c055d8707a8e2c50) | Property |

## Type declaration

<a id="api-e01d080313ab9e06"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingsExecutionContext 3d519070c263f3c104f1293521632686cc7a2c4691120bcf64669682ff573eda -->

```csharp
public static class Inno.Core.Settings.ProjectSettingsExecutionContext
```

Binds one host-owned settings lookup to the current asynchronous script execution context.

**Constraints:** This type is a composition boundary for Editor and Player hosts. Game code should use
`Inno.Core.Settings.Settings` instead of managing execution scopes directly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsExecutionContext.cs#L14).

## `EnterScope`

<a id="api-6792bb19c641bbb8"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsExecutionContext.EnterScope(Inno.Core.Settings.IProjectSettingsLookup) 72bca524e410187d6cbd6230c1af5cefcfc06c6f8db05c40747559774c93ec3d -->

```csharp
public static System.IDisposable Inno.Core.Settings.ProjectSettingsExecutionContext.EnterScope(Inno.Core.Settings.IProjectSettingsLookup settings)
```

Binds a settings lookup until the returned strict last-in-first-out scope is disposed.

**Parameter `settings`:** The host-owned settings lookup to expose to script-facing operations.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Throws `System.ArgumentNullException`:** Thrown when `settings` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsExecutionContext.cs#L38).

## `current`

<a id="api-c055d8707a8e2c50"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsExecutionContext.current 388c0c8383b3afdde2777e7f47441f52cdcd8bddfbab53a887f39f03b34c2424 -->

```csharp
public static Inno.Core.Settings.IProjectSettingsLookup Inno.Core.Settings.ProjectSettingsExecutionContext.current { get; }
```

Gets the settings lookup bound to the current asynchronous execution context.

**Throws `System.InvalidOperationException`:** Thrown when no settings lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsExecutionContext.cs#L24).
