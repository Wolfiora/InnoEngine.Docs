---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e83dc15a575ca81684710232a0d5f7510d4c0cf1d9aea13f73358b13120deda6
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange)
title: EditorReloadCoordinator.Execute
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 14d396ef2ed6b44ba6dfa1776278d93a7a0df012889a17f9a1ad567a6412e43a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Content recovery prepared before type publication, applied before Editor recovery, and restored before old values.

## Returns

A monitor that observes cooperative unloading of assemblies retired by the committed reload.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `reload` is `null`.

**Exception `T:System.AggregateException`:** Thrown when activation fails and one or more feature or assembly rollback stages also fail.
