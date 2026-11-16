---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3af8b85981752beccc3750fbfbd8ad48daf7bef9edd5110af849c22f6a1a0330
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.RegisterGuard(Inno.Editor.Core.IEditorReloadGuard)
title: EditorReloadCoordinator.RegisterGuard
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 63500006c9491f84eba20016ea79023429b740c26f57ba9efebf5d209253fd2a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `guard`:** The owner whose current state determines reload admission.

## Returns

A caller-owned lease retaining the guard until registration is released.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The guard is null.
