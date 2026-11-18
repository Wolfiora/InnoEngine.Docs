---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3af8b85981752beccc3750fbfbd8ad48daf7bef9edd5110af849c22f6a1a0330
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.RegisterGuard(Inno.Editor.Core.IEditorReloadGuard)
title: EditorReloadCoordinator.RegisterGuard
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 2b51ee74c2c29c6a3bee72a24c481e993c426e62194cbe742df59732347aed85
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
