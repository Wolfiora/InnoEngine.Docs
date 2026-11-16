---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aa08852edf8665dcd8c9740beda888078bb44447865f4463628d2805344aac8b
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource},System.Collections.Generic.IReadOnlyList{System.String})
title: ModuleHost.BeginReload
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 5746e283192cdcd32d0e2e4e59fa346eeadaeb83bbaac656bf84cfa37d2da84a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `requests`:** Complete candidate module additions and replacements.

**Parameter `removedModuleNames`:** Active stable module names omitted from the candidate generation.

## Returns

A session that publishes or rolls back every candidate and removal together.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.

**Exception `T:System.ArgumentException`:** Thrown when no change is requested, a name is duplicated, or one module is both replaced and removed.
