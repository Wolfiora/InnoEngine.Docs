---
title: Define and compose project settings
description: Register stable setting protocols, order contributions, and preserve project state across reload.
uid: extending.project-settings
kind: how-to
owners:
  - Inno.Core.Settings
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# Define and compose project settings

Use a project setting when a feature needs a named, serializable protocol shared by authoring and runtime hosts. Keep storage selection in the host and semantic composition in the setting's owning feature. Do not add a second settings manager for a Plugin.

## Declare the protocol

1. Choose a stable `ProjectSettingId` independent of display text and runtime type names.
2. Declare a non-abstract `ISerializable` class with `ProjectSettingDefinitionAttribute` and a stable type identity. Register its factory in the active type catalog.
3. Decide whether Plugins may contribute defaults through `allowPluginContributions`.
4. Make the host's complete `SerializationContext` available when constructing the settings owner. The settings subsystem must not invent a partial reference resolver.

The active registry rejects duplicate setting IDs, missing factories and invalid definitions. A setting ID identifies the protocol; the stable type ID identifies its serialized type. Renaming a class is not permission to replace either identity.

## Choose replacement or semantic composition

Without a composer, a setting uses whole-value replacement. The host starts from its default value. Dependency-ordered Plugin contributions replace that value, then a project override has highest precedence. A Plugin replacing another Plugin's value must both depend on that contributor and explicitly declare the override. A later position alone is insufficient.

For collection-like or structured settings, derive a protocol-owned `ProjectSettingComposer<TSetting, TContribution>` and declare `ProjectSettingComposerAttribute`. The composer describes how neutral contributions become an effective setting and how an authored value becomes a contribution relative to defaults. Use `ProjectSettingContributionContext` to enforce ownership; `CanOverride` recognizes project contributions, the host baseline, and explicitly overridden dependencies.

Only one composer may own a setting. It must target an existing definition, match its exact runtime setting type, and have a factory in the active type catalog. The registry owns composer instances and retires them with its definition snapshot. Do not retain them as process-wide services.

## Order contributors explicitly

Construct `ProjectSettingsContributor` values from stable contributor IDs, dependency IDs, explicit override IDs and neutral `ProjectSettingRecord` payloads. The host supplies the complete dependency order. Duplicate IDs, inactive dependencies, cycles and an order different from the graph's selected topological order are errors.

The contributor freezes its input collections and clones record payloads. Its `settings` getter returns detached records again. A record's stable type must match the definition; an empty contribution payload is invalid. Do not carry old runtime objects in records.

`SetContributors` stages a contributor snapshot without creating effective values while types may still await activation. Rebuild at the host's controlled generation boundary. `RebuildCurrent(allowUnresolvedContributions: true)` permits temporarily unresolved definitions; it does not excuse invalid active contributions or fabricate settings for missing types.

## Apply an authored change

Use the host-owned `ProjectSettingsStore.ApplyProjectOverrides` to apply values and reset IDs as one document update. If an ID occurs in both collections, reset wins. An authored value equal to the composed baseline removes a redundant replacement override; a custom composer determines whether a semantic contribution is necessary.

The store compares actual neutral records and reports whether the document changed. Do not infer a persistent change merely because a caller edited a detached snapshot. `SetProjectOverride` is a convenience path whose revision behavior is not identical to the batch operation's unchanged-result handling.

The current implementation saves the candidate document, rebuilds effective settings, and attempts to restore the previous bytes and effective values if rebuilding fails. This is not a durable multi-resource transaction: restoration can itself fail if storage fails. Keep the first failure evidence and use the host's recovery policy. A read-only runtime source rejects authoring writes.

## Participate in reload

`CreateReloadChange` supplies the shared generation transaction with a settings participant. Preparation captures neutral effective values, contributors and revision. Apply rebuilds against the candidate types. Rollback restores the exact previous effective records, contributor snapshot and revision without rewriting the project document. Completion releases the temporary snapshot.

The host controls ordering and owner-thread execution across all participants. A settings lock does not make the whole generation transition a free-threaded transaction. Restore types before asking an old-generation value to materialize again.

## Related tasks

- [Read project settings](../manual/projects/read-settings.md) from Runtime scripts.
- [Settings project contract](../api/projects/inno-core-settings.md) for host lifetime and storage boundaries.
- [Identity and Missing](../manual/identity-and-missing.md) for the difference between persistent and generation-local identity.
