---
uid: api.98ea49963bddb82bbc9469933403bcece16c363e070fe9146dde2613eb580706
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.ParallelFor(System.Int32,System.Int32,System.Action{System.Int32,System.Int32})"
source: xml
reviewed: 6afafb09e5286d34030a02dcd4748ff46bcd04f85071a937049eeffbc1c2d720
title: "ParallelFor"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Schedules a range as independent contiguous batches.

**Parameter `length`:** The exclusive upper bound of the complete range.

**Parameter `batchSize`:** The maximum number of indices in one batch.

**Parameter `body`:** The callback receiving each batch's inclusive start and exclusive end.

**Returns:** A handle that completes after every batch.
