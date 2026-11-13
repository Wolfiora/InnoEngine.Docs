---
uid: api.6d0c007f98619c13e7062df114c2766ce1ed0e51b23a90f08b2780fc4f9fddfb
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseRetirementTimeout(System.TimeSpan)"
source: xml
reviewed: 8dea137ffd3a4edda0e4882f79ebebef947ed039fafba89695e54b7bd09aa86b
title: "UseRetirementTimeout"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Sets the maximum owner-thread drain duration before retirement faults the host.

**Parameter `timeout`:** A positive deadline shared by failed startup, session stop and host shutdown.

**Returns:** This builder for fluent configuration.

**Exception `T:System.ArgumentOutOfRangeException`:** The timeout is not positive.
