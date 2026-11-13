---
uid: api.2b55b5e7392baafce90e8aad32b4479e56e48e41753cdf5ab184e378dd380230
symbol: "engine:Inno.Core.Jobs:P:Inno.Core.Jobs.JobSchedulerOptions.workerCount"
source: xml
reviewed: 609e7b3b116e038a17f382ec2d1428527bddbdf01c854d6933c0f27cd0ca166a
title: "workerCount"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Gets the worker-pool thread count, clamped to 1 through 64 for positive values. Zero selects `max(1, Environment.ProcessorCount - 1)`, also capped at 64. Single-thread execution does not create workers or consume this setting.
