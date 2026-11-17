---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.843a6a1488599025a15efdd44b58b1ebf7e3d733839ceda333423e4eaeb930af
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Stop(Inno.Editor.Core.EditorContext)
title: EditorModule.Stop
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: b150461e0150b024e4d202c7550a989cd7d82d704e286f9551b11f9b775d27a8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.
