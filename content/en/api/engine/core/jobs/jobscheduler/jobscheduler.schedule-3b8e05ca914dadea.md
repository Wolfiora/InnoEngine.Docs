---
uid: api.3b8e05ca914dadea2fd24e3dfe7b2af06f9ffbcc0320a4b679a9b6da0f42d4d3
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action{System.Object},System.Object,System.ReadOnlySpan{Inno.Core.Jobs.JobHandle})"
source: xml
reviewed: 8a082f01cf4ce205c111454afffd45f8abc6bf23c64d8c86f61c7d76d1563e48
title: "JobScheduler.Schedule"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Schedules one stateful job after all supplied dependencies complete.

**Parameter `job`:** The operation receiving `state`.

**Parameter `state`:** Optional caller-owned state passed to the operation.

**Parameter `dependencies`:** Handles that must complete before the operation becomes runnable.

**Returns:** A generation-safe handle representing the scheduled operation.
