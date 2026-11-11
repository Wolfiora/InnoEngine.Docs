---
title: Read project settings
description: Read isolated settings snapshots, qualify project names, and refresh caches after a generation change.
uid: manual.projects.read-settings
kind: how-to
owners:
  - Inno.Core.Settings
contracts:
  - project.inno-core-settings#settings-ownership-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Core.Settings
---
# Read project settings

Project settings are effective values composed from the host's defaults, active Plugin contributions and project-authored overrides. Read them through the current project's settings owner. Editor preferences, runtime application saves and project settings have different owners; a change to one does not implicitly update the others.

## Read inside the active project

The host binds project settings around script execution. This Runtime script example reads the built-in project identity and qualifies a local name; it does not create a project or modify its settings.

```csharp
using InnoEngine.Settings;

public static class ProjectNames
{
    public static ProjectScopedId MainMenu() => Settings.QualifyId("main-menu");

    public static ProjectId CurrentProject() => Settings.projectId;
}
```

Call the facade only during execution with an active project settings scope. No active scope is an error, not a request to use global defaults. Host and Editor infrastructure should receive an explicit `IProjectSettingsLookup` instead of resolving the static facade.

For a declared setting, use `Settings.Get<TSetting>(settingId)` or `TryGet<TSetting>`. The standard owner returns an independently reconstructed value. Changing that value does **not** update effective settings or save the project. Authoring requires the host's explicit override operation.

## Handle unavailable settings

`TryGet` returns false when the definition is unavailable or the requested contract is incompatible. It still requires an active, initialized owner; it is not a catch-all for serialization or lifecycle failures. The standard store's `Get` throws `KeyNotFoundException` for an unavailable definition and `InvalidCastException` for an incompatible requested type.

A temporarily Missing definition does not require deleting its authored contribution. The host retains neutral setting records, exposes unavailable contributions for diagnosis, and recomposes values when compatible types become available. Do not replace unknown data with defaults merely to make loading appear successful.

## Refresh cached values

Pair `Settings.ownerId` with `Settings.revision` when retaining a snapshot. Revisions from two owners are not interchangeable. A successful effective-state update advances the revision; a failed generation transaction can restore its previous revision together with its previous values.

Acquire the value at a host-coordinated point where settings cannot change between reading the identity and reading the value. Separate facade property calls are not a multi-call transaction. Do not retain old-generation setting objects across retirement, and do not register a static reload callback merely to observe revisions.

## Understand persistence boundaries

| Document | Scope |
| --- | --- |
| `Settings.Project.inno` | Project-authored setting contributions |
| `Settings.Editor.inno` | Editor settings document |
| `Settings.Build.inno` | Build settings document |

These names identify current document roles; the low-level store accepts an explicit byte-document source rather than searching for a filename. Authoring hosts provide writable storage. Players consume captured bytes through a read-only document source; writes fail explicitly.

Missing documents can use validated defaults where the caller selected `Load`. Existing malformed documents fail. `LoadRequired` also rejects a missing document. Neither operation silently switches to another file.

## Next steps

- [Define and compose a project setting](../../extending/project-settings.md).
- [Change Editor settings](../editor/settings.md) through the scope that owns them.
- Read the [Settings ownership and persistence contract](../../api/projects/inno-core-settings.md).
