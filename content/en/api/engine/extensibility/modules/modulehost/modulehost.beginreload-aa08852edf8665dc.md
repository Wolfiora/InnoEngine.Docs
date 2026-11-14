---
uid: api.aa08852edf8665dcd8c9740beda888078bb44447865f4463628d2805344aac8b
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: e7a97d3ed09a1998bc831e2a3b24046ae57e33f02c25abcb82ba74e5179e2a14
title: "ModuleHost.BeginReload"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Stages additions, replacements, and removals as one atomic dependency-ordered transaction.

## Parameters

**Parameter `requests`:** Complete candidate module additions and replacements.

**Parameter `removedModuleNames`:** Active stable module names omitted from the candidate generation.

## Returns

A session that publishes or rolls back every candidate and removal together.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when either argument is `null`.

**Exception `T:System.ArgumentException`:** Thrown when no change is requested, a name is duplicated, or one module is both replaced and removed.
