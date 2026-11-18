---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7da6019c71526add2037b605f8f729409e716777947d0d0cf443e9aa5eb22e13
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.Register(Inno.Editor.Core.IEditorReloadParticipant)
title: EditorReloadCoordinator.Register
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 01f27e6b9eabbc9be38b47759f5f2bb4d8cb236cd44284a3179e1bfa75cead3d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `participant`:** The feature participant. The coordinator retains only a weak reference to this instance.

## Returns

A registration lease that strongly retains the participant until the lease is disposed. The coordinator itself retains only a weak reference.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `participant` is `null`.
