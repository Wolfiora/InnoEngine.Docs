---
uid: api.6d0c007f98619c13e7062df114c2766ce1ed0e51b23a90f08b2780fc4f9fddfb
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseRetirementTimeout(System.TimeSpan)"
source: xml
reviewed: 7d30d5ba76139f8c2cef227b1ae6f1a4bc084e03656c6a5014709bff1d0fa674
title: "UseRetirementTimeout"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Sets the maximum owner-thread drain duration before retirement faults the host.

**Parameter `timeout`:** A positive deadline shared by failed startup, session stop and host shutdown.

**Returns:** This builder for fluent configuration.

**Exception `T:System.ArgumentOutOfRangeException`:** The timeout is not positive.
