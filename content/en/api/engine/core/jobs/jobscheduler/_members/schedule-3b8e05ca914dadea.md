---
uid: api.3b8e05ca914dadea2fd24e3dfe7b2af06f9ffbcc0320a4b679a9b6da0f42d4d3
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action{System.Object},System.Object,System.ReadOnlySpan{Inno.Core.Jobs.JobHandle})"
source: xml
reviewed: a84909c066358e98fac16765fd3875291bbdb496d024a8d21c830370e3508130
title: "Schedule"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Schedules one stateful job after all supplied dependencies complete.

**Parameter `job`:** The operation receiving `state`.

**Parameter `state`:** Optional caller-owned state passed to the operation.

**Parameter `dependencies`:** Handles that must complete before the operation becomes runnable.

**Returns:** A generation-safe handle representing the scheduled operation.
