---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3b8e05ca914dadea2fd24e3dfe7b2af06f9ffbcc0320a4b679a9b6da0f42d4d3
symbol: engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action{System.Object},System.Object,System.ReadOnlySpan{Inno.Core.Jobs.JobHandle})
title: JobScheduler.Schedule
kind: api
owners:
- Inno.Core.Jobs
apiSurface: source-clr
sourceFingerprint: e6e965f04322bcca3ae6f85bb6458c525378daf81c00e4826d87de35af8daf47
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
