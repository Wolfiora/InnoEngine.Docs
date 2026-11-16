---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3b8e05ca914dadea2fd24e3dfe7b2af06f9ffbcc0320a4b679a9b6da0f42d4d3
symbol: engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action{System.Object},System.Object,System.ReadOnlySpan{Inno.Core.Jobs.JobHandle})
title: JobScheduler.Schedule
kind: api
owners:
- Inno.Core.Jobs
apiSurface: source-clr
reviewed: 4a43f1355bcada0269b508b20ee690c1a6eb3310e59a1bd8a15afc5e87252872
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `job`:** The operation receiving `state`.

**Parameter `state`:** Optional caller-owned state passed to the operation.

**Parameter `dependencies`:** Handles that must complete before the operation becomes runnable.

## Returns

A generation-safe handle representing the scheduled operation.
