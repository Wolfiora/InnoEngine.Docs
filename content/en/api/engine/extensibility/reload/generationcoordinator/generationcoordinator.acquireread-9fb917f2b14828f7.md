---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9fb917f2b14828f741c61cbec332ebb198fa050031b46411805119e8d87c9256
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireRead(System.String)
title: GenerationCoordinator.AcquireRead
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: 02eefd075879fa758c78de681e626e8b626752cc3b0f372c0b9a6dfb2bb82cb3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operation`:** The diagnostic operation name.

## Returns

A lease that must be disposed after every snapshot and asynchronous consumer has retired.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Admission is blocked by another operation or a retirement.
