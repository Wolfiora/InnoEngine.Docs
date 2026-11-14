---
uid: api.2fb37c0ad19279ddc8cf2c823fee987f6485f631ad6ff3e9039cc73f50aaafe2
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action)"
source: xml
reviewed: 9b947cfcebc3b3f67a2a23914f6c7319ddda9558bca064cef39f085b6b379c12
title: "JobScheduler.Schedule"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Schedules one parameterless job in the current frame.

**Parameter `job`:** The operation to execute once its implicit empty dependency set is ready.

**Returns:** A generation-safe handle representing the scheduled operation.
